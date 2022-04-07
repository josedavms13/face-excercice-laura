import {Head} from "./Head.class.js";

const head = new Head("head", "hair", "que-ojote-izquiedo", "right-eye", "mouth", 3, "left", "right");



function a(){
head.leftEar.setVisible (false)
head.rightEar.changeColor (3)
head.hair.changeColor (2)
head.leftEyeId.close ()
}

function b(){
head.leftEar.changeColor (2)
head.rightEar.setVisible (false)
head.hair.changeColor (3)
head.leftEyeId.setColor (1)
}

setInterval(()=>{
    a();
    setTimeout(()=>{
        b();
    },1000)
},1000)