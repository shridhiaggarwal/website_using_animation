// show and hide menu 

$(document).ready(function(){
	'use strict;'
	$(window).scroll(function(){

		'use strict';
		var scroll = $(window).scrollTop();
		if(scroll<80){

			$('.navbar').css({
				'margin-top': '-100px',
				'opacity': '0'
			});
			$('.navbar-default').css({
				'background-color':'rgba(59,59,59,0)',
			});
		} //end if

		else{
			$('.navbar').css({
				'margin-top': '0px',
				'opacity': '1'
			});
			$('.navbar-default').css({
				'background-color':'rgba(59,59,59,0.7)',
				'border-color':'#444'
			});
			$('.navbar-brand').css({
				'height':'35px',
				'padding-top':'0px'
			});
			$('.navbar-nav > li > a').css({
				'padding-top':'15px'
			});

		}// end else

	}); // end scroll
}); // end ready




// add smooth scrolling function 
$(document).ready(function(){

  $('a').on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        	scrollTop: $(hash).offset().top
      		}, 800, function(){
        	window.location.hash = hash;
     	 });

    } // End if

  });

});

//active menu item on click
$(document).ready(function(){
	'use-strict',
	$('.navbar-nav li a').click(function(){

		'use-strict',

		$('.navbar-nav li a').parent().removeClass("active_class");

		$(this).parent().addClass("active_class");

	});
});

// highlight it on scroll
$(document).ready(function(){
	'use-strict';
	$(window).scroll(function(){
		'use-strict';
		$("section").each(function(){
			'use-strict';
			var b = $(this).attr("id"); // about, screen, home , etc
			var height = $(this).outerHeight();
			var top = $(this).offset().top -50;

			if($(window).scrollTop()>top && $(window).scrollTop() < top + height)
			{
				$(".navbar li a[href='"+ b+"']").parent().addClass("active_class");
			}
			else
			{
				$(".navbar li a[href='"+ b+"']").parent().removeClass("active_class");
			}
		});

	});
});




// screen slider using bxslider  -  present in html file directly

// add counter up 
$(document).ready(function(){
	$(".counter-num").counterUp({

        delay:10,
        time:2000
    });
});


// animate css
$(document).ready(function(){
	'use-strict';
	new WOW().init();

});





/* to scroll and highlight both
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.navbar-nav a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navbar-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-nav a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
*/

/*
$(document).ready(function(){
      $('navbar-nav li a').on('click', function(event) {
          $(this).parent().find('a').removeClass('active_class');
          $(this).addClass('active_class');
      });

      $(window).on('scroll', function() {
          $('.target').each(function() {
              if($(window).scrollTop() >= $(this).position().top) {
                  var id = $(this).attr('id');
                  $('navbar-nav li a').removeClass('active_class');
                  $('navbar-nav li a[href=#'+ id +']').addClass('active_class');
              }
          });
      });
    });

*/

// add smooth scrolling function 
/*
$(document).ready(function(){
	'use strict',

	$('.navbar-item').click(function(){
		if((location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname))
		{
			var target = $(this.hash);
			target = target.length? target: $('[name='+this.hash.slice(1)+']');
			if(target.length)
			{
				$('html,body').animation({
					scrollTop:target.offset().top
				},1000);
				return false;
			}
		}
	});
});
*/
