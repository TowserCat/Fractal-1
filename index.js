





let times = 100;
let layers = 7;
let quality = 1;
let length = 123456;
let constantTimes = times;
let constantLayers = layers;
let constantQuality = quality;
let constantLength = length;
let listOfStringsX = [];
let listOfStringsY = [];
let constantListOfStringsX = [];
let constantListOfStringsY = [];
let listOfColors = [];
let widthOfScreen = 1200;
let heightOfScreen = 675;
let backroundColor = "black";


function saveInput(){
    times = document.getElementById("times").value||10;
    constantTimes = times;
    layers = document.getElementById("layers").value||7;
    constantLayers = layers;
    quality = document.getElementById("quality").value||1;
    constantQuality = quality;
    length = document.getElementById("length").value||123456;
    constantLength = length;
    widthOfScreen = document.getElementById("width").value||1200;
    canvas.width = widthOfScreen;
    heightOfScreen = document.getElementById("height").value||675;
    canvas.width = widthOfScreen;
    canvas.height = heightOfScreen;
    backroundColor = document.getElementById("backround").value||"black";
    context.fillStyle = backroundColor;
}

let type = undefined;
let intervalId = null;


const canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
canvas.width = 1200;
canvas.height = 675;

function stop(){
    times = 0;
}

function unpause(){
    times = constantTimes;
}

function resetScreen(){
    context.fillStyle = "rgb(224, 224, 224)";
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    if(times === undefined){
        times = 10;
    }
    clearInterval(intervalId);
    intervalId = null;
}

function createScreen(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    for(let i = 0; i < layers; i++){
        let placementX = getRandomInt(0,widthOfScreen);
        let placementY = getRandomInt(0,heightOfScreen);
        let constantPlacementX = placementX;
        let constantPlacementY = placementY;
        let colors = colorMixRand();
        addString(placementX,placementY,colors,constantPlacementX,constantPlacementY);
        length = length - (constantLength/layers)/2;
    }
    console.log("Done with this picture!");
    layers = constantLayers;
    quality = constantQuality;
    length = constantLength;
}

function createScreenRandColor(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    for(let i = 0; i < layers; i++){
        let placementX = getRandomInt(0,widthOfScreen);
        let placementY = getRandomInt(0,heightOfScreen);
        let constantPlacementX = placementX;
        let constantPlacementY = placementY;
        let colors = colorMixRand();
        addStringRandColor(placementX,placementY,colors,constantPlacementX,constantPlacementY);
        length = length - (constantLength/layers)/2;
    }
    console.log("Done with this picture!");
    layers = constantLayers;
    quality = constantQuality;
    length = constantLength;
}

function createScreenAtCenter(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    for(let i = 0; i < layers; i++){
        let placementX = widthOfScreen/2;
        let placementY = heightOfScreen/2;
        let constantPlacementX = placementX;
        let constantPlacementY = placementY;
        let colors = colorMixRand();
        addString(placementX,placementY,colors,constantPlacementX,constantPlacementY);
        length = length - (constantLength/layers)/2;
    }
    console.log("Done with this picture!");
    layers = constantLayers;
    quality = constantQuality;
    length = constantLength;
}

function createScreenAtCenterRandColor(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    for(let i = 0; i < layers; i++){
        let placementX = widthOfScreen/2
        let placementY = heightOfScreen/2
        let constantPlacementX = placementX;
        let constantPlacementY = placementY;
        let colors = colorMixRand();
        addStringRandColor(placementX,placementY,colors,constantPlacementX,constantPlacementY);
        length = length - (constantLength/layers)/2;
    }
    console.log("Done with this picture!");
    layers = constantLayers;
    quality = constantQuality;
    length = constantLength;
}

function runScreen(){
    for(let i = 0; i < layers; i++){
        listOfStringsX[i] = getRandomInt(0,widthOfScreen);
        constantListOfStringsX[i] = listOfStringsX[i];
    }
    for(let i = 0; i < layers; i++){
        listOfStringsY[i] = getRandomInt(0,heightOfScreen);
        constantListOfStringsY[i] = listOfStringsY[i];
    }
    for(let i = 0; i < layers; i++){
        listOfColors[i] = colorMixRand();
    }
    if(!intervalId){
        intervalId = setInterval(addStringForRun,1);
    }
}

function runScreenRandColor(){
    for(let i = 0; i < layers; i++){
        listOfStringsX[i] = getRandomInt(0,widthOfScreen);
        constantListOfStringsX[i] = listOfStringsX[i];
    }
    for(let i = 0; i < layers; i++){
        listOfStringsY[i] = getRandomInt(0,heightOfScreen);
        constantListOfStringsY[i] = listOfStringsY[i];
    }
    for(let i = 0; i < layers; i++){
        listOfColors[i] = colorMixRand();
    }
    if(!intervalId){
        intervalId = setInterval(addStringForRunRandColor,1);
    }
}

function runScreenAtCenter(){
    for(let i = 0; i < layers; i++){
        listOfStringsX[i] = widthOfScreen/2;
        constantListOfStringsX[i] = listOfStringsX[i];
    }
    for(let i = 0; i < layers; i++){
        listOfStringsY[i] = heightOfScreen/2;
        constantListOfStringsY[i] = listOfStringsY[i];
    }
    for(let i = 0; i < layers; i++){
        listOfColors[i] = colorMixRand();
    }
    if(!intervalId){
        intervalId = setInterval(addStringForRun,1);
    }
}

function runScreenAtCenterRandColor(){
    for(let i = 0; i < layers; i++){
        listOfStringsX[i] = widthOfScreen/2;
        constantListOfStringsX[i] = listOfStringsX[i];
    }
    for(let i = 0; i < layers; i++){
        listOfStringsY[i] = heightOfScreen/2;
        constantListOfStringsY[i] = listOfStringsY[i];
    }
    for(let i = 0; i < layers; i++){
        listOfColors[i] = colorMixRand();
    }
    if(!intervalId){
        intervalId = setInterval(addStringForRunRandColor,1);
    }
}

function addStringForRun(){
    for(let j = 0; j < times; j++){
        for(let i = 0; i < layers; i++){
            listOfStringsX[i] = listOfStringsX[i] + getRandomInt(-1 * quality,quality);
            listOfStringsY[i] = listOfStringsY[i] + getRandomInt(-1 * quality,quality);
            if(listOfStringsX[i] === 0||listOfStringsX[i] === widthOfScreen||listOfStringsY[i] === 0||listOfStringsY[i] === heightOfScreen){
                listOfStringsX[i] = constantListOfStringsX[i];
                listOfStringsY[i] = constantListOfStringsY[i];
            }
            context.fillStyle = listOfColors[i];
            context.fillRect(listOfStringsX[i],listOfStringsY[i],quality,quality);
        }
    }
}

function addStringForRunRandColor(){
    for(let j = 0; j < times; j++){
        for(let i = 0; i < layers; i++){
            listOfStringsX[i] = listOfStringsX[i] + getRandomInt(-1 * quality,quality);
            listOfStringsY[i] = listOfStringsY[i] + getRandomInt(-1 * quality,quality);
            if(listOfStringsX[i] === 0||listOfStringsX[i] === widthOfScreen||listOfStringsY[i] === 0||listOfStringsY[i] === heightOfScreen){
                listOfStringsX[i] = constantListOfStringsX[i];
                listOfStringsY[i] = constantListOfStringsY[i];
            }
            context.fillStyle = colorMixRand();
            context.fillRect(listOfStringsX[i],listOfStringsY[i],quality,quality);
        }
    }
}

function run(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    runScreen();
}

function runRandColor(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    runScreenRandColor();
}

function runAtCenter(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    runScreenAtCenter();
}

function runAtCenterRandColor(){
    context.fillStyle = backroundColor;
    context.fillRect(0,0,widthOfScreen,heightOfScreen);
    runScreenAtCenterRandColor();
}

function addString(placementX,placementY,color,constantPlacementX,constantPlacementY){
    for(let i = 0; i < length; i++){
        if(placementX === 0||placementX === widthOfScreen||placementY === 0||placementY === heightOfScreen){
            placementX = constantPlacementX;
            placementY = constantPlacementY;
        }
        placementX = placementX + getRandomInt(-1 * quality,quality);
        placementY = placementY + getRandomInt(-1 * quality,quality);
        context.fillStyle = color;
        context.fillRect(placementX,placementY,quality,quality);
    }
}

function addStringRandColor(placementX,placementY,color,constantPlacementX,constantPlacementY){
    for(let i = 0; i < length; i++){
        if(placementX === 0||placementX === widthOfScreen||placementY === 0||placementY === heightOfScreen){
            placementX = constantPlacementX;
            placementY = constantPlacementY;
        }
        placementX = placementX + getRandomInt(-1 * quality,quality);
        placementY = placementY + getRandomInt(-1 * quality,quality);
        color = colorMixRand();
        context.fillStyle = color;
        context.fillRect(placementX,placementY,quality,quality);
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorMixRand(){
    let thisRandColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return thisRandColor;
}










