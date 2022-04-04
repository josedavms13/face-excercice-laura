

export class Hair {

    constructor(id) {
        this.element = document.getElementById(id);
    }

    changeColor(colorNumber) {

        //Brown
        if(colorNumber === 1) {
            this.element.classList.add("brown")
        }
        //Yellow
        if(colorNumber === 2) {
            this.element.classList.add("yellow")
        }
        //Black
        if(colorNumber === 3) {
            this.element.classList.add("black")
        }

    }

}