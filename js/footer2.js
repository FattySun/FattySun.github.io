$(function () {
	$('.footer-bottom .copyright .pc.wx').on('click', function () {
		$('.footer-bottom .pcQRcode').addClass('on')
	})
	$('.footer-bottom .pcQRcode').on('click', function () {
		$(this).removeClass('on')
	})


	$('.footer-bottom .copyright .pc.dy').on('click', function () {
		$('.footer-bottom .pcDYQRcode').addClass('on')
	})
	$('.footer-bottom .pcDYQRcode').on('click', function () {
		$(this).removeClass('on')
	})
})
