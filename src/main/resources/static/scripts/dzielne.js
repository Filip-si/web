config();
visualisation();
function config(){
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
            if($("select#cal_line").val() == "pre"){
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
            if($("select#cal_line").val() == "mid"){
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
        if(selected_type == "2dz"){
            $("#mid").hide();
            $("#w1").show();
            $("#w2").hide();
            $("#w3").hide();
            $("#w4").hide();
            $("select#cal_var").val("w1");

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
            if($("select#cal_line").val() == "pre"){
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
        if(selected_type == "3dz"){
            $("#mid").hide();
            $("#w1").show();
            $("#w2").show();
            $("#w3").show();
            $("#w4").show();
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

                $("#3adv").show();
                $("#1adv").show();
                $("#noadv").show();
                $("select#cal_adv").val("3adv");

                $("#c1").show();
                $("#c2").show();
                $("#c3").show();
                $("select#cal_back").val("c1");

            }
            if($("select#cal_line").val() == "pre"){
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
                $("select#cal_adv").val("1adv");

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
            if($("select#cal_type").val("2dz"))  $("#3adv").hide();

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
}


function visualisation(){
    $(document).ready(function(){
        $("#advert").css('display','none');
        $("#advert2dz").css('display','none');
        $("select#cal_type").change(function(){
            var type = $(this).children("option:selected").val();
            if(type == "1dz"){
            $("#helix2").css('display','none');
            $("#mid").show();
            $("#w1").show();
            $("#w2").hide();
            $("#w3").hide();
            $("#w4").hide();
            $("select#cal_var").val("w1");
            
            $("select#cal_line").val("pickLine");
            $("select#cal_line").change(function(){
            if($("select#cal_line").val() == "eko"){
                $("select#cal_type").val("1dz");
                $("#back").css('width','297px');
                $("#back").css('height','215px');
                $("#advert").css('display','none');
                $("#helix").css('display','none');
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
                $("select#cal_adv").val("noadv");

                $("#c1").show();
                $("#c2").show();
                $("#c3").show();
                $("#fold").css('margin-top','0px');
                $("#head").css('background-image','url(images/dzielne/1dz_nie.jpg)');
                $("#head").css('width','297px');
                $("#head").css('height','210px');
                $("#head").css('box-shadow','none');
                $("#fold").css('background-image','url(images/dzielne/1dz_big.png)');
                $("#fold").css('width','297px');
                $("#fold").css('height','215px');
                $("#fold").css('margin-left','-11.5px');
                $("select#cal_width").val("std");
                $("select#cal_connect").val("big");
                $("select#cal_clock").val("noclock");
                $("select#cal_adv").change(function(){
                     var adv = $(this).children("option:selected").val();
                     if(adv == "noadv"){
                        $("#advert").css('display','none');
                        $("#advert2dz").css('display','none');
                        $("#back").css('height','215px');
                        $("select#cal_back").change(function(){
                            var back = $(this).children("option:selected").val();
                                if(back == "c1") $("#back").css('background-color','#fff');
                                if(back == "c2") $("#back").css('background-color','#1aabde');
                                if(back == "c3") $("#back").css('background-color','#000');
                        })
                     }
                     if(adv == "1adv"){
                        $("#advert").css('display','block');
                        $("#advert2dz").css('display','none');
                        $("#back").css('height','295px');
                        $("select#cal_back").change(function(){
                           var back = $(this).children("option:selected").val();
                                if(back == "c1") $("#back").css('background-color','#fff');
                                if(back == "c2") $("#back").css('background-color','#1aabde');
                                if(back == "c3") $("#back").css('background-color','linear-gradient(0deg, rgba(198,120,212,1) 0%, rgba(73,167,147,1) 100%)');

                        })
                     }

                })
                                                

                                        


            }
            else if($("select#cal_line").val() == "pre"){
                $("select#cal_type").val("1dz");
                $("#back").css('height','215px');
                $("#back").css('width','297px');
                $("#advert").css('display','none');
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
                $("select#cal_adv").val("noadv");

                $("#c1").show();
                $("#c2").show();
                $("#c3").show();
                $("select#cal_back").val("c1");
                
                $("#head").css('background-image','url(images/dzielne/1dz_nie.jpg)');
                $("#head").css('width','297px');
                $("#head").css('height','210px');
                $("#head").css('box-shadow','inset 4px 4px 15px 0px #000000');
                $("#fold").css('background-image','url(images/dzielne/1dz_big.png)');
                $("#fold").css('width','297px');
                $("#fold").css('height','215px');
                $("#fold").css('margin-left','-11.5px');
                
                $("select#cal_width").change(function(){
                     var width = $(this).children("option:selected").val();
                     if(width == "std"){
                        $("#head").css('width','297px');
                        $("#fold").css('width','297px');
                        $("#fold").css('margin-left','-11.5px');
                        $("#helix").css('width','297px');
                        $("#helix").css('overflow','hidden');
                        $("#back").css('width','297px');
                        }
                     if(width == "wid"){
                        $("#head").css('width','320px');
                        $("#fold").css('width','320px');
                        $("#fold").css('margin-left','0px');
                        $("#helix").css('width','320px');
                        $("#helix").css('overflow','hidden');
                        $("#back").css('width','320px');
                        }
                })

                $("select#cal_connect").change(function(){
                     var connect = $(this).children("option:selected").val();
                     if(connect == "big"){
                        $("#helix").css('display','none');
                        $("#fold").css('background-image','url(images/dzielne/1dz_big.png)');
                        $("#fold").css('margin-top','6px');
                        if($("select#cal_wid").val() == "std") $("#helix").css('width','297px');
                        if($("select#cal_wid").val() == "wid") $("#helix").css('width','320px');
                        if($("select#cal_adv").val() == "noadv") $("#back").css('height','215px');
                        if($("select#cal_adv").val() == "1adv") $("#back").css('height','295px');
                        }
                     if(connect == "spi"){
                        $("#fold").css('margin-top','-7px');
                        $("#fold").css('background-image','url(images/dzielne/1dz_spi.png)');

                        $("#helix").css('height','16px');
                        $("#helix").css('background-image','url(images/dzielne/helix.png)');
                        $("#helix").css('overflow','hidden');
                        $("#helix").css('display','block');
                        $("#helix").css('margin-top','-8px');
                        $("#back").css('margin-top','-8px');
                        $("#helix").css('position','relative');
                        $("#helix2").css('display','none');

                        if($("select#cal_wid").val() == "std") $("#helix").css('width','297px');
                        if($("select#cal_wid").val() == "wid") $("#helix").css('width','320px');
                        if($("select#cal_adv").val() == "noadv") $("#back").css('height','215px');
                        if($("select#cal_adv").val() == "1adv") $("#back").css('height','295px');
                        }
                })

                $("select#cal_clock").change(function(){
                     var clock = $(this).children("option:selected").val();
                     if(clock == "clock"){
                        $("#head").css('background-image','url(images/dzielne/1dz_tak.jpg)');
                     }
                     if(clock == "noclock"){
                        $("#head").css('background-image','url(images/dzielne/1dz_nie.jpg)');
                     }
                })

                $("select#cal_adv").change(function(){
                     var adv = $(this).children("option:selected").val();
                     if(adv == "noadv"){
                        $("#advert").css('display','none');
                        $("#advert2dz").css('display','none');
                        $("#back").css('height','215px');

                     }
                     if(adv == "1adv"){
                        $("#advert").css('display','block');
                        $("#advert2dz").css('display','none');
                        $("#back").css('height','295px');
                        }

                })

                $("select#cal_back").change(function(){
                          var back = $(this).children("option:selected").val();
                              if(back == "c1") $("#back").css('background-color','#fff');
                              if(back == "c2") $("#back").css('background-color','#1aabde');
                              if(back == "c3") $("#back").css('background-color','#000');
                })

                
            }
            else if($("select#cal_line").val() == "mid"){
                $("select#cal_type").val("1dz");
                $("#helix").css('display','none');
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
                $("#head").css('background-image','url(images/dzielne/1dz_nie.jpg)');
                $("#head").css('width','297px');
                $("#head").css('height','210px');
                $("#head").css('box-shadow','none');
                $("#fold").css('background-image','url(images/dzielne/1dz_big.png)');
                $("#fold").css('width','297px');
                $("#fold").css('height','215px');
                $("#fold").css('margin-left','-11.5px');
                $("#back").css('height','385px');
                $("#back").css('width','297px');
                $("#back").css('background-color','#000'); 

                if($("select#cal_width").val("std")){
                        if($("select#cal_connect").val("big")){
                                if($("select#cal_clock").val("noclock")){

                                        if($("select#cal_adv").val("1adv")){
                                            $("#advert").css('display','block');
                                            $("#back").css('height','385px');


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
            if(type == "2dz"){
                $("#eko").show();
                $("#mid").hide();
                $("#pre").show();
                $("#w1").show();
                $("#w2").hide();
                $("#w3").hide();
                $("#w4").hide();
                $("select#cal_var").val("w1");


                $("select#cal_line").val("pickLine");
                $("select#cal_line").change(function(){
                if($("select#cal_line").val() == "eko"){
                    $("select#cal_type").val("2dz");
                    $("#head").css('box-shadow','none');
                    $("#back").css('height','368px');
                    $("#back").css('width','297px');
                    $("#advert").css('display','none');
                    $("#advert2dz").css('display','none');
                    $("#helix").css('display','none');
                    $("#helix2").css('display','none');
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
                    $("select#cal_adv").val("noadv");

                    $("#c1").show();
                    $("#c2").show();
                    $("#c3").show();


                    $("#head").css('background-image','url(images/dzielne/2dz_nie.jpg)');
                    $("#head").css('width','297px');
                    $("#head").css('height','210px');
                    $("#fold").css('background-image','url(images/dzielne/2dz_big.png)');
                    $("#fold").css('width','297px');
                    $("#fold").css('height','368px');
                    $("#fold").css('margin-left','-11.5px');
                    $("#fold").css('margin-top','0px');

                    $("select#cal_adv").change(function(){
                    if($("select#cal_adv").val() == "noadv"){
                            $("#back").css('height','368px');
                            $("#advert2dz").css('display','none');
                        }
                    if($("select#cal_adv").val() == "1adv"){
                            $("#back").css('height','420px');
                            $("#advert2dz").css('display','block');
                        }
                    })

                    $("select#cal_back").change(function(){
                              var back = $(this).children("option:selected").val();
                                  if(back == "c1") $("#back").css('background-color','#fff');
                                  if(back == "c2") $("#back").css('background-color','#1aabde');
                                  if(back == "c3") $("#back").css('background-color','#000');
                    })
                }
                if($("select#cal_line").val() == "pre"){
                    $("select#cal_type").val("2dz");
                    $("#1adv").show();
                    $("#3adv").hide();
                    $("#noadv").show();

                    $("#c1").show();
                    $("#c2").show();
                    $("#c3").show();

                    $("#helix").css('display','none');
                    $("#helix2").css('display','none');


                    $("select#cal_adv").val("noadv");
                    $("#head").css('background-image','url(images/dzielne/2dz_nie.jpg)');
                    $("#head").css('box-shadow','inset 4px 4px 15px 0px #000000');
                    $("#head").css('width','297px');
                    $("#head").css('height','210px');
                    $("#head").css('box-shadow','none');
                    $("#fold").css('background-image','url(images/dzielne/2dz_big.png)');
                    $("#fold").css('width','297px');
                    $("#fold").css('height','368px');
                    $("#fold").css('margin-left','-11.5px');
                    $("#back").css('height','368px');

                     $("select#cal_width").change(function(){
                     var width = $(this).children("option:selected").val();
                     if(width == "std"){
                        $("#head").css('width','297px');
                        $("#fold").css('width','297px');
                        $("#fold").css('margin-left','-11.5px');
                        $("#helix").css('width','297px');
                        $("#helix2").css('width','297px');
                        $("#helix").css('overflow','hidden');
                        $("#back").css('width','297px');
                        }
                     if(width == "wid"){
                        $("#head").css('width','320px');
                        $("#fold").css('width','320px');
                        $("#fold").css('margin-left','0px');
                        $("#helix").css('width','320px');
                        $("#helix2").css('width','320px');
                        $("#helix").css('overflow','hidden');
                        $("#back").css('width','320px');
                        }
                    })

                    $("select#cal_connect").change(function(){
                         var connect = $(this).children("option:selected").val();
                         if(connect == "big"){
                            $("#helix").css('display','none');
                            $("#helix2").css('display','none');
                            $("#fold").css('background-image','url(images/dzielne/2dz_big.png)');
                            $("#fold").css('margin-top','0px');
                            if($("select#cal_wid").val() == "std") $("#helix").css('width','297px');
                            if($("select#cal_wid").val() == "wid") $("#helix").css('width','320px');
                            if($("select#cal_adv").val() == "noadv") $("#back").css('height','368px');
                            if($("select#cal_adv").val() == "1adv") $("#back").css('height','420px');
                            }
                         if(connect == "spi"){
                            $("#fold").css('margin-top','-7px');
                            $("#fold").css('background-image','url(images/dzielne/2dz_spi.png)');

                            $("#helix").css('height','16px');
                            $("#helix2").css('height','16px');
                            $("#helix").css('background-image','url(images/dzielne/helix.png)');
                            $("#helix").css('overflow','hidden');
                            $("#helix").css('display','block');
                            $("#helix2").css('background-image', 'url(images/dzielne/helix.png)');
                            $("#helix2").css('overflow','hidden');
                            $("#helix2").css('display','block');
                            $("#helix").css('margin-top','-8px');
                            $("#helix2").css('margin-top','-8px');
                            $("#back").css('margin-top','-16px');
                            $("#helix").css('position','relative');
                            $("#helix2").css('position','relative');
                            $("#helix2").css('top','202px');

                            if($("select#cal_wid").val() == "std") $("#helix").css('width','297px');
                            if($("select#cal_wid").val() == "wid") $("#helix").css('width','320px');
                            if($("select#cal_adv").val() == "noadv") $("#back").css('height','368px');
                            if($("select#cal_adv").val() == "1adv") $("#back").css('height','420px');
                            }
                    })

                    $("select#cal_clock").change(function(){
                         var clock = $(this).children("option:selected").val();
                         if(clock == "clock"){
                            $("#head").css('background-image','url(images/dzielne/2dz_tak.jpg)');
                         }
                         if(clock == "noclock"){
                            $("#head").css('background-image','url(images/dzielne/2dz_nie.jpg)');
                         }
                    })

                    $("select#cal_adv").change(function(){
                         var advert2 = $(this).children("option:selected").val();
                         if(advert2 == "noadv"){
                            $("#back").css('height','368px');
                            $("#advert").css('display','none');
                            $("#advert2dz").css('display','none');
                         }
                         if(advert2 == "1adv"){
                            $("#back").css('height','420px');
                            $("#advert").css('display','none');
                            $("#advert2dz").css('display','block');
                         }
                    })

                    $("select#cal_back").change(function(){
                              var back = $(this).children("option:selected").val();
                                  if(back == "c1") $("#back").css('background-color','#fff');
                                  if(back == "c2") $("#back").css('background-color','#1aabde');
                                  if(back == "c3") $("#back").css('background-color','#000');
                    })


                }


            })
    }
            if(type == "3dz"){


            $("select#cal_line").val("pickLine");
            $("select#cal_line").change(function(){
            if($("select#cal_line").val() == "eko"){
                $("select#cal_type").val("3dz");
                $("#head").css('background-image','url(images/dzielne/3dz_nie.jpg)');
                $("#head").css('box-shadow','none');
                $("#head").css('width','297px');
                $("#head").css('height','210px');

                $("#back").css('width','297px');
                $("#back").css('height','630px');

                $("#fold").css('background-image','url(images/dzielne/3dz_big_1.png)');
                $("#fold").css('width','297px');
                $("#fold").css('height','510px');
                $("#fold").css('margin-left','-11.5px');
                $("#fold").css('margin-top','0px');

                $("#helix").css('display','none');
                $("#helix2").css('display','none');

                $("#1adv").show();
                $("#3adv").show();
                $("#noadv").show();
//                $("select#cal_adv").val("1adv");

                $("select#cal_back").change(function(){
                              var back = $(this).children("option:selected").val();
                                  if(back == "c1") $("#back").css('background-color','#fff');
                                  if(back == "c2") $("#back").css('background-color','#1aabde');
                                  if(back == "c3") $("#back").css('background-color','#000');
                    })

                $("select#cal_var").change(function(){
                              var varCal = $(this).children("option:selected").val();
                                  if(varCal == "w1" && $("select#cal_adv").val("noadv")){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_1.png)');
                                    $("#fold").css('height','510px');
                                    }
                                  if(varCal == "w1" && $("select#cal_adv").val("1adv")){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_1.png)');
                                    $("#fold").css('height','510px');
                                    }
                                  if(varCal == "w1" && $("select#cal_adv").val("3adv") ){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_13.png)');
                                    $("#fold").css('height','630px');
                                    }
                                  if(varCal == "w2" && $("select#cal_adv").val("noadv")){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_2.png)');
                                    $("#fold").css('height','510px');
                                    }
                                  if(varCal == "w2" && $("select#cal_adv").val("1adv")){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_2.png)');
                                    $("#fold").css('height','510px');
                                    }
                                  if(varCal == "w2" && $("select#cal_adv").val("3adv") ){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_23.png)');
                                    $("#fold").css('height','630px');
                                  }
                                  if(varCal == "w3" && $("select#cal_adv").val("noadv")){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_3.png)');
                                    $("#fold").css('height','510px');
                                  }
                                  if(varCal == "w3" && $("select#cal_adv").val("1adv")){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_3.png)');
                                    $("#fold").css('height','510px');
                                  }
                                  if(varCal == "w3" && $("select#cal_adv").val("3adv") ){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_33.png)');
                                    $("#fold").css('height','630px');
                                  }
                                  if(varCal == "w4" && $("select#cal_adv").val("noadv") ){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_4.png)');
                                    $("#fold").css('height','510px');
                                  }
                                  if(varCal == "w4" && $("select#cal_adv").val("1adv") ){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_4.png)');
                                    $("#fold").css('height','510px');
                                  }
                                  if(varCal == "w4" && $("select#cal_adv").val("3adv") ) {
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_43.png)');
                                    $("#fold").css('height','630px');
                                  }
                    })

                $("select#cal_adv").change(function(){
                              var adv = $(this).children("option:selected").val();
                                  if(adv == "noadv"){
                                        $("#back").css('height','510px');
                                        $("#fold").css('height','510px');
                                        $("#advert").css('display','none');
                                        $("#advert2").css('display','none');
                                        if($("select#cal_var").val() == "w1") $("#fold").css('background-image','url(images/dzielne/3dz_big_1.png)');
                                        if($("select#cal_var").val() == "w2") $("#fold").css('background-image','url(images/dzielne/3dz_big_2.png)');
                                        if($("select#cal_var").val() == "w3") $("#fold").css('background-image','url(images/dzielne/3dz_big_3.png)');
                                        if($("select#cal_var").val() == "w4") $("#fold").css('background-image','url(images/dzielne/3dz_big_4.png)');
                                  }
                                  if(adv == "1adv"){
                                        $("#back").css('height','630px');
                                        $("#fold").css('height','510px');
                                        $("#advert").css('display','none');
                                        $("#advert2").css('display','none');
                                        if($("select#cal_var").val() == "w1") $("#fold").css('background-image','url(images/dzielne/3dz_big_1.png)');
                                        if($("select#cal_var").val() == "w2") $("#fold").css('background-image','url(images/dzielne/3dz_big_2.png)');
                                        if($("select#cal_var").val() == "w3") $("#fold").css('background-image','url(images/dzielne/3dz_big_3.png)');
                                        if($("select#cal_var").val() == "w4") $("#fold").css('background-image','url(images/dzielne/3dz_big_4.png)');

                                  }
                                  if(adv == "3adv"){
                                        $("#back").css('height','630px');
                                        $("#fold").css('height','630px');
                                        $("#advert").css('display','none');
                                        $("#advert2").css('display','none');

                                        if($("select#cal_var").val() == "w1") $("#fold").css('background-image','url(images/dzielne/3dz_big_13.png)');
                                        if($("select#cal_var").val() == "w2") $("#fold").css('background-image','url(images/dzielne/3dz_big_23.png)');
                                        if($("select#cal_var").val() == "w3") $("#fold").css('background-image','url(images/dzielne/3dz_big_33.png)');
                                        if($("select#cal_var").val() == "w4") $("#fold").css('background-image','url(images/dzielne/3dz_big_43.png)');

                                  }
                    })


            }
            if($("select#cal_line").val() == "pre"){
                $("select#cal_type").val("3dz");
                $("#head").css('background-image','url(images/dzielne/3dz_nie.jpg)');
                $("#head").css('box-shadow','inset 4px 4px 15px 0px #000000');
                $("#head").css('width','297px');
                $("#head").css('height','210px');

                $("#back").css('width','297px');
                $("#back").css('height','630px');

                $("#fold").css('background-image','url(images/dzielne/3dz_big_1.png)');
                $("#fold").css('width','297px');
                $("#fold").css('height','510px');
                $("#fold").css('margin-left','-11.5px');
                $("#fold").css('margin-top','0px');

                $("#helix").css('display','none');
                $("#helix2").css('display','none');

                $("#1adv").show();
                $("#3adv").show();
                $("#noadv").show();

                $("select#cal_width").change(function(){
                    var width = $(this).children("option:select").val();
                        if(width == "std"){
                            $("#head").css('width','297px');
                            $("#fold").css('width','297px');
                            $("#fold").css('margin-left','-11.5px');
                            $("#helix").css('width','297px');
                            $("#helix").css('overflow','hidden');
                            $("#back").css('width','297px');
                        }

                        if(width == "wid"){
                            $("#head").css('width','320px');
                            $("#fold").css('width','320px');
                            $("#fold").css('margin-left','0px');
                            $("#helix").css('width','320px');
                            $("#helix").css('overflow','hidden');
                            $("#back").css('width','320px');
                        }

                })



                $("select#cal_back").change(function(){
                              var back = $(this).children("option:selected").val();
                                  if(back == "c1") $("#back").css('background-color','#fff');
                                  if(back == "c2") $("#back").css('background-color','#1aabde');
                                  if(back == "c3") $("#back").css('background-color','#000');
                    })

                $("select#cal_var").change(function(){
                              var varCal = $(this).children("option:selected").val();
                                  if(varCal == "w1" && $("select#cal_adv").val("noadv")){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_1.png)');
                                    $("#fold").css('height','510px');
                                    }
                                  if(varCal == "w1" && $("select#cal_adv").val("1adv")){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_1.png)');
                                    $("#fold").css('height','510px');
                                    }
                                  if(varCal == "w1" && $("select#cal_adv").val("3adv") ){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_13.png)');
                                    $("#fold").css('height','630px');
                                    }
                                  if(varCal == "w2" && $("select#cal_adv").val("noadv")){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_2.png)');
                                    $("#fold").css('height','510px');
                                    }
                                  if(varCal == "w2" && $("select#cal_adv").val("1adv")){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_2.png)');
                                    $("#fold").css('height','510px');
                                    }
                                  if(varCal == "w2" && $("select#cal_adv").val("3adv") ){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_23.png)');
                                    $("#fold").css('height','630px');
                                  }
                                  if(varCal == "w3" && $("select#cal_adv").val("noadv")){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_3.png)');
                                    $("#fold").css('height','510px');
                                  }
                                  if(varCal == "w3" && $("select#cal_adv").val("1adv")){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_3.png)');
                                    $("#fold").css('height','510px');
                                  }
                                  if(varCal == "w3" && $("select#cal_adv").val("3adv") ){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_33.png)');
                                    $("#fold").css('height','630px');
                                  }
                                  if(varCal == "w4" && $("select#cal_adv").val("noadv") ){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_4.png)');
                                    $("#fold").css('height','510px');
                                  }
                                  if(varCal == "w4" && $("select#cal_adv").val("1adv") ){
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_4.png)');
                                    $("#fold").css('height','510px');
                                  }
                                  if(varCal == "w4" && $("select#cal_adv").val("3adv") ) {
                                    $("#fold").css('background-image','url(images/dzielne/3dz_big_43.png)');
                                    $("#fold").css('height','630px');
                                  }
                    })

                $("select#cal_adv").change(function(){
                              var adv = $(this).children("option:selected").val();
                                  if(adv == "noadv"){
                                        $("#back").css('height','510px');
                                        $("#fold").css('height','510px');
                                        $("#advert").css('display','none');
                                        $("#advert2").css('display','none');
                                        if($("select#cal_var").val() == "w1") $("#fold").css('background-image','url(images/dzielne/3dz_big_1.png)');
                                        if($("select#cal_var").val() == "w2") $("#fold").css('background-image','url(images/dzielne/3dz_big_2.png)');
                                        if($("select#cal_var").val() == "w3") $("#fold").css('background-image','url(images/dzielne/3dz_big_3.png)');
                                        if($("select#cal_var").val() == "w4") $("#fold").css('background-image','url(images/dzielne/3dz_big_4.png)');
                                  }
                                  if(adv == "1adv"){
                                        $("#back").css('height','630px');
                                        $("#fold").css('height','510px');
                                        $("#advert").css('display','none');
                                        $("#advert2").css('display','none');
                                        if($("select#cal_var").val() == "w1") $("#fold").css('background-image','url(images/dzielne/3dz_big_1.png)');
                                        if($("select#cal_var").val() == "w2") $("#fold").css('background-image','url(images/dzielne/3dz_big_2.png)');
                                        if($("select#cal_var").val() == "w3") $("#fold").css('background-image','url(images/dzielne/3dz_big_3.png)');
                                        if($("select#cal_var").val() == "w4") $("#fold").css('background-image','url(images/dzielne/3dz_big_4.png)');

                                  }
                                  if(adv == "3adv"){
                                        $("#back").css('height','630px');
                                        $("#fold").css('height','630px');
                                        $("#advert").css('display','none');
                                        $("#advert2").css('display','none');

                                        if($("select#cal_var").val() == "w1") $("#fold").css('background-image','url(images/dzielne/3dz_big_13.png)');
                                        if($("select#cal_var").val() == "w2") $("#fold").css('background-image','url(images/dzielne/3dz_big_23.png)');
                                        if($("select#cal_var").val() == "w3") $("#fold").css('background-image','url(images/dzielne/3dz_big_33.png)');
                                        if($("select#cal_var").val() == "w4") $("#fold").css('background-image','url(images/dzielne/3dz_big_43.png)');

                                  }
                    })

            }
            })

            }
    })
        
    
})
}


