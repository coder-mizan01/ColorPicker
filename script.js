
/*
const btn1 = document.querySelector('#btn1');

const output = document.querySelector("#output");

const output2 = document.querySelector("#output2");

const copyBtn = document.querySelector('#copyBtn');

const copyBtn2 = document.querySelector('#copyBtn2');

const body = document.querySelector('body');

const icon = document.querySelector('.input-icon');

const icon2 = document.querySelector('.input-icon2');

const div = document.createElement('div');
document.body.appendChild(div);


function main() {
  btn1.addEventListener('click', function () {
   const {Red , Green , Blue} =  GenerateColorDecimal()

    body.style.backgroundColor = GenerateHEXcolor({Red , Green , Blue});
    body.style.backgroundColor = GenerateRGBcolor({Red , Green , Blue});

    output.value = GenerateHEXcolor({Red , Green , Blue} ).substring(1);
    output2.value = GenerateRGBcolor({Red , Green , Blue} ).substring(4);

  })

}




copyBtn.addEventListener('click',function(){
  navigator.clipboard.writeText(output.value);
  div.classList.add('DOM');
  div.innerText =`#${output.value}`;
})

copyBtn2.addEventListener('click',function(){
  navigator.clipboard.writeText(output2.value);
  div.classList.add('DOM');
  div.innerText = `rgba${output2.value}`;
})


output.addEventListener('keyup',function(e){
    e.target.value = e.target.value.toUpperCase();
    const color = e.target.value
     if(isvalidHEX(color)){
      body.style.backgroundColor = `#${color}`;
      output2.value = HexToRgb(color);
     }
  })







function GenerateColorDecimal() {
  const Red = Math.floor(Math.random() * 255);
  const Green = Math.floor(Math.random() * 255);
  const Blue = Math.floor(Math.random() * 255);

  return {
    Red,
    Green,
    Blue,
  }
}

GenerateColorDecimal()


function GenerateHEXcolor({Red , Green , Blue } ){

  const TwoCodeRed  = Red.toString(16).length == 1 ? `0${Red.toString(16)}`: Red.toString(16);
  const TwoCodGreen  = Green.toString(16).length == 1 ?`0${Green.toString(16)}`: Green.toString(16);
  const TwoCodeBlue  = Blue.toString(16).length == 1 ? `0${Blue.toString(16)}`: Blue.toString(16);

  return `${icon.innerHTML}${TwoCodeRed}${TwoCodGreen}${TwoCodeBlue}`.toUpperCase();
}

function GenerateRGBcolor({Red , Green , Blue } ) {
  return `${icon2.innerHTML}(${Red},${Green},${Blue})`.toUpperCase();
}





function isvalidHEX(color){
  if(color.length == 6) return true;
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}


function HexToRgb(color){

  const red = parseInt(color.slice(0,2) , 16)
  const green = parseInt(color.slice(2 , 4) , 16)
  const blue = parseInt(color.slice(4) , 16)

  return `${red},${green},${blue}`;

} 
*/

/* GlOBAL VARIEABLES */

const randomColor = document.querySelector('#random-color');

const colorDisplay = document.querySelector('#color-display');

const colorSliderRed = document.querySelector('#color-slider-red');

const colorSliderGreen = document.querySelector('#color-slider-green');

const colorSliderBlue = document.querySelector('#color-slider-blue');

const colorSliderRedlabel = document.querySelector('#color-slider-red-label');

const colorSliderGreenlabel = document.querySelector('#color-slider-green-label');

const colorSliderBluelabel = document.querySelector('#color-slider-blue-label');

const inputhex = document.querySelector('#input-hex');

const inputrgb = document.querySelector('#input-rgb');

const rgbRadio = document.querySelector('#rgbRadio');

const hexRadio = document.querySelector('#hexRadio');

const copyTOclipboard = document.querySelector('#copyTOclipboard')


function main(){
   const colors =  GenerateDecimalNumbers();
   colorDisplay.style.backgroundColor = DecimaltoRGB(colors);
   colorDisplay.style.backgroundColor = DecimaltoHEX(colors);

    colorSliderRed.value = colors.Red;
    colorSliderRedlabel.innerText = colors.Red;
    colorSliderGreen.value = colors.Green;
    colorSliderGreenlabel.innerText = colors.Green;
    colorSliderBlue.value = colors.Blue;
    colorSliderBluelabel.innerText = colors.Blue;

    inputhex.value = DecimaltoHEX(colors).substring(1).toUpperCase();
    inputrgb.value = DecimaltoRGB(colors).substring(3).toUpperCase();

}


function GenerateDecimalNumbers(){
  const Red = Math.floor(Math.random() * 255);
  const Green = Math.floor(Math.random() * 255);
  const Blue = Math.floor(Math.random() * 255);

  return{
    Red,
    Green,
    Blue,
  }
}


function DecimaltoRGB(colors){
      return `rgb(${colors.Red},${colors.Green},${colors.Blue})`;
}

function DecimaltoHEX(colors){

  const  {Red , Green , Blue} = colors
  const redhexlength = Red.toString(16).length;
  const greenhexlength = Green.toString(16).length;
  const bluehexlength = Blue.toString(16).length;

   const redhex = redhexlength == 1 ?`0${Red.toString(16)}` : Red.toString(16);
   const greenhex = greenhexlength == 1 ?`0${Green.toString(16)}` : Green.toString(16);
   const bluehex = bluehexlength == 1 ?`0${Blue.toString(16)}` :Blue.toString(16);

  return `#${redhex}${greenhex}${bluehex}`;
}



inputhex.addEventListener('keyup',function(e){
  const inputerColor = e.target.value;
  if(isvalidHEX(inputerColor)){
    colorDisplay.style.backgroundColor = "#"+inputerColor;
    
  }
 if(fun1(inputerColor)){
    inputrgb.value = fun1(inputerColor);
    const arr = [inputrgb.value];
    console.log(arr)

  }


})

function fun1(inputerColors){
  const red =  parseInt(inputerColors.slice(0,2) , 16);
  const green = parseInt(inputerColors.slice(2,4) , 16); 
  const blue = parseInt(inputerColors.slice(4), 16);

 return`(${red},${green},${blue})`;
}




function isvalidHEX(clrword){
   if(clrword.length == 6)return true;
  return /^[A-F0-9a-f]{6}$/i.test(clrword);
}


function rgbRadioChecked(){
  hexRadio.checked = false;
  rgbRadio.checked = true ;

  if(rgbRadio.checked = true){
    copyTOclipboard.addEventListener('click',function(){
      navigator.clipboard.writeText(`rgb${inputrgb.value}`)
    })
  }
}

function hexRadioChecked(){
  rgbRadio.checked = false;
  hexRadio.checked = true;
  if(hexRadio.checked = true){
    copyTOclipboard.addEventListener('click',function(){
      navigator.clipboard.writeText(`#${inputhex.value}`);
    })
  }
}
















