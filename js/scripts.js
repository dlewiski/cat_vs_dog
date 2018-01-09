
$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul.catList").prepend("<p>*meow*</p>");
    $("img#realCat").toggle();
  });

  $("button#meow").click(function() {
    alert("woof.");
  });

  $("button#woof").click(function() {
    $("ul.dogList").prepend("<p>*woof*</p>");
    $("img#realDog").toggle();
  });

  $("button#woof").click(function() {
    alert("meow.");
  });

});
