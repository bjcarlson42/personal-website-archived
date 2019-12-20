// window.onscroll = function () { myFunction() };

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

//remove 'Benjamin Carlson' in hamburger menu
$(function () {

    $(window).bind("resize", function () {
        console.log($(this).width())
        if ($(this).width() < 844) {
            $('#removeMe a').removeClass('notHidden').addClass('hidden')
        }
        else {
            $('#removeMe a').removeClass('hidden').addClass('notHidden')
        }
    })
})