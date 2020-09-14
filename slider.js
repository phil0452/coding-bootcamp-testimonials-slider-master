$(document).ready(function(){	
	var sliders = ["#slider-1", "#slider-2"];
	var sliderToMove = sliders[0];
	var sliderToHide = sliders[1];
	//debugger;
	$('.next-button').click(function(){	
		//slide a div to the right off the screen	
		$(sliderToMove).animate({
			left: '+100%'
		}, "slow", function(){
			//once off the screen, make the div go away
			$(sliderToMove).css('display', 'none');
			//show the next div
			$(sliderToHide).css('display', 'flex');
			//position the next div to the left of the screen
			$(sliderToHide).css('left', '-100%');
			$(sliderToHide).prependTo('#main');
			
			//to keep the animation going, slide the next div
			//to the center of the screen. Has to be done
			//in the callback function, animation will otherwise
			//leave the queue
			$(sliderToHide).animate({
				left: '0%'
			}, "slow");
		
			//check which div is up next, for sliding
			if(sliderToMove == "#slider-1"){
				sliderToMove = sliders[1];
				sliderToHide = sliders[0];
			}
			else{
				sliderToMove = sliders[0];
				sliderToHide = sliders[1];
			}
		});	
	});	
	
	$('.prev-button').click(function(){
		//slide a div to the left off the screen			
		$(sliderToMove).animate({
			left: '-100%'
		}, "slow", function(){
			//once off the screen, make the div go away
			$(sliderToMove).css('display', 'none');
			//show the next div
			$(sliderToHide).css('display', 'flex');
			//position the next div to the left of the screen
			$(sliderToHide).css('left', '100%');
			$(sliderToHide).prependTo('#main');
						
			//to keep the animation going, slide the next div
			//to the center of the screen. Has to be done
			//in the callback function, animation will otherwise
			//leave the queue
			$(sliderToHide).animate({
				left: '0%'
			}, "slow");
		
			//check which div is up next, for sliding
			if(sliderToMove == "#slider-1"){
				sliderToMove = sliders[1];
				sliderToHide = sliders[0];
			}
			else{
				sliderToMove = sliders[0];
				sliderToHide = sliders[1];
			}
		});	
	});	
});