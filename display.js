dynamic_display.js
function ModifyBGColor(id, newColor)
{
 var mElement = document.getElementById(id);
 mElement.style.backgroundColor = newColor;
}
function ModifyTextColor(id, newColor)
{
 var mElement = document.getElementById(id);
 mElement.style.color = newColor;
}
function ModifyBoxSize(id, newWidth, newHeight)
{
 var mElement = document.getElementById(id);
 mElement.style.width = newWidth;
 mElement.style.height = newheight;
}
function ModifyBoxPosition(id, newLeft, newTop)
{
 var mElement = document.getElementById(id);
 mElement.style.left = newLeft;
 mElement.style.top = newTop;
}

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

$(document).ready(function(){
  $('.modal').modal('show');
});


