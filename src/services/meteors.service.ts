import https from 'https';
import axios from 'axios';
import config from 'config';

import { ExtractedMeteor, NearEarthItems, MeteorsData } from '../types/meteors';

const key: string = config.get('API_KEY');
const url: string = config.get('METEOR_URL');

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
});

const anyMeteorsHazardous = (meteros: ExtractedMeteor[]): boolean =>
    meteros.some((meteor) => meteor.is_potentially_hazardous_asteroid);

const extractMeteorsData = (rawData: NearEarthItems): ExtractedMeteor[] =>
    Object.entries(rawData).flatMap(([_, value]) =>
        value.map((meteor) => ({
            id: meteor.id,
            name: meteor.name,
            diameter_in_meters: {
                estimated_diameter_min:
                    meteor.estimated_diameter.meters.estimated_diameter_min.toFixed(
                        2
                    ),
                estimated_diameter_max:
                    meteor.estimated_diameter.meters.estimated_diameter_max.toFixed(
                        2
                    )
            },
            is_potentially_hazardous_asteroid:
                meteor.is_potentially_hazardous_asteroid,
            close_approach_date_full:
                meteor.close_approach_data[0].close_approach_date_full,
            relative_velocity_in_kilometers_per_second: parseFloat(
                meteor.close_approach_data[0].relative_velocity
                    .kilometers_per_second
            ).toFixed(2)
        }))
    );

export const getMeteorsData = async (
    startDate?: string,
    endDate?: string,
    count?: boolean,
    wereDangerousMeteors?: boolean
) => {
    const { data }: { data: MeteorsData } = await axios.get(url, {
        httpsAgent,
        params: { start_date: startDate, end_date: endDate, api_key: key }
    });

    const meteors = extractMeteorsData(data.near_earth_objects);

    const isDangerous: boolean | undefined = wereDangerousMeteors
        ? anyMeteorsHazardous(meteors)
        : undefined;

    const total: number | undefined = count ? data.element_count : undefined;

    return { meteors, total, isDangerous };
};
