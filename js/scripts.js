// function order(pizzaQuantity) {
//   this.pizzaQuantity = pizzaQuantity;
//   this.pizzas = [];
//   //this.totalcost=totalcost;
// }
function pizza(toppings,size) {
  this.toppings=toppings;
  this.size= size;
}
function returnCost(toppings,size) {
  if (toppings.length===4) {
    var costtoppings= 8;
  }else if (toppings.length===3) {
    costtoppings= 6;
  }else if (toppings.length===2) {
    costtoppings= 4;
  }else if (toppings.length===1){
    costtoppings = 2;
  }
  if (size==="small") {
    return costtoppings + 10;
  }else if (size==="medium") {
    return costtoppings + 15;
  } else {
    return costtoppings + 20;
  }
}

// order.prototype.revieworder = function() {
//   if (this.toppings.length===0 && !click()) {
//     return "It is required to select at least one topping.";
//   } else {
//     return "You want to purchase" + this.pizzaQuantity+  " pizza(s):"+ "The total cost is " + this.totalcost + " dollars.";
// }

pizza.prototype.reviewpizza = function() {
  if (this.toppings.length===0 && !click()) {
    return "It is required to select at least one topping.";
  } else {
    return "<li>"+ this.size + " size, with " + this.toppings+ "</li>"+"<br>";
  }
}


//user interface logic:
$(document).ready(function() {
  $("#addAnother").click(function() {
    $(".another").append('<h3><u>Another Pizza</u></h3>'+

    '<h3>Select your toppings:</h3>'+
    '<div class="checkbox">'+
      '<label><input type="checkbox" name="topping" value="Pepperoni">Pepperoni</label>'+
    '</div>'+
    '<div class="checkbox">'+
      '<label><input type="checkbox" name="topping" value="Artichoke">Artichoke</label>'+
    '</div>'+
    '<div class="checkbox">'+
      '<label><input type="checkbox" name="topping" value="Anchovy">Anchovy</label>'+
    '</div>'+
    '<div class="checkbox">'+
      '<label><input type="checkbox" name="topping" value="Mushrooms">Mushrooms</label>'+
    '</div>'+
    '<h3>Select one size:</h3>'+
    '<div class="radio">'+
      '<label><input type="radio" name="size" value="large" checked>Large</label>'+
    '</div>'+
    '<div class="radio">'+
      '<label><input type="radio" name="size" value="medium">Medium</label>'+
    '</div>'+
    '<div class="radio">'+
      '<label><input type="radio" name="size" value="small">Small</label>'+
    '</div>')
  });

  $("form#select").submit(function(event) {
    event.preventDefault();
    var toppings=[]
    $("input:checkbox[name=topping]:checked").each(function() {
      var topping = $(this).val();
      toppings.push(topping);
      //$("#outputCost").append(toppings+"<br>");
    })
    var size = $("input:radio[name=size]:checked").val();
    var newpizza= new pizza(toppings,size);
    //var pizzaQuantity= //the number of newpizza;
    //var newOrder= new order (pizzaQuantity, newpizza);
    //newOrder.totalcost = returnCost(toppings,size);
    $("#outputCost").append(newpizza.reviewpizza());


  })
});
