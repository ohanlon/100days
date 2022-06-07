import { alphavantage } from "./Configuration/apiKey";
import { Trading } from "./Models/Trading";

export class Intraday {
    constructor(private apiSource = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&apikey=' + alphavantage() + '&symbol=') { }

    public Get(symbol: string): Promise<Trading> {
        return fetch(this.apiSource + symbol).then(resp => {
            return resp.json();
        });
    }
}
