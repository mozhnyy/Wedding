$(function () {
	if ($(".hamburger").length) {
		$(".hamburger").on("click", function (event) {
			event.preventDefault();
			console.log();
			$(this).toggleClass("is-active");
			$(this).parent().next().slideToggle();
		});
	}
});
