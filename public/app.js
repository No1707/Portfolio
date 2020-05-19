
$(document).ready(function(){

    $(".highlight").each(function(){
        let letters = $(this).html().split("")
        console.log(letters)
        $(this).html("")
        for(let i = 0; i<letters.length; i++){
            if(letters[i] === "<"){
                i += 3
                $(this).append(`<br>`)
            } else if(letters[i] === " "){
                $(this).append(` `)
            } else {
                $(this).append(`<span>${letters[i]}</span>`)
            }
            
        }
    })
    $(".home span").hover(function(){
        $(this).addClass("highlightLetters")
    })
    $(".home span").on("animationend",function(){
        $(this).removeClass("highlightLetters")
    })

})


/**
 * Scrolling
 */


$(window).scroll(function(){
    let homeTop = $(".home").offset().top
    let projTop = $(".projects").offset().top
    let aboutTop = $(".about").offset().top

    if(window.pageYOffset > 100){
        $(".navbar").css("height","6%")
        if(window.innerWidth > 768){
            $(".navbarContainer").css("width", "35vw")
        }
        if(window.innerWidth <= 768){
            $(".navbarContainer").css("width", "45vw")
        }
    }

    if(window.pageYOffset < 80){
        $(".navbar").css("height","10%")
        if(window.innerWidth > 768){
            $(".navbarContainer").css("width", "45vw")
        }
        if(window.innerWidth <= 768){
            $(".navbarContainer").css("width", "55vw")
        }
    }

    if(window.pageYOffset >= homeTop -5 && window.pageYOffset <= homeTop + 100){
        $(".ic-about, .ic-projects, .ic-contacts").removeClass("active")
        $(".ic-home").addClass("active")
    }
    if(window.pageYOffset >= projTop - 150 && window.pageYOffset <= projTop + 50){
        $(".ic-about, .ic-home, .ic-contacts").removeClass("active")
        $(".ic-projects").addClass("active")
    }
    if(window.pageYOffset >= aboutTop - 70 && window.pageYOffset <= aboutTop + 50){
        $(".ic-projects, .ic-home, .ic-contacts").removeClass("active")
        $(".ic-about").addClass("active")
    }
    if( (window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        $(".ic-projects, .ic-home, .ic-about").removeClass("active")
        $(".ic-contacts").addClass("active")
    }
})

/**
 * Button clicks
 */

    // Home button click

$(".ic-home").click(function(){
    $("html, body").animate({scrollTop: 0}, 1000)
})

    // Projects button click

$(".ic-projects").click(function(){
    $("html, body").animate({scrollTop: $(".projects").offset().top - 50}, 1000)
})

    // About button click

$(".ic-about").click(function(){
    $(".ic-home, .ic-projects, .ic-contacts").removeClass("active")
    $(".ic-about").addClass("active")
    $("html, body").animate({scrollTop: $(".about").offset().top - 50}, 1000)
})

    // Contacts button click

$(".ic-contacts").click(function(){
    $(".active").removeClass("active")
    $(".ic-contacts").addClass("active")
    $("html, body").animate({scrollTop: $(".contacts").offset().top - 50}, 1000)
})

    // MobileHome 

$(".mobileHome").click(function(){
    $("html, body").animate({scrollTop: 0}, 1000)
})

    // MobileProjects

$(".mobileProjects").click(function(){
    $("html, body").animate({scrollTop: $(".projects").offset().top - ( window.innerHeight / 4 )}, 1000)
})

    // MobileAbout

$(".mobileAbout").click(function(){
    $("html, body").animate({scrollTop: $(".about").offset().top}, 1000)
})

    // MobileContacts

$(".mobileContacts").click(function(){
    $("html, body").animate({scrollTop: $(".contacts").offset().top}, 1000)
})

    // FR | EN buttons
$(".ic-fr").click(function(){
    location.assign("fr.html")
})
$(".ic-en").click(function(){
    location.assign("index.html")
})

