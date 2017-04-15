var Canvas;
var bubbleCount = 0;

var importJquery = document.createElement('script');
importJquery.src = "https://code.jquery.com/jquery-3.2.1.slim.min.js";
document.head.appendChild(importJquery);

var start = function() {
  Canvas = $('#canvas');
};

var addHeading = function(heading,size) {
  if($('#heading').length){
    $('#heading').text(heading);
  } else {
     Canvas.append('<h1 id="heading" style="font-size:'+size+'px;">'+heading+'</h1>');
  }
};

var addSpaceship = function(top,left,size,name,isEngineOn){
  var random = Math.floor(Math.random()*9);
  var src = 'spaceship'+random+'.png';
  var ship = addImage(name,src,size);
  positionEl(ship, top, left);
  if(isEngineOn){
    bounce(ship,30);
  }
};

var positionEl = function(el, left, top){
  console.log(el);
  el.css({
    'position':'absolute',
    'top':top+'px',
    'left':left+'px'
  });
};

var addImage = function(src,size){
  var name = src.split('.')[0];
  if($('#'+name).length){
    name = name + $('img').length;
  }
  Canvas.append('<img src ="' + src + '" id = "' + name +'" width="'+size+'px"/>');
  return $('#'+name);

};

var showError = function(error){
  alert(error);
};

var bounceAnimation = function(el,scale){
  randomDuration = Math.floor(Math.random()*500);
  var aniObj = {
    duration:1000+randomDuration,
    queue:'bounce'+el[0].id
  };
  el.animate({
    "top":"+="+scale+"px"
  },aniObj).animate({
    "top":"-="+scale+"px"
  },{
    duration: aniObj.duration,
    queue: aniObj.queue,
    complete:function(){
      bounceAnimation(el,scale);
    }
  });
};

var bounce = function(el,scale){
  bounceAnimation(el,scale);
  el.dequeue('bounce'+el[0].id);
}

var moveX = function(el, initialX, finalX, turns, alternate){
     moveHAnimation(el, initialX, finalX, turns, alternate);
     el.dequeue('fish'+el[0].id);
}

var moveY = function(el, initialY, finalY, turns){
    moveVAnimation(el, initialY, finalY, turns);
    el.dequeue('bubble'+el[0].id);
}

var moveVAnimation = function(el, initialY, finalY, turns){
    randomDuration = Math.floor(Math.random()*5000);
    var aniObj = {
        duration: 5000+randomDuration,
        queue:'bubble'+el[0].id,
        complete:function(){
            moveVAnimation(el, initialY, finalY, turns);
        }
    }
    el.css('top', initialY+'px');
    
    if(turns){
        el.animate({
            top: finalY+'px'
        }, aniObj);
    }
    
    if(turns != 'infinite'){
        turns--;
    }    
}

var moveHAnimation = function(el, initialX, finalX, turns, alternate){
    randomDuration = Math.floor(Math.random()*5000);
    var aniObj = {
    duration: 5000+randomDuration,
    queue:'fish'+el[0].id,
    complete: function(){
        if(alternate){
            el.toggleClass('flipH');
            moveHAnimation(el, finalX, initialX, turns, alternate);
        }else{
            moveHAnimation(el, initialX, finalX, turns, alternate);
        }
    }
  };
    
    el.css('left', initialX+'px');
    
    if(turns){
        el.animate({
            left: finalX+'px'
        }, aniObj);
    }
    
    if(turns != 'infinite'){
        turns--;
    }
}

