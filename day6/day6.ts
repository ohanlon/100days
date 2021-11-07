interface Validate {
  IsValid(): boolean;
}

abstract class LengthValidationBase implements Validate {
  constructor(protected text: string, protected length: number) {}
  IsValid(): boolean {
    return this.CheckForValidity();
  }

  public Debug() {
    console.log(`Checking whether the length check of ${this.length} for ${this.text} is valid returns ${this.CheckForValidity()}`);
  }

  protected abstract CheckForValidity(): boolean;
}

class MaximumLengthValidation extends LengthValidationBase {
  protected CheckForValidity(): boolean {
    return this.text.length <= this.length;
  }
}

class MinimumLengthValidation extends LengthValidationBase {
  protected CheckForValidity(): boolean {
    return this.text.length >= this.length;
  }
}

const validation: Validate[] = [];
validation.push(new MinimumLengthValidation('ABC12345', 10));
validation.push(new MinimumLengthValidation('ABC12345AB12345', 10));
validation.push(new MaximumLengthValidation('ABC12345', 10));
validation.push(new MaximumLengthValidation('ABC12345AB12345', 10));

validation.forEach((val: Validate) => {
    console.log(val.IsValid());
    // We want to call debug but we can't here.
    // val.Debug(); is not going to work
    const lengthValidation = val as LengthValidationBase;
    lengthValidation.Debug();
});