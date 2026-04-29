// --- helper: apply theme styles ---
const applyTheme = function (dark) {
    const switch_mode = $(".switch_mode");
    const nav = $("header nav");
    const program = $("main .program");
    const player = $(".player")

    if (dark) {
        switch_mode.html('<i class="fas fa-lightbulb"></i>');
        switch_mode.css('justify-content', 'flex-end');
        switch_mode.css('background-color', '#222222');
        nav.css("background-color", "#1f1f1f");
        nav.css("color", "brown");
        $("body").css("background-color", '#1f1f1f');
        $("body").css("color", 'white');
        program.css("color", "white");
        program.css("background-color", "#333");
        player.css("background-color", "grey")
        $(".player_button").css("color", 'brown')
        
        $(".price").css("background-color", "#525252de")
        $(".price").css("color", "#eee")
        $(".station").css("color","white")
        $(".mobile-play").css("background-color","brown")
    } else {
        // in light mode
        switch_mode.html('<i class="far fa-lightbulb"></i>');
        switch_mode.css('justify-content', 'flex-start');
        switch_mode.css('background-color', '#aaa');
        nav.css("background-color", "yellow");
        nav.css("color", "blue");
        $("body").css("background-color", "white");
        $("body").css("color", "blue");
        program.css("color", "blue");
        program.css("background-color", "#eee")
        player.css("background-color", "blue")
        
        $(".price").css("background-color", "rgb(255, 255, 255)")
        $(".price").css("color", "black")
        $(".station").css("color","#333")
        $(".mobile-play").css("background-color","yellow")
        // Note: you didn't reset program background in light mode, so I don't either.
        // If you want it reset, add: program.css("background-color", "");
    }
};

// --- state & toggle ---
let isDark = localStorage.getItem('theme') === 'dark';   // read saved preference

// Apply the saved theme immediately on page load
applyTheme(isDark);

// Toggle function
const toggleDark = function () {
    isDark = !isDark;
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

// Event listener
$(".switch_mode").click(toggleDark);

// Mampiseho navmenu anaty ecran kely
let isSideNavHidden = true;
$('.btn-sidenav').click(function (p) {
    if(isSideNavHidden){
        $(".mobile-nav").removeClass("hide")
        $(".mobile-nav").addClass("show");
    }else{
        $(".mobile-nav").removeClass("show")
        $(".mobile-nav").addClass("hide")
    }
    isSideNavHidden = !isSideNavHidden;
})

$("main").click(function (params) {
    if(!isSideNavHidden){
        $(".mobile-nav").removeClass("show")
        $(".mobile-nav").addClass("hide")
        isSideNavHidden = !isSideNavHidden;
    }
})

//Mampandeha ny bouton player anaty ecran lehibe sy kely

const mobile_player = $(".mobile-play")
let played = false;
const stream = document.getElementById("stream");
const player_btn = $(".player_btn");
const toggle_player = function (params) {
    if(!played){
        player_btn.html('<i class="fas fa-pause-circle">');
        mobile_player.html('<i class="fas fa-pause">');
        stream.play();
    }else{
        player_btn.html('<i class="fas fa-play-circle">');
        mobile_player.html('<i class="fas fa-play">');
        stream.pause();
    }
    played = !played;
}

player_btn.click(function (params) {
    toggle_player()
})

mobile_player.click(function (params) {
    toggle_player();
})