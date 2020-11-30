// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.diameter = this.radius * 2;
    }

    set diameter(diameter) {
        return this.radius = diameter / 2;
    }
    get circumference() {
        return this.circumference = Math.PI * this.diameter;
    }

    set circumference(circumference) {
        this.diameter = circumference / Math.PI;
        return this.radius = this.diameter / 2;
    }

    get area() {
        return this.area = (this.radius * this.radius) * Math.PI
    }

    set area(area) {
        return this.radius = Math.sqrt(area / Math.PI)
    }

}