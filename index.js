$(document).ready(function()
{
   $('#wb_Heading1').addClass('visibility-hidden');
   $('#wb_MaterialIcon1').addClass('visibility-hidden');
   $('#wb_MaterialIcon2').addClass('visibility-hidden');
   $('#wb_ServicesText1').addClass('visibility-hidden');
   $('#wb_ServicesText2').addClass('visibility-hidden');
   $('#wb_MaterialIcon3').addClass('visibility-hidden');
   $('#wb_MaterialIcon4').addClass('visibility-hidden');
   $('#wb_ServicesText3').addClass('visibility-hidden');
   $('#wb_ServicesText4').addClass('visibility-hidden');
   $('#wb_FontAwesomeIcon3').addClass('visibility-hidden');
   $('#wb_FontAwesomeIcon10').addClass('visibility-hidden');
   $('#wb_FontAwesomeIcon11').addClass('visibility-hidden');
   $('#wb_MaterialIcon5').addClass('visibility-hidden');
   $('#wb_MaterialIcon6').addClass('visibility-hidden');
   $('#wb_ServicesText5').addClass('visibility-hidden');
   $('#wb_ServicesText6').addClass('visibility-hidden');
   $('#wb_Heading8').addClass('visibility-hidden');
   $('#wb_Heading13').addClass('visibility-hidden');
   $('#wb_Heading4').addClass('visibility-hidden');
   $('#wb_MaterialIcon2').addClass('visibility-hidden');
   $('#wb_MaterialIcon2').addClass('visibility-hidden');
   $('#wb_MaterialIcon2').addClass('visibility-hidden');
   $("a[href*='#home']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#home').offset().top }, 600, 'easeOutQuad');
   });
   function Heading1Scroll()
   {
      var $obj = $("#wb_Heading1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Heading1', 'vanish-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Heading1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading1').inViewPort(true))
   {
      $('#wb_Heading1').addClass("in-viewport");
   }
   Heading1Scroll();
   $(window).scroll(function(event)
   {
      Heading1Scroll();
   });
   $("a[href*='#services']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top-100 }, 600, 'easeOutQuad');
   });
   function MaterialIcon1Scroll()
   {
      var $obj = $("#wb_MaterialIcon1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon1', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon1').inViewPort(true))
   {
      $('#wb_MaterialIcon1').addClass("in-viewport");
   }
   MaterialIcon1Scroll();
   $(window).scroll(function(event)
   {
      MaterialIcon1Scroll();
   });
   function MaterialIcon2Scroll()
   {
      var $obj = $("#wb_MaterialIcon2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon2', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon2').inViewPort(true))
   {
      $('#wb_MaterialIcon2').addClass("in-viewport");
   }
   MaterialIcon2Scroll();
   $(window).scroll(function(event)
   {
      MaterialIcon2Scroll();
   });
   function ServicesText1Scroll()
   {
      var $obj = $("#wb_ServicesText1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText1', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_ServicesText1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_ServicesText1').inViewPort(true))
   {
      $('#wb_ServicesText1').addClass("in-viewport");
   }
   ServicesText1Scroll();
   $(window).scroll(function(event)
   {
      ServicesText1Scroll();
   });
   function ServicesText2Scroll()
   {
      var $obj = $("#wb_ServicesText2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText2', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_ServicesText2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_ServicesText2').inViewPort(true))
   {
      $('#wb_ServicesText2').addClass("in-viewport");
   }
   ServicesText2Scroll();
   $(window).scroll(function(event)
   {
      ServicesText2Scroll();
   });
   function MaterialIcon3Scroll()
   {
      var $obj = $("#wb_MaterialIcon3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon3', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon3', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon3').inViewPort(true))
   {
      $('#wb_MaterialIcon3').addClass("in-viewport");
   }
   MaterialIcon3Scroll();
   $(window).scroll(function(event)
   {
      MaterialIcon3Scroll();
   });
   function MaterialIcon4Scroll()
   {
      var $obj = $("#wb_MaterialIcon4");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon4', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon4', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon4').inViewPort(true))
   {
      $('#wb_MaterialIcon4').addClass("in-viewport");
   }
   MaterialIcon4Scroll();
   $(window).scroll(function(event)
   {
      MaterialIcon4Scroll();
   });
   function ServicesText3Scroll()
   {
      var $obj = $("#wb_ServicesText3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText3', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_ServicesText3', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_ServicesText3').inViewPort(true))
   {
      $('#wb_ServicesText3').addClass("in-viewport");
   }
   ServicesText3Scroll();
   $(window).scroll(function(event)
   {
      ServicesText3Scroll();
   });
   function ServicesText4Scroll()
   {
      var $obj = $("#wb_ServicesText4");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText4', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_ServicesText4', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_ServicesText4').inViewPort(true))
   {
      $('#wb_ServicesText4').addClass("in-viewport");
   }
   ServicesText4Scroll();
   $(window).scroll(function(event)
   {
      ServicesText4Scroll();
   });
   $("a[href*='#reviews']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_reviews').offset().top-100 }, 600, 'easeOutQuad');
   });
   var Carousel1Opts =
   {
      delay: 3000,
      duration: 500,
      easing: 'linear',
      mode: 'forward',
      direction: '',
      scalemode: 1,
      pagination: true,
      pagination_img_default: 'images/page_default.png',
      pagination_img_active: 'images/page_active.png',
      start: 0
   };
   $("#Carousel1").on('beforeActivate', function(event, index)
   {
      switch(index)
      {
         case 0:
            AnimateCss('wb_Title1', 'transform-scale-in', 400, 500);
            AnimateCss('wb_Review1', 'transform-lightspeed-in', 800, 500);
            AnimateCss('wb_User1', 'animate-rotate-in-left', 800, 1000);
            break;
         case 1:
            AnimateCss('wb_Title2', 'transform-scale-in', 500, 500);
            AnimateCss('wb_Review2', 'transform-lightspeed-in', 800, 500);
            AnimateCss('wb_User2', 'animate-rotate-in-left', 800, 1000);
            break;
         case 2:
            AnimateCss('wb_Title3', 'transform-scale-in', 500, 500);
            AnimateCss('wb_Review3', 'transform-lightspeed-in', 800, 500);
            AnimateCss('wb_User3', 'animate-rotate-in-left', 800, 1000);
            break;
      }
   });
   $("#Carousel1").carousel(Carousel1Opts);
   $("#Carousel1_back a").click(function()
   {
      $('#Carousel1').carousel('prev');
   });
   $("#Carousel1_next a").click(function()
   {
      $('#Carousel1').carousel('next');
   });
   $("a[href*='#support']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_support').offset().top-100 }, 600, 'easeOutQuad');
   });
   function FontAwesomeIcon3Scroll()
   {
      var $obj = $("#wb_FontAwesomeIcon3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_FontAwesomeIcon3', 'transform-lightspeed-in', 100, 1000);
      }
   }
   FontAwesomeIcon3Scroll();
   $(window).scroll(function(event)
   {
      FontAwesomeIcon3Scroll();
   });
   function FontAwesomeIcon10Scroll()
   {
      var $obj = $("#wb_FontAwesomeIcon10");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_FontAwesomeIcon10', 'transform-lightspeed-in', 300, 1000);
      }
   }
   FontAwesomeIcon10Scroll();
   $(window).scroll(function(event)
   {
      FontAwesomeIcon10Scroll();
   });
   function FontAwesomeIcon11Scroll()
   {
      var $obj = $("#wb_FontAwesomeIcon11");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_FontAwesomeIcon11', 'transform-lightspeed-in', 400, 1000);
      }
   }
   FontAwesomeIcon11Scroll();
   $(window).scroll(function(event)
   {
      FontAwesomeIcon11Scroll();
   });
   var NewsFeedTicker1_Data = new Array();
   NewsFeedTicker1_Data[0] = ["http://", "Selamat datang orang asing!", "", ""];
   NewsFeedTicker1_Data[1] = ["http://", "Silahkan dilihat-lihat apa yang saya punya", "", ""];
   NewsFeedTicker1_Data[2] = ["http://", "Mungkin ada beberapa dari yang Saya punya berguna untuk Anda", "", ""];
   $("#NewsFeedTicker1").newsviewer({ mode: 'rotate', pause: 2000, pause: 2000, animation: 4, animationDuration: 500, sortOrder: 0, dataSource: 'local', param: NewsFeedTicker1_Data, target: '_self', includeDate: false, maxItems: 10});
   function MaterialIcon5Scroll()
   {
      var $obj = $("#wb_MaterialIcon5");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon5', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon5', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon5').inViewPort(true))
   {
      $('#wb_MaterialIcon5').addClass("in-viewport");
   }
   MaterialIcon5Scroll();
   $(window).scroll(function(event)
   {
      MaterialIcon5Scroll();
   });
   function MaterialIcon6Scroll()
   {
      var $obj = $("#wb_MaterialIcon6");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon6', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon6', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon6').inViewPort(true))
   {
      $('#wb_MaterialIcon6').addClass("in-viewport");
   }
   MaterialIcon6Scroll();
   $(window).scroll(function(event)
   {
      MaterialIcon6Scroll();
   });
   function ServicesText5Scroll()
   {
      var $obj = $("#wb_ServicesText5");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText5', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_ServicesText5', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_ServicesText5').inViewPort(true))
   {
      $('#wb_ServicesText5').addClass("in-viewport");
   }
   ServicesText5Scroll();
   $(window).scroll(function(event)
   {
      ServicesText5Scroll();
   });
   function ServicesText6Scroll()
   {
      var $obj = $("#wb_ServicesText6");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText6', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_ServicesText6', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_ServicesText6').inViewPort(true))
   {
      $('#wb_ServicesText6').addClass("in-viewport");
   }
   ServicesText6Scroll();
   $(window).scroll(function(event)
   {
      ServicesText6Scroll();
   });
   function Heading8Scroll()
   {
      var $obj = $("#wb_Heading8");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Heading8', 'transform-swing', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Heading8', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading8').inViewPort(true))
   {
      $('#wb_Heading8').addClass("in-viewport");
   }
   Heading8Scroll();
   $(window).scroll(function(event)
   {
      Heading8Scroll();
   });
   function Heading13Scroll()
   {
      var $obj = $("#wb_Heading13");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Heading13', 'transform-swing', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Heading13', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading13').inViewPort(true))
   {
      $('#wb_Heading13').addClass("in-viewport");
   }
   Heading13Scroll();
   $(window).scroll(function(event)
   {
      Heading13Scroll();
   });
   function Heading4Scroll()
   {
      var $obj = $("#wb_Heading4");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Heading4', 'transform-swing', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Heading4', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading4').inViewPort(true))
   {
      $('#wb_Heading4').addClass("in-viewport");
   }
   Heading4Scroll();
   $(window).scroll(function(event)
   {
      Heading4Scroll();
   });
   function MaterialIcon15Scroll()
   {
      var $obj = $("#wb_MaterialIcon15");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon2', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon15').inViewPort(true))
   {
      $('#wb_MaterialIcon15').addClass("in-viewport");
   }
   MaterialIcon15Scroll();
   $(window).scroll(function(event)
   {
      MaterialIcon15Scroll();
   });
   function MaterialIcon16Scroll()
   {
      var $obj = $("#wb_MaterialIcon16");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon2', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon16').inViewPort(true))
   {
      $('#wb_MaterialIcon16').addClass("in-viewport");
   }
   MaterialIcon16Scroll();
   $(window).scroll(function(event)
   {
      MaterialIcon16Scroll();
   });
   function MaterialIcon17Scroll()
   {
      var $obj = $("#wb_MaterialIcon17");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon2', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon17').inViewPort(true))
   {
      $('#wb_MaterialIcon17').addClass("in-viewport");
   }
   MaterialIcon17Scroll();
   $(window).scroll(function(event)
   {
      MaterialIcon17Scroll();
   });
});
$(document).ready(function()
{
   // move arrow outside the layer container
   $('#wb_down-arrow').appendTo('#home');
});
