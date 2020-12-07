//config();
visualisation();
/*function config(){
$(document).ready(function(){
    $("select#cal_type").change(function(){
        var selected_type = $(this).children("option:selected").val();
        if(selected_type == "1dz"){
            $("#mid").show();
            $("#w1").show();
            $("#w2").hide();
            $("#w3").hide();
            $("#w4").hide();
            $("select#cal_var").val("w1");
            
//            $("select#cal_line").val("eko");
            if($("select#cal_line").val() == "eko"){
                $("#std").show();
                $("#wid").hide();
                $("select#cal_width").val("std");

                $("#big").show();
                $("#spi").hide();
                $("select#cal_connect").val("big");

                $("#clock").hide();
                $("#noclock").show();
                $("select#cal_clock").val("noclock");
                
                $("#1adv").show();
                $("#3adv").hide();
                $("#noadv").show();
                $("select#cal_adv").val("1adv");
                
                $("#c1").show();
                $("#c2").show();
                $("#c3").show();
                $("select#cal_back").val("c1");
            }
            else if($("select#cal_line").val() == "pre"){
                $("#std").show();
                $("#wid").show();
                $("select#cal_width").val("std");

                $("#big").show();
                $("#spi").show();
                $("select#cal_connect").val("big");

                $("#clock").show();
                $("#noclock").show();
                $("select#cal_clock").val("noclock");
                
                $("#1adv").show();
                $("#3adv").hide();
                $("#noadv").show();
                $("select#cal_adv").val("1adv");
                
                $("#c1").show();
                $("#c2").show();
                $("#c3").show();
                $("select#cal_back").val("c3");
            }
            else if($("select#cal_line").val() == "mid"){
                $("#1adv").show();
                $("#3adv").hide();
                $("#noadv").hide();
                $("select#cal_adv").val("1adv");
                
                $("#c1").hide();
                $("#c2").hide();
                $("#c3").show();
                $("select#cal_back").val("c3");
            }
        }
        else if(selected_type == "2dz"){
            $("#mid").hide();
            $("#w1").show();
            $("#w2").hide();
            $("#w3").hide();
            $("#w4").hide();
            $("select#cal_var").val("w1");
            $("select#cal_line").val("eko");
            if($("select#cal_line").val() == "eko"){
                $("#std").show();
                $("#wid").hide();
                $("select#cal_width").val("std");

                $("#big").show();
                $("#spi").hide();
                $("select#cal_connect").val("big");

                $("#clock").hide();
                $("#noclock").show();
                $("select#cal_clock").val("noclock");
                
                $("#3adv").hide();
                $("#1adv").show();
                $("#noadv").show();
                $("select#cal_adv").val("1adv");
                
                $("#c1").show();
                $("#c2").show();
                $("#c3").show();
                $("select#cal_back").val("c1");
            }
            else if($("select#cal_line").val() == "pre"){
                $("#std").show();
                $("#wid").show();
                $("select#cal_width").val("std");

                $("#big").show();
                $("#spi").show();
                $("select#cal_connect").val("big");

                $("#clock").show();
                $("#noclock").show();
                $("select#cal_clock").val("noclock");
                
                $("#3adv").hide();
                $("#1adv").show();
                $("#noadv").show();
                $("select#cal_adv").val("1adv");
                
                $("#c1").show();
                $("#c2").show();
                $("#c3").show();
                $("select#cal_back").val("c3");
            }
            
        }
        else if(selected_type == "3dz"){
            $("#mid").hide();
            $("#w1").show();
            $("#w2").show();
            $("#w3").show();
            $("#w4").show();
            $("select#cal_var").val("w1");
            $("select#cal_line").val("eko");
            if($("select#cal_line").val() == "eko"){
                $("#std").show();
                $("#wid").hide();
                $("select#cal_width").val("std");

                $("#big").show();
                $("#spi").hide();
                $("select#cal_connect").val("big");

                $("#clock").hide();
                $("#noclock").show();
                $("select#cal_clock").val("noclock");
                
                $("#3adv").show();
                $("#1adv").show();
                $("#noadv").show();
                $("select#cal_adv").val("3adv");
                
                $("#c1").show();
                $("#c2").show();
                $("#c3").show();
                $("select#cal_back").val("c1");
                
            }
            else if($("select#cal_line").val() == "pre"){
                $("#std").show();
                $("#wid").show();
                $("select#cal_width").val("std");

                $("#big").show();
                $("#spi").show();
                $("select#cal_connect").val("big");

                $("#clock").show();
                $("#noclock").show();
                $("select#cal_clock").val("noclock");
                
                $("#3adv").show();
                $("#1adv").show();
                $("#noadv").show();
                $("select#cal_adv").val("3adv");
                
                $("#c1").show();
                $("#c2").show();
                $("#c3").show();
                $("select#cal_back").val("c3");
             
            }
        }
    })
    
    $("select#cal_line").change(function(){
        var selected_line = $(this).children("option:selected").val();
        if(selected_line == "eko"){
            $("#std").show();
            $("#wid").hide();
            $("select#cal_width").val("std");

            $("#big").show();
            $("#spi").hide();
            $("select#cal_connect").val("big");

            $("#clock").hide();
            $("#noclock").show();
            $("select#cal_clock").val("noclock");
            
            $("#1adv").show();
            $("#noadv").show();
//            $("select#cal_adv").val("noadv");
            if($("select#cal_type").val("3dz"))  $("#3adv").show();
            if($("select#cal_type").val("1dz"))  $("#3adv").hide();
            
            $("#c1").show();
            $("#c2").show();
            $("#c3").show();
            $("#select#cal_back").val("c1");
        }
        else if(selected_line == "mid"){
            $("#std").show();
            $("#wid").hide();
            $("select#cal_width").val("std");

            $("#big").show();
            $("#spi").hide();
            $("select#cal_connect").val("big");

            $("#clock").hide();
            $("#noclock").show();
            $("select#cal_clock").val("noclock");
            
            $("#c1").hide();
            $("#c2").hide();
            $("#c3").show();
            $("select#cal_back").val("c3");
            
            $("#1adv").show();
            $("#3adv").hide();
            $("#noadv").hide();
            $("select#cal_adv").val("1adv");
        }
        else if(selected_line == "pre" ){
            $("#std").show();
            $("#wid").show();
            $("select#cal_width").val("std");

            $("#big").show();
            $("#spi").show();
            $("select#cal_connect").val("big");

            $("#clock").show();
            $("#noclock").show();
            $("select#cal_clock").val("noclock");
            
            $("#c1").show();
            $("#c2").show();
            $("#c3").show();
            $("select#cal_back").val("c3");

        }
    })
    
});
}*/


function visualisation(){
    $(document).ready(function(){
        var selected_type = $(this).children("option:selected").val();
        $("#advert").css('display','none'); // nie wiem
        $("select#cal_type").change(function(){
            var type = $(this).children("option:selected").val();
            if(type == "1dz"){
            $("#mid").show();
            $("#w1").show();
            $("#w2").hide();
            $("#w3").hide();
            $("#w4").hide();
            $("select#cal_var").val("w1");
            
/*
            $("select#cal_line").val("eko");
*/           
            $("select#cal_line").change(function(){
            if($("select#cal_line").val() == "eko"){
                $("#back").css('height','215px');
                $("#advert").css('display','none');
                $("#std").show();
                $("#wid").hide();
                $("select#cal_width").val("std");

                $("#big").show();
                $("#spi").hide();
                $("select#cal_connect").val("big");

                $("#clock").hide();
                $("#noclock").show();
                $("select#cal_clock").val("noclock");
                
                $("#1adv").show();
                $("#3adv").hide();
                $("#noadv").show();
                
                $("#c1").show();
                $("#c2").show();
                $("#c3").show();
                
                $("#head").css('background-image','url(dzielne/1dz_nie.jpg)');
                $("#head").css('width','320px');
                $("#head").css('height','210px');
                $("#fold").css('background-image','url(dzielne/1dz_big.png)');
                $("#fold").css('width','320px');
                $("#fold").css('height','215px');
                            if($("select#cal_width").val("std")){
                                    if($("select#cal_connect").val("big")){
                                            if($("select#cal_clock").val("noclock")){
                                                $("select#cal_adv").change(function(){
                                                    var adv = $(this).children("option:selected").val();
                                                    if(adv == "noadv"){
                                                        $("#advert").css('display','none');
                                                        $("#back").css('height','215px');
                                                        $("select#cal_back").change(function(){
                                                            var back = $(this).children("option:selected").val();
                                                            if(back == "c1"){
                                                                $("#back").css('background-color','#fff');   
                                                            }
                                                            if(back == "c2"){
                                                                $("#back").css('background-color','#1aabde');  
                                                                
                                                            }
                                                            if(back == "c3"){
                                                                $("#back").css('background-color','#000');  

                                                            }
                                                        })
                                                        
                                                    }
                                                    if(adv == "1adv"){
                                                        $("#advert").css('display','block');
                                                        $("#back").css('height','295px');
                                                        $("select#cal_back").change(function(){
                                                            var back = $(this).children("option:selected").val();
                                                            if(back == "c1"){
                                                                $("#back").css('background-color','#fff');   
                                                            }
                                                            if(back == "c2"){
                                                                $("#back").css('background-color','#1aabde');  
                                                                
                                                            }
                                                            if(back == "c3"){
                                                                $("#back").css('background-color','linear-gradient(0deg, rgba(198,120,212,1) 0%, rgba(73,167,147,1) 100%)');  

                                                            }
                                                        })
                                                        
                                                    }
                                                })
                                                
                                            }
                                        
                                    }
                            }
            }
            // pozmieniać wszystko dla premium główka cień std/szer big/spirala zegar/bezzegara reklamy
            else if($("select#cal_line").val() == "pre"){
                $("#std").show();
                $("#wid").show();
                $("select#cal_width").val("std");

                $("#big").show();
                $("#spi").show();
                $("select#cal_connect").val("big");

                $("#clock").show();
                $("#noclock").show();
                $("select#cal_clock").val("noclock");
                
                $("#1adv").show();
                $("#3adv").hide();
                $("#noadv").show();
                $("select#cal_adv").val("1adv");
                
                $("#c1").show();
                $("#c2").show();
                $("#c3").show();
                $("select#cal_back").val("c3");
                
                $("#head").css('background-image','url(dzielne/1dz_tak.jpg)');
                $("#head").css('width','320px');
                $("#head").css('height','210px');
                $("#head").css('box-shadow','inset 4px 4px 15px 0px #000000');
                

/*                
                $("select#cal_width").change(function(){
                    var width = $(this).children("option:selected").val();
                    if(width == "std"){
                        $("select#cal_connect").change(function(){
                            var connect = $(this).children("option:selected").val();
                            if(connect == "big"){
                                $("select#cal_clock").change(function(){
                                    var clock = $(this).children("option:selected").val();
                                    if(clock == "noclock"){
                                        $("select#cal_adv").change(function(){
                                            var advert = $(this).children("option:selected").val();
                                            if(advert == "noadv"){
                                                $("select#cal_back").change(function(){
                                                    var back = $(this).children("option:selected").val();
                                                    if(back == "c1") $("#back").css('background-color','#1aabde'); 
                                                    if(back == "c2") $("#back").css('background-color','#1a2dde'); 
                                                    if(back == "c3") $("#back").css('background-color','#a5abde'); 
                                                })
                                            }
                                            if(advert == "1adv"){
                                                $("select#cal_back").change(function(){
                                                    var back = $(this).children("option:selected").val();
                                                    if(back == "c1") $("#back").css('background-color','#1aabde');
                                                    if(back == "c2") $("#back").css('background-color','#1a2dde'); 
                                                    if(back == "c3") $("#back").css('background-color','#a5abde'); 
                                                })
                                            }                              
                                        })
                                    }
                                    if(clock == "clock"){
                                        $("select#cal_adv").change(function(){
                                            var advert = $(this).children("option:selected").val();
                                            if(advert == "noadv"){
                                                $("select#cal_back").change(function(){
                                                    var back = $(this).children("option:selected").val();
                                                    if(back == "c1")
                                                    if(back == "c2")
                                                    if(back == "c3")
                                                })
                                            }
                                            if(advert == "1adv"){
                                                $("select#cal_back").change(function(){
                                                    var back = $(this).children("option:selected").val();
                                                    if(back == "c1")
                                                    if(back == "c2")
                                                    if(back == "c3")
                                                })
                                            }                              
                                        })
                                    }
                                })
                            }
                            if(connect == "spi"){
                                $("select#cal_clock").change(function(){
                                    var clock = $(this).children("option:selected").val();
                                    if(clock == "noclock"){
                                        $("select#cal_adv").change(function(){
                                            var advert = $(this).children("option:selected").val();
                                            if(advert == "noadv"){
                                                $("select#cal_back").change(function(){
                                                    var back = $(this).children("option:selected").val();
                                                    if(back == "c1")
                                                    if(back == "c2")
                                                    if(back == "c3")
                                                })
                                            }
                                            if(advert == "1adv"){
                                                $("select#cal_back").change(function(){
                                                    var back = $(this).children("option:selected").val();
                                                    if(back == "c1")
                                                    if(back == "c2")
                                                    if(back == "c3")
                                                })
                                            }                              
                                        })
                                    }
                                    if(clock == "clock"){
                                        $("select#cal_adv").change(function(){
                                            var advert = $(this).children("option:selected").val();
                                            if(advert == "noadv"){
                                                $("select#cal_back").change(function(){
                                                    var back = $(this).children("option:selected").val();
                                                    if(back == "c1")
                                                    if(back == "c2")
                                                    if(back == "c3")
                                                })
                                            }
                                            if(advert == "1adv"){
                                                $("select#cal_back").change(function(){
                                                    var back = $(this).children("option:selected").val();
                                                    if(back == "c1")
                                                    if(back == "c2")
                                                    if(back == "c3")
                                                })
                                            }                              
                                        })
                                    }
                                }) 
                            }
                        })
                    }
                    if(width == "wid"){
                        $("select#cal_connect").change(function(){
                            var connect = $(this).children("option:selected").val();
                            if(connect == "big"){
                                $("select#cal_clock").change(function(){
                                    var clock = $(this).children("option:selected").val();
                                    if(clock == "noclock"){
                                        $("select#cal_adv").change(function(){
                                            var advert = $(this).children("option:selected").val();
                                            if(advert == "noadv"){
                                                $("select#cal_back").change(function(){
                                                    var back = $(this).children("option:selected").val();
                                                    if(back == "c1")
                                                    if(back == "c2")
                                                    if(back == "c3")
                                                })
                                            }
                                            if(advert == "1adv"){
                                                $("select#cal_back").change(function(){
                                                    var back = $(this).children("option:selected").val();
                                                    if(back == "c1")
                                                    if(back == "c2")
                                                    if(back == "c3")
                                                })
                                            }                              
                                        })
                                    }
                                    if(clock == "clock"){
                                        $("select#cal_adv").change(function(){
                                            var advert = $(this).children("option:selected").val();
                                            if(advert == "noadv"){
                                                $("select#cal_back").change(function(){
                                                    var back = $(this).children("option:selected").val();
                                                    if(back == "c1")
                                                    if(back == "c2")
                                                    if(back == "c3")
                                                })
                                            }
                                            if(advert == "1adv"){
                                                $("select#cal_back").change(function(){
                                                    var back = $(this).children("option:selected").val();
                                                    if(back == "c1")
                                                    if(back == "c2")
                                                    if(back == "c3")
                                                })
                                            }                              
                                        })
                                    }
                                })
                            }
                            if(connect == "spi"){
                                $("select#cal_clock").change(function(){
                                    var clock = $(this).children("option:selected").val();
                                    if(clock == "noclock"){
                                        $("select#cal_adv").change(function(){
                                            var advert = $(this).children("option:selected").val();
                                            if(advert == "noadv"){
                                                $("select#cal_back").change(function(){
                                                    var back = $(this).children("option:selected").val();
                                                    if(back == "c1")
                                                    if(back == "c2")
                                                    if(back == "c3")
                                                })
                                            }
                                            if(advert == "1adv"){
                                                $("select#cal_back").change(function(){
                                                    var back = $(this).children("option:selected").val();
                                                    if(back == "c1")
                                                    if(back == "c2")
                                                    if(back == "c3")
                                                })
                                            }                              
                                        })
                                    }
                                    if(clock == "clock"){
                                        $("select#cal_adv").change(function(){
                                            var advert = $(this).children("option:selected").val();
                                            if(advert == "noadv"){
                                                $("select#cal_back").change(function(){
                                                    var back = $(this).children("option:selected").val();
                                                    if(back == "c1")
                                                    if(back == "c2")
                                                    if(back == "c3")
                                                })
                                            }
                                            if(advert == "1adv"){
                                                $("select#cal_back").change(function(){
                                                    var back = $(this).children("option:selected").val();
                                                    if(back == "c1")
                                                    if(back == "c2")
                                                    if(back == "c3")
                                                })
                                            }                              
                                        })
                                    }
                                }) 
                            }
                        })
                    }
                        
                })
             */   
                if($("select#cal_width").val("std")){
                    if($("select#cal_connect").val("big")){
                        $("#fold").css('background-image','url(dzielne/1dz_big.png)');
                        $("#fold").css('width','320px');
                        $("#fold").css('height','215px');
                        if($("select#cal_clock").val("noclock")){
                            $("#head").css('background-image','url(dzielne/1dz_nie.jpg)');

                            if($("select#cal_adv").val("noadv")){
                                if($("select#cal_back").val("c1")) $("#back").css('background-color','#fff');   
                                if($("select#cal_back").val("c2")) $("#back").css('background-color','#12433a');   
                                if($("select#cal_back").val("c3")) $("#back").css('background-color','#aa4411');   
                            }
                            if($("select#cal_adv").val("1adv")){
                                if($("select#cal_back").val("c1")) $("#back").css('background-color','#fff');   
                                if($("select#cal_back").val("c2")) $("#back").css('background-color','#12433a');   
                                if($("select#cal_back").val("c3")) $("#back").css('background-color','#aa4411');   
                            }
                        }
                        if($("select#cal_clock").val("clock")){
                            $("#head").css('background-image','url(dzielne/1dz_tak.jpg)');
                            
                            if($("select#cal_adv").val("noadv")){
                                if($("select#cal_back").val("c1")) $("#back").css('background-color','#fff');   
                                if($("select#cal_back").val("c2")) $("#back").css('background-color','#12433a');   
                                if($("select#cal_back").val("c3")) $("#back").css('background-color','#aa4411');   
                            }
                            if($("select#cal_adv").val("1adv")){
                                if($("select#cal_back").val("c1")) $("#back").css('background-color','#fff');   
                                if($("select#cal_back").val("c2")) $("#back").css('background-color','#12433a');   
                                if($("select#cal_back").val("c3")) $("#back").css('background-color','#aa4411');   
                            }
                        }
                    }
                    if($("select#cal_connect").val("spi")){
                        $("#fold").css('background-image','url(dzielne/1dz_spi.png)');
                        $("#fold").css('width','320px');
                        $("#fold").css('height','215px');
                        if($("select#cal_clock").val("noclock")){
                            $("#head").css('background-image','url(dzielne/1dz_nie.jpg)');
                            
                            if($("select#cal_adv").val("noadv")){
                                if($("select#cal_back").val("c1")) $("#back").css('background-color','#fff');   
                                if($("select#cal_back").val("c2")) $("#back").css('background-color','#12433a');   
                                if($("select#cal_back").val("c3")) $("#back").css('background-color','#aa4411');   
                            }
                            if($("select#cal_adv").val("1adv")){
                                if($("select#cal_back").val("c1")) $("#back").css('background-color','#fff');   
                                if($("select#cal_back").val("c2")) $("#back").css('background-color','#12433a');   
                                if($("select#cal_back").val("c3")) $("#back").css('background-color','#aa4411');   
                            }
                        }
                        if($("select#cal_clock").val("clock")){
                            $("#head").css('background-image','url(dzielne/1dz_tak.jpg)');
                            
                            if($("select#cal_adv").val("noadv")){
                                if($("select#cal_back").val("c1")) $("#back").css('background-color','#fff');   
                                if($("select#cal_back").val("c2")) $("#back").css('background-color','#12433a');   
                                if($("select#cal_back").val("c3")) $("#back").css('background-color','#aa4411');   
                            }
                            if($("select#cal_adv").val("1adv")){
                                if($("select#cal_back").val("c1")) $("#back").css('background-color','#fff');   
                                if($("select#cal_back").val("c2")) $("#back").css('background-color','#12433a');   
                                if($("select#cal_back").val("c3")) $("#back").css('background-color','#aa4411');   
                            }
                        }
                    }
                }
                if($("select#cal_width").val("wid")){
                    if($("select#cal_connect").val("big")){
                        $("#fold").css('background-image','url(dzielne/1dz_big.png)');
                        $("#fold").css('width','320px');
                        $("#fold").css('height','215px');
                        if($("select#cal_clock").val("noclock")){
                            $("#head").css('background-image','url(dzielne/1dz_nie.jpg)');

                            if($("select#cal_adv").val("noadv")){
                                if($("select#cal_back").val("c1")) $("#back").css('background-color','#fff');   
                                if($("select#cal_back").val("c2")) $("#back").css('background-color','#12433a');   
                                if($("select#cal_back").val("c3")) $("#back").css('background-color','#aa4411');   
                            }
                            if($("select#cal_adv").val("1adv")){
                                if($("select#cal_back").val("c1")) $("#back").css('background-color','#fff');   
                                if($("select#cal_back").val("c2")) $("#back").css('background-color','#12433a');   
                                if($("select#cal_back").val("c3")) $("#back").css('background-color','#aa4411');   
                            }
                        }
                        if($("select#cal_clock").val("clock")){
                            $("#head").css('background-image','url(dzielne/1dz_tak.jpg)');
                            
                            if($("select#cal_adv").val("noadv")){
                                if($("select#cal_back").val("c1")) $("#back").css('background-color','#fff');   
                                if($("select#cal_back").val("c2")) $("#back").css('background-color','#12433a');   
                                if($("select#cal_back").val("c3")) $("#back").css('background-color','#aa4411');   
                            }
                            if($("select#cal_adv").val("1adv")){
                                if($("select#cal_back").val("c1")) $("#back").css('background-color','#fff');   
                                if($("select#cal_back").val("c2")) $("#back").css('background-color','#12433a');   
                                if($("select#cal_back").val("c3")) $("#back").css('background-color','#aa4411');   
                            }
                        }
                    }
                    if($("select#cal_connect").val("spi")){
                        $("#fold").css('background-image','url(dzielne/1dz_spi.png)');
                        $("#fold").css('width','320px');
                        $("#fold").css('height','215px');
                        if($("select#cal_clock").val("noclock")){
                            $("#head").css('background-image','url(dzielne/1dz_nie.jpg)');

                            if($("select#cal_adv").val("noadv")){
                                if($("select#cal_back").val("c1")) $("#back").css('background-color','#fff');   
                                if($("select#cal_back").val("c2")) $("#back").css('background-color','#12433a');   
                                if($("select#cal_back").val("c3")) $("#back").css('background-color','#aa4411');   
                            }
                            if($("select#cal_adv").val("1adv")){
                                if($("select#cal_back").val("c1")) $("#back").css('background-color','#fff');   
                                if($("select#cal_back").val("c2")) $("#back").css('background-color','#12433a');   
                                if($("select#cal_back").val("c3")) $("#back").css('background-color','#aa4411');   
                            }
                        }
                        if($("select#cal_clock").val("clock")){
                            $("#head").css('background-image','url(dzielne/1dz_tak.jpg)');

                            if($("select#cal_adv").val("noadv")){
                                if($("select#cal_back").val("c1")) $("#back").css('background-color','#fff');   
                                if($("select#cal_back").val("c2")) $("#back").css('background-color','#12433a');   
                                if($("select#cal_back").val("c3")) $("#back").css('background-color','#aa4411');   
                            }
                            if($("select#cal_adv").val("1adv")){
                                if($("select#cal_back").val("c1")) $("#back").css('background-color','#fff');   
                                if($("select#cal_back").val("c2")) $("#back").css('background-color','#12433a');   
                                if($("select#cal_back").val("c3")) $("#back").css('background-color','#aa4411');   
                            }
                        }
                    }
                }
                
            }
            else if($("select#cal_line").val() == "mid"){
                $("#1adv").show();
                $("#3adv").hide();
                $("#noadv").hide();
                $("select#cal_adv").val("1adv");
                
                $("#c1").hide();
                $("#c2").hide();
                $("#c3").show();
                $("select#cal_back").val("c3");
                
                $("#advert").css('display','block');
                $("#advert").css('height','200px');
                $("#head").css('background-image','url(dzielne/1dz_nie.jpg)');
                $("#head").css('width','320px');
                $("#head").css('height','210px');
                $("#fold").css('background-image','url(dzielne/1dz_big.png)');
                $("#fold").css('width','320px');
                $("#fold").css('height','215px');
                $("#back").css('height','385px');
                $("#back").css('background-color','#000'); 
                                                   
                if($("select#cal_width").val("std")){
                        if($("select#cal_connect").val("big")){
                                if($("select#cal_clock").val("noclock")){

                                        if($("select#cal_adv").val("1adv")){
                                            $("#advert").css('display','block');
                                            $("#back").css('height','385px');
//                                            $("#ad").css('padding-top' '20px');
//                                            $("#ad").css('padding-bottom', '20px')

                                                if($("select#cal_back").val("c3")){
                                                        $("#back").css('background-color','#000');  

                                                }
                                                        
                                        }
                                                
                                }
                                        
                        }
                                
                 }
            }
            })
            
                
            }
                                                
        })
    })
        
    
}
