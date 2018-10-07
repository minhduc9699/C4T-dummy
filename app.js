var numSquares = 6;

var colors = [
  "rgb(234, 45, 45)",
  "rgb(234, 45, 45)",
  "rgb(234, 45, 45)",
  "rgb(234, 45, 45)",
  "rgb(234, 45, 45)",
  "rgb(234, 45, 45)",
]

var pickedColor = colors[3]

var squares = document.querySelectorAll(".square");

for (var i=0; i<squares.length; i++) {
  squares[i].style.backgroundColor = colors[i]
}

squares.forEach( (square) => {
  square.addEventListener("click", (event) => {
    var clickedColor = event.target.style.backgroundColor
    if (clickedColor === pickedColor) {
      console.log("đúng dòiiii");
    }
    else {
      console.log("chọn lại plz");
      
    }

    
  })
} )

var randomColor = () => {
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
d
}




