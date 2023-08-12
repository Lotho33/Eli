$(document).ready(function() {
  var getProductHeight = $('.product.active').height();

  $('.products').css({
    height: getProductHeight
  });

  function calcProductHeight() {
    getProductHeight = $('.product.active').height();

    $('.products').css({
      height: getProductHeight
    });
  }

  function animateContentColor() {
    var getProductColor = $('.product.active').attr('product-color');

    $('body').css({
      background: getProductColor
    });

    $('.title').css({
      color: getProductColor
    });

    $('.btn').css({
      color: getProductColor
    });
  }

  var productItem = $('.product'),
  productCurrentItem = productItem.filter('.active');

  var btnprev = document.getElementById("prev");
  var btnnext = document.getElementById("next");

  var cnt = 1;

  $('#next').on('click', function(e) {
    e.preventDefault();

    cnt++;

    var nextItem = productCurrentItem.next();

    productCurrentItem.removeClass('active');

    if (cnt < 16) {
      productCurrentItem = nextItem.addClass('active');
      if(cnt == 2){
        btnprev.style.opacity = 1;
        btnprev.style.pointerEvents = "all";
      }if(cnt == 10){
        btnnext.innerHTML = "NON CLICCARMI";
      }if(cnt == 11){
        btnnext.innerHTML = "NON RICASCARCI";
      }if(cnt == 12){
        btnnext.innerHTML = "TI PREGO BASTA";
      }if(cnt == 13){
        btnnext.innerHTML = "L'HAI VOLUTO TU";
      }if(cnt == 14){
        btnprev.style.opacity = 0.5;
        btnprev.style.pointerEvents = "none";
        btnnext.innerHTML = "SI LO SO, HO SCRITTO TANTO";
      }if(cnt == 15){
        btnprev.style.opacity = 1;
        btnprev.style.pointerEvents = "all";
        btnnext.style.opacity = 0.5;
        btnnext.style.pointerEvents = "none"
        btnnext.innerHTML = "QUANTI PUNTI VALE TUTTO QUESTO?";
      }
    }else{
      productCurrentItem = nextItem.addClass('active');
    } 
    

    calcProductHeight();
    animateContentColor();
  });

  $('#prev').on('click', function(e) {
    e.preventDefault();

    cnt--;

    var prevItem = productCurrentItem.prev();

    productCurrentItem.removeClass('active');

    if (cnt == 1) {
      productCurrentItem = prevItem.addClass('active');
      btnprev.style.opacity = 0.5;
      btnprev.style.pointerEvents = "none";
    } else {
      productCurrentItem = prevItem.addClass('active');
      btnnext.innerHTML = "Prossimo";
      btnnext.style.opacity = 1;
      btnnext.style.pointerEvents = "all";
      if(cnt == 10){
        btnnext.innerHTML = "NON CLICCARMI";
      }if(cnt == 11){
        btnnext.innerHTML = "NON RICASCARCI";
      }if(cnt == 12){
        btnnext.innerHTML = "TI PREGO BASTA";
      }if(cnt == 13){
        btnnext.innerHTML = "L'HAI VOLUTO TU";
      }if(cnt == 14){
        btnprev.style.opacity = 0.5;
        btnprev.style.pointerEvents = "none";
        btnnext.style.opacity = 1;
        btnnext.style.pointerEvents = "all"
        btnnext.innerHTML = "SI LO SO, HO SCRITTO TANTO";
      }
    }

    calcProductHeight();
    animateContentColor();
  });

  // Ripple
  $('[ripple]').on('click', function(e) {
    var rippleDiv = $('<div class="ripple" />'),
      rippleSize = 60,
      rippleOffset = $(this).offset(),
      rippleY = e.pageY - rippleOffset.top,
      rippleX = e.pageX - rippleOffset.left,
      ripple = $('.ripple');

    rippleDiv.css({
      top: rippleY - (rippleSize / 2),
      left: rippleX - (rippleSize / 2),
      background: $(this).attr("ripple-color")
    }).appendTo($(this));

    window.setTimeout(function() {
      rippleDiv.remove();
    }, 1900);
  });
});