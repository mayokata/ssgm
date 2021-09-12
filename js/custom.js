$("li a").on("click", function(e) {
    $("a").removeClass("on");
    $(this).addClass("on");
  });