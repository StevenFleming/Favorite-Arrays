$(document).ready(function() {

  $("form#survey").submit(function(event) {
    event.preventDefault();

    var fruit =$("#fruit").val();
    var book =$("#book").val();
    var food =$("#food").val();
    var color =$("#color").val();
    var animal =$("#animal").val();

    var favorites = [fruit, book, food, color, animal];

    var firstThree = [];
    

    firstThree.push(favorites[0], favorites[1], favorites[2]);
    
    console.log(firstThree);

    $("#survey").after("<p id='fruitOutput'>Your favorite fruit is " + favorites[0] +". </p>");
    $("#fruitOutput").after("<h1> Your favorite book is " + favorites[1] + ". <h1>");
    $("#survey").after(`<ul> The first three answers are <li>${firstThree[0]}</li><li> ${firstThree[1]}</li><li> ${firstThree[2]}</li><ul>`);

  });
});