enum Operator {
    add = '+',
    subtract = '-',
    multiply = '*',
    divide = '/',
    period = '.'
}

let displayElement: HTMLInputElement | null = null;

function getDisplay(): HTMLInputElement {
    if (!displayElement) {
        displayElement = <HTMLInputElement>document.getElementById('display');
    }
    return displayElement;
}

function display(value: number | Operator): void {
    const htmlElement = getDisplay();
    htmlElement.value = htmlElement.value.trim() + value;
}

function solve(): void {
    const htmlElement = getDisplay();
    const output = eval(htmlElement.value);
    htmlElement.value = output;
}

function clearAll(): void {
    const htmlElement = getDisplay();
    htmlElement.value = '';
}

function copyToClipboard(): void {
    const htmlElement = getDisplay();
    navigator.clipboard.writeText(htmlElement.value);
}
