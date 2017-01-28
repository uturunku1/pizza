// function order(pizzaQuantity) {
//   this.pizzaQuantity = pizzaQuantity;
//   this.pizzas = [];
//   //this.totalcost=totalcost;
// }
function pizza(toppings,size) {
  this.toppings=toppings;
  this.size= size;
  //this.cost=cost;
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
  if (size==="Small") {
    return costtoppings + 10;
  }else if (size==="Medium") {
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

pizza.prototype.reviewPizza = function() {
  if (this.toppings.length===0) {
    return "It is required to select at least one topping.";
  } else {
    return this.size + " size, with " + this.toppings+ ". The cost is " + this.cost + " dollars.";
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
    })
    var size = $("input:radio[name=size]:checked").val();
    var newPizza= new pizza(toppings,size);
    //var pizzaQuantity;
    //var newOrder= new order (pizzaQuantity);
    newPizza.cost = returnCost(toppings,size);
    $("#outputOrder").text(newPizza.reviewPizza());
    if (toppings.length!=0) {
      $("form#info").show();
    }
  })

  $("form#info").submit(function(event) {
    event.preventDefault();
    var name = $("#fullName").val();
    $("#outputInfo").text("Thank you, "+ name+ ". Your order will be there soon.")
  })

});
