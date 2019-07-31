alert("its working!")

function changeColor() {
  var name = document.getElementById("name");
  name.style.color = "#660029";
}

function image1bigger() {
  var image1 = document.getElementById('image1');
  if(image1 && image1.style) {
    image1.style.height = '500px';
    image1.style.width = 'auto';
  }
}
function image1down() {
  var image1 = document.getElementById('image1');
  if(image1 && image1.style) {
    image1.style.height = '300px';
    image1.style.width = 'auto';
  }
}

function image2bigger() {
  var image2 = document.getElementById('image2');
  if(image2 && image2.style) {
    image2.style.height = '500px';
    image2.style.width = 'auto';
  }
}
function image2down() {
  var image2 = document.getElementById('image2');
  if(image1 && image1.style) {
    image2.style.height = '300px';
    image2.style.width = 'auto';
  }
}
