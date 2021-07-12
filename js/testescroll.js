

<script type="text/javascript">
jQuery(function () {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 400) {
     $("#menu").addClass("menu-diferente");
    } else {
     $("#menu").removeClass("menu-diferente");
    }
  });
});
</script>