var coll = document.getElementsByClassName("colapse");
var i;
var left, right;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      
      this.style.borderBottomRightRadius = "5px";
      this.style.borderBottomLeftRadius = "5px";
    } else {
      content.style.display = "block";

      this.style.borderBottomRightRadius = "0px";
      this.style.borderBottomLeftRadius = "0px";
    }
  });
}