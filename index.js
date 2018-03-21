$('.total').click(function(){
   var final = 0;
   $('.addcheckbox:checked').each(function(){
    var values = $(this).val();
    final = final + parseInt(values);
  });
   alert(final);
 });

 function toggle(source) {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] != source)
      checkboxes[i].checked = source.checked;
  }
}