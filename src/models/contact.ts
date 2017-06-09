export interface Contact {
    name: {
        given: String;
        family: String;
    }
    email: String;
    address: {
        postcode: String;
        lines: String[];
        city: String;
        county: String;
        country: String;
        location: {
            longitude: number;
            latitude: number;
        }
    }
}
