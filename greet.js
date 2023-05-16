function greet(name,language){
    if(language === "english"){
        return "Hello, " + name + ".";
    }
    else if(language === "zulu"){
        return "Sawubona, " + name + ".";
    }
    else if(language === "xhosa"){
        return "Molo, " + name + ".";
    }
    else if(name === " "){
        return "Please Enter Your Name On The Text Field.";
    }
    else {
        return "Please Select A Language Of Your Choice."  
    }
}