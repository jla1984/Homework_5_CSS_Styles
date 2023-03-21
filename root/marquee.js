function greet() {
  var name = document.getElementById("firstname").value;
  var greeting = "Welcome, " + name + "!";
  document.getElementById("greeting").innerHTML = greeting;
}
