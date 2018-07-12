//Business Logic

function Pizza(size, meat, topping, price) {
  this.size = size;
  this.meat = meat;
  this.topping = topping;
  this.price = 0;
}

Pizza.prototype.calculatePrice = function() {
  if (this.size === "Small") {
    this.price = this.price + 8;
  }
  else if (this.size === "Medium") {
    this.price= this.price + 10;
  }
  else if (this.size === "Large") {
    this.price = this.price + 12;
  }
  //price of meat
  for (var i = 0; i < this.meat.length; i++) {
  this.price += 2;
  }
  //price of toppings
  for (var i = 0; i < this.topping.length; i++) {
  this.price += 1;
  }
};

//Front end logic

$(document).ready(function() {
  $("#pizza-form").submit(function(event) {
    event.preventDefault();
    //form inputs
    var size = $("input:radio[name=size]:checked").val();


    var meat = $("input:checkbox[name=meat]:checked").val();

    var topping = $("input:checkbox[name=topping]:checked").val();

    var thePizza = new Pizza(size, meat, topping);
    //calculate price from input by user
    thePizza.calculatePrice();
    $("#show-price").text(thePizza.price);
    $("#final-price").show();

    document.getElementById("pizza-form").reset();
  });

});
