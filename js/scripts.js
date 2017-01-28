// function order(pizzaQuantity) {
//   this.pizzaQuantity = pizzaQuantity;
//   this.pizzas = [];
//   //this.totalcost=totalcost;
// }
function pizza(toppings,size, quantity) {
  this.toppings=toppings;
  this.size= size;
  this.quantity= quantity;
  //this.cost=cost;
}
function returnCost(toppings,size, quantity) {
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
    var costSize= 10;
  }else if (size==="Medium") {
    costSize= 15;
  } else if (size==="Large") {
    costSize= 20;
  }
  return (costSize+costtoppings)* quantity
}

// order.prototype.revieworder = function() {
//   if (this.toppings.length===0 && !click()) {
//     return "It is required to select at least one topping.";
//   } else {
//     return "You want to purchase" + this.pizzaQuantity+  " pizza(s):"+ "The total cost is " + this.totalcost + " dollars.";
// }

pizza.prototype.reviewPizza = function() {
  return this.quantity+" "+this.size + " size, with " + this.toppings+ ". The cost is " + this.cost + " dollars."+"<br>";
}


//user interface logic:
$(document).ready(function() {
  $("form#select").submit(function(event) {
    event.preventDefault();
    var toppings=[]
    $("input:checkbox[name=topping]:checked").each(function() {
      var topping = $(this).val();
      toppings.push(topping);
    })
    var size = $("input:radio[name=size]:checked").val();
    var quantity= parseFloat($("input:radio[name=quantity]:checked").val());
    var newPizza= new pizza(toppings,size,quantity);
    //var pizzaQuantity;
    //var newOrder= new order (pizzaQuantity);
    newPizza.cost = returnCost(toppings,size, quantity);
    if (toppings.length!=0) {
      $("#warning").hide();
      $("#outputOrder").append(newPizza.reviewPizza());
      $("span").show();
    }else {
      $("#warning").show();
    }
    $("span").click(function() {
      if (toppings.length!=0) {
        $("form#info").show();
      }
    })
  })


  $("form#info").submit(function(event) {
    event.preventDefault();
    var name = $("#fullName").val();
    var address = $("#address").val();
    $("#outputInfo").text("Thank you, "+ name+ " at " + address + ". Your order will be there soon.")
  })

});
