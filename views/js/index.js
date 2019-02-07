$(document).ready(function() {

  var rotator = {
    cur: 0,
    els: null,
    timer: null,
    baseEl: $('#hero #heronav > div'),
    baseContentEl: $('#hero #herocontent > div'),
//    interval: 11000,
    interval: 5000,

    init: function() {
      this.els = this.baseEl.length;
      this.setEvents();
      this.start();
    },
    start: function() {
      this.timer = setInterval(function() {
        ++rotator.cur;
        if(rotator.cur>=rotator.els) {
          rotator.cur = 0;
        }
        rotator.execute(rotator.cur);
      },rotator.interval);
    },
    stop: function() {
      clearInterval(this.timer);
    },
    execute: function(num) {
      /*
      $('#hero .herocontent li > div').slideUp();
      $('#hero .herocontent li').eq(num).find('div').slideDown();
      $('#hero .herocontent li').removeClass('current');
      $('#hero .herocontent li').eq(num).addClass('current');
      */
      this.baseEl.removeClass('current');
      this.baseEl.eq(num).addClass('current');
      this.baseContentEl.removeClass('current');
      this.baseContentEl.eq(num).addClass('current');
     
      // animate the indicator
      var fromTop = this.baseEl.eq(num).position().top;
      var newPos = fromTop + 30;
      if(num>0) { newPos+=15; }
      $('#hero .indicator').animate({top: newPos});
    },
    setEvents: function() {
      $('#hero #heronav').mouseover(function() {
        rotator.stop();
      });
      $('#hero #heronav').mouseout(function() {
        rotator.start();
      });
      $('#hero #heronav div').click(function() {
        rotator.stop();
        var index = $(this).index();
        if(index!==rotator.cur) {
          rotator.execute(index);
        }
        $('#hero #heronav').unbind();
        rotator.cur = index;
      });
    }
  };
  
  var hcpRotator = {
    cur: 0,
    els: 5,
    timer: null,
    baseEl: $('#hero .list-indicator li > div'),
    baseContentEl: $('#hero #herocontent > div'),
    interval: 5000,

    init: function() {
      this.start();
      this.setEvents();
    },
    start: function() {
      this.timer = setInterval(function() {
        ++hcpRotator.cur;
        if(hcpRotator.cur>=hcpRotator.els) {
          hcpRotator.cur = 0;
        }
        hcpRotator.execute(hcpRotator.cur);
      },hcpRotator.interval);
    },
    stop: function() {
      clearInterval(this.timer);
    },
    execute: function(num) {
        
      this.baseEl.removeClass('current');
      this.baseEl.eq(num).addClass('current');
      this.baseContentEl.removeClass('current');
      this.baseContentEl.eq(num).addClass('current');
     
    },
    setEvents: function() {
      $('#hero #heronav').mouseover(function() {
        hcpRotator.stop();
      });
      $('#hero #heronav').mouseout(function() {
        hcpRotator.start();
      });
      
      // on click of the slider arrow
      $('.slide_right_arrow, .slide_left_arrow').click(function() {
        hcpRotator.stop();
        var index = $(this).index();
        
        if (index == 0) {
            if (hcpRotator.cur == 0) {
                hcpRotator.cur = 4;
            } else {
                --hcpRotator.cur;   
            }
        } else {
            if (hcpRotator.cur == 4) {
                hcpRotator.cur = 0;
            } else {
                ++hcpRotator.cur;
            }
        }
        hcpRotator.execute(hcpRotator.cur);
      });
      
      // on click of the slide indicator
      $('ul.list-indicator li').click(function() {
          hcpRotator.stop();
          var index = $(this).index();
          
          if (index!==hcpRotator.cur) {
              hcpRotator.baseEl.removeClass('current');
              hcpRotator.baseEl.eq(index).addClass('current');
              hcpRotator.execute(index);
          }
          hcpRotator.cur = index; 
      });
      
      //on click of slide icons
      $('a.slide_1, a.slide_2, a.slide_3, a.slide_4, a.slide_5').click(function() {
          hcpRotator.stop();
          var link_class = $(this).attr('class');
          var index = link_class.substring(6);
          
          console.log('current => ' + hcpRotator.cur);
          console.log('index =>' + index);
          
           if (index!==hcpRotator.cur) {
              hcpRotator.baseEl.removeClass('current');
              hcpRotator.baseEl.eq(index).addClass('current');
              hcpRotator.execute(index);
          }
          hcpRotator.cur = index; 
          
          return false;
      });
      
    }
  };

  if($('#heronav').is(':visible')) {
    console.log('visible');
    rotator.init();
  } 
  
  if ($('.hcp-index > #hero').is(':visible')) {
    hcpRotator.init();  
  }
  
  $('.icon-1, .icon-2, .icon-3, .icon-4').hover(function() {
      var icon_src = "";
      var icon_class = $(this).attr('class');
      
      switch (icon_class.substring(12)) {
          case 'icon-1':
            icon_src = "/img/hero/new/gauge1-hover.png";
            break;
          case 'icon-2':
            icon_src = "/img/hero/new/calendar2-hover.png";
            break;
         case 'icon-3':
            icon_src = "/img/hero/new/shield3-hover.png";
            break;
         default:
            icon_src = "/img/hero/new/chart4-hover.png";
            break;
      }
      
      $(this).attr('src', icon_src);
  }, function() {
      var icon_src = "";
      var icon_class = $(this).attr('class');
      
      switch (icon_class.substring(12)) {
          case 'icon-1':
            icon_src = "/img/hero/new/gauge1.png";
            break;
          case 'icon-2':
            icon_src = "/img/hero/new/calendar2.png";
            break;
         case 'icon-3':
            icon_src = "/img/hero/new/shield3.png";
            break;
         default:
            icon_src = "/img/hero/new/chart4.png";
            break;
      }
      
      $(this).attr('src', icon_src);
  });
  
  $('.icon-5').hover(function() { 
       $(this).attr('src', '/img/hero/new/slide0-hover.png');
  }, function() { 
      $(this).attr('src', '/img/hero/new/slide0.png');
  });
  
  $('.icon-6').hover(function() { 
       $(this).attr('src', '/img/hero/slide5-hover.png');
  }, function() { 
      $(this).attr('src', '/img/hero/slide5.png');
  });
  
  $('.slide_6').click(function() {
     window.location.href = $(this).attr('href'); 
  });
  
});


