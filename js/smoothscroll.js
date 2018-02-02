
var offset = 72;

jQuery.noConflict();
jQuery(function($) {
	
	// When to show the scroll link
	// higher number = scroll link appears further down the page	
	var upperLimit = 100;
		
	// Our scroll link element
	var scrollElem = $('a#scroll-to-top');
	
	// Scroll to top speed
	var scrollSpeed = 500;
	
	// Show and hide the scroll to top link based on scroll position	
	scrollElem.hide();
	$(window).scroll(function () { 			
		var scrollTop = $(document).scrollTop();		
		if ( scrollTop > upperLimit ) {
			$(scrollElem).stop().fadeTo(300, 1); // fade back in			
		}else{		
			$(scrollElem).stop().fadeTo(300, 0); // fade out
		}
	});

	// Scroll to top animation on click
	$(scrollElem).click(function(){ 
		$('html, body').animate({scrollTop:100}, scrollSpeed); return false; 
	});

}); 


/* Anchorlink smooth scroll */
jQuery.noConflict();
jQuery(function($) {
  $('a[href*=#]:not([href=#])').click(function() 
  {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) 
    {
      
      var target = $(this.hash),
      headerHeight = $(".primary-header").height() + 5; // Get fixed header height
            
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              
      if (target.length) 
      {
        $('html,body').animate({
          scrollTop: target.offset().top - offset
        }, 1100);
        return false;
      }
    }
  });
});
