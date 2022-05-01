



$(document).ready(function () {
   
   
    $('.sduserproc').hide();
    $('.sduserproc').hide();
	$('#loginFrm').hide();
    $('#resetPassSep2').hide();
    $('#resetPassSep3').hide();
    $('#resetPassSep4').hide();
    $('#resetpassFrm').hide();
    $('#registerFrm').hide();
    $('#activeFrm').hide();
    $('#loginactiveFrm').hide();


    
    








    $(window).on('scroll', function () { 
        if($(window).scrollTop() >= "30")
        { 
            $(".pageNav").addClass("pageNav-scroll"); 
            $(".fake").addClass("fake-scroll"); 
        } 
        else
        { 
           $(".pageNav").removeClass("pageNav-scroll");
           $(".fake").removeClass("fake-scroll"); 
        } 
    });
});

$(function(){
    let openMenu = $('#open-menu-btn');
    let closeMenu = $('#close-menu-btn');
    let responsiveMenu = $('#responsive-menu');
    
    $(openMenu).click(function (e) { 
        
        $(responsiveMenu).addClass('active');
        e.preventDefault();
        
    });
    $(closeMenu).click(function (e) { 
        
        $(responsiveMenu).removeClass('active');
        e.preventDefault();
        
    });
    $('.backproc').click(function (e) { 
        $('#loginFrm').hide(500);
        $('#resetPassSep2').hide(500);
        $('#resetPassSep3').hide(500);
        $('#resetPassSep4').hide(500);
        $('#resetpassFrm').hide(500);
        $('#registerFrm').hide(500);
        $('#activeFrm').hide(500);
        $('#loginactiveFrm').hide(500);
        $('.sduserproc').hide(100);
        $('.pgheader').show(500); 
        $('.pgcontent').show(500)
        $('.pgsubheader').show(500);
        e.preventDefault();
    });
     // Kullanıcı işlem geçişleri
     $(".navSign").click(function(e){
        e.preventDefault();
        $('.pgsubheader').hide(500);
        $('.pgheader').hide();
        $('.pgcontent').hide();
        $('#resetPassSep3').hide();
        $('.sduserproc').show();
        $('#registerFrm').hide();
        $('#loginFrm').show(500);
        $('#resetPassSep2').hide();
        $('#resetPassSep3').hide();
        $('#resetPassSep4').hide();
        $('#resetpassFrm').hide();
        $('#activeFrm').hide();
        $('#loginactiveFrm').hide();
        $('.aramaSonucbox').hide();
        $(responsiveMenu).removeClass('active');
    });
    
    // Main gizle Register Getir
    $('#kayitbtn').click(function(e)
    {
        e.preventDefault();
        $('#loginFrm').hide(500);
        $('.aramaSonucbox').hide();
        $('#registerFrm').show(500);
        
    });
    //login gizle Register Getir
    $('#sifrereset').click(function (e) { e.preventDefault();$('#loginFrm').hide(500);$('#resetpassFrm').show(500);}); //Login Gizle Şifre Sıfırlama Getir
    $('#girisbox').click(function (e) { e.preventDefault();$('#registerFrm').hide(500);$('#loginFrm').show(500);}); //Register Gizle Login Getir
    $('#girisboxx').click(function (e) { e.preventDefault();$('#resetpassFrm').hide(500);$('#loginFrm').show(500);}); // Şifre Sıfırlama Gizle Login Getir
    $('#girisboxxx').click(function (e) { e.preventDefault();$('#resetpassFrm').hide(500);$('#activeFrm').hide(500);$('#loginFrm').show(500);}); //Şifre Sıfırlama Gizle Login getir 2
    
     // Kullanıcı Giriş BLL
     $('#loginFrm').submit(function (e) { 
        e.preventDefault();
        var girisdata = {
            usnm: $('#username').val(),
            usps: $('#userpass').val()
        };
        if(girisdata['usnm'] == ""){
            $('#username').focus();
            $('#lgnsnc').html('<p class="alert alert-info">E-posta adresinizi giriniz</p>');
        }else if(girisdata['usps'] == ""){
            $('#userpass').focus();
            $('#lgnsnc').html('<p class="alert alert-info">Şifrenizi giriniz</p>');
        }
    });
    $('#registerFrm').submit(function (e) { 
        var userinfo={
            ad:$('#userad').val(),
            soyad:$('#usersoyad').val(),
            mail:$('#usermail').val(),
            telefon:$('#usertel').val(),
            dogumtarihi:$('#userdogtarihi').val(),
            kullaniciadi:$('#usernickname').val(),
            sifre1:$('#userpass1').val(),
            sifre2:$('#userpass2').val(),
            cinsiyet:$('#usercinsiyet').val(),
            edulevel:$('#useredulevel').val(),
            schoolname:$('#userschoolname').val(),
            eduinfo:$('#usereduinfo').val(),
            il:$('#useril').val(),
            ilce:$('#userilce').val(),
            acikadres:$('#useracikadres').val()
        };
            if(userinfo['ad']==""){$('#kayitsnc').html('<div class="alert alert-info pb-1"> Adınızı giriniz </div>');}
            else if(userinfo['soyad']==""){$('#kayitsnc').html('<div class="alert alert-info pb-1"> Soyadınızı giriniz </div>');}
            else if(userinfo['mail']==""){$('#kayitsnc').html('<div class="alert alert-info pb-1"> Mail adresinizi giriniz </div>');}
            else if(userinfo['telefon']==""){$('#kayitsnc').html('<div class="alert alert-info pb-1"> Telefon numaranızı giriniz </div>');}
            else if(userinfo['dogumtarihi']==""){$('#kayitsnc').html('<div class="alert alert-info pb-1"> Doğum tarihinizi giriniz </div>');}
            else if(userinfo['kullaniciadi']==""){$('#kayitsnc').html('<div class="alert alert-info pb-1"> Kullanıcı adınızı giriniz </div>');}
            else if(userinfo['sifre1']==""){$('#kayitsnc').html('<div class="alert alert-info pb-1"> Şifrenizi giriniz </div>');}
            else if(userinfo['sifre2']!=userinfo['sifre1']){$('#kayitsnc').html('<div class="alert alert-info pb-1"> Şifreniz eşleşmiyor </div>');}
            else if(userinfo['cinsiyet']==""){$('#kayitsnc').html('<div class="alert alert-info pb-1"> Cinsiyetinizi Seçiniz. </div>');}
            else if(userinfo['edulevel']==""){$('#kayitsnc').html('<div class="alert alert-info pb-1"> Öğrenim Seviyenizi seçiniz. </div>');}
            else if(userinfo['schoolname']==""){$('#kayitsnc').html('<div class="alert alert-info pb-1"> Okulunuzu Giriniz. </div>');}
            else if(userinfo['eduinfo']==""){$('#kayitsnc').html('<div class="alert alert-info pb-1"> Mezuniyet Durumunuzu Giriniz. </div>');}
            else if(userinfo['il']==""){$('#kayitsnc').html('<div class="alert alert-info pb-1"> İl Seçiniz. </div>');}
            else if(userinfo['ilce']==""){$('#kayitsnc').html('<div class="alert alert-info pb-1"> İlçe Seçiniz. </div>');}
            else if(userinfo['acikadres']==""){$('#kayitsnc').html('<div class="alert alert-info pb-1"> Açık adres giriniz </div>');}
            else if(userinfo['sifre1'].length<6){$('#kayitsnc').html('<div class="alert alert-info pb-1"> Şifreniz en az 6 karakter olmalıdır </div>');}
            else if(userinfo['sifre1'].search(/[a-z]/)<0){$('#kayitsnc').html('<div class="alert alert-info pb-1"> Şifreniz en az 1 küçük harf olmalıdır </div>');}
            else if(userinfo['sifre1'].search(/[A-Z]/)<0){$('#kayitsnc').html('<div class="alert alert-info pb-1"> Şifreniz en az 1 büyük harf olmalıdır </div>');}
        e.preventDefault();
        
    });
    
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
    });