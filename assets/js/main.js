!(function($) {
  "use strict";

  $(window).on('load', function() {
    /*------------------
      Preloder
    --------------------*/
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("fast");
  
  });
  /*------------------
		Circle progress
	--------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cptitle = $(this).data("cptitle");
		var cpid 	= $(this).data("cpid");

		$(this).append('<div class="'+ cpid +'"></div><div class="progress-info"><h2>'+ cpvalue +'%</h2><p>'+ cptitle +'</p></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 211,
				thickness: 5,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 211,
				thickness: 5,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}
	});

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;
        var scrolled = 20;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()

          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled;
          }
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="bx bx-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }
  // Real view height for mobile devices
  if (window.matchMedia("(max-width: 767px)").matches) {
    $('#hero').css({
      height: $(window).height()
    });
  }

  // Intro carousel
  var heroCarousel = $("#heroCarousel");

  heroCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animated fadeInDown');
    $(this).find('p').addClass('animated fadeInUp');
    $(this).find('.btn-get-started').addClass('animated fadeInUp');
  });
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the venobox plugin
  $(window).on('load', function() {
    $('.venobox').venobox();
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

  });

  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back"
  });

})(jQuery);

Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key))
}

function printPDF(appointmentType, appointmentName){
  var pdf = new jsPDF();
  pdf.text(appointmentName.concat(", zakazivanje termina"), 10, 10);
  var elements = document.getElementById("form".concat(appointmentType)).elements;
  var ypos = 30;
  for(var i = 0 ; i < elements.length - 1 ; i++){
    var item = elements.item(i);
    if (item.getAttribute('placeholder')) {
      pdf.text(10, ypos, pdf.splitTextToSize(item.placeholder + ": " + item.value, 180));
      ypos += 10;
    }
  }
  pdf.save();
}

var scheduledTrainings = 
[
  {
    "id" : "collapseYogaHatha",
    "Start-time" : "19:00",
    "End-time" : "20:00"
  },
  {
    "id" : "collapseYogaJnana",
    "Start-time" : "18:00",
    "End-time" : "19:00"
  },
  {
    "id" : "collapseYogaIyengar",
    "Start-time" : "17:00",
    "End-time" : "18:00"
  },
  {
    "id" : "collapsePilatesClassical",
    "Start-time" : "20:00",
    "End-time" : "21:00"
  },
  {
    "id" : "collapsePilatesStott",
    "Start-time" : "19:00",
    "End-time" : "20:00"
  },
  {
    "id" : "collapsePilatesReformer",
    "Start-time" : "21:00",
    "End-time" : "22:00"
  },
  {
    "id" : "collapseCoreClassical",
    "Start-time" : "18:00",
    "End-time" : "19:00"
  },
  {
    "id" : "collapseCorePower",
    "Start-time" : "19:00",
    "End-time" : "20:00"
  },
  {
    "id" : "collapseCoreGlute",
    "Start-time" : "20:00",
    "End-time" : "21:00"
  },
  {
    "id" : "collapseCardioHit",
    "Start-time" : "21:00",
    "End-time" : "22:00"
  },
  {
    "id" : "collapseCardioSteadyState",
    "Start-time" : "19:00",
    "End-time" : "20:00"
  },
  {
    "id" : "collapseCardioSpinn",
    "Start-time" : "17:00",
    "End-time" : "18:00"
  }
]

var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var serbianMonths = ["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"]



function loadScheduledTrainings(id) {
  /*var myScheduledTrainigs = new Array();
  var numberOfScheduledTrainigs = 0;
  if ('localStorage' in window && window.localStorage !== null) {
    if (localStorage.getItem("numberOfScheduledTrainigs") == true) {
      numberOfScheduledTrainigs = parseInt(localStorage.getItem("numberOfScheduledTrainigs"));
      myScheduledTrainigs = localStorage.getObj("myScheduledTrainigs");
    }
  }*/
  var isEnglish = window.location.href.includes("/en/");
  var htmlCode;
  if (isEnglish)
    htmlCode = "<div class=\"table-responsive\"><table class=\"table table-bordred table-striped\"><thead><tr><th scope=\"col\">Date & time</th><th scope=\"col\">Free seats</th><th scope=\"col\">Reserve</th></tr></thead><tbody>";
  else
    htmlCode = "<div class=\"table-responsive\"><table class=\"table table-bordred table-striped\"><thead><tr><th scope=\"col\">Datum i vreme</th><th scope=\"col\">Slobodna mesta</th><th scope=\"col\">Rezerviši</th></tr></thead><tbody>";
  var date = new Date(); 
  for (var i = 0; i < 7; i++) {
    htmlCode += "<tr><td>";
    date.setDate(date.getDate() + 1);
    var month;
    if (isEnglish)
      month = months[date.getMonth()];
    else
      month = serbianMonths[date.getMonth()];
    var day = date.getDate();
    htmlCode+=day;
    if (isEnglish)
    {
      switch (day % 10) {
        case 1: 
          htmlCode+="st";
          break;
        case 2: 
          htmlCode+="nd";
          break;
        case 3: 
          htmlCode+="rd";
          break;
        default:
          htmlCode+="th";
          break;
      }
    }
    else
      htmlCode += ".";
    indId = 0;
    var freeSeats = i * 2;
    while (scheduledTrainings[indId].id !== id) indId += 1;
    var startTime = scheduledTrainings[indId]["Start-time"];
    var endTime = scheduledTrainings[indId]["End-time"];
    buttonId = "" + id + "-" + day + "-" + date.getMonth() + "-" + date.getFullYear();
    var isTrainigScheduled = false;
    if ('localStorage' in window && window.localStorage !== null) {
      isTrainigScheduled = localStorage.getItem(buttonId);
    }
    if (isTrainigScheduled) {
      //console.log("sadrzi"+i);
      if (isEnglish)
        htmlCode+=" "+month+"<br><hr>Start time: " + startTime + " <br><hr>End time: " + endTime + "</td><td id=\"" + buttonId + "-freeSeats\">" + (freeSeats - 1) + "</td><td><button id=\""+ buttonId +"\" type=\"button\" class=\"btn btn-primary\" onClick=\"reserveTraining(this.id)\" disabled>Reserve</button></td></tr>";
      else
        htmlCode+=" "+month+"<br><hr>Početno vreme: " + startTime + " <br><hr>Završno vreme: " + endTime + "</td><td id=\"" + buttonId + "-freeSeats\">" + (freeSeats - 1) + "</td><td><button id=\""+ buttonId +"\" type=\"button\" class=\"btn btn-primary\" onClick=\"reserveTraining(this.id)\" disabled>Rezerviši</button></td></tr>";
    }
    else {
      if (isEnglish)
        htmlCode+=" "+month+"<br><hr>Start time: " + startTime + " <br><hr>End time: " + endTime + "</td><td id=\"" + buttonId + "-freeSeats\">" + freeSeats + "</td><td><button id=\""+ buttonId +"\" type=\"button\" class=\"btn btn-primary\" onClick=\"reserveTraining(this.id)\"";
      else
        htmlCode+=" "+month+"<br><hr>Početno vreme: " + startTime + " <br><hr>Završno vreme: " + endTime + "</td><td id=\"" + buttonId + "-freeSeats\">" + freeSeats + "</td><td><button id=\""+ buttonId +"\" type=\"button\" class=\"btn btn-primary\" onClick=\"reserveTraining(this.id)\"";
      if (freeSeats == 0) htmlCode += " disabled";
      if (isEnglish)
        htmlCode += ">Reserve</button></td></tr>";
      else
        htmlCode += ">Rezerviši</button></td></tr>";
    }
    
  }  
  htmlCode+="</tbody></table></div>";
  document.getElementById(id).children[0].innerHTML = htmlCode;
}

function reserveTraining(id)
{
  /*console.log(id);
  var myScheduledTrainigs = new Array();
  var numberOfScheduledTrainigs = 0;
  if ('localStorage' in window && window.localStorage !== null) {
    if (localStorage.getItem("numberOfScheduledTrainigs") == true) {
      numberOfScheduledTrainigs = parseInt(localStorage.getItem("numberOfScheduledTrainigs"))
      myScheduledTrainigs = localStorage.getObj("myScheduledTrainigs");
    }
  }
  if (!myScheduledTrainigs.includes(id)) {
    myScheduledTrainigs.push(id);
    numberOfScheduledTrainigs += 1;
    localStorage.setItem("numberOfScheduledTrainigs", numberOfScheduledTrainigs);
    localStorage.setObj("myScheduledTrainigs", myScheduledTrainigs);
    document.getElementById(id).disabled = true;
  }*/
  if ('localStorage' in window && window.localStorage !== null) {
    localStorage.setItem(id, "1");
    document.getElementById(id).disabled = true;
    document.getElementById(id + "-freeSeats").innerHTML = parseInt(document.getElementById(id + "-freeSeats").innerHTML) - 1;
  }
}

function removeTrainingReservation(btn, id)
{
  console.log(id);
  /*var myScheduledTrainigs = new Array();
  var numberOfScheduledTrainigs = 0;
  if ('localStorage' in window && window.localStorage !== null) {
    if (localStorage.getItem("numberOfScheduledTrainigs") == true) {
      numberOfScheduledTrainigs = parseInt(localStorage.getItem("numberOfScheduledTrainigs"))
      myScheduledTrainigs = localStorage.getObj("myScheduledTrainigs");
    }
  }
  if (myScheduledTrainigs.includes(id)) {
    myScheduledTrainigs.splice(myScheduledTrainigs.indexOf(id), 1);
    numberOfScheduledTrainigs -= 1;
    localStorage.setItem("numberOfScheduledTrainigs", numberOfScheduledTrainigs);
    localStorage.setObj("myScheduledTrainigs", myScheduledTrainigs);
  }*/
  if ('localStorage' in window && window.localStorage !== null) {
    localStorage.removeItem(id);
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
}

function showMyScheduledTrainings () {
  var noScheduledTrainings = true;
  var isEnglish = window.location.href.includes("/en/");
  var htmlCode;
  if (isEnglish)
    htmlCode = "<div class=\"table-responsive\"><table class=\"table table-bordred table-striped\"><thead><tr><th scope=\"col\">Training info</th><th scope=\"col\">Remove reservation</th></tr></thead><tbody>";
  else
    htmlCode = "<div class=\"table-responsive\"><table class=\"table table-bordred table-striped\"><thead><tr><th scope=\"col\">Informacije o treningu</th><th scope=\"col\">Obriši rezervaciju</th></tr></thead><tbody>";
  for (var i = 0; i < scheduledTrainings.length; i++) {
    var date = new Date(); 
    date.setDate(date.getDate() - 1);
    for (var j = 0; j < 8; j++) {
      //htmlCode += "<tr><td>";
      date.setDate(date.getDate() + 1);
      //var month = months[date.getMonth()];
      var day = date.getDate();
      var month;
      if (isEnglish)
        month = months[date.getMonth()];
      else
        month = serbianMonths[date.getMonth()];
      var startTime = scheduledTrainings[i]["Start-time"];
      var endTime = scheduledTrainings[i]["End-time"];
      buttonId = "" + scheduledTrainings[i].id + "-" + day + "-" + date.getMonth() + "-" + date.getFullYear();
      var isTrainigScheduled = false;
      if ('localStorage' in window && window.localStorage !== null) {
        isTrainigScheduled = localStorage.getItem(buttonId);
      }
      if (isTrainigScheduled) {
        noScheduledTrainings = false;
        //console.log("sadrzi"+i);
        htmlCode += "<tr><td>";
        htmlCode += scheduledTrainings[i].id.match(/[A-Z][a-z]+/g).join(" ");
        if (isEnglish)
        {
          htmlCode += "<br><hr>Date: " + day;
          switch (day % 10) {
            case 1: 
              htmlCode+="st";
              break;
            case 2: 
              htmlCode+="nd";
              break;
            case 3: 
              htmlCode+="rd";
              break;
            default:
              htmlCode+="th";
              break;
          }
        }
        else
        {
          htmlCode += "<br><hr>Datum: " + day + ".";
        }
        if (isEnglish)
          htmlCode+=" "+month+"<br><hr>Start time: " + startTime + " <br><hr>End time: " + endTime + "</td><td><button type=\"button\" class=\"btn btn-primary\" onClick=\"removeTrainingReservation(this, '" + buttonId + "')\"";
        else
          htmlCode+=" "+month+"<br><hr>Početno vreme: " + startTime + " <br><hr>Završno vreme: " + endTime + "</td><td><button type=\"button\" class=\"btn btn-primary\" onClick=\"removeTrainingReservation(this, '" + buttonId + "')\"";
        if (j == 0 && parseInt(startTime.split(":")[0]) - date.getHours() == 1 && date.getMinutes() > 30) htmlCode += " disabled";
        if (isEnglish)
          htmlCode += ">Remove</button></td></tr>";
        else
          htmlCode += ">Obriši</button></td></tr>";
      }
    }
  }
  htmlCode+="</tbody></table></div>";
  if (noScheduledTrainings) {
    if (isEnglish)
      document.getElementById("accountScheduledTrainings").innerHTML = "<p style=\"margin-top: 2.5cm; margin-bottom: 2.5cm;\">There are no scheduled trainings.</p>";
    else
      document.getElementById("accountScheduledTrainings").innerHTML = "<p style=\"margin-top: 2.5cm; margin-bottom: 2.5cm;\">Nema zakazanih treninga.</p>";
    
  }
  else {
    document.getElementById("accountScheduledTrainings").innerHTML = htmlCode;
  }
}
