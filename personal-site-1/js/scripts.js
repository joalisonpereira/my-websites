$(document).ready(function(){$(".wp1").waypoint(function(){$(".wp1").addClass("animated fadeInLeft")},{offset:"75%"});$(".wp2").waypoint(function(){$(".wp2").addClass("animated fadeInUp")},{offset:"75%"});$(".wp3").waypoint(function(){$(".wp3").addClass("animated fadeInDown")},{offset:"55%"});$(".wp4").waypoint(function(){$(".wp4").addClass("animated fadeInDown")},{offset:"75%"});$(".wp5").waypoint(function(){$(".wp5").addClass("animated fadeInUp")},{offset:"75%"});$(".wp6").waypoint(function(){$(".wp6").addClass("animated fadeInDown")},
{offset:"75%"})});$(window).load(function(){$(".nav_slide_button").click(function(){$(".pull").slideToggle()})});$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var a=$(this.hash);a=a.length?a:$("[name="+this.hash.slice(1)+"]");if(a.length)return $("html,body").animate({scrollTop:a.offset().top},2E3),!1}})});document.querySelector("#nav-toggle").addEventListener("click",function(){this.classList.toggle("active")});
$(document).ready(function(){Modernizr.touch?($(".close-overlay").removeClass("hidden"),$(".img").click(function(a){$(this).hasClass("hover")||$(this).addClass("hover")}),$(".close-overlay").click(function(a){a.preventDefault();a.stopPropagation();$(this).closest(".img").hasClass("hover")&&$(this).closest(".img").removeClass("hover")})):$(".img").mouseenter(function(){$(this).addClass("hover")}).mouseleave(function(){$(this).removeClass("hover")})});
$(window).load(function(){$("#portfolioSlider").flexslider({animation:"slide",directionNav:!1,controlNav:!0,touch:!1,pauseOnHover:!0,start:function(){$.waypoints("refresh")}});$("#servicesSlider").flexslider({animation:"slide",directionNav:!1,controlNav:!0,touch:!0,pauseOnHover:!0,start:function(){$.waypoints("refresh")}});$("#teamSlider").flexslider({animation:"slide",directionNav:!1,controlNav:!0,touch:!0,pauseOnHover:!0,start:function(){$.waypoints("refresh")}})});