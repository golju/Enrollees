function scrollGoTo(anchor) {
    $('html,body').animate({scrollTop: $(anchor).offset().top}, 'slow');
}


$(function () {

    $('.js-event-go').on('click', function (e) {
        e.preventDefault();

        history.pushState(null, document.title, $(this).attr('href'));

        loadPage($(this).attr('href'));
    });

    window.addEventListener('popstate', function (e) {
        var cLocation = history.location || document.location;
        var href = cLocation.toString().substring(cLocation.toString().search('#'));
        loadPage(href);
    });

    function loadPage(id) {
        $(".js-event-go").removeClass("active");
        $(".js-event-go[data-open-div='" + id.substring(1) + "']").addClass("active");


        $(".item_2").removeClass("open");
        $(id).addClass("open");

        scrollGoTo(id);
    }
});

$(".js-event-scroll-top").click(function () {
    scrollGoTo("body");
});

function scrollManager(obj) {
    var top = $(obj).scrollTop();

    if (top < 530) {
        $(".js-event-scroll-top").hide();
    } else {
        $(".js-event-scroll-top").show();
    }
}

$(function () {
    $(window).scroll(function () {
        scrollManager(this);
    });
    scrollManager($(window));
});