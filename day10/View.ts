import { Trading } from './Models/Trading';

export class View {
    Build(shareDetails: Trading): void {
        const tableBody = document.getElementById('trading-table-body') as HTMLTableSectionElement;        
        Object.entries(shareDetails['Time Series (5min)']).forEach(([date, timeSeries]) => {
            this.addTableRow(tableBody, date, timeSeries['1. open'], 
                timeSeries['2. high'], 
                timeSeries['3. low'], 
                timeSeries['4. close'],
                timeSeries['5. volume']);
        });
    }

    private addTableRow(tableBody: HTMLTableSectionElement, ...elements: string[]): void {
        const tableRow = tableBody.insertRow(tableBody.rows.length);
        elements.forEach(element => {
            const columnElement = tableRow.insertCell(0);
            columnElement.textContent = element;
            tableRow.appendChild(columnElement)
        });
    }
}
