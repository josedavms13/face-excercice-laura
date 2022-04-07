import {Hair} from "./components/hair/Hair.class.js";
import {Eye} from "./components/eyes/Eye.class.js";
import {Mouth} from "./components/mouth/Mouth.class.js";
import {Ears} from "./components/ears/Ears.class.js";



export class Head {
    constructor(id, hairId, leftEyeId, rightEyeId, mouthId, amountOfTeeth, leftClassEar, rightClassEar ) {
       this.element = document.getElementById(id)
        this.hair = new Hair(hairId);
        this.leftEyeId = new Eye(leftEyeId);
        this.rightEyeId = new Eye(rightEyeId);
        this.mouth = new Mouth(mouthId, amountOfTeeth);
        this.rightEar = new Ears(rightClassEar);
        this.leftEar = new Ears(leftClassEar);
    }
      
}