// Initiate tooltip and popover from bootstrap 4
// Don't forget to import this on app/javascript/packs/application.js
$(function() {
  $('[data-toggle="tooltip"]').tooltip();

  $("#slider").slideReveal({
	  trigger: $("#nav-icon2"),
	  push: false,
	  overlay: true,
	  position: "right",
	  autoEscape: true,
	  width: 350
	});
});

$(function() {
  $('[data-toggle="popover"]').popover();
});