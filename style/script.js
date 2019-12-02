$(document).ready(function () {

    $(".reg").on("click", ".tab", function () {
    //    Удаляем классы active
        $(".reg").find(".active").removeClass("active");


    //    Добавляем класс active
        $(this).addClass("active");
        $(".tab__form").eq($(this).index()).addClass("active");
    });
});
