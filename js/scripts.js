//Business Logic

function Pizza(size, meat, topping) {
  this.size = size;
  this.meat = meat;
  this.topping = topping;
  this.price;
}

Pizza.prototype.calculatePrice = function() {
  this.price = 8; //size small price
  if (this.size === "medium") {
    this.price += 2;
  } else if (this.size === "large") {
    this.price += 4;
  }

//meat price
  for (var i = 0; i < this.meat.length; i++) {
  this.price += 2;
  }
  //topping price
  for (var i = 0; i < this.topping.length; i++) {
  this.price += 1;
  }
}

Pizza.prototype.pizzaDescription = function() {
  return "You have ordered a " + this.size + " " + this.meat + this.topping "pizza: $" + this.price;
}

var displayPizzaInfo = function() {
  $("#final_details").show();
  $("#final_details h5").text(thePizza.pizzaDescription());
  $("#meat").text(thePizza.meat.join(", "));
  $("#topping").text(thePizza.topping.join(", "));
}


//UI Logic

$(document).ready(function() {
  $("#pizza-form").submit(function(event) {
    event.preventDefault();
    //form inputs
    var size = $("input[name=size]:checked").val(); {
      return this.value;
    }).get();
    var meat = $("input[name=meat]:checked").val(); {
      return this.value;
    }).get();
    var topping = $("input[name=topping]:checked")..val() {
      return this.value;
    }).get();

    var thePizza = new Pizza(size, meat, topping);
    //calculate price from input by user
    thePizza.calculatePrice();
    //display as list
    $("#final_pizza").append("<li><span class="pizza">" + thePizza.pizzaDescription() + "<span></li>");
    //reset to default
    document.getElementById("pizza-form").reset();

    $(".pizza").last().click(function() {
      $("#final_details").show();
      $("#final_details h5").text(thePizza.pizzaDescription());
      $("#meat").text(thePizza.meat.join(", "));
      $("#topping").text(thePizza.topping.join(", "));
    });
  });

});
