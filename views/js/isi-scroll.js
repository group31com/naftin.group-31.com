$(document).ready(function(e) {

  /* FIXED/FLOATING SIDEBAR */
  var startisiheight =  $('#page-isi').height();
  var windowheight = $(window).height();
  
  checkISIpos();

  $(document).on('scroll', _.throttle(checkISIpos, 200));
  $(window).on('resize', _.throttle(checkISIpos, 200));

  function checkISIpos() {
    if($('#page-isi').length) {
      var pageWidth = $('#page-wrapper').width();
      var isiIsOpen = $('#page-isi').hasClass('open');
      var isiIsFixed = $('#page-isi').hasClass('fixed');
      var scrollPosition = $(document).scrollTop() - 400;
      var scrollTrigger = $('#page-isi-scroll-trigger').offset().top;
      if(pageWidth === 640) {
        scrollTrigger = scrollTrigger - 340;
      }
      console.log('scrolltrigger => ' + scrollTrigger);
      console.log('startisiheight => ' + startisiheight);
      console.log('scrollPosition => ' + scrollPosition);
      console.log('windowheight => ' + windowheight);
      if(!isiIsFixed) {
        console.log('dettached isi');
        //detach the isi
        if (scrollTrigger - startisiheight > scrollPosition + windowheight) {
          $("#page-isi").addClass('fixed').css({});
          $('.isitrigger span.collapse').removeClass('show');
          $('.isitrigger span.expand').addClass('show');
        }
      }
      else {
        console.log('attached isi');
        // attach the isi
        if (scrollTrigger - startisiheight <= scrollPosition + windowheight) {
          $("#page-isi").removeClass('fixed').css({});
          $("#page-isi").removeClass('open');
    
          $('.isitrigger span.collapse').removeClass('show');
          $('.isitrigger span.expand').removeClass('show');
        }
      };
    }
  }



  /* EXPANDABLE ISI */
  $('.isitrigger').click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    var isiIsOpen = $('#page-isi').hasClass('open');
    if(isiIsOpen) {
      $('#page-isi').removeClass('open');
      $('#page-wrapper').removeClass('isiopen');

      $('.isitrigger span.collapse').removeClass('show');
      $('.isitrigger span.expand').addClass('show');
      $('body').removeClass('noscroll');
    } else {
      $('#page-isi').addClass('open');
      $('#page-wrapper').addClass('isiopen');

      $('.isitrigger span.collapse').addClass('show');
      $('.isitrigger span.expand').removeClass('show');
      $('body').addClass('noscroll');
    }
  });
  
  $('.study .button').on('click',function(e) {
    e.preventDefault();
    var s = $(this);
    var sid = s.data('id');
    $('#'+sid).slideToggle(function() {
      if($('#'+sid).is(':visible')) {
        s.text('Hide data');
      }
      else {
        s.text('View more data');
      }
    });
  
});

});

(function() {
    var beforePrint = function() {
        console.log('Functionality to run before printing.');
        $("#page-isi").removeClass('fixed').css({});
          $("#page-isi").removeClass('open');
    
          $('.isitrigger span.collapse').removeClass('show');
          $('.isitrigger span.expand').removeClass('show');
    };
    var afterPrint = function() {
        console.log('Functionality to run after printing');
        $("#page-isi").addClass('fixed').css({});
          $('.isitrigger span.collapse').removeClass('show');
          $('.isitrigger span.expand').addClass('show');
    };

    if (window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function(mql) {
            if (mql.matches) {
                beforePrint();
            } else {
                afterPrint();
            }
        });
    }

    window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;
}());