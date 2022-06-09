import { Intraday } from "./Intraday";
import { Trading } from "./Models/Trading";
import { View } from "./View";
const view = new View();
const intraday = new Intraday();

async function RefreshView(symbol: string): Promise<void> {
    const shareDetails = await intraday.Get(symbol) as Trading;
    view.Build(shareDetails);
}

RefreshView('MSFT').then(x => {
    const state = document.getElementById("loading-state") as HTMLHeadingElement;
    state.textContent = `Data loaded for MSFT`;
});