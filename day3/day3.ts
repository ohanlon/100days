class Point {
    private x: number;
    private y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public IsEmpty(): boolean {
        return this.x === 0 && this.y === 0;
    }

    public IsEqual(point: Point): boolean {
        return this.x === point.x && this.y === point.y;
    }

    public Add(point: Point): Point {
        return new Point(point.x + this.x, point.y + this.y);
    }

    public ToString(): string {
        return 'X is ' + this.x + ' Y is ' + this.y;
    }

    public Offset(x: number, y: number): void {
        this.x += x;
        this.y += y;
    }
}

const point: Point = new Point(0, 0);
console.log('Point is empty is ' + point.IsEmpty());
point.Offset(10, 20);
console.log('Point is empty is ' + point.IsEmpty());
const offsetPoint = new Point(10, 20);
console.log('Points are equal is ' + point.IsEqual(offsetPoint));
console.log('The offset is ' + point.Add(offsetPoint).ToString());