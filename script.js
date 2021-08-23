



$(function() {
    $(".btn").click(function(){
        $(this).button('loading').delay(1000).queue(function() {
        // $(this).button('reset');
        // $(this).dequeue();
        });
    });
});


function myFunction() {
  document.getElementById("demo").innerHTML="Paragraph changed.";
}

// Contact form
$(function() {

	'use strict';
	// Form
	var contactForm = function() {

		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					name: "required",
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "Please enter your name",
					email: "Please enter a valid email address",
					message: "Please enter a message"
				},
				/* submit via ajax */
				submitHandler: function(form) {
					var $submit = $('.submitting'),
						waitText = 'Submitting...';

					$.ajax({
				      type: "POST",
				      url: "php/send-email.php",
				      data: $(form).serialize(),

				      beforeSend: function() {
				      	$submit.css('display', 'block').text(waitText);
				      },
				      success: function(msg) {
		               if (msg == 'OK') {
		               	$('#form-message-warning').hide();
				            setTimeout(function(){
		               		$('#contactForm').fadeOut();
		               	}, 1000);
				            setTimeout(function(){
				               $('#form-message-success').fadeIn();
		               	}, 1400);

			            } else {
			               $('#form-message-warning').html(msg);
				            $('#form-message-warning').fadeIn();
				            $submit.css('display', 'none');
			            }
				      },
				      error: function() {
				      	$('#form-message-warning').html("Something went wrong. Please try again.");
				         $('#form-message-warning').fadeIn();
				         $submit.css('display', 'none');
				      }
			      });
		  		}

			} );
		}
	};
	contactForm();
});

$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});

$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag2");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible2");
    } else {
      $(tag).removeClass("visible2");
    }
  }
});

$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag3");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible3");
    } else {
      $(tag).removeClass("visible3");
    }
  }
});
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag4");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible4");
    } else {
      $(tag).removeClass("visible4");
    }
  }
});
