export class Ears{
    constructor(classEars) {
        this.earsHtml = document.querySelector(`.${classEars}`);
            }

    changeColor(colorNumber){
        //Brown
        if(colorNumber=== 1){
            this.earsHtml.classList.add("brown")
        }
          //Yellow
          if(colorNumber=== 2){
            this.earsHtml.classList.add("yellow")
        }
          //Black
          if(colorNumber=== 3){
            this.earsHtml.classList.add("black")
        }

    }
    setVisible(isVisible){
        if(isVisible){
            this.earsHtml.classList.remove("invisible");
        } else{
            this.earsHtml.classList.add("invisible");
        }
    }
}