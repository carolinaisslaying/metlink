export class Metlink {
    /**
     * Creates a new instance of the Metlink client.
     * 
     * @param string apiKey - The API key to use for the Metlink API.
     */

    constructor(
        private readonly apiKey: string
    ) {
        if (!this.apiKey || typeof this.apiKey !== "string") {
            throw new Error("A Metlink API key is required.");
        }
    }
}