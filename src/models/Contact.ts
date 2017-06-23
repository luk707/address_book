// Contact tupe definition model.
export interface Contact {
    index: number;
    email: string;
    name: {
        given: string;
        family: string;
    }
    phone: string;
    address: {
        postcode: string;
        line1: string;
        line2?: string;
        line3?: string;
        city: string;
        county: string;
        country: string;
        location?: {
            longitude: number;
            latitude: number;
        }
    }
}
