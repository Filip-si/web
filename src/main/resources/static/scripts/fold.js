config();
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
}
