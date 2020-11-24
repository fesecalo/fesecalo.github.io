function initParpadear(stage)
{
  window.setInterval (BlinkIt, 200);
  var color = "#980ab0";
  
  function BlinkIt ()
  {
    var blink = document.getElementById (stage);
    color = (color == "#ffffff")? "#980ab0" : "#ffffff";
    blink.style.color = color;
  
  }
  //window.location.href = "stage1.html";
}

