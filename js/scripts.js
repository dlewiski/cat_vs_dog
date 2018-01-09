
$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul.catList").prepend("<p>*meow*</p>");
  });

  $("button#meow").click(function() {
    alert("woof.");
  });

  $("button#woof").click(function() {
    $("ul.dogList").prepend("<p>*woof*</p>");
  });

  $("button#woof").click(function() {
    alert("meow.");
  });

});
