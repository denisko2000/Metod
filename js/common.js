$(function() {

	$('.hamburger').on('click', function() {
		let data = $(this).data('parent');
		console.log(data);
      $('.burg_menu').filter(function(){return $(this).data("parent") == data}).toggleClass('menu_state_open');
      $(this).toggleClass('is-active');

    });

	$('.owl-carousel').owlCarousel({
	    margin:10,
	    loop:true,
	    autoWidth:true,
	    items:4
	})

	var height = parseInt($('.partners').css('height'))+parseInt($('.partners').css('margin-top'));
	var textHeight = parseInt($('.nine_section-content').css('height'));
	$('.text-partners').css('height', textHeight-height+'px');

	var height = parseInt($('.forth_section-content h2').css('height'))+parseInt($('.forth_section-content h2').css('margin-top'))+parseInt($('.forth_section-content small').css('height'));
	var textHeight = parseInt($('.forth_section-content').css('height'));
	$('form').css('height', textHeight-height+'px');

	$(".lang_menu").on('click', function() {
		$(".lang_submenu").toggleClass('open');
	});

	/*range styling*/

	
	var sliders = document.getElementsByClassName('range');


	[].slice.call(sliders).forEach(function (slider, index) {

	    noUiSlider.create(slider, {
	        range: {
	        min: 0,
	        max: 1000000
	    },
	    behaviour: 'tap-drag',
	    step: 100,
	    tooltips: true,
    	format: wNumb({
        	decimals: 0
    	}),
	    start: [0],
	    connect: [true, true]
	    });


	    var connect = slider.querySelectorAll('.noUi-connect');
		var classes = ['c-1-color', 'c-2-color'];

		for (let i = 0; i < connect.length; i++) {
		    connect[i].classList.add(classes[i]);
	}
	});
	
	

});


$(window).resize(function(){
	var content = $('.content');
	$.each(content,function(index){
		let header = $(this).siblings('.header').css('height');
		console.log(header)
		let footer = $(this).siblings('.footer').css('height');
		console.log(footer)
		let sum = parseFloat(header) + parseFloat(footer);
		console.log(sum)
		let winHeight = $(window).height();
		console.log(winHeight)
		let height = winHeight-sum + 'px';
		$(this).css('height', height);
		console.log(height)
	})
	
});