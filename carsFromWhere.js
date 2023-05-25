var cars = [ {
    "color": "white",
    "make": "Volkswagen",
    "model": "Polo",
    "reg_number": "CL 61045"
    },  {
    "color": "red",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CY 16875"
    },  {
    "color": "orange",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CK 32655"
    },  {
    "color": "orange",
    "make": "Ford",
    "model": "EcoSport",
    "reg_number": "CL 11318"
    },  {
    "color": "white",
    "make": "Nissan",
    "model": "Micra",
    "reg_number": "CJ 16103"
    },  {
    "color": "orange",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CL 42789"
    },  {
    "color": "blue",
    "make": "Volkswagen",
    "model": "Jetta",
    "reg_number": "CA 46977"
    },  {
    "color": "white",
    "make": "Volkswagen",
    "model": "Polo",
    "reg_number": "CY 25661"
    },  {
    "color": "white",
    "make": "Nissan",
    "model": "Micra",
    "reg_number": "CY 35475"
    },  {
    "color": "white",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CY 54886"
    },  {
    "color": "white",
    "make": "Toyota",
    "model": "Hilux",
    "reg_number": "CJ 16455"
    },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CK 57166"
    },  {
    "color": "orange",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CL 77790"
    },  {
    "color": "blue",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CY 98904"
    },  {
    "color": "white",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CF 75599"
    },  {
    "color": "red",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CA 5510"
    },  {
    "color": "blue",
    "make": "Ford",
    "model": "Focus",
    "reg_number": "CF 75586"
    },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CA 46137"
    },  {
    "color": "orange",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CK 22692"
    },  {
    "color": "red",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CF 33543"
    },  {
    "color": "red",
    "make": "Volkswagen",
    "model": "Touran",
    "reg_number": "CA 94890"
    },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CY 82252"
    },  {
    "color": "blue",
    "make": "Toyota",
    "model": "Yaris",
    "reg_number": "CL 9538"
    },  {
    "color": "white",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CF 62002"
    },  {
    "color": "orange",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CJ 67577"
    },  {
    "color": "blue",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CA 77852"
    },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Hilux",
    "reg_number": "CY 52435"
    },  {
    "color": "blue",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CL 76173"
    },  {
    "color": "red",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CL 38315"
    },  {
    "color": "blue",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CA 34015"
    }, {
    "color": "orange",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CK 41166"
    }];
  
function mostPopularCar(cars){
    var popularCar = {};
    var arrCars = [];
    for(var i = 0; i < cars.length; i++){
        var newList = cars[i].make;
        arrCars.push(newList);
    }
    for(var i = 0; i < arrCars.length; i++){
        var currCar = arrCars[i];
        if(popularCar[currCar] === undefined){
            popularCar[currCar] = 0;
        }
        popularCar[currCar] += 1
    }
    var currTotal = 0;
    var currMake = '';
    for(var car in popularCar){

        var currTotalCars = popularCar[car];
        if(currTotalCars > currTotal) {
            currTotal = currTotalCars;
            currMake = car;
        }
    }
    return currMake;
}

function nissansFromCK(cars){
    var carMake = [];
    for(var i = 0; i < cars.length; i++) {
        var makeList = cars[i].make;
        var regList = cars[i].reg_number;
        if(makeList == 'Nissan' && regList.startsWith('CK')){
            carMake.push(makeList)
        }
    }
    return carMake.length;
}
  
function mostBlueCars(c){
    var list = {}
    var town = [];
    for(var i = 0; i < c.length; i++){
        var color = c[i].color;
        if(color == 'blue'){
            town.push(c[i])
        }
    }
    
    for(var i = 0; i < town.length; i++){
        let code = town[i].reg_number.substring(0,2).trim()
        if(list[code] === undefined ){
            list[code] = 1;
        }else{
           list[code]++
        }
    }
    
    let heighestNum = 0;
    let maxTown = "";
    
    for(let town in list){
        const currentTown = list[town];
        if(currentTown > heighestNum){
            heighestNum = currentTown 
            maxTown = town
        }
    }
    return maxTown;
}
  
function fewestOrangeCars(cars){
    var myOrangeColors = [];
    const colorMap = {};
    for (let i = 0; i < cars.length; i++){
        var color = cars[i].color;
        if(color == "orange"){
            myOrangeColors.push(cars[i])
        }
    }
    
    for(var i = 0; i < myOrangeColors.length; i++){
        var currentColor = myOrangeColors[i].reg_number.substring(0,2).trim();
        if(colorMap[currentColor] == undefined){
            colorMap[currentColor] = 1;
        }else{
            colorMap[currentColor]++
        }
    }
    
    const myValues = Object.values(colorMap);
    const largestValue = Math.max(...myValues)
    
    
    let lowestNumb = largestValue;
    let leastTown = "";
    for(let reg_number in colorMap){
        const currentTown = colorMap[reg_number];
        if(currentTown < lowestNumb){
            lowestNumb = currentTown 
            leastTown = reg_number
        }
      
    }
    return leastTown 
}
  
function mostPopularModel(cars){
    var myCarModels = [];
    var modelMap = {};
    for(var i = 0; i < cars.length; i++){
        var theList = cars[i].model;
        myCarModels.push(theList)
    }
    
    for(var i = 0; i < myCarModels.length; i++){
        var currentModel = myCarModels[i]
        if(modelMap[currentModel] == undefined){
            modelMap[currentModel] = 1
        }else{
            modelMap[currentModel]++
        }
    }
    
    let lowestNumber = 0;
    let popularModel = "";
    for(let model in modelMap){
        const currentModel = modelMap[model];
        if(currentModel > lowestNumber){
        lowestNumber = currentModel 
        popularModel = model
        }
    }
    return popularModel; 
}
  
function mostPopularCL(cars){
    var regNumbersFromStellenbosch = []
    var regObject = {};
    for(var i = 0; i < cars.length; i++){
        var regNums = cars[i].reg_number;
        if(regNums.startsWith("CL")){
            regNumbersFromStellenbosch.push(cars[i])
        }
    }
    for(var i = 0; i < regNumbersFromStellenbosch.length; i++){
        var currentReg = regNumbersFromStellenbosch[i].model;
        if(regObject[currentReg] == undefined){
        regObject[currentReg] = 1;
        }else{
            regObject[currentReg]++
        }  
    }
    var lowestAmount = 0;
    var popCarInStellies = "";
    
    for(let model in regObject){
        var currentObjects = regObject[model];
        if(currentObjects > lowestAmount){
            lowestAmount = currentObjects
            popCarInStellies = model
        }
    }
    return popCarInStellies  
}
  
  
function leastPopularCF(k){
    var carsFromKuilsriver = [];
    var modelsFromKuilsriver = {};
    for(var i = 0; i < k.length; i++){
        var regNums = k[i].reg_number
        if(regNums.startsWith("CF")){
            carsFromKuilsriver.push(k[i])
        }
    }
    for(var i = 0;i < carsFromKuilsriver.length; i++){
        var gettingModels = carsFromKuilsriver[i].model;
        if(modelsFromKuilsriver[gettingModels] == undefined){
            modelsFromKuilsriver[gettingModels] = 1;
        }else{
            modelsFromKuilsriver[gettingModels]++
        }
    }
    
    var hValue = Object.values(modelsFromKuilsriver);
    var myValue = Math.min(...hValue)
    var heighestValue =  myValue;
    var leastCar = "";
    for(let model in modelsFromKuilsriver){
        var currentModel = modelsFromKuilsriver[model]
        if(heighestValue >= currentModel){
            currentModel = heighestValue
            leastCar = model
        }
    }
   return leastCar
    
}
  
function carsForTown(townname){
    var cars = [ {
    "color": "white",
    "make": "Volkswagen",
    "model": "Polo",
    "reg_number": "CL 61045"
    },  {
    "color": "red",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CY 16875"
    },  {
    "color": "orange",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CK 32655"
    },  {
    "color": "orange",
    "make": "Ford",
    "model": "EcoSport",
    "reg_number": "CL 11318"
    },  {
    "color": "white",
    "make": "Nissan",
    "model": "Micra",
    "reg_number": "CJ 16103"
    },  {
    "color": "orange",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CL 42789"
    },  {
    "color": "blue",
    "make": "Volkswagen",
    "model": "Jetta",
    "reg_number": "CA 46977"
    },  {
    "color": "white",
    "make": "Volkswagen",
    "model": "Polo",
    "reg_number": "CY 25661"
    },  {
    "color": "white",
    "make": "Nissan",
    "model": "Micra",
    "reg_number": "CY 35475"
    },  {
    "color": "white",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CY 54886"
    },  {
    "color": "white",
    "make": "Toyota",
    "model": "Hilux",
    "reg_number": "CJ 16455"
    },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CK 57166"
    },  {
    "color": "orange",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CL 77790"
    },  {
    "color": "blue",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CY 98904"
    },  {
    "color": "white",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CF 75599"
    },  {
    "color": "red",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CA 5510"
    },  {
    "color": "blue",
    "make": "Ford",
    "model": "Focus",
    "reg_number": "CF 75586"
    },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CA 46137"
    },  {
    "color": "orange",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CK 22692"
    },  {
    "color": "red",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CF 33543"
    },  {
    "color": "red",
    "make": "Volkswagen",
    "model": "Touran",
    "reg_number": "CA 94890"
    },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CY 82252"
    },  {
    "color": "blue",
    "make": "Toyota",
    "model": "Yaris",
    "reg_number": "CL 9538"
    },  {
    "color": "white",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CF 62002"
    },  {
    "color": "orange",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CJ 67577"
    },  {
    "color": "blue",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CA 77852"
    },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Hilux",
    "reg_number": "CY 52435"
    },  {
    "color": "blue",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CL 76173"
    },  {
    "color": "red",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CL 38315"
    },  {
    "color": "blue",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CA 34015"
    }, {
    "color": "orange",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CK 41166"
    }];
    var carsFromTown = [];
    
    for(var i = 0; i < cars.length; i++){
        var list = cars[i].reg_number;
        if(townname == "Paarl" && list.startsWith("CJ")){
            carsFromTown.push(cars[i])
        }
        else if(townname == "Bellville" && list.startsWith("CY")){
            carsFromTown.push(cars[i])
        }
        else if(townname == "Stellenbosch" && list.startsWith("CL")){
            carsFromTown.push(cars[i])
        }
        else if(townname == "Malmesbury" && list.startsWith("CK")){
            carsFromTown.push(cars[i])
        }
        else if(townname == "Cape Town" && list.startsWith("CA")){
            carsFromTown.push(cars[i])
        }
        else if(townname == "Kuilsriver" && list.startsWith("CF")){
            carsFromTown.push(cars[i])
        }
    }
    return carsFromTown 
}
    
  function numberOfCars(carColor,townName){
    var cars = [ {
    "color": "white",
    "make": "Volkswagen",
    "model": "Polo",
    "reg_number": "CL 61045"
    },  {
    "color": "red",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CY 16875"
    },  {
    "color": "orange",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CK 32655"
    },  {
    "color": "orange",
    "make": "Ford",
    "model": "EcoSport",
    "reg_number": "CL 11318"
    },  {
    "color": "white",
    "make": "Nissan",
    "model": "Micra",
    "reg_number": "CJ 16103"
    },  {
    "color": "orange",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CL 42789"
    },  {
    "color": "blue",
    "make": "Volkswagen",
    "model": "Jetta",
    "reg_number": "CA 46977"
    },  {
    "color": "white",
    "make": "Volkswagen",
    "model": "Polo",
    "reg_number": "CY 25661"
    },  {
    "color": "white",
    "make": "Nissan",
    "model": "Micra",
    "reg_number": "CY 35475"
    },  {
    "color": "white",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CY 54886"
    },  {
    "color": "white",
    "make": "Toyota",
    "model": "Hilux",
    "reg_number": "CJ 16455"
    },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CK 57166"
    },  {
    "color": "orange",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CL 77790"
    },  {
    "color": "blue",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CY 98904"
    },  {
    "color": "white",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CF 75599"
    },  {
    "color": "red",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CA 5510"
    },  {
    "color": "blue",
    "make": "Ford",
    "model": "Focus",
    "reg_number": "CF 75586"
    },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CA 46137"
    },  {
    "color": "orange",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CK 22692"
    },  {
    "color": "red",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CF 33543"
    },  {
    "color": "red",
    "make": "Volkswagen",
    "model": "Touran",
    "reg_number": "CA 94890"
    },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CY 82252"
    },  {
    "color": "blue",
    "make": "Toyota",
    "model": "Yaris",
    "reg_number": "CL 9538"
    },  {
    "color": "white",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CF 62002"
    },  {
    "color": "orange",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CJ 67577"
    },  {
    "color": "blue",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CA 77852"
    },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Hilux",
    "reg_number": "CY 52435"
    },  {
    "color": "blue",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CL 76173"
    },  {
    "color": "red",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CL 38315"
    },  {
    "color": "blue",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CA 34015"
    }, {
    "color": "orange",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CK 41166"
    }];
    var carsFromTown = [];
    var colors = [];
    
    for(var i = 0; i < cars.length; i++){
      var list = cars[i].reg_number;
      if(townName == "Paarl" && list.startsWith("CJ")){
        carsFromTown.push(cars[i])
      }
      else if(townName == "Bellville" && list.startsWith("CY")){
        carsFromTown.push(cars[i])
      }
      else if(townName == "Stellenbosch" && list.startsWith("CL")){
        carsFromTown.push(cars[i])
      }
      else if(townName == "Malmesbury" && list.startsWith("CK")){
        carsFromTown.push(cars[i])
      }
      else if(townName == "Cape Town" && list.startsWith("CA")){
        carsFromTown.push(cars[i])
      }
      else if(townName == "Kuilsriver" && list.startsWith("CF")){
        carsFromTown.push(cars[i])
      }
    }
    
    for(var i = 0; i < carsFromTown.length; i++){
      var colorForCertainCar = carsFromTown[i].color
      if(colorForCertainCar == carColor){
        colors.push(carsFromTown[i])
      }
    } 
    
    return colors
  }
  