$(document).ready(function () {
    $(".navbar a").click(function () {
        // $("html,body").scrollTop($(myElement).offset().top)
        $("html, body").animate($(myElement).offset().top,5000)
    })

})