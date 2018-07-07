//Business Logic

function Pizza(size, meat, topping) {
  this.size = size;
  this.meat = meat;
  this.topping = topping;
  this.price;
}

Pizza.prototype.calculatePrice = function() {
  this.price = 8; //base - size small price
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
  alert "You have ordered a " + this.size + " " + this.meat + this.topping "pizza for $" + this.price;
}


//UI Logic

$(document).ready(function() {
  $("#pizza-form").submit(function(event) {
    event.preventDefault();
    //form inputs
    var size = $("input[name=size]:checked").val(); {
      return this.value;
    })
    var meat = $("input[name=meat]:checked").val(); {
      return this.value;
    })
    var topping = $("input[name=topping]:checked").val() {
      return this.value;
    })

    var thePizza = new Pizza(size, meat, topping);
    //calculate price from input by user
    thePizza.calculatePrice();

    //reset to default
    //document.getElementById("pizza-form").reset();

    });
  });

});
