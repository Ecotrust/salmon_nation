$(document).ready(function() {
    $('#fullpage').fullpage({
    	navigation: true,
    	sectionsColor : ['#ff4338','#ff4338','#ffffff'],
    	paddingTop: '.5em',
    	responsiveWidth: 768,
        responsiveHeight: 660
    });

    // arrow nav
    $('.next_section').on('click', function(e) {
    	e.preventDefault();
    	$.fn.fullpage.moveSectionDown();
    });

    // scroll to top on redd logo click
    $('#redd_wrap a').on('click', function(e) {
    	e.preventDefault();
    	$.fn.fullpage.moveTo('stageone');
    });
});
