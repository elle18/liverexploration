jQuery(document).ready(function() {
    	
			//hover an area and a new image will be shown, 
			
			jQuery("#map-container AREA").mouseover(function(){
				var regionMap = '.'+$(this).attr('id')+'-map';
				jQuery(regionMap).css('display', 'inline');
			});
			
			jQuery("div.region").mouseout(function(){
				jQuery(this).css('display', 'none');
			});
			
			//if you click on the new image, there will fade in an infobox
			
		 	$("div.region").click(function(){
				var regionBox = '#'+$(this).attr('id')+'-box';
				 //alert(regionBox); 
				 $(regionBox).fadeIn(1000, function() {
				});
			});
			
			//if you click CLOSE, the informationbox will fade out
			
			$('span.close').click(function() {
				var regionBox = '#'+$(this).parent().attr('id');			
				$(regionBox).fadeOut(1000, function() {
				}); 
			}); 
			//toggle
			 $('div.slide').click(function() {
				if ($(this).children(":first").hasClass("clicked")){
					$(this).children(":first").removeClass("clicked");
				} else {($(this).children(":first").addClass("clicked"));
				}
				$(this).next().slideToggle('slow', function() {
				});
			});
			
			//hover in img --> shows all areas
			$('img.map').mouseover(function(){
				$('.border').fadeIn(300);
			});

			$('img.map').mouseout(function(){
				$('.border').fadeOut(50);
			});
			
			
		});