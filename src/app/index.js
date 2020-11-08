import '../style/app.scss';
// import '../public/sprite.svg';
// import symbol from '../public/sprite.svg';
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
$('.dropleft').on('click', 'button[data-toggle="dropdown"]', function (event) {
  event.preventDefault();
  event.stopPropagation();
  $("#more-social").toggleClass("show");
})


$('#mobile-menu').click(function() {
  if ($("#more-social").attr('class') == 'dropdown-menu show') {
    $("#more-social").attr("class", "dropdown-menu");
  }

  if ($("#mobile-menu").attr('class') == 'icons icons--menu') {
    $("#mobile-menu").attr("class", "icons icons--close");
    $("#mobile-menu use").attr("xlink:href", "./images/sprite.svg#icon-close");
  } else {
    $("#mobile-menu").attr("class", "icons icons--menu");
    $("#mobile-menu use").attr("xlink:href", "./images/sprite.svg#icon-menu");
  }
});


$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        promoBanner = $(".promo-banner");
    if(windowWidth >= 1200){ //добавить или удалить класс на разных разрешениях
      promoBanner.addClass("fixed sticky-top");
      // $('.carousel-donate').removeAttr("data-flickity")
    }
    else{
      promoBanner.removeClass("fixed sticky-top");
    }

    if(windowWidth >= 768){ // перемещние блока с соц.сетями в навигатор
      $('#social-mob>div').appendTo( $('#social-desc') );
      $('#more-social').addClass("dropdown-menu-right")
    } else {
      $('#social-desc>div').appendTo( $('#social-mob') );
    }

    if(windowWidth > 767 && windowWidth < 1200){ // перемещние блока с соц.сетями в навигатор
      var divPromo = $(".promo-banner")
      var imgPromo = $(".promo-banner>a>img")
      var imgPromoBack = $(".promo-banner_background")
      for (var i = 0; i < divPromo.length; i++){
        var background = imgPromo.eq(i).attr('src')
         imgPromoBack.eq(i).css('backgroundImage', 'url(' + background + ')');
      }
    }
  }


  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function(){
    checkWidth(); // проверит при изменении размера окна клиента
  });
});




//скрывающиеся элементы меню
$(document).ready(function () {
    var menu = $("#nav-bar-filter"),
        subMenu = $(".subfilter"),
        more = $("#more-nav-popup"),
        parent = $(".filter-wrapper"),
        windowWidth = $(window).width(),
        smw = more.outerWidth();
        // console.log("more",menu, subMenu,more,parent)
    menu.children("li").each(function () {
        var w = $(this).outerWidth();
        if (w > smw) smw = w + 20;
        return smw
    });
    more.css('width', smw);
    function contract() { //уменьшение ширины
        var w = 0,
            outerWidth = parent.width() - smw - 30;
        for (var i = 0; i < menu.children("li").size(); i++) {
            w += menu.children("li").eq(i).outerWidth();
            if (w > outerWidth) {
                menu.children("li").eq(i - 1).nextAll()
                    .detach()
                    .css('opacity', 0)
                    .prependTo(".subfilter")
                    .stop().animate({
                    'opacity': 1
                }, 300);
                break;
            }
        }
    }

    function expand() {
        var w = 0,
            outerWidth = parent.width() - smw - 50;
        menu.children("li").each(function () {
            w += $(this).outerWidth();
            return w;
        });

        for (var i = 0; i < subMenu.children("li").size(); i++) {
            w += subMenu.children("li").eq(i).outerWidth();
            if (w > outerWidth) {
                var a = 0;
                while (a <= i) {
                    subMenu.children("li").eq(a)
                        .css('opacity', 0)
                        .detach()
                        .appendTo("#nav-bar-filter")
                        .stop().animate({
                        'opacity': 1
                    }, 300);
                    a++;
                }
                break;
            }
        }
    }

    function renderMoreBtn() {
      var moreBtn = $(".btn-more-nav-popup");
      if (subMenu.children("li").size() == 0) {
        moreBtn.removeClass("d-md-block")
        $('.dropdown__more-nav-popup>.dropdown-menu').removeClass("show")
      } else {
        moreBtn.addClass("d-md-block")
      }
    }

    contract();
    renderMoreBtn();

    $(window).on("resize", function (e) {
        ($(window).width() > windowWidth) ? expand() : contract();
        windowWidth = $(window).width();
        renderMoreBtn()
    });

});
//конец скрывающихся элементов меню
