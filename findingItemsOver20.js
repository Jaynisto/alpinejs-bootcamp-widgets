function findItemsOver20(items){
    var over20 = [];
    for(var i = 0; i < items.length; i++){
      var listOfItems = items[i];
      if(listOfItems.qty > 20){
        over20.push(listOfItems);
      }
    }
    return over20;
  }
  function findItemsOver(items, threshold){
    var over = [];
    for(var i = 0; i < items.length; i++){
      var listOfItems = items[i];
      if(listOfItems.qty > threshold){
        over.push(listOfItems);
      }
    }
    return over;
  }