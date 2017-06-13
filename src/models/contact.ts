export interface Contact {
    id: string;
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
