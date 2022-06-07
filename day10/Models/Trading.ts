import { MetaData } from "./Metadata";
import { TimeSeries } from "./TimeSeries";

export interface Trading {
    'Meta Data': MetaData;
    'Time Series (5min)': { [key: string]: TimeSeries };
}
