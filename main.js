var offset= 0;
var offset2= 0;
var duration = anime({
  targets: '.rr1',
  rotate:[{value:360,duration: 2000, easing: 'linear',delay:00}],
  translateX:[{value:300,duration:1000,delay:2000}]
});

var duration2 = anime({
  rotate:90,
  duration:0,
  targets: '.rr2',
  begin: function(anim) {
    document.querySelector('.r2').setAttribute("fill", "#03ff68");
  },
  translateX:[{value:300,duration:1000,delay:500}],
  
});

var duration2 = anime({
  rotate:180,
  duration:0,
  targets: '.rr3',
  begin: function(anim) {
    document.querySelector('.r3').setAttribute("fill", "#3503ff");
  },
  translateX:[{value:300,duration:1000,delay:1000}]
  
});

var duration2 = anime({
  rotate:270,
  duration:0,
  targets: '.rr4',
  begin: function(anim) {
    document.querySelector('.r4').setAttribute("fill", "#ff9a03");
  },
  translateX:[{value:300,duration:1000,delay:1500}]
  
});




  /*
  var lineDrawing = anime({

  targets: '.rotate',
 rotate:{
   value:'360',
   duration:4000,
   delay:1000
 }
});
*/



