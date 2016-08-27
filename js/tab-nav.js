$(document).ready(function() {
  $('.tab-giatot').click(function(event) {
    event.preventDefault();
    $('.tab-content-giatot').hide();
    $($(this).data('id')).show();
  });
});
$(document).ready(function() {
  $('.tab-nam').click(function(event) {
    event.preventDefault();
    $('.tab-content-nam').hide();
    $($(this).data('id-nam')).show();
  });
});
$(document).ready(function() {
  $('.tab-nu').click(function(event) {
    event.preventDefault();
    $('.tab-content-nu').hide();
    $($(this).data('id-nu')).show();
  });
});