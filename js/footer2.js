$(function() {
	$('.footer-bottom .copyright .pc.wx').on('click',function () {
		$('.footer-bottom .pcQRcode').addClass('on')
	})
	$('.footer-bottom .pcQRcode').on('click',function() {
		$(this).removeClass('on')
	})
})