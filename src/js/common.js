var windowWidth = 0;
var wrapperWidth = 0;
var itemImgWidth = 0;
var itemImgPaddingRight = 0;
var totalSpace = 0;

$(window).on('load', function () { //全ての読み込みが完了したら実行
  $('#page').css('display', 'none');
  $('#loader').fadeIn(1000);
  $('body').addClass('no-scroll');
});

$(document).ready(function () {

  $('#loader-bg').delay(3000).fadeOut(400, function () {
    $('body').removeClass('no-scroll');
  });
  $('#page').slideUp(400).css('display', 'block');

  // set Item bg width
  addItemBgWidth();

  $(window).on('resize', function () {
    // set Item bg width
    addItemBgWidth();
  });


  // SP nav toggler click
  $('.spnav-toggler').on('click', function () {
    if ($(this).hasClass('activenav')) {
      $('body').removeClass('no-scroll');
      $(this).removeClass('activenav');
      $('.sp-menu').removeClass('activespnav');
    } else {
      $('body').addClass('no-scroll');
      $(this).addClass('activenav');
      $('.sp-menu').addClass('activespnav');
    }
  });
});

function addItemBgWidth() {
  windowWidth = $(window).width();
  wrapperWidth = $('.l-item-inner-content-fl').width();
  var rightSpace = (windowWidth - wrapperWidth) / 2;
  itemImgWidth = $('.l-item-inner-content-fl:first-child img').width() / 2;
  itemImgPaddingRight = Number($('.l-item-inner-content-fl-r:last-child').css('padding-right').replace('px', ''));
  totalSpace = rightSpace + itemImgWidth + itemImgPaddingRight;
  totalSpace = 100 - ((totalSpace * 100) / windowWidth);
  $('.item-bg').css('width', totalSpace + '%');
}

