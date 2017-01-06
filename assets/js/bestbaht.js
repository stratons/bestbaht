/* Applying the "open" class when you click the Menu button, which triggers the mobile menu to open/close; Toggle Menu/Close menu text. */
$(document).ready(function() {
  $('.mobile-button a').click(function(e) {
	$(this).parent().parent().toggleClass('open');
  $(this).html($(this).html() == 'Close Menu' ? 'Open Menu' : 'Close Menu');
    e.preventDefault();
  });
});

var $tableOffset = $("#fxtable").offset().top,
    $header = $("#fxtable > thead").clone(),
    $fixedHeader = $("#header-fixed").append($header);
$(window).bind("resize", function() {
  $fixedHeader.width($("table").width());
});
$(window).bind("scroll", function() {
    var offset = $(this).scrollTop();

    if (offset >= $tableOffset && $fixedHeader.is(":hidden")) {
        $fixedHeader.show().width($("table").width());
    }
    else if (offset < $tableOffset) {
        $fixedHeader.hide();
    }
});
