class Addition { 
    number1: number = 0;
    number2: number = 0;

    public Add(): number {
        return this.number1 + this.number2;
    }
}

const additionInstance = new Addition();
additionInstance.number1 = 10;
additionInstance.number2 = 20;
console.log(additionInstance.Add());