
function scrollToAnchor() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        target.css('background-color','#333');
        target.css('color','#fff');
        window.setTimeout(function(){
          target.css('background-color','transparent');
          target.css('color','#000');
        },5000)
        return false;
      }
    }
  });
}

function expandAcronym() {
  $('.acronym').click(function( event ){
    event.preventDefault();
    targetID = event.currentTarget.id;
    $('#' + targetID).text($('#' + targetID).attr('data-expanded'))
      .css('text-decoration', 'none')
      .css('color','inherit')
      .css('cursor', 'default');
  });
}

//-- not the most efficient code
function collapseNavOnScroll() {
  $('.navbar-toggle').click( function() {
    collapseNavOnScroll.openingPos = $(document).scrollTop();
  });

  $(window).scroll(function() {
      if ($(document).scrollTop() - collapseNavOnScroll.openingPos > 60) {
        $('.navbar-collapse').collapse('hide');
      }      
  });
}
collapseNavOnScroll.openingPos = 0;



$(function() {
  scrollToAnchor();
  expandAcronym();
  collapseNavOnScroll();
});

var ITC_XLtCn = new FontFaceObserver('ITCAvantGardeStd-XLtCn');
var ITC_Bld = new FontFaceObserver('ITCAvantGardeStd-Bold');
var ITC_Bk = new FontFaceObserver('ITCAvantGardeStd-Bk');
// var HelvBld = new FontFaceObserver('Helvetica-bd');

ITC_XLtCn.load().then(function () {
  addFontClass('.index-intro-big',' bold-condensed-loaded');
  addFontClass('h1',' light-condensed-loaded');
});
ITC_Bld.load().then(function () {
  addFontClass('.logo',' bold-type-loaded');
  addFontClass('.about-title',' bold-type-loaded');
  addFontClass('.prop-title',' bold-type-loaded');
  addFontClass('.prop-subtitle',' bold-type-loaded');
  addFontClass('.index-prop-title',' bold-type-loaded');
  addFontClass('h2',' bold-type-loaded');
});
ITC_Bk.load().then(function () {
  addFontClass('.header-button a','book-type-loaded');
  addFontClass('.prop-title-summary',' book-type-loaded');
});
// HelvBld.load().then(function () {
//   addFontClass('.prop-num','helvetica-loaded');
//   addFontClass('.index-prop-num','helvetica-loaded');
// });


function addFontClass( query, classToAdd ) {
  var sel = document.querySelectorAll( query )
  if(sel) { 
    for (var i = 0; i < sel.length; i++) {
      var element = sel[i];
      sel[i].className += classToAdd;
    }
  }
}


// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function() {
//       FastClick.attach(document.body);
//   }, false);
// }


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-83939332-1', 'auto');
ga('send', 'pageview');