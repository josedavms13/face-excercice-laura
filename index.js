import {Head} from "./Head.class.js";

const head = new Head("head", "hair", "que-ojote-izquiedo", "mouth", 3);

head.hair.changeColor(1);
head.leftEyeId.close();
head.mouth.setNumberOfTeeth(10);
head.mouth.showTeeth();