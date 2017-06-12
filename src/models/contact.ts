export interface Contact {
    id: number;
    name: {
        given: string;
        family: string;
    }
    email: string;
    phone: string;
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
