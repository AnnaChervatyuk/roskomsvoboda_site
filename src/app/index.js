import '../style/app.scss';

// Collapse accoridion every time dropdown is shown
$('.dropdown-accordion').on('show.bs.dropdown', function (event) {

  var accordion = $(this).find($(this).data('accordion'));
  accordion.find('.panel-collapse.in').collapse('hide');
});

// Prevent dropdown to be closed when we click on an accordion link
$('.dropdown-accordion').on('click', 'a[data-toggle="collapse"]', function (event) {
  event.preventDefault();
  event.stopPropagation();
  $($(this).data('parent')).find('.panel-collapse.in').collapse('hide');
  $($(this).attr('href')).collapse('show');
})

// открыть доп.соцети в выпадающем меню на моб
// $('.dropleft').on('click', 'button[data-toggle="dropdown"]', function (event) {
//   event.preventDefault();
//   event.stopPropagation();
// })

$(document).ready(function() {
  var menu = $("#nav-bar-filter");
  var parent = $(".filter-wrapper");
  var btnSwitchTheme = $("#switch_theme")
  var isLightTheme = (window['localStorage'].getItem("isLightTheme") == "false") ? isLightTheme = false : isLightTheme = true
  var compileDescMenu = false;

  //кнопка меню на мобиле
  function chooseBtnIcon() {
    if ($("#mobail-menu").hasClass("show")) {
      $("#mobile-menu").attr("class", "icons icons--menu");
      $("#mobile-menu use").attr("xlink:href", "./images/sprite.svg#icon-menu");
    } else {
      $("#mobile-menu").attr("class", "icons icons--close");
      $("#mobile-menu use").attr("xlink:href", "./images/sprite.svg#icon-close");
    }
  }

  //переключение темы
  function switchTheme() {

    isLightTheme = !isLightTheme
    window['localStorage'].setItem("isLightTheme", isLightTheme);
    applyTheme();
  }

  function applyTheme(){
    if (isLightTheme) {
      $("body").css('color', '#1D1D1B');
      $("body").css('background-color', '#ffffff');
      ($(".container-fluid").hasClass("dark_theme")) ? $(".container-fluid").removeClass("dark_theme") : '';
      $(".nav-link__logo-copyright>img").attr("src", "./images/logo_creative.png");
      $(".nav-link__logo>img").attr("src", "./images/logo.svg");

    } else {
      $("body").css('color', '#E4E4E4');
      $("body").css('background-color', '#1A1C1E');
      ($(".container-fluid").hasClass("dark_theme")) ? "" : $(".container-fluid").addClass("dark_theme");
      $(".nav-link__logo-copyright>img").attr("src", "./images/logo_creative_white.png");
      $(".nav-link__logo").css('background', 'none');
      $(".nav-link__logo>img").attr("src", "./images/logo_dark.svg");
    }

  }

//скрывающиеся элементы меню
function checkWidthMenu(){
    if (parent.height() > 61){
      menu.css('justify-content', 'center');
    } else {
      menu.css('justify-content', 'flex-start');
    }
  }

  function checkPosition(){
    // if ($('.has-megamenu').offset().top > 90){
    //   $('#list-work_desc').css('margin-top', '100px')
    // } else {
    //   $('#list-work_desc').css('margin-top', '58px')
    // }
  }

  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        promoBanner = $(".promo-banner"),
        btnSocial = $(".btn-footer"),
        divPromo = $(".promo-banner"),
        imgPromo = $(".promo-banner>a>img"),
        imgPromoBack = $(".promo-banner_background"),
        blockMenuWork = $("#list-work_mob");

    if(windowWidth >= 1200){ //добавить или удалить класс на разных разрешениях
      promoBanner.addClass("fixed sticky-top");
      for (var i = 0; i < divPromo.length; i++){
        var background = imgPromo.eq(i).attr('src')
         imgPromoBack.eq(i).css('backgroundImage', 'none');
      }
    }
    else{
      promoBanner.removeClass("fixed sticky-top");
    }

    if(windowWidth > 767 && windowWidth < 1200){ // добавление размытого фона для баннера на план
      for (var i = 0; i < divPromo.length; i++){
        var background = imgPromo.eq(i).attr('src')
         imgPromoBack.eq(i).css('backgroundImage', 'url(' + background + ')');
      }
    }

    if(windowWidth >= 768){ // перемещние блока с соц.сетями в навигатор
      if (!compileDescMenu) {
        $('<ul class="nav navbar list-work list-work-without-bg"></ul>').appendTo($("#list-work_mob"));
        $("#list-work_mob>.list-work>.without-bg").appendTo( $('.list-work-without-bg'));
        compileDescMenu = true;
      }

      $('#social-mob>div').appendTo( $('#social-desc') );
      $('#list-news_mob>ul').appendTo( $('#list-news_desc') );
      $('#list-monitoring_mob>ul').appendTo( $('#list-monitoring_desc') );
      $('#list-work_mob>ul').appendTo( $('#list-work_desc') );
      $('#more-social_drpdwn').css('display','block');
      $('#btn-zen').appendTo($('#btn-zen__item'));
      $('#btn-zen>span').css('display','inline');
      $('#btn-inst').appendTo($('#btn-inst__item'));
      $('#btn-inst>span').css('display','inline');
      $('#btn-youtube').appendTo($('#btn-youtube__item'));
      $('#btn-youtube>span').css('display','inline');
      $('#btn-rss').appendTo($('#btn-rss__item'));
      $('#btn-rss>span').css('display','inline');

    } else {
      $('#social-desc>div').appendTo( $('#social-mob') );
      $('#list-monitoring_desc>ul').appendTo( $('#list-monitoring_mob') );
      $('#list-work_desc>ul').appendTo( $('#list-work_mob') );
      $('#list-news_desc>ul').appendTo( $('#list-news_mob') );
      $('#more-social_drpdwn').css('display','none');
      $('#btn-zen').appendTo($('#btn-social-group'));
      $('#btn-zen>span').css('display','none');
      $('#btn-inst').appendTo($('#btn-social-group'));
      $('#btn-inst>span').css('display','none');
      $('#btn-youtube').appendTo($('#btn-social-group'));
      $('#btn-youtube>span').css('display','none');
      $('#btn-rss').appendTo($('#btn-social-group'));
      $('#btn-rss>span').css('display','none');
    }

  }

  checkWidthMenu() // меню плнашет и десктоп
  checkWidth(); // проверит при загрузке страницы
  checkPosition() // высота меню - двигать или нет попап
  applyTheme() // пррименить цвет

  $(window).on("resize", function (e) {
    checkWidth(); // проверит при изменении размера окна клиента
    checkWidthMenu() //меню плнашет и десктоп
    checkPosition()// высота меню - двигать или нет попап
  });
  $('#mobile-menu').on("click", function () {
    chooseBtnIcon()
  })
  $(".container-fluid").on("click", function () {
    $("#mobile-menu").attr("class", "icons icons--menu");
    $("#mobile-menu use").attr("xlink:href", "./images/sprite.svg#icon-menu");
  });
  btnSwitchTheme.on("click", function () {
    switchTheme()
  });
});
