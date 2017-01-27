function returncostpizza(toppings,size) {
  if (toppings.length===4) {
    var costtoppings= 8;
  }else if (toppings.length===3) {
    costtoppings= 6;
  }else if (toppings.length===2) {
    costtoppings= 4;
  }else if (toppings.length===1){
    costtoppings = 2;
  }else {
    return costpizza="Is required to select at least one topping."
  }
  if (size==="small") {
    return costpizza = costtoppings + 10;
  }else if (size==="medium") {
    return costpizza = costtoppings + 15;
  } else {
    return costpizza =  costtoppings + 20;
  }
}


// function pizza(toppings,size) {
//   this.toppings=toppings;
//   this.size= size;
// }
//
// pizza.prototype.cost(function() {
//   return "The cost of your pizza(s) is " + costpizza;
// })




//user interface logic:
$(document).ready(function() {
  $("form#select").submit(function(event) {
    event.preventDefault();
    var toppings=[]
    $("input:checkbox[name=topping]:checked").each(function() {
      var topping = $(this).val();
      toppings.push(topping);
      //$("#outputCost").append(toppings+"<br>");
    })
    var size = $("input:radio[name=size]:checked").val();
//    var newpizza= new pizza(inputtedToppings,inputtedsize)
    var costpizza = returncostpizza(toppings,size);
    $("#outputCost").text(costpizza);


  })
});
