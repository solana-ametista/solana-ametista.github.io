var coll = document.getElementsByClassName("colapse");
var i;
var left, right;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";

      coll.style.borderBottomRightRadius = "0em";
      coll.style.borderBottomLeftRadius = "0em";
    }
  });
}