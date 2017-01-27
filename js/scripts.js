function pizza(toppings,size) {
  this.toppings=toppings;
  this.size= size;
  if (toppings.length===0) {
    return "It is required to select at least one topping."
  }

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

pizza.prototype.reviewcost = function() {
  return "The pizza you want to purchase is " + this.size + " size, with the following toppings: "+ this.toppings+". The total cost is " + this.totalcost +" dollars." ;
}




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
    var newpizza= new pizza(toppings,size);
    var cost = returnCost(toppings,size);
    newpizza.totalcost = cost;


    $("#outputCost").text(newpizza.reviewcost());


  })
});
