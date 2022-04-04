export class Mouth {

    constructor(id, numberOfTeeth) {
        this.element = document.getElementById(id);
        this.numberOfTeeth = numberOfTeeth;
    }

    showTeeth() {
        let textHtml = "";
        for (let i = 0; i < this.numberOfTeeth; i++) {
            textHtml += `
                <div class="teeth"></div>
            `
        }
        this.element.innerHTML = textHtml;
    }

    setNumberOfTeeth(numberOfTeeth) {
        this.numberOfTeeth = numberOfTeeth;
    }
}