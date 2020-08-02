
$(document).ready(function () {

    /* letters animation */
    $(".highlight").each(function () {
        let letters = $(this).html().split("")
        $(this).html("")
        let html = "<span>"
        for (let i = 0; i < letters.length; i++) {
            if (letters[i] === " ") {
                if (letters[i + 1] === "<") {
                    i += 4
                    html += "</span> <br> <span>"
                } else {
                    html += "</span> <span>"
                }
            } else {
                html += "<span>" + letters[i] + "</span>"
            }
        }
        $(this).append(html)
    })
    $(".home span span").hover(function () {
        $(this).addClass("highlightLetters")
    })
    $(".home span span").on("animationend", function () {
        $(this).removeClass("highlightLetters")
    })

    let boxes = $(".box")
    boxes.on("mouseenter", function () {
        var el = $(this).children(".contentBox").children("video").get(0)
        el.play()
    }).on("mouseleave", function () {
        var el = $(this).children(".contentBox").children("video").get(0)
        el.pause()
    })

    /**
     * Lazy load
     */

    // const lazyLoadElements = document.querySelectorAll(".lazy-load")

    // for (const element of lazyLoadElements) {

    //     if (element.complete) {

    //         window.setTimeout(() => {
    //             element.classList.add("loaded")
    //             element.classList.remove("lazy-load")
    //         }, 1000)

    //     }

    //     element.onload = () => {
    //         element.classList.add("loaded")
    //         element.classList.remove("lazy-load")
    //     }
    // }

})

/**
 * Firebase
 */
var firebaseConfig = {
    apiKey: "AIzaSyDybdI24asuVHpW3ZAUsVJpWW133jEBqVg",
    authDomain: "portfolio-a6885.firebaseapp.com",
    databaseURL: "https://portfolio-a6885.firebaseio.com",
    projectId: "portfolio-a6885",
    storageBucket: "portfolio-a6885.appspot.com",
    messagingSenderId: "619769391706",
    appId: "1:619769391706:web:75b55fd1e53200c0fd4663"
};
firebase.initializeApp(firebaseConfig);

/**
 * Resize
 */

$(window).on("resize", function () {
    let ifExists = $(".fakeBox").css("display")
    if ($(window).width() <= "768" && ifExists == "block") {
        $(".fakeBox").css("display", "none")
    }
    if ($(window).width() > "768" && ifExists == "none") {
        $(".fakeBox").css("display", "block")
    }
})


/**
 * Scrolling
 */


$(window).scroll(function () {
    let homeTop = $(".home").offset().top
    let projTop = $(".projects").offset().top
    let aboutTop = $(".about").offset().top

    // navbar height
    if (window.pageYOffset > 100) {
        $(".navbar").css("height", "6%")
        if (window.innerWidth > 768) {
            $(".navbarContainer").css("width", "35vw")
        }
        if (window.innerWidth <= 768) {
            $(".navbarContainer").css("width", "45vw")
        }
    }

    if (window.pageYOffset < 80) {
        $(".navbar").css("height", "10%")
        if (window.innerWidth > 768) {
            $(".navbarContainer").css("width", "45vw")
        }
        if (window.innerWidth <= 768) {
            $(".navbarContainer").css("width", "55vw")
        }
    }

    // navbar selection on scrolling
    if (window.pageYOffset >= homeTop - 5 && window.pageYOffset <= homeTop + 100) {
        $(".ic-about, .ic-projects, .ic-contacts").removeClass("active")
        $(".ic-home").addClass("active")
    }
    if (window.pageYOffset >= projTop - 150 && window.pageYOffset <= projTop + 50) {
        $(".ic-about, .ic-home, .ic-contacts").removeClass("active")
        $(".ic-projects").addClass("active")
    }
    if (window.pageYOffset >= aboutTop - 70 && window.pageYOffset <= aboutTop + 50) {
        $(".ic-projects, .ic-home, .ic-contacts").removeClass("active")
        $(".ic-about").addClass("active")
    }
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        $(".ic-projects, .ic-home, .ic-about").removeClass("active")
        $(".ic-contacts").addClass("active")
    }
})

/**
 * Button clicks
 */

// Home button click

$(".ic-home").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000)
})

// Projects button click

$(".ic-projects").click(function () {
    $("html, body").animate({ scrollTop: $(".projects").offset().top - 50 }, 1000)
})

// About button click

$(".ic-about").click(function () {
    $(".ic-home, .ic-projects, .ic-contacts").removeClass("active")
    $(".ic-about").addClass("active")
    $("html, body").animate({ scrollTop: $(".about").offset().top - 50 }, 1000)
})

// Contacts button click

$(".ic-contacts").click(function () {
    $(".active").removeClass("active")
    $(".ic-contacts").addClass("active")
    $("html, body").animate({ scrollTop: $(".contacts").offset().top - 50 }, 1000)
})

// MobileHome 

$(".mobileHome").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000)
})

// MobileProjects

$(".mobileProjects").click(function () {
    $("html, body").animate({ scrollTop: $(".projects").offset().top - (window.innerHeight / 4) }, 1000)
})

// MobileAbout

$(".mobileAbout").click(function () {
    $("html, body").animate({ scrollTop: $(".about").offset().top }, 1000)
})

// MobileContacts

$(".mobileContacts").click(function () {
    $("html, body").animate({ scrollTop: $(".contacts").offset().top }, 1000)
})

// FR | EN buttons
$(".ic-fr").click(function () {
    location.assign("fr.html")
})
$(".ic-en").click(function () {
    location.assign("index.html")
})
