var Body = {
  BGColor : function(color){
    // document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);
  },

  Color : function(color){
    // document.querySelector('body').style.color=color;
    $('body').css('color',color);
  }
}

var alink = {
  Color : function(color){
  //   var alist = document.querySelectorAll('a');
  //   var i = 0;
  //   while(i < alist.length){
  //     alist[i].style.color = color;
  //     i = i + 1;
  //   }
  $('a').css('color',color);
  }
}

function DayNightHandler(self){
  var target = document.querySelector('body').style;
  if(self.value==='night'){
    Body.BGColor('black');
    Body.Color('white');
    self.value='day';
    alink.Color('powderblue');
  } else {
    Body.BGColor('white');
    Body.Color('black');
    self.value='night';
    alink.Color('blue');
  }
}
