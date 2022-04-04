import {Hair} from "./components/hair/Hair.class.js";
import {Eye} from "./components/eyes/Eye.class.js";
import {Mouth} from "./components/mouth/Mouth.class.js";


export class Head {
    constructor(id, hairId, leftEyeId, mouthId, amountOfTeeth ) {
        this.hair = new Hair(hairId);
        this.leftEyeId = new Eye(leftEyeId);
        this.mouth = new Mouth(mouthId, amountOfTeeth);
    }
}