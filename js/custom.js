$(document).ready(function() {

	// active recently opened menu when refresh
	var $menu_id = window.location.hash.substring(1)
	if ($menu_id == "") {
		$menu_id = "menu_" + "home";
	}
	else {
		$menu_id = "menu_" + $menu_id;
	}
	$(".nav-link").each(function() {
		console.log($menu_id)
		$(this).removeClass("active");
		if ($(this).attr("target-menu") == $menu_id) {
			$(this).addClass("active");
		}
		
		$('.navbar-collapse').collapse('hide');

		$(".menu_template").each(function() {
			if ($(this).attr("id") == $menu_id) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});

	});
	
	
	$('.navbar-collapse').collapse('hide');

	$(".nav-link").click(function() {
		
		$(".nav-link").removeClass("active");
		$(this).addClass("active");

		$('.navbar-collapse').collapse('hide');

		menu_id = $(this).attr("target-menu");
		
		// 클릭한 메뉴 외 다른 모든 메뉴 숨기기
		$(".menu_template").each(function() {
			if ($(this).attr("id") == menu_id) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
		
		// 페이지 최상단으로 이동
		window.scrollTo(0, 0);
		
	});

	$(function() {
		$('[data-toggle="tooltip"]').tooltip()
	})

	// ********************
	// Slido Show: .dot 임시로 비활성화함.
	// ********************
	
	let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    $('.prev').click(function() {
        plusSlides(-1);
    });

    $('.next').click(function() {
        plusSlides(1);
    });

    // Thumbnail image controls
    $('.dot').click(function() {
        let index = $('.dot').index(this) + 1;
        currentSlide(index);
    });

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = $(".mySlides");
        let dots = $(".dot");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
		
        slides.each(function(index) {
            $(this).css("display", "none");
        });

        dots.each(function() {
            $(this).removeClass("active");
        });

        slides.eq(slideIndex - 1).css("display", "block"); // 슬라이드를 보이게 설정
        dots.eq(slideIndex - 1).addClass("active");
    }

	// 뉴스 더보기/숨기기
	$(function() {
		var $btn = $('#toggle-news-btn');
		var $items = $('#news .card-body');
		var new_limit = 10;
		var $extra = $items.slice(new_limit);

		// 처음에는 6번째 이후 항목 숨기기
		$extra.addClass('hidden');

		$btn.on('click', function() {
			if ($btn.text().trim() === 'Show More') {
			// Show more → 모두 보이기
			$extra.removeClass('hidden');
			$btn.text('Show Less');
			} else {
			// Show less → 다시 숨기기
			$extra.addClass('hidden');
			$btn.text('Show More');
			}
		});
	});
	
});
