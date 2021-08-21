$(document).ready(function() {
    $("#loading").fadeOut(1000, function() {
        $("body").css("overflow", "auto")
    });

    let colorBoxWidth = $("#colorBox").innerWidth();
    $("#sideBar").css("left", `-${colorBoxWidth}px`);


})


var typed = new Typed("#typed", {
    // put in the string whatever you want to be typed
    strings: ["Web Designer and Developer"],
    typeSpeed: 60,
    loop: true,
    loopCount: 1,
    showCursor: false,
    onComplete: (self) => {
        $("#home p , #icons").fadeIn(5000);
    },
});

// For scrolling smoothly through the navbar

$("a[href^='#']").click(() => {
    let aHref = $(this).attr("href");
    let sectionHeight = $(aHref).offset().top;
    $("html,body").animate({ scrollTop: sectionHeight - "100px" }, 1000);
});

// scroll function to change the navbar and appearing the up button the button and vise versa

let aboutOffset = $("#about").offset().top;
console.log(aboutOffset);
$(window).scroll(() => {
    let windowScroll = $(window).scrollTop();
    if (windowScroll > aboutOffset - 50) {
        $("#mainNav").css("backgroundColor", "rgba(0,0,0,0.85)");
        $("#btnUp").fadeIn(500);
    } else {
        $("#mainNav").css("backgroundColor", "transparent");
        $("#btnUp").fadeOut(500);
    }
});

$("#btnUp").click(() => {
    $("html,body").animate({ scrollTop: 0 }, 1000);
});

// sideBar
$("#sideBarToggle").click(function() {
    let colorBoxWidth = $("#colorBox").innerWidth();
    if ($("#sideBar").css("left") == "0px") {
        $("#sideBar").animate({ left: `-${colorBoxWidth}` }, 500);
    } else {
        $("#sideBar").animate({ left: `0px` }, 500);
    }
});

$(".color-item").eq(0).css("backgroundColor", "red");
$(".color-item").eq(1).css("backgroundColor", "purple");
$(".color-item").eq(2).css("backgroundColor", "black");
$(".color-item").eq(3).css("backgroundColor", "teal");
$(".color-item").eq(4).css("backgroundColor", "grey");

$(".color-item").click(function() {
    let color = $(this).css("backgroundColor");
    $(".change,p,h2,h5,label").css("color", color);
})

// for random color
// for (let i = 0; i < $(".color-item").length; i++) {
//     let red = Math.round(Math.random() * 255);
//     let blue = Math.round(Math.random() * 255);
//     let green = Math.round(Math.random() * 255);

//     $(".color-item").eq(i).css("backgroundColor", `rgb(${red},${green},${blue})`);
// }

// for portofolio filter
let allBtn = document.getElementById("allBtn");
let brandBtn = document.getElementById("brandBtn");
let designBtn = document.getElementById("designBtn");
let graphicBtn = document.getElementById("graphicBtn");

allBtn.addEventListener("click", function() {
    $("#all").show(500);
    $("#brand").hide(800);
    $("#design").hide(800);
    $("#graphic").hide(800);
    $("#allBtn").addClass("activeBtn");
    $("#brandBtn").removeClass("activeBtn");
    $("#designBtn").removeClass("activeBtn");
    $("#graphicBtn").removeClass("activeBtn");
});

brandBtn.addEventListener("click", function() {
    $("#brand").show(500);
    $("#all").hide(800);
    $("#design").hide(800);
    $("#graphic").hide(800);
    $("#allBtn").removeClass("activeBtn");
    $("#brandBtn").addClass("activeBtn");
    $("#designBtn").removeClass("activeBtn");
    $("#graphicBtn").removeClass("activeBtn");
});

designBtn.addEventListener("click", function() {
    $("#design").show(800);
    $("#brand").hide(500);
    $("#all").hide(800);
    $("#graphic").hide(800);
    $("#allBtn").removeClass("activeBtn");
    $("#brandBtn").removeClass("activeBtn");
    $("#designBtn").addClass("activeBtn");
    $("#graphicBtn").removeClass("activeBtn");
});

graphicBtn.addEventListener("click", function() {
    $("#graphic").show(800);
    $("#brand").hide(500);
    $("#all").hide(800);
    $("#design").hide(800);
    $("#allBtn").removeClass("activeBtn");
    $("#brandBtn").removeClass("activeBtn");
    $("#designBtn").removeClass("activeBtn");
    $("#graphicBtn").addClass("activeBtn");
});