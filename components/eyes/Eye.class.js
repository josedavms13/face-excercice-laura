
export class Eye {

    constructor(id) {
        this.element = document.getElementById(id);
    }

    setColor(colorNumber) {
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

    open(){
        this.element.classList.remove("close");
    }

    close(){
        this.element.classList.add("close");
    }

}