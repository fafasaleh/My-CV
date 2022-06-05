$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20 && this.scrollY < 690){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }

        if(this.scrollY > 660){
            $("nav").addClass("clear");
        }else{
            $("nav").removeClass("clear");
        }
        // remove navbar items glow
        if(this.scrollY < 690){
            $('.navbar .menu li a').addClass("nav-item");
        }else{
            $('.navbar .menu li a').removeClass("nav-item");
        }

    });


     // scroll up btn
     $(window).scroll(function(){
     if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
    }
    else{
        $('.scroll-up-btn').removeClass("show");
    }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});

// send email function 
function sendEmail(){
    Email.send({
        Host : "smtp.hotmail.com",
        Username : "se.fasaob@hotmail.com",
        Password : "Password",
        To : 'se.fasaob@Hotmail.com',
        From : document.getElementById("email").value,
        Subject : "New contant",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}



/*var btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
    e.preventDefault()
    var name = document.getElementById()
    console.log('hi');
    Email.send({
        Host : "smtp.gmail.com",
        Username : "xfafao18@gmail.com",
        Password : "Toshiba2",
        To : 'se.fasaob@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contant",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
})*/