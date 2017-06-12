export interface Contact {
    name: {
        given: string;
        family: string;
    }
    email: string;
    address: {
        postcode: string;
        lines: string[];
        city: string;
        county: string;
        country: string;
        location: {
            longitude: number;
            latitude: number;
        }
    }
}
