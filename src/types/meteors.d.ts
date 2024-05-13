export interface CloseDateAproachItem {
    close_approach_date_full: string;
    relative_velocity: {
        kilometers_per_second: string;
    };
}

export interface Meteor {
    id: string;
    name: string;
    estimated_diameter: {
        meters: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        };
    };
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: CloseDateAproachItem[];
}

export interface ExtractedMeteor {
    id: string;
    name: string;
    diameter_in_meters: {
        estimated_diameter_min: string;
        estimated_diameter_max: string;
    };
    is_potentially_hazardous_asteroid: boolean;
    relative_velocity_in_kilometers_per_second: string;
    close_approach_date_full: string;
}

export interface NearEarthItems {
    [key: string]: Meteor[];
}

export interface MeteorsQuery {
    start_date?: string;
    end_date?: string;
    count?: boolean;
    were_dangerous_meteors?: boolean;
}

export interface MeteorsData {
    element_count: number;
    near_earth_objects: NearEarthItems;
}
