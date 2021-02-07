


var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}
document.body.style.backgroundColor = generateRandomColor() // -> #e1ac94
someDiv.style.color = generateRandomColor() 




// const setBg = () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
//     color.innerHTML = "#" + randomColor;
//   };
  
//   genNew.addEventListener("click", setBg);
//   setBg();

//   function js_style () {
//     document.getElementById ("table").text.style.fontSize = "14pt";  
//   };
  
