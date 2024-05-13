import https from 'https';
import axios from 'axios';
import config from 'config';

import { RoverPhoto } from '../types/rover';

const KEY: string = config.get('API_KEY');
const URL: string = config.get('ROVER_URL');

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
});

export const getLastRoverPhotos = async (): Promise<RoverPhoto[]> => {
    const response = await axios.get(URL, {
        httpsAgent,
        params: { sol: 1000, camera: 'fhaz', api_key: KEY }
    });

    const lastDate: string = await response.data.photos[0].rover.max_date;

    const { data } = await axios.get(URL, {
        httpsAgent,
        params: { earth_date: lastDate, camera: 'fhaz', api_key: KEY }
    });

    return data.photos;
};
