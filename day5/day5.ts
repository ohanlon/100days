interface Validate {
    IsValid(): boolean;
}

class MinimumLengthValidation implements Validate {
    constructor(private text: string, private minimumLength: number) {}
    IsValid(): boolean {
        return this.text.length >= this.minimumLength;
    }
}

class MaximumLengthValidation implements Validate {
    constructor(private text: string, private maximumLength: number) {}
    IsValid(): boolean {
        return this.text.length <= this.maximumLength;
    }
}

// console.log(new MinimumLengthValidation('ABC12345', 10).IsValid()); // Should print false
// console.log(new MinimumLengthValidation('ABC12345AB12345', 10).IsValid()); // Should print true
// console.log(new MaximumLengthValidation('ABC12345', 10).IsValid()); // Should print true
// console.log(new MaximumLengthValidation('ABC12345AB12345', 10).IsValid()); // Should print false

const validation: Validate[] = [];
validation.push(new MinimumLengthValidation('ABC12345', 10));
validation.push(new MinimumLengthValidation('ABC12345AB12345', 10));
validation.push(new MaximumLengthValidation('ABC12345', 10));
validation.push(new MaximumLengthValidation('ABC12345AB12345', 10));

for (let index = 0; index < validation.length; index++) {
    console.log(validation[index].IsValid());
}