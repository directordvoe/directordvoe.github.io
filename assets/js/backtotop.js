function up() {  
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
if(top > 0) {  
  window.scrollBy(0,((top+400)/-10));  
  t = setTimeout('up()',40);  
} else clearTimeout(t);  
return false;  
} 

$(window).scroll(function(){
  //more then or equals to
  if($(window).scrollTop() >= 70 ){
      $( "#back-top" ).css( "display", "block" );
 
  //less then 100px from top
  } else {
     
 $( "#back-top" ).css( "display", "none" );
  }
});

$(window).scroll(function(){
  //more then or equals to
  if($(window).scrollTop() <=30 ){
      $( "#go-down" ).css( "display", "block" );
 
  //less then 100px from top
  } else {
     
 $( "#go-down" ).css( "display", "none" );
  }
});