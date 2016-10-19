$(document).ready(function() {
  $(".orderForm .col-md-12 form").submit(function(event) {
    $(".name").text($("#name").val());
    $(".address").text($("#address").val());
    $(".cpu").text($("input:radio[name=cpu]:checked").val());
    $(".gpu").text($("input:radio[name=gpu]:checked").val());

    $(".receipt").slideDown();
    $(".orderForm").slideUp();

    event.preventDefault();
  });

  $("#new").click(function() {
    $(".receipt").slideUp();
    $(".orderForm").slideDown();
  })
});
