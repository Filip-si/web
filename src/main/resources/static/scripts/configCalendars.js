var iss = 'id50';
function _round(_num, _dec) { return parseFloat(Math.round(_num * Math.pow(10, _dec)) / Math.pow(10, _dec)); }



jQuery('[name^=cal_]').bind('change', function() {
    jQuery('label[for^='+jQuery(this).attr('name')+']').removeClass('checked');
     jQuery('label[for='+jQuery(this).attr('id')+']').addClass('checked');
	config(); img(); spec(); pay(); });

jQuery('.offer_pay tr[class^=id]').bind('click', function() {
    jQuery('.offer_pay tr[class^=id]').removeClass('checked');
    jQuery('.offer_pay tr[class='+jQuery(this).attr('class')+']').addClass('checked');
    iss = jQuery(this).attr('class');
    pay();
});


config();
function config()
{
	jQuery('label[for*=type_], label[for*=line_], label[for*=width_], label[for*=conn_], label[for*=clk_], label[for*=adv_], label[for*=back_], label[for*=pack_], label[for*=calm_]').show();

	if(jQuery('[name=cal_clock]:checked').val() == 'tak') {
	    jQuery('#pack_p').prop('checked', true);
	    jQuery('label[for=pack_0], label[for=pack_kp], label[for=pack_kf], label[for=pack_e]').hide();
	}
	else {
	    jQuery('label[for=pack_p]').hide();
	    if(jQuery('[name=cal_pack]:checked').val() == 'p')
	        jQuery('#pack_0').prop('checked', true);
	}

	if(jQuery('[name=cal_line]:checked').val() == 'eko' || jQuery('[name=cal_line]:checked').val() == 'mid')
	{
	    jQuery('label[for=pack_0], label[for=pack_kf], label[for=pack_kp], label[for=pack_e]').show();
        jQuery('#pack_0').prop('checked', true);
		jQuery('#clk_none').prop('checked', true);
		jQuery('label[for=clk_clock]').hide();
		jQuery('#conn_b').prop('checked', true);
		jQuery('#width_s').prop('checked', true); //added
		jQuery('label[for=conn_h]').hide();
		jQuery('label[for=width_w]').hide();
	}else if(jQuery('[name=cal_line]:checked').val() == 'pre'){
	    jQuery('label[for=width_s]', 'label[for=width_s]').show();
	    jQuery('label[for=conn_b]', 'label[for=conn_h]').show();
        jQuery('label[for=clk_none]', 'label[for=clk_clock]').show();
	}
	else if(jQuery('[name=cal_line]:checked').val() == 'gra' || jQuery('[name=cal_line]:checked').val() == 'h4' || jQuery('[name=cal_line]:checked').val() == 'h12')
	{
		jQuery('#width_s').prop('checked', true);
		jQuery('label[for=width_w]').hide();
	}

	if(jQuery('[name=cal_line]:checked').val() == 'h4' || jQuery('[name=cal_line]:checked').val() == 'h12')
	{
		jQuery('#clk_none').prop('checked', true);
		jQuery('label[for=clk_clock]').hide();
	}

	if(jQuery('[name=cal_advert]:checked').val() == '0')
	{
		if(jQuery('[name=cal_back]:checked').val() == 'wp')
		    jQuery('#back_0').prop('checked', true);
		jQuery('label[for=back_wp]').hide();
	}
	else
	{
		if(jQuery('[name=cal_back]:checked').val() == '0')
		    jQuery('#back_wp').prop('checked', true);
		jQuery('label[for=back_0]').hide();
	}

	if(jQuery('[name=cal_type]:checked').val() == '1dz')
	{
		jQuery('#calm_1').prop('checked', true);
		jQuery('label[for=calm_2], label[for=calm_3], label[for=calm_4], label[for=calm_5]').hide();

		jQuery('label[for=adv_1], label[for=adv_4], label[for=adv_3]').hide();
		if(jQuery('[name=cal_line]:checked').val() == 'mid')
		{
			jQuery('#back_4k').prop('checked', true);
			jQuery('label[for=back_0], label[for=back_wp], label[for=back_1p], label[for=back_1k], label[for=back_2k]').hide();
			jQuery('#adv_1d').prop('checked', true);
			jQuery('label[for=adv_1m]').hide();
			jQuery('label[for=adv_0]').hide();
			jQuery('label[for=pack_p]').hide();
		}
		else
		{
			if(jQuery('[name=cal_advert]:checked').val() != '0' && jQuery('[name=cal_advert]:checked').val() != '1m')
			    jQuery('#adv_1m').prop('checked', true);
			jQuery('label[for=adv_1d]').hide();
		}
	}
	else if(jQuery('[name=cal_type]:checked').val() == '2dz')
	{
		if(jQuery('[name=cal_line]:checked').val() == 'mid')
		    jQuery('#line_pre').prop('checked', true);
		jQuery('label[for=line_mid]').hide();

		jQuery('#calm_1').prop('checked', true);
		jQuery('label[for=calm_2], label[for=calm_3], label[for=calm_4], label[for=calm_5]').hide();

		jQuery('label[for=adv_1m], label[for=adv_1d], label[for=adv_4], label[for=adv_3]').hide();
		if(jQuery('[name=cal_advert]:checked').val() != '0' && jQuery('[name=cal_advert]:checked').val() != '1')
		    jQuery('#adv_1').prop('checked', true);
	}
	else if(jQuery('[name=cal_type]:checked').val() == '3dz')
	{

		if(jQuery('[name=cal_line]:checked').val() == 'mid')
            jQuery('#line_pre').prop('checked', true);
		    jQuery('label[for=line_mid]').hide();

        if(jQuery('[name=cal_width]:checked').val() == 'std'){
            jQuery('label[for=calm_5]').hide();
		    jQuery('label[for=calm_2], label[for=calm_3],label[for=calm_1],label[for=calm_4]').show()
        }
		if(jQuery('[name=cal_width]:checked').val() == 'sze'){
/*            jQuery('label[for=calm_1],label[for=calm_4]').hide();*/
            jQuery('label[for=calm_2], label[for=calm_3],label[for=calm_1],label[for=calm_4], label[for=calm_5]').show();
        }
		jQuery('label[for=adv_1m], label[for=adv_1d], label[for=adv_4]').hide();
		if(jQuery('[name=cal_advert]:checked').val() != '0' && jQuery('[name=cal_advert]:checked').val() != '1' && jQuery('[name=cal_advert]:checked').val() != '3')
		    jQuery('#adv_3').prop('checked', true);
	}
	else if(jQuery('[name=cal_type]:checked').val() == '4dz')
	{
		jQuery('#line_pre').prop('checked', true); jQuery('label[for=line_eko], label[for=line_mid], label[for=line_gra], label[for=line_h4], label[for=line_h12]').hide();
		jQuery('#width_w').prop('checked', true); jQuery('label[for=width_s]').hide(); jQuery('label[for=width_w]').show();

		jQuery('#calm_1').prop('checked', true); jQuery('label[for=calm_2], label[for=calm_3], label[for=calm_4], label[for=calm_5]').hide();

		jQuery('label[for=adv_1m], label[for=adv_1d], label[for=adv_3]').hide();
		if(jQuery('[name=cal_advert]:checked').val() != '0' && jQuery('[name=cal_advert]:checked').val() != '1' && jQuery('[name=cal_advert]:checked').val() != '4') jQuery('#adv_4').prop('checked', true);
	}

    if(jQuery('[name=cal_pay]:checked').val() == 50 || jQuery('[name=cal_pay]:checked').val() == 100) {
        jQuery('#pay_discount_row').show();
        jQuery('#pay_issue').css('text-decoration', 'line-through');
        }
    else {
        jQuery('#pay_discount_row').hide(); jQuery('#pay_issue').css('text-decoration', 'none');
    }

}

img();
function img()
{
	jQuery('[id*=cal_img_helix]').hide().text('');
	jQuery('[id*=cal_img_adv]').hide();
	jQuery('#cal_img_head_shadow').css('background','none');
	jQuery('#cal_img_calm').css('background','none');
	jQuery('.helix').css('background', 'url(/images/dzielne/helix.png)');

	if(jQuery('[name=cal_line]:checked').val() == 'gra') jQuery('[id*=cal_img_helix]').css('width', '290px');
	else if(jQuery('[name=cal_width]:checked').val() == 'std' && jQuery('[name=cal_line]:checked').val() != 'gra') jQuery('[id*=cal_img_helix]').css('width', '297px');
	else if(jQuery('[name=cal_width]:checked').val() == 'sze' && jQuery('[name=cal_line]:checked').val() != 'gra') jQuery('[id*=cal_img_helix]').css('width', '320px');

	if(jQuery('[name=cal_line]:checked').val() == 'h12' || jQuery('[name=cal_line]:checked').val() == 'h4')
	{
		jQuery('#cal_img_helix0').show();
		jQuery('#cal_img_helix0').css('top', '-6px');
		jQuery('#cal_img_helix0').css('background', 'url(/images/dzielne/helix.png)');
	}

	if(jQuery('[name=cal_width]:checked').val() == 'std' && jQuery('[name=cal_line]:checked').val() == 'gra')
	{
		jQuery('#cal_img_width, #cal_img_body, #cal_img_head_shadow').css('width', '290px');
		jQuery('#cal_img_head, #cal_img_head_shadow').css('height', '380px');
		jQuery('#cal_img_height').css('min-height', '380px');
		jQuery('#cal_img_width').css('background', 'url(/images/dzielne/w290.jpg)');
		jQuery('#cal_img_head_shadow').css('background','url(/images/dzielne/shadow_gra.png) no-repeat center');
	}
	else if(jQuery('[name=cal_width]:checked').val() == 'std' && jQuery('[name=cal_line]:checked').val() != 'gra')
	{
		jQuery('#cal_img_width, #cal_img_body, #cal_img_head_shadow').css('width', '297px');
		jQuery('#cal_img_head, #cal_img_head_shadow').css('height', '210px');
		jQuery('#cal_img_height').css('min-height', '210px');
		jQuery('#cal_img_width').css('background', 'url(/images/dzielne/w297.jpg)');
	}
	else if(jQuery('[name=cal_width]:checked').val() == 'sze')
	{
		jQuery('#cal_img_width, #cal_img_body, #cal_img_head_shadow').css('width', '320px');
		jQuery('#cal_img_head, #cal_img_head_shadow').css('height', '210px');
		jQuery('#cal_img_height').css('min-height', '210px');
		jQuery('#cal_img_width').css('background', 'url(/images/dzielne/w320.jpg)');
	}

	if(jQuery('[name=cal_width]:checked').val() == 'std' && jQuery('[name=cal_line]:checked').val() == 'pre')
		jQuery('#cal_img_head_shadow').css('background','url(/images/dzielne/shadow_std.png) no-repeat center');
	else if(jQuery('[name=cal_width]:checked').val() == 'sze' && jQuery('[name=cal_line]:checked').val() == 'pre')
		jQuery('#cal_img_head_shadow').css('background','url(/images/dzielne/shadow_sze.png) no-repeat center');


	if(jQuery('[name=cal_type]:checked').val() == '1dz')
	{
		if(jQuery('[name=cal_advert]:checked').val() == '0' && jQuery('[name=cal_line]:checked').val() != 'gra')
		{
			jQuery('#cal_img_height').css('height', '425px');
			jQuery('#cal_img_back').css('height', '215px');
			jQuery('#cal_img_calm').css('height', '215px');
			jQuery('#cal_img_height').css('background', 'url(/images/dzielne/h210.jpg) no-repeat, url(/images/dzielne/h215.jpg) no-repeat bottom');
		}
		else if(jQuery('[name=cal_advert]:checked').val() == '0' && jQuery('[name=cal_line]:checked').val() == 'gra')
		{
			jQuery('#cal_img_height').css('height', '595px');
			jQuery('#cal_img_back').css('height', '215px');
			jQuery('#cal_img_calm').css('height', '215px');
			jQuery('#cal_img_height').css('background', 'url(/images/dzielne/h380.jpg) no-repeat, url(/images/dzielne/h215.jpg) no-repeat bottom');
		}
		else if(jQuery('[name=cal_advert]:checked').val() == '1m' && jQuery('[name=cal_line]:checked').val() != 'gra')
		{
			jQuery('#cal_img_height').css('height', '505px');
			jQuery('#cal_img_back').css('height', '295px');
			jQuery('#cal_img_calm').css('height', '295px');
			jQuery('#cal_img_height').css('background', 'url(/images/dzielne/h210.jpg) no-repeat, url(/images/dzielne/h215.jpg) no-repeat 0px 210px, url(/images/dzielne/h80.jpg) no-repeat bottom');
		}
		else if(jQuery('[name=cal_advert]:checked').val() == '1m' && jQuery('[name=cal_line]:checked').val() == 'gra')
		{
			jQuery('#cal_img_height').css('height', '675px');
			jQuery('#cal_img_back').css('height', '295px');
			jQuery('#cal_img_calm').css('height', '295px');
			jQuery('#cal_img_height').css('background', 'url(/images/dzielne/h380.jpg) no-repeat, url(/images/dzielne/h215.jpg) no-repeat 0px 380px, url(/images/dzielne/h80.jpg) no-repeat bottom');
		}
		else if(jQuery('[name=cal_advert]:checked').val() == '1d')
		{
			jQuery('#cal_img_height').css('height', '595px');
			jQuery('#cal_img_back').css('height', '385px');
			jQuery('#cal_img_calm').css('height', '385px');
			jQuery('#cal_img_height').css('background', 'url(/images/dzielne/h210.jpg) no-repeat, url(/images/dzielne/h215.jpg) no-repeat 0px 210px, url(/images/dzielne/h170.jpg) no-repeat bottom');
		}

		if(jQuery('[name=cal_conn]:checked').val() == 'spi'){
		    jQuery('#cal_img_helix1').css('margin-top', '-8px');
		    jQuery('#cal_img_helix1').css('display', 'block');
		    jQuery('#cal_img_helix1').css('position', 'absolute');
		    jQuery('#cal_img_helix1').css('background', 'url("/images/dzielne/helix.png")');
		}
		jQuery('#cal_img_calm').css('background', 'url(/images/dzielne/1dz_'+jQuery('[name=cal_conn]:checked').val()+'.png) no-repeat top center');


		if(jQuery('[name=cal_advert]:checked').val() == '1m')
		{
		    jQuery('#cal_img_adv1').css({'position': "relative"});
			jQuery('#cal_img_adv1').show().height('60px').css({'top': '225px', 'color': '#ffffff', 'border-color': "#ffffff", 'vertical-align': 'middle'}).html('<br style="line-height: 14px;"/>NAPIS REKLAMOWY 270mm x 60mm');
			if(jQuery('[name=cal_back]:checked').val() == 'wp' || jQuery('[name=cal_back]:checked').val() == '0')
				jQuery('#cal_img_adv1').css({'color': '#222222', 'border-color': "#222222"});
		}
		else if(jQuery('[name=cal_advert]:checked').val() == '1d')
		{
		jQuery('#cal_img_adv1').css({'position': "relative"});
			jQuery('#cal_img_adv1').show().height('150px').css({'top': '225px', 'color': '#ffffff', 'border-color': "#ffffff", 'vertical-align': 'middle'}).html('<br style="line-height: 65px;"/>NAPIS REKLAMOWY 270mm x 150mm');
			if(jQuery('[name=cal_back]:checked').val() == 'wp' || jQuery('[name=cal_back]:checked').val() == '0')
				jQuery('#cal_img_adv1').css({'color': '#222222', 'border-color': "#222222"});
		}
	}
	else if(jQuery('[name=cal_type]:checked').val() == '2dz')
	{
		if(jQuery('[name=cal_advert]:checked').val() == '0' && jQuery('[name=cal_line]:checked').val() != 'gra')
		{
			jQuery('#cal_img_height').css('height', '510px');
			jQuery('#cal_img_back').css('height', '300px');
			jQuery('#cal_img_calm').css('height', '300px');
			jQuery('#cal_img_height').css('background', 'url(/images/dzielne/h210.jpg) no-repeat, url(/images/dzielne/h210.jpg) no-repeat 0px 210px, url(/images/dzielne/h90.jpg) no-repeat bottom');
		}
		else if(jQuery('[name=cal_advert]:checked').val() == '0' && jQuery('[name=cal_line]:checked').val() == 'gra')
		{
			jQuery('#cal_img_height').css('height', '680px');
			jQuery('#cal_img_back').css('height', '300px');
			jQuery('#cal_img_calm').css('height', '300px');
			jQuery('#cal_img_height').css('background', 'url(/images/dzielne/h380.jpg) no-repeat, url(/images/dzielne/h210.jpg) no-repeat 0px 380px, url(/images/dzielne/h90.jpg) no-repeat bottom');
		}
		else if(jQuery('[name=cal_advert]:checked').val() == '1' && jQuery('[name=cal_line]:checked').val() != 'gra')
		{
			jQuery('#cal_img_height').css('height', '630px');
			jQuery('#cal_img_back').css('height', '420px');
			jQuery('#cal_img_calm').css('height', '420px');
			jQuery('#cal_img_height').css('background', 'url(/images/dzielne/h210.jpg) no-repeat, url(/images/dzielne/h210.jpg) no-repeat 0px 210px, url(/images/dzielne/h210.jpg) no-repeat bottom');
		}
		else if(jQuery('[name=cal_advert]:checked').val() == '1' && jQuery('[name=cal_line]:checked').val() == 'gra')
		{
			jQuery('#cal_img_height').css('height', '800px');
			jQuery('#cal_img_back').css('height', '420px');
			jQuery('#cal_img_calm').css('height', '420px');
			jQuery('#cal_img_height').css('background', 'url(/images/dzielne/h380.jpg) no-repeat, url(/images/dzielne/h210.jpg) no-repeat 0px 380px, url(/images/dzielne/h210.jpg) no-repeat bottom');
		}

		if(jQuery('[name=cal_conn]:checked').val() == 'spi')
		{
			jQuery('#cal_img_helix1').css('margin-top', '-8px');
			jQuery('#cal_img_helix1').css('display', 'block');
            jQuery('#cal_img_helix1').css('position', 'absolute');
            jQuery('#cal_img_helix1').css('background', 'url("/images/dzielne/helix.png")');
			jQuery('#cal_img_helix2').css('margin-top', '202px');
			jQuery('#cal_img_helix2').css('display', 'block');
            jQuery('#cal_img_helix2').css('position', 'absolute');
            jQuery('#cal_img_helix2').css('background', 'url("/images/dzielne/helix.png")');
		}
		jQuery('#cal_img_calm').css('background', 'url(/images/dzielne/2dz_'+jQuery('[name=cal_conn]:checked').val()+'.png) no-repeat top center');

		if(jQuery('[name=cal_advert]:checked').val() == '1')
		{
		    jQuery('#cal_img_adv1').css({'position': "relative"});
			jQuery('#cal_img_adv1').show().height('35px').css({'top': '375px', 'color': '#ffffff', 'border-color': "#ffffff", 'vertical-align': 'middle'}).html('NAPIS REKLAMOWY 270mm x 35mm');
			if(jQuery('[name=cal_back]:checked').val() == 'wp' || jQuery('[name=cal_back]:checked').val() == '0')
				jQuery('#cal_img_adv1').css({'color': '#222222', 'border-color': "#222222"});
		}
	}
	else if(jQuery('[name=cal_type]:checked').val() == '3dz')
	{
		if(jQuery('[name=cal_advert]:checked').val() == '0' && jQuery('[name=cal_line]:checked').val() != 'gra')
		{
			jQuery('#cal_img_height').css('height', '720px');
			jQuery('#cal_img_back').css('height', '510px');
			jQuery('#cal_img_calm').css('height', '510px');
			jQuery('#cal_img_height').css('background', 'url(/images/dzielne/h210.jpg) no-repeat, url(/images/dzielne/h170.jpg) no-repeat 0px 210px, url(/images/dzielne/h170.jpg) no-repeat 0px 380px, url(/images/dzielne/h170.jpg) no-repeat bottom');
		}
		else if(jQuery('[name=cal_advert]:checked').val() == '0' && jQuery('[name=cal_line]:checked').val() == 'gra')
		{
			jQuery('#cal_img_height').css('height', '890px');
			jQuery('#cal_img_back').css('height', '510px');
			jQuery('#cal_img_calm').css('height', '510px');
			jQuery('#cal_img_height').css('background', 'url(/images/dzielne/h380.jpg) no-repeat, url(/images/dzielne/h170.jpg) no-repeat 0px 380px, url(/images/dzielne/h170.jpg) no-repeat 0px 550px, url(/images/dzielne/h170.jpg) no-repeat bottom');
		}
		else if(jQuery('[name=cal_advert]:checked').val() == '1' && jQuery('[name=cal_line]:checked').val() != 'gra')
		{
			jQuery('#cal_img_height').css('height', '840px');
			jQuery('#cal_img_back').css('height', '630px');
			jQuery('#cal_img_calm').css('height', '630px');
			jQuery('#cal_img_height').css('background', 'url(/images/dzielne/h210.jpg) no-repeat, url(/images/dzielne/h170.jpg) no-repeat 0px 210px, url(/images/dzielne/h170.jpg) no-repeat 0px 380px, url(/images/dzielne/h170.jpg) no-repeat 0px 550px, url(/images/dzielne/h120.jpg) no-repeat bottom');
		}
		else if(jQuery('[name=cal_advert]:checked').val() == '1' && jQuery('[name=cal_line]:checked').val() == 'gra')
		{
			jQuery('#cal_img_height').css('height', '1010px');
			jQuery('#cal_img_back').css('height', '630px');
			jQuery('#cal_img_calm').css('height', '630px');
			jQuery('#cal_img_height').css('background', 'url(/images/dzielne/h380.jpg) no-repeat, url(/images/dzielne/h170.jpg) no-repeat 0px 380px, url(/images/dzielne/h170.jpg) no-repeat 0px 550px, url(/images/dzielne/h170.jpg) no-repeat 0px 720px, url(/images/dzielne/h120.jpg) no-repeat bottom');
		}
		else if(jQuery('[name=cal_advert]:checked').val() == '3' && jQuery('[name=cal_line]:checked').val() != 'gra')
		{
			jQuery('#cal_img_height').css('height', '840px');
			jQuery('#cal_img_back').css('height', '630px');
			jQuery('#cal_img_calm').css('height', '630px');
			jQuery('#cal_img_height').css('background', 'url(/images/dzielne/h210.jpg) no-repeat, url(/images/dzielne/h210.jpg) no-repeat 0px 210px, url(/images/dzielne/h210.jpg) no-repeat 0px 420px, url(/images/dzielne/h210.jpg) no-repeat bottom');
		}
		else if(jQuery('[name=cal_advert]:checked').val() == '3' && jQuery('[name=cal_line]:checked').val() == 'gra')
		{
			jQuery('#cal_img_height').css('height', '1010px');
			jQuery('#cal_img_back').css('height', '630px');
			jQuery('#cal_img_calm').css('height', '630px');
			jQuery('#cal_img_height').css('background', 'url(/images/dzielne/h380.jpg) no-repeat, url(/images/dzielne/h210.jpg) no-repeat 0px 380px, url(/images/dzielne/h210.jpg) no-repeat 0px 590px, url(/images/dzielne/h210.jpg) no-repeat bottom');
		}

		if(jQuery('[name=cal_conn]:checked').val() == 'spi')
		{
			jQuery('#cal_img_helix1').show().css('margin-top', '-8px');

			if(jQuery('[name=cal_advert]:checked').val() == '0')
			{
				jQuery('#cal_img_helix2').css('margin-top', '162px');
				jQuery('#cal_img_helix2').css('display', 'block');
                jQuery('#cal_img_helix2').css('position', 'absolute');
                jQuery('#cal_img_helix2').css('background', 'url("/images/dzielne/helix.png")');
				jQuery('#cal_img_helix3').css('margin-top', '332px');
				jQuery('#cal_img_helix3').css('display', 'block');
                jQuery('#cal_img_helix3').css('position', 'absolute');
                jQuery('#cal_img_helix3').css('background', 'url("/images/dzielne/helix.png")');
			}
			else if(jQuery('[name=cal_advert]:checked').val() == '1')
			{
				jQuery('#cal_img_helix2').css('margin-top', '162px');
				jQuery('#cal_img_helix2').css('display', 'block');
                jQuery('#cal_img_helix2').css('position', 'absolute');
                jQuery('#cal_img_helix2').css('background', 'url("/images/dzielne/helix.png")');
				jQuery('#cal_img_helix3').css('margin-top', '332px');
				jQuery('#cal_img_helix3').css('display', 'block');
                jQuery('#cal_img_helix3').css('position', 'absolute');
                jQuery('#cal_img_helix3').css('background', 'url("/images/dzielne/helix.png")');
				jQuery('#cal_img_helix4').css('margin-top', '502px');
				jQuery('#cal_img_helix4').css('display', 'block');
                jQuery('#cal_img_helix4').css('position', 'absolute');
                jQuery('#cal_img_helix4').css('background', 'url("/images/dzielne/helix.png")');
			}
			else if(jQuery('[name=cal_advert]:checked').val() == '3')
			{
				jQuery('#cal_img_helix2').css('margin-top', '202px');
				jQuery('#cal_img_helix2').css('display', 'block');
                jQuery('#cal_img_helix2').css('position', 'absolute');
                jQuery('#cal_img_helix2').css('background', 'url("/images/dzielne/helix.png")');
				jQuery('#cal_img_helix3').css('margin-top', '412px');
				jQuery('#cal_img_helix3').css('display', 'block');
                jQuery('#cal_img_helix3').css('position', 'absolute');
                jQuery('#cal_img_helix3').css('background', 'url("/images/dzielne/helix.png")');
			}
		}

		if(jQuery('[name=cal_advert]:checked').val() != '3')
			jQuery('#cal_img_calm').css('background', 'url(/images/dzielne/3dz_'+jQuery('[name=cal_conn]:checked').val()+'_'+jQuery('[name=cal_calm]:checked').val()+'.png) no-repeat top center');
		else
			jQuery('#cal_img_calm').css('background', 'url(/images/dzielne/3dz_'+jQuery('[name=cal_conn]:checked').val()+'_'+jQuery('[name=cal_calm]:checked').val()+'3.png) no-repeat top center');

		if(jQuery('[name=cal_advert]:checked').val() == '1')
		{
		    jQuery('#cal_img_adv1').css({'position': "relative"});
			jQuery('#cal_img_adv1').show().height('100px').css({'top': '520px', 'color': '#ffffff', 'border-color': "#ffffff", 'vertical-align': 'middle'}).html('<br style="line-height: 40px;"/>NAPIS REKLAMOWY 270mm x 100mm');

			if(jQuery('[name=cal_back]:checked').val() == 'wp' || jQuery('[name=cal_back]:checked').val() == '0')
				jQuery('#cal_img_adv1').css({'color': '#222222', 'border-color': "#222222"});
		}
		else if(jQuery('[name=cal_advert]:checked').val() == '3')
		{
		    jQuery('#cal_img_adv1').css({'position': "relative"});
		    jQuery('#cal_img_adv2').css({'position': "relative"});
		    jQuery('#cal_img_adv3').css({'position': "relative"});
			jQuery('#cal_img_adv1').show().height('35px').css({'top': '165px', 'color': '#ffffff', 'border-color': "#ffffff", 'vertical-align': 'middle'}).html('<br/><p style="margin-top: -14px;">NAPIS REKLAMOWY 270mm x 35mm</p>');
			jQuery('#cal_img_adv2').show().height('35px').css({'top': '340px', 'color': '#ffffff', 'border-color': "#ffffff", 'vertical-align': 'middle'}).html('<br/><p style="margin-top: -14px;">NAPIS REKLAMOWY 270mm x 35mm</p>');
			jQuery('#cal_img_adv3').show().height('35px').css({'top': '510px', 'color': '#ffffff', 'border-color': "#ffffff", 'vertical-align': 'middle'}).html('<br/><p style="margin-top: -14px;">NAPIS REKLAMOWY 270mm x 35mm</p>');
			if(jQuery('[name=cal_back]:checked').val() == 'wp' || jQuery('[name=cal_back]:checked').val() == '0')
				jQuery('#cal_img_adv1, #cal_img_adv2, #cal_img_adv3').css({'color': '#222222', 'border-color': "#222222"});
		}
	}
	else if(jQuery('[name=cal_type]:checked').val() == '4dz')
	{
		if(jQuery('[name=cal_advert]:checked').val() == '0')
		{
			jQuery('#cal_img_height').css('height', '890px');
			jQuery('#cal_img_back').css('height', '680px');
			jQuery('#cal_img_calm').css('height', '680px');
			jQuery('#cal_img_height').css('background', 'url(/images/dzielne/h210.jpg) no-repeat, url(/images/dzielne/h170.jpg) no-repeat 0px 210px, url(/images/dzielne/h170.jpg) no-repeat 0px 380px, url(/images/dzielne/h170.jpg) no-repeat 0px 550px, url(/images/dzielne/h170.jpg) no-repeat bottom');
		}
		else if(jQuery('[name=cal_advert]:checked').val() == '1')
		{
			jQuery('#cal_img_height').css('height', '1050px');
			jQuery('#cal_img_back').css('height', '840px');
			jQuery('#cal_img_calm').css('height', '840px');
			jQuery('#cal_img_height').css('background', 'url(/images/dzielne/h210.jpg) no-repeat, url(/images/dzielne/h170.jpg) no-repeat 0px 210px, url(/images/dzielne/h170.jpg) no-repeat 0px 380px, url(/images/dzielne/h170.jpg) no-repeat 0px 550px, url(/images/dzielne/h170.jpg) no-repeat 0px 720px, url(/images/dzielne/h160.jpg) no-repeat bottom');
		}
		else if(jQuery('[name=cal_advert]:checked').val() == '4')
		{
			jQuery('#cal_img_height').css('height', '1050px');
			jQuery('#cal_img_back').css('height', '840px');
			jQuery('#cal_img_calm').css('height', '840px');
			jQuery('#cal_img_height').css('background', 'url(/images/dzielne/h210.jpg) no-repeat, url(/images/dzielne/h210.jpg) no-repeat 0px 210px, url(/images/dzielne/h210.jpg) no-repeat 0px 420px, url(/images/dzielne/h210.jpg) no-repeat 0px 630px, url(/images/dzielne/h210.jpg) no-repeat bottom');
		}

		if(jQuery('[name=cal_conn]:checked').val() == 'spi')
		{
			jQuery('#cal_img_helix1').show().css('margin-top', '-8px');

			if(jQuery('[name=cal_advert]:checked').val() == '0')
			{
				jQuery('#cal_img_helix2').show().css('margin-top', '162px');
				jQuery('#cal_img_helix2').css('display', 'block');
                jQuery('#cal_img_helix2').css('position', 'absolute');
                jQuery('#cal_img_helix2').css('background', 'url("/images/dzielne/helix.png")');
				jQuery('#cal_img_helix3').show().css('margin-top', '332px');
				jQuery('#cal_img_helix3').css('display', 'block');
                jQuery('#cal_img_helix3').css('position', 'absolute');
                jQuery('#cal_img_helix3').css('background', 'url("/images/dzielne/helix.png")');
				jQuery('#cal_img_helix4').show().css('margin-top', '502px');
				jQuery('#cal_img_helix4').css('display', 'block');
                jQuery('#cal_img_helix4').css('position', 'absolute');
                jQuery('#cal_img_helix4').css('background', 'url("/images/dzielne/helix.png")');
			}
			else if(jQuery('[name=cal_advert]:checked').val() == '1')
			{
				jQuery('#cal_img_helix2').show().css('margin-top', '162px');
				jQuery('#cal_img_helix2').css('display', 'block');
                jQuery('#cal_img_helix2').css('position', 'absolute');
                jQuery('#cal_img_helix2').css('background', 'url("/images/dzielne/helix.png")');
				jQuery('#cal_img_helix3').show().css('margin-top', '332px');
				jQuery('#cal_img_helix3').css('display', 'block');
                jQuery('#cal_img_helix3').css('position', 'absolute');
                jQuery('#cal_img_helix3').css('background', 'url("/images/dzielne/helix.png")');
				jQuery('#cal_img_helix4').show().css('margin-top', '502px');
				jQuery('#cal_img_helix4').css('display', 'block');
                jQuery('#cal_img_helix4').css('position', 'absolute');
                jQuery('#cal_img_helix4').css('background', 'url("/images/dzielne/helix.png")');
				jQuery('#cal_img_helix5').show().css('margin-top', '672px');
				jQuery('#cal_img_helix5').css('display', 'block');
                jQuery('#cal_img_helix5').css('position', 'absolute');
                jQuery('#cal_img_helix5').css('background', 'url("/images/dzielne/helix.png")');
			}
			else if(jQuery('[name=cal_advert]:checked').val() == '4')
			{
				jQuery('#cal_img_helix2').show().css('margin-top', '202px');
				jQuery('#cal_img_helix2').css('display', 'block');
                jQuery('#cal_img_helix2').css('position', 'absolute');
                jQuery('#cal_img_helix2').css('background', 'url("/images/dzielne/helix.png")');
				jQuery('#cal_img_helix3').show().css('margin-top', '412px');
				jQuery('#cal_img_helix3').css('display', 'block');
                jQuery('#cal_img_helix3').css('position', 'absolute');
                jQuery('#cal_img_helix3').css('background', 'url("/images/dzielne/helix.png")');
				jQuery('#cal_img_helix4').show().css('margin-top', '622px');
				jQuery('#cal_img_helix4').css('display', 'block');
                jQuery('#cal_img_helix4').css('position', 'absolute');
                jQuery('#cal_img_helix4').css('background', 'url("/images/dzielne/helix.png")');
			}
		}

		if(jQuery('[name=cal_advert]:checked').val() != '4')
			jQuery('#cal_img_calm').css('background', 'url(/images/dzielne/4dz_'+jQuery('[name=cal_conn]:checked').val()+'.png) no-repeat top center');
		else
			jQuery('#cal_img_calm').css('background', 'url(/images/dzielne/4dz_'+jQuery('[name=cal_conn]:checked').val()+'_4.png) no-repeat top center');

		if(jQuery('[name=cal_advert]:checked').val() == '1')
		{
		    jQuery('#cal_img_adv1').css({'position': "relative"});
			jQuery('#cal_img_adv1').show().height('140px').css({'top': '690px', 'color': '#ffffff', 'border-color': "#ffffff", 'vertical-align': 'middle'}).html('<br style="line-height: 65px;"/>NAPIS REKLAMOWY 270mm x 140mm');

			if(jQuery('[name=cal_back]:checked').val() == 'wp' || jQuery('[name=cal_back]:checked').val() == '0')
				jQuery('#cal_img_adv1').css({'color': '#222222', 'border-color': "#222222"});
		}
		else if(jQuery('[name=cal_advert]:checked').val() == '4')
		{
		    jQuery('#cal_img_adv1').css({'position': "relative"});
		    jQuery('#cal_img_adv2').css({'position': "relative"});
		    jQuery('#cal_img_adv3').css({'position': "relative"});
		    jQuery('#cal_img_adv4').css({'position': "relative"});
			jQuery('#cal_img_adv1').show().height('35px').css({'top': '165px', 'color': '#ffffff', 'border-color': "#ffffff", 'vertical-align': 'middle'}).html('<br/><p style="margin-top: -14px;">NAPIS REKLAMOWY 270mm x 35mm</p>');
			jQuery('#cal_img_adv2').show().height('35px').css({'top': '340px', 'color': '#ffffff', 'border-color': "#ffffff", 'vertical-align': 'middle'}).html('<br/><p style="margin-top: -14px;">NAPIS REKLAMOWY 270mm x 35mm</p>');
			jQuery('#cal_img_adv3').show().height('35px').css({'top': '510px', 'color': '#ffffff', 'border-color': "#ffffff", 'vertical-align': 'middle'}).html('<br/><p style="margin-top: -14px;">NAPIS REKLAMOWY 270mm x 35mm</p>');
			jQuery('#cal_img_adv4').show().height('35px').css({'top': '685px', 'color': '#ffffff', 'border-color': "#ffffff", 'vertical-align': 'middle'}).html('<br/><p style="margin-top: -14px;">NAPIS REKLAMOWY 270mm x 35mm</p>');
			if(jQuery('[name=cal_back]:checked').val() == 'wp' || jQuery('[name=cal_back]:checked').val() == '0')
				jQuery('#cal_img_adv1, #cal_img_adv2, #cal_img_adv3, #cal_img_adv3').css({'color': '#222222', 'border-color': "#222222"});
		}
	}

	if(jQuery('[name=cal_line]:checked').val() == 'gra')
		jQuery('#cal_img_head').css('background','url(/images/dzielne/'+jQuery('[name=cal_type]:checked').val()+'_g_'+jQuery('[name=cal_clock]:checked').val()+'.jpg) no-repeat center');
	else if(jQuery('[name=cal_line]:checked').val() == 'h4')
		jQuery('#cal_img_head').css('background','url(/images/dzielne/'+jQuery('[name=cal_type]:checked').val()+'_h4_'+jQuery('[name=cal_clock]:checked').val()+'.jpg) no-repeat center');
	else if(jQuery('[name=cal_line]:checked').val() == 'h12')
		jQuery('#cal_img_head').css('background','url(/images/dzielne/'+jQuery('[name=cal_type]:checked').val()+'_h12_'+jQuery('[name=cal_clock]:checked').val()+'.jpg) no-repeat center');
	else
		jQuery('#cal_img_head').css('background','url(/images/dzielne/'+jQuery('[name=cal_type]:checked').val()+'_'+jQuery('[name=cal_clock]:checked').val()+'.jpg) no-repeat center');


	if(jQuery('[name=cal_back]:checked').val() == '0' || jQuery('[name=cal_back]:checked').val() == 'wp') jQuery('#cal_img_back').css('background', '#ffffff');
	else if(jQuery('[name=cal_back]:checked').val() == '1p')
	{
		if(jQuery('[name=cal_type]:checked').val() == '1dz')
		{
			if(jQuery('[name=cal_line]:checked').val() == 'gra' && jQuery('[name=cal_clock]:checked').val() == 'nie') jQuery('#cal_img_back').css('background', '#E60D2E');
			else if(jQuery('[name=cal_line]:checked').val() == 'gra' && jQuery('[name=cal_clock]:checked').val() == 'tak') jQuery('#cal_img_back').css('background', '#E60D2E');
			else if(jQuery('[name=cal_line]:checked').val() == 'h4') jQuery('#cal_img_back').css('background', '#000000');
			else if(jQuery('[name=cal_line]:checked').val() == 'h12') jQuery('#cal_img_back').css('background', '#006EC7');
			else if(jQuery('[name=cal_clock]:checked').val() == 'tak') jQuery('#cal_img_back').css('background', '#006EC7');
			else if(jQuery('[name=cal_clock]:checked').val() == 'nie') jQuery('#cal_img_back').css('background', '#5A108B');
		}
		else if(jQuery('[name=cal_type]:checked').val() == '2dz')
		{
			if(jQuery('[name=cal_line]:checked').val() == 'gra' && jQuery('[name=cal_clock]:checked').val() == 'nie') jQuery('#cal_img_back').css('background', '#E60D2E');
			else if(jQuery('[name=cal_line]:checked').val() == 'gra' && jQuery('[name=cal_clock]:checked').val() == 'tak') jQuery('#cal_img_back').css('background', '#59178A');
			else if(jQuery('[name=cal_line]:checked').val() == 'h4') jQuery('#cal_img_back').css('background', '#5E3812');
			else if(jQuery('[name=cal_line]:checked').val() == 'h12') jQuery('#cal_img_back').css('background', '#F47F04');
			else if(jQuery('[name=cal_clock]:checked').val() == 'tak') jQuery('#cal_img_back').css('background', '#000000');
			else if(jQuery('[name=cal_clock]:checked').val() == 'nie') jQuery('#cal_img_back').css('background', '#5E3812');
		}
		else if(jQuery('[name=cal_type]:checked').val() == '3dz')
		{
			if(jQuery('[name=cal_line]:checked').val() == 'gra' && jQuery('[name=cal_clock]:checked').val() == 'nie') jQuery('#cal_img_back').css('background', '#000000');
			else if(jQuery('[name=cal_line]:checked').val() == 'gra' && jQuery('[name=cal_clock]:checked').val() == 'tak') jQuery('#cal_img_back').css('background', '#006EC7');
			else if(jQuery('[name=cal_line]:checked').val() == 'h4') jQuery('#cal_img_back').css('background', '#006EC7');
			else if(jQuery('[name=cal_line]:checked').val() == 'h12') jQuery('#cal_img_back').css('background', '#E60D2E');
			else if(jQuery('[name=cal_clock]:checked').val() == 'tak') jQuery('#cal_img_back').css('background', '#5E3812');
			else if(jQuery('[name=cal_clock]:checked').val() == 'nie') jQuery('#cal_img_back').css('background', '#5A108B');
		}
		else if(jQuery('[name=cal_type]:checked').val() == '4dz')
		{
			if(jQuery('[name=cal_clock]:checked').val() == 'tak') jQuery('#cal_img_back').css('background', '#006EC7');
			else if(jQuery('[name=cal_clock]:checked').val() == 'nie') jQuery('#cal_img_back').css('background', '#E60D2E');
		}
	}
	else if(jQuery('[name=cal_back]:checked').val() == '1k')
	{
		if(jQuery('[name=cal_type]:checked').val() == '1dz')
		{
			if(jQuery('[name=cal_line]:checked').val() == 'gra' && jQuery('[name=cal_clock]:checked').val() == 'nie') jQuery('#cal_img_back').css('background', '#337321');
			else if(jQuery('[name=cal_line]:checked').val() == 'gra' && jQuery('[name=cal_clock]:checked').val() == 'tak') jQuery('#cal_img_back').css('background', '#337321');
			else if(jQuery('[name=cal_line]:checked').val() == 'h4') jQuery('#cal_img_back').css('background', '#147290');
			else if(jQuery('[name=cal_line]:checked').val() == 'h12') jQuery('#cal_img_back').css('background', '#4F9449');
			else if(jQuery('[name=cal_clock]:checked').val() == 'tak') jQuery('#cal_img_back').css('background', '#35281F');
			else if(jQuery('[name=cal_clock]:checked').val() == 'nie') jQuery('#cal_img_back').css('background', '#DE7236');
		}
		else if(jQuery('[name=cal_type]:checked').val() == '2dz')
		{
			if(jQuery('[name=cal_line]:checked').val() == 'gra' && jQuery('[name=cal_clock]:checked').val() == 'nie') jQuery('#cal_img_back').css('background', '#C33033');
			else if(jQuery('[name=cal_line]:checked').val() == 'gra' && jQuery('[name=cal_clock]:checked').val() == 'tak') jQuery('#cal_img_back').css('background', '#656b7b');
			else if(jQuery('[name=cal_line]:checked').val() == 'h4') jQuery('#cal_img_back').css('background', '#D09662');
			else if(jQuery('[name=cal_line]:checked').val() == 'h12') jQuery('#cal_img_back').css('background', '#97C204');
			else if(jQuery('[name=cal_clock]:checked').val() == 'tak') jQuery('#cal_img_back').css('background', '#273921');
			else if(jQuery('[name=cal_clock]:checked').val() == 'nie') jQuery('#cal_img_back').css('background', '#D33952');
		}
		else if(jQuery('[name=cal_type]:checked').val() == '3dz')
		{
			if(jQuery('[name=cal_line]:checked').val() == 'gra' && jQuery('[name=cal_clock]:checked').val() == 'nie') jQuery('#cal_img_back').css('background', '#C1B0A2');
			else if(jQuery('[name=cal_line]:checked').val() == 'gra' && jQuery('[name=cal_clock]:checked').val() == 'tak') jQuery('#cal_img_back').css('background', '#52700F');
			else if(jQuery('[name=cal_line]:checked').val() == 'h4') jQuery('#cal_img_back').css('background', '#577200');
			else if(jQuery('[name=cal_line]:checked').val() == 'h12') jQuery('#cal_img_back').css('background', '#E60D2E');
			else if(jQuery('[name=cal_clock]:checked').val() == 'tak') jQuery('#cal_img_back').css('background', '#3B8CFF');
			else if(jQuery('[name=cal_clock]:checked').val() == 'nie') jQuery('#cal_img_back').css('background', '#3B8CFF');
		}
		else if(jQuery('[name=cal_type]:checked').val() == '4dz')
		{
			if(jQuery('[name=cal_clock]:checked').val() == 'tak') jQuery('#cal_img_back').css('background', '#448EB5');
			else if(jQuery('[name=cal_clock]:checked').val() == 'nie') jQuery('#cal_img_back').css('background', '#A3AC3C');
		}
	}
	else if(jQuery('[name=cal_back]:checked').val() == '2k')
	{
		if(jQuery('[name=cal_type]:checked').val() == '1dz')
		{
			if(jQuery('[name=cal_line]:checked').val() == 'gra' && jQuery('[name=cal_clock]:checked').val() == 'nie')
				jQuery('#cal_img_back').css('background', 'linear-gradient(180deg, #A0BA1A 0%, #A0BA1A 73%, #337321 73%, #337321 100%)');
			else if(jQuery('[name=cal_line]:checked').val() == 'gra' && jQuery('[name=cal_clock]:checked').val() == 'tak')
				jQuery('#cal_img_back').css('background', 'linear-gradient(180deg, #A0BA1A 0%, #A0BA1A 73%, #337321 73%, #337321 100%)');
			else if(jQuery('[name=cal_line]:checked').val() == 'h4')
				jQuery('#cal_img_back').css('background', 'linear-gradient(180deg, #2BC2F2 0%, #2BC2F2 73%, #147290 73%, #147290 100%)');
			else if(jQuery('[name=cal_line]:checked').val() == 'h12')
				jQuery('#cal_img_back').css('background', 'linear-gradient(180deg, #E2DDC2 0%, #E2DDC2 73%, #4F9449 73%, #4F9449 100%)');
			else if(jQuery('[name=cal_clock]:checked').val() == 'tak')
				jQuery('#cal_img_back').css('background', 'linear-gradient(180deg, #F2E810 0%, #F2E810 73%, #1E79EF 73%, #1E79EF 100%)');
			else if(jQuery('[name=cal_clock]:checked').val() == 'nie')
				jQuery('#cal_img_back').css('background', 'linear-gradient(180deg, #E7DA20 0%, #E7DA20 73%, #5AA21F 73%, #5AA21F 100%)');
		}
		else if(jQuery('[name=cal_type]:checked').val() == '2dz')
		{
			if(jQuery('[name=cal_line]:checked').val() == 'gra' && jQuery('[name=cal_clock]:checked').val() == 'nie')
				jQuery('#cal_img_back').css('background', 'linear-gradient(45deg, #8FCBFF 0%, #8FCBFF 50%, #17374B 50%, #17374B 100%)');
			else if(jQuery('[name=cal_line]:checked').val() == 'gra' && jQuery('[name=cal_clock]:checked').val() == 'tak')
				jQuery('#cal_img_back').css('background', 'linear-gradient(45deg, #F6AD4D 0%, #F6AD4D 50%, #C33033 50%, #C33033 100%)');
			else if(jQuery('[name=cal_line]:checked').val() == 'h4')
				jQuery('#cal_img_back').css('background', 'linear-gradient(45deg, #CCBBAB 0%, #CCBBAB 50%, #D09662 50%, #D09662 100%)');
			else if(jQuery('[name=cal_line]:checked').val() == 'h12')
				jQuery('#cal_img_back').css('background', 'linear-gradient(45deg, #D2D702 0%, #D2D702 50%, #97C204 50%, #97C204 100%)');
			else if(jQuery('[name=cal_clock]:checked').val() == 'tak')
				jQuery('#cal_img_back').css('background', 'linear-gradient(45deg, #D8BDF8 0%, #D8BDF8 50%, #6734A7 50%, #6734A7 100%)');
			else if(jQuery('[name=cal_clock]:checked').val() == 'nie')
				jQuery('#cal_img_back').css('background', 'linear-gradient(45deg, #EFB270 0%, #EFB270 50%, #C0A786 50%, #C0A786 100%)');
		}
		else if(jQuery('[name=cal_type]:checked').val() == '3dz')
		{
			if(jQuery('[name=cal_line]:checked').val() == 'gra' && jQuery('[name=cal_clock]:checked').val() == 'nie')
				jQuery('#cal_img_back').css('background', 'linear-gradient(90deg, #F2C599 0%, #F2C599 50%, #C1B0A2 50%, #C1B0A2 100%)');
			else if(jQuery('[name=cal_line]:checked').val() == 'gra' && jQuery('[name=cal_clock]:checked').val() == 'tak')
				jQuery('#cal_img_back').css('background', 'linear-gradient(90deg, #79AADB 0%, #79AADB 50%, #52700F 50%, #52700F 100%)');
			else if(jQuery('[name=cal_line]:checked').val() == 'h4')
				jQuery('#cal_img_back').css('background', 'linear-gradient(90deg, #CBC5B3 0%, #CBC5B3 50%, #577200 50%, #577200 100%)');
			else if(jQuery('[name=cal_line]:checked').val() == 'h12')
				jQuery('#cal_img_back').css('background', 'linear-gradient(90deg, #EF3D6C 0%, #EF3D6C 50%, #E60D2E 50%, #E60D2E 100%)');
			else if(jQuery('[name=cal_clock]:checked').val() == 'tak')
				jQuery('#cal_img_back').css('background', 'linear-gradient(90deg, #D7D1A4 0%, #D7D1A4 50%, #788659 50%, #788659 100%)');
			else if(jQuery('[name=cal_clock]:checked').val() == 'nie')
				jQuery('#cal_img_back').css('background', 'linear-gradient(90deg, #E7DA20 0%, #E7DA20 50%, #5AA21F 50%, #5AA21F 100%)');
		}
		else if(jQuery('[name=cal_type]:checked').val() == '4dz')
		{
			if(jQuery('[name=cal_clock]:checked').val() == 'tak')
				jQuery('#cal_img_back').css('background', 'linear-gradient(135deg, #448EB5 0%, #448EB5 50%, #006EC7 50%, #006EC7 100%)');
			else if(jQuery('[name=cal_clock]:checked').val() == 'nie')
				jQuery('#cal_img_back').css('background', 'linear-gradient(135deg, #A3AC3C 0%, #A3AC3C 50%, #E60D2E 50%, #E60D2E 100%)');
		}
	}
	else if(jQuery('[name=cal_back]:checked').val() == '4k')
	{
		jQuery('#cal_img_back').css('background', 'url(/images/dzielne/back_all.png) center center');
		/*if(jQuery('[name=cal_line]:checked').val() == 'gra')
			jQuery('#cal_img_back').css('background', 'url(/images/dzielne/back_'+jQuery('[name=cal_type]:checked').val()+'_'+jQuery('[name=cal_clock]:checked').val()+'_g.jpg) bottom center');
		else if(jQuery('[name=cal_line]:checked').val() == 'h4')
			jQuery('#cal_img_back').css('background', 'url(/images/dzielne/back_'+jQuery('[name=cal_type]:checked').val()+'_h4.jpg) bottom center');
		else if(jQuery('[name=cal_line]:checked').val() == 'h12')
			jQuery('#cal_img_back').css('background', 'url(/images/dzielne/back_'+jQuery('[name=cal_type]:checked').val()+'_h12.jpg) bottom center');
		else
			jQuery('#cal_img_back').css('background', 'url(/images/dzielne/back_'+jQuery('[name=cal_type]:checked').val()+'_'+jQuery('[name=cal_clock]:checked').val()+'.jpg) bottom center');*/
	}
}

spec();
function spec()
{
	if(jQuery('[name=cal_type]:checked').val() == '1dz') jQuery('#spec_type').text('jednodzielny');
	else if(jQuery('[name=cal_type]:checked').val() == '2dz') jQuery('#spec_type').text('dwudzielny');
	else if(jQuery('[name=cal_type]:checked').val() == '3dz') jQuery('#spec_type').text('trójdzielny');
	else if(jQuery('[name=cal_type]:checked').val() == '4dz') jQuery('#spec_type').text('czterodzielny');

	if(jQuery('[name=cal_line]:checked').val() == 'eko') jQuery('#spec_line').text('eko');
	else if(jQuery('[name=cal_line]:checked').val() == 'mid') jQuery('#spec_line').text('middle');
	else if(jQuery('[name=cal_line]:checked').val() == 'pre') jQuery('#spec_line').text('premium');
	else if(jQuery('[name=cal_line]:checked').val() == 'gra') jQuery('#spec_line').text('grand');
	else if(jQuery('[name=cal_line]:checked').val() == 'h4') jQuery('#spec_line').text('4-główkowy');
	else if(jQuery('[name=cal_line]:checked').val() == 'h12') jQuery('#spec_line').text('12-główkowy');

	if(jQuery('[name=cal_line]:checked').val() == 'eko') jQuery('#spec_head').text('4+0, 230 g/m2, nie jest foliowana, płaska, bez efektu wypukłości');
	else if(jQuery('[name=cal_line]:checked').val() == 'mid') jQuery('#spec_head').text('4+0, 230 g/m2, foliowana, płaska, bez efektu wypukłości');
	else if(jQuery('[name=cal_line]:checked').val() == 'pre') jQuery('#spec_head').text('4+0, 200 g/m2, foliowana, wypukła');
	else if(jQuery('[name=cal_line]:checked').val() == 'gra') jQuery('#spec_head').text('4+0, 200 g/m2, foliowana, wypukła');
	else if(jQuery('[name=cal_line]:checked').val() == 'h4') jQuery('#spec_head').text('4 plansze, 4+0, 200 g/m2, kreda błysk, spiralowana z zawieszką od góry');
	else if(jQuery('[name=cal_line]:checked').val() == 'h12') jQuery('#spec_head').text('12 plansz, 4+0, 200 g/m2, kreda błysk, spiralowana z zawieszką od góry');

	if(jQuery('[name=cal_back]:checked').val() == '0') jQuery('#spec_back').text('biały niezadrukowany');
	else if(jQuery('[name=cal_back]:checked').val() == 'wp') jQuery('#spec_back').text('biały niezadrukowany + napisy 1 kolor sito');
	else if(jQuery('[name=cal_back]:checked').val() == '1p') jQuery('#spec_back').text('1 kolor sito - PANTONE niedobierany, gotowy - dostępne: żółty(PANTONE 102C), fioletowy(PANTONE 267C), czerwony(PANTONE 185C), niebieski(PANTONE 300C), zielony(PANTONE 348C), pomarańczowy(PANTONE 1505C), brązowy(PANTONE 161C), czarny(PANTONE BlackC)');
	else if(jQuery('[name=cal_back]:checked').val() == '1k') jQuery('#spec_back').text('apla 1 kolor sito + białe napisy');
	else if(jQuery('[name=cal_back]:checked').val() == '2k') jQuery('#spec_back').text('2 kolory sito');
	else if(jQuery('[name=cal_back]:checked').val() == '3k') jQuery('#spec_back').text('3 kolory sito');
	else if(jQuery('[name=cal_back]:checked').val() == '4k') jQuery('#spec_back').text('4 kolory CMYK');

	if(jQuery('[name=cal_advert]:checked').val() == '0') jQuery('#spec_adv').text('brak reklam pod kalendarium/kalendariami');
	else if(jQuery('[name=cal_type]:checked').val() == '1dz' && jQuery('[name=cal_advert]:checked').val() == '1m')
		jQuery('#spec_adv').text('napis reklamowy pod kalendarium 270mm x 60mm');
	else if(jQuery('[name=cal_type]:checked').val() == '1dz' && jQuery('[name=cal_advert]:checked').val() == '1d')
		jQuery('#spec_adv').text('napis reklamowy pod kalendarium 270mm x 150mm');
	else if(jQuery('[name=cal_type]:checked').val() == '2dz' && jQuery('[name=cal_advert]:checked').val() == '1')
		jQuery('#spec_adv').text('napis reklamowy pod dolnym kalendarium 270mm x 35mm');
	else if(jQuery('[name=cal_type]:checked').val() == '3dz' && jQuery('[name=cal_advert]:checked').val() == '1')
		jQuery('#spec_adv').text('napis reklamowy pod ostatnim kalendarium 270mm x 100mm');
	else if(jQuery('[name=cal_type]:checked').val() == '3dz' && jQuery('[name=cal_advert]:checked').val() == '3')
		jQuery('#spec_adv').text('napisy reklamowe pod każdym kalendarium 270mm x 35mm');
	else if(jQuery('[name=cal_type]:checked').val() == '4dz' && jQuery('[name=cal_advert]:checked').val() == '1')
		jQuery('#spec_adv').text('napisy reklamowe pod każdym kalendarium 270mm x 35mm');
	else if(jQuery('[name=cal_type]:checked').val() == '4dz' && jQuery('[name=cal_advert]:checked').val() == '1')
		jQuery('#spec_adv').text('napisy reklamowe pod ostatnim kalendarium 270mm x 140mm');

	if(jQuery('[name=cal_calm]:checked').val() == '2')
		jQuery('#spec_calm').text('papier offsetowy 80 g/m2 biały - wymiary 270 mm x 150 mm - środkowe kalendarium z dodatkowym poddrukiem (tło w kolorze bladożółtym) - polskie święta - polskie imiona - nazwy miesięcy i dni w językach: polskim, angielskim, niemieckim i rosyjskim - czerwone: niedziele i święta polskie - soboty: szare - czarne: pozostałe dni');
	else if(jQuery('[name=cal_calm]:checked').val() == '3')
		jQuery('#spec_calm').text('papier offsetowy 80 g/m2 biały - wymiary 270 mm x 150 mm - środkowe kalendarium z dodatkowym poddrukiem (tło w kolorze bladożółtym) - polskie święta - polskie imiona - nazwy miesięcy i dni w językach: polskim, angielskim, niemieckim i rosyjskim - czerwone: niedziele i święta polskie - czarne: pozostałe dni');
	else if(jQuery('[name=cal_calm]:checked').val() == '4')
		jQuery('#spec_calm').text('papier offsetowy 80 g/m2 biały - wymiary 270 mm x 150 mm - środkowe kalendarium z dodatkowym poddrukiem w kolorze szarym - polskie i międzynarodowe święta - polskie imiona - nazwy miesięcy i dni w językach: polskim, angielskim, niemieckim i rosyjskim - czerwone: niedziele i święta polskie - soboty: szare - pozostałe dni: czarne; czerwonym nadrukiem z symbolem kraju oznaczone święta w większości krajów Europy');
		else if(jQuery('[name=cal_calm]:checked').val() == '4')
		jQuery('#spec_calm').text('papier offsetowy 80 g/m2 biały - wymiary 270 mm x 150 mm - środkowe kalendarium z dodatkowym poddrukiem w kolorze szarym - polskie święta - polskie imiona - nazwy miesięcy i dni w językach: polskim, angielskim, niemieckim i rosyjskim - czerwone: niedziele i święta polskie - soboty: szare - pozostałe dni: czarne; numeracja dni roku');
	else if(jQuery('[name=cal_calm]:checked').val() == '1' && jQuery('[name=cal_type]:checked').val() == '3dz')
		jQuery('#spec_calm').text('papier offsetowy 80 g/m2 biały - wymiary 270 mm x 150 mm - środkowe kalendarium z dodatkowym poddrukiem (tło w kolorze bladożółtym) - polskie święta - polskie imiona - nazwy miesięcy i dni w językach: polskim, angielskim, niemieckim i rosyjskim - czerwone: niedziele i święta polskie - niebieskie: soboty - czarne: pozostałe dni');
	else if(jQuery('[name=cal_calm]:checked').val() == '1' && jQuery('[name=cal_type]:checked').val() == '2dz')
		jQuery('#spec_calm').text('papier offsetowy 80 g/m2 biały - górne kalendarium wymiary 270 mm x 195 mm, miesiąc bieżacy, z imionami; nazwy miesięcy i dni roku w językach: polskim, angielskim, niemieckim i rosyjskim (tło w kolorze bladożółtym) - dolne kalendarium wymiary 270 mm x 150 mm, dwumiesięczne (miesiąc poprzedni i następny) z dodatkowym poddrukiem (tło w kolorze bladożółtym), bez imion - polskie święta, polskie imiona, czerwone: niedziele i święta polskie, szare - soboty, czarne - pozostałe dni');
	else if(jQuery('[name=cal_calm]:checked').val() == '1' && jQuery('[name=cal_type]:checked').val() == '1dz')
		jQuery('#spec_calm').text('papier offsetowy 80 g/m2 biały - wymiary 270 mm x 205 mm, miesiąc bieżacy, z imionami; nazwy miesięcy i dni roku w językach: polskim, angielskim, niemieckim i rosyjskim - polskie święta, polskie imiona, czerwone: niedziele i święta polskie, szare - soboty, czarne - pozostałe dni');
	else if(jQuery('[name=cal_calm]:checked').val() == '1' && jQuery('[name=cal_type]:checked').val() == '4dz')
		jQuery('#spec_calm').text('papier offsetowy 80 g/m2 biały - wymiary 310 mm x 150 mm - kalendarium z miesiącem bieżącym z dodatkowym poddrukiem (tło w kolorze szarym) - nazwy miesięcy i dni roku w językach: polskim, angielskim, niemieckim i rosyjskim - polskie święta, polskie imiona, czerwone: niedziele i święta polskie, szare - soboty, czarne - pozostałe dni');

	if(jQuery('[name=cal_conn]:checked').val() == 'big')
		jQuery('#spec_conn').text('główka doklejana do bigowanych plecek - w przypadku kalendarzy w linii eko plecki i główka drukowane jako całość bez doklejania');
	else if(jQuery('[name=cal_conn]:checked').val() == 'spi') jQuery('#spec_conn').text('elementy kalendarza łączone spiralą');

	if(jQuery('[name=cal_clock]:checked').val() == '0') jQuery('#spec_clk').text('brak');
	else if(jQuery('[name=cal_clock]:checked').val() == 'tak') jQuery('#spec_clk').text('zamontowany na główce kalendarza');

	if(jQuery('[name=cal_gd]:checked').val() == 0) jQuery('#spec_graph').text('projekt klienta plik zamknięty - PDF produkcyjny');
	else if(jQuery('[name=cal_gd]:checked').val() == 120)
		jQuery('#spec_graph').text('prosta praca zgodnie z sugestiami klienta (2 warianty, wykonane z tych samych elementów graficznych), napisy + zdjęcie (kadrowanie, bez skomplikowanej obróbki) + logo bez odrysowywania, nanoszenie zmian nie więcej niż dwukrotne');
	else if(jQuery('[name=cal_gd]:checked').val() == 180)
		jQuery('#spec_graph').text('nieskomplikowana praca zgodnie z sugestiami klienta  (2 warianty, wykonane z tych samych elementów  graficznych), napisy + zdjęcia (2-3, ewentualny montaż, bez skomplikowanej obróbki) + logo z ewentualnym odrysowywaniem, nanoszenie zmian nie więcej niż dwukrotne');
	else if(jQuery('[name=cal_gd]:checked').val() == 250)
		jQuery('#spec_graph').text('średnioskomplikowana praca (2 propozycje układu graficznego), obróbka zdjęć i elementów graficznych (logo z ewentualnym odrysowywaniem');
	else if(jQuery('[name=cal_gd]:checked').val() == 450)
		jQuery('#spec_graph').text('projekt graficzny (2-3 propozycje układu graficznego wykonane niezależnie przez 2 grafików), przekazanie plików i praw autorskich do wykonanego projektu - możliwość wydruku kalendarza w 2 wariantach (2 różne główki, plecki te same) - elektroniczna kartka');
}

pay();
function pay()
{
	var cost = 8.10, extra = 0.00;
    var edition = new Array();
    if(jQuery('[name=cal_line]:checked').val() != 'mid')
    {
        edition[50] = 0; edition[100] = 18.00; edition[150] = 35.00; edition[200] = 41.00; edition[250] = 46.00; edition[300] = 47.45;
        edition[400] = 49.00; edition[500] = 51.00; edition[600] = 52.60; edition[700] = 53.65; edition[800] = 54.20; edition[900] = 55.30;
        edition[1000] = 56.35; edition[1500] = 56.95; edition[2000] = 58.00; edition[3000] = 59.00; edition[5000] = 60.00;
    }
    else
    {
        edition[50] = 0; edition[100] = 35.00; edition[150] = 52.00; edition[200] = 58.00; edition[250] = 63.00; edition[300] = 65.00;
        edition[400] = 67.00; edition[500] = 69.00; edition[600] = 71.00; edition[700] = 72.00; edition[800] = 73.00; edition[900] = 74.00;
        edition[1000] = 75.00; edition[1500] = 76.00; edition[2000] = 77.00; edition[3000] = 78.00; edition[5000] = 79.00;
    }

    var type_2 = 13.00; var type_3 = 23.00; var type_4 = 55.00; var line_m = 24.00; var line_p = 32.00; var line_g = 48.00; var width = 0.05; var clock = 5.00;
    var helix = new Array(); helix['1dz'] = 0.60; helix['2dz'] = 0.80; helix['3dz'] = 1.00; helix['4dz'] = 1.20;
    var back = new Array(); back['1p'] = 10.00; back['wp'] = 0.00; back['1k'] = 12.00; back['2k'] = 24.00; back['3k'] = 40.00; back['4k'] = 47.00;
    var adv = 4.00;
	var extra = 0.00;



	if(jQuery('[name=cal_type]:checked').val() == '2dz') cost = parseFloat(cost) + parseFloat(cost * (type_2/100));
    else if(jQuery('[name=cal_type]:checked').val() == '3dz') cost = parseFloat(cost) + parseFloat(cost * (type_3/100));
    else if(jQuery('[name=cal_type]:checked').val() == '4dz') cost = parseFloat(cost) + parseFloat(cost * (type_4/100));

    if(jQuery('[name=cal_line]:checked').val() == 'mid') cost = parseFloat(cost) + parseFloat(cost * (line_m/100));
    else if(jQuery('[name=cal_line]:checked').val() == 'pre') cost = parseFloat(cost) + parseFloat(cost * (line_p/100));
    else if(jQuery('[name=cal_line]:checked').val() == 'gra') cost = parseFloat(cost) + parseFloat(cost * (line_g/100));
	else if(jQuery('[name=cal_line]:checked').val() == 'h4') cost = parseFloat(cost) + parseFloat(cost * (line_p/100)) + 2.50;
	else if(jQuery('[name=cal_line]:checked').val() == 'h12') cost = parseFloat(cost) + parseFloat(cost * (line_p/100)) + 6.50;


    if(jQuery('[name=cal_width]:checked').val() == 'sze') extra = parseFloat(extra) + parseFloat(width);
    if(jQuery('[name=cal_conn]:checked').val() == 'spi') extra = parseFloat(extra) + parseFloat(helix[jQuery('[name=cal_type]:checked').val()]);
    if(jQuery('[name=cal_clock]:checked').val() == 'tak') extra = parseFloat(extra) + parseFloat(clock);

    if(jQuery('[name=cal_advert]:checked').val() != '0') cost = parseFloat(cost) + parseFloat(cost * (adv/100));

    if(jQuery('[name=cal_back]:checked').val() != '0') cost = parseFloat(cost) + parseFloat(cost * ((back[jQuery('[name=cal_back]:checked').val()])/100));

    if(jQuery('[name=cal_pack]:checked').val() == '0') extra = parseFloat(extra); else if(jQuery('[name=cal_pack]:checked').val() == 'kp') extra = parseFloat(extra) + 0.30;
    else if(jQuery('[name=cal_pack]:checked').val() == 'kf') extra = parseFloat(extra) + 0.20; else if(jQuery('[name=cal_pack]:checked').val() == 'e') extra = parseFloat(extra) + 0.85;
    else if(jQuery('[name=cal_pack]:checked').val() == 'p') extra = parseFloat(extra);
	/*
	if(issue > 300 && issue <= 700) { clock = 4.90; helix['1dz'] = 0.17; helix['2dz'] = 0.27; helix['3dz'] = 0.39; helix['4dz'] = 0.43; }
	else if(issue > 700 && issue >= 1000) { clock = 4.85; helix['1dz'] = 0.16; helix['2dz'] = 0.26; helix['3dz'] = 0.38; helix['4dz'] = 0.42; }
	else if (issue > 1000) { clock = 4.75; helix['1dz'] = 0.15; helix['2dz'] = 0.25; helix['3dz'] = 0.37; helix['4dz'] = 0.41; }
	*/
	jQuery('#50').text(parseFloat(_round(cost, 2) + parseFloat(extra)).toFixed(2)+' PLN');
    jQuery('#100').text(parseFloat(_round((cost * ((100 - edition[100])/100)) , 2)  + parseFloat(extra)).toFixed(2)+' PLN');
    jQuery('#150').text(parseFloat(_round((cost * ((100 - edition[150])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
    jQuery('#200').text(parseFloat(_round((cost * ((100 - edition[200])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
    jQuery('#250').text(parseFloat(_round((cost * ((100 - edition[250])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
    jQuery('#300').text(parseFloat(_round((cost * ((100 - edition[300])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');

	if(jQuery('[name=cal_conn]:checked').val() != 'spi' && jQuery('[name=cal_clock]:checked').val() != 'tak')
    {
		jQuery('#400').text(parseFloat(_round((cost * ((100 - edition[400])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#500').text(parseFloat(_round((cost * ((100 - edition[500])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#600').text(parseFloat(_round((cost * ((100 - edition[600])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#700').text(parseFloat(_round((cost * ((100 - edition[700])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#800').text(parseFloat(_round((cost * ((100 - edition[800])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#900').text(parseFloat(_round((cost * ((100 - edition[900])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#1000').text(parseFloat(_round((cost * ((100 - edition[1000])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#1500').text(parseFloat(_round((cost * ((100 - edition[1500])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#2000').text(parseFloat(_round((cost * ((100 - edition[2000])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#3000').text(parseFloat(_round((cost * ((100 - edition[3000])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#5000').text(parseFloat(_round((cost * ((100 - edition[5000])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
	}
	else if(jQuery('[name=cal_conn]:checked').val() != 'spi' && jQuery('[name=cal_clock]:checked').val() == 'tak')
    {
		extra = parseFloat(extra) - 0.10;
		jQuery('#400').text(parseFloat(_round((cost * ((100 - edition[400])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#500').text(parseFloat(_round((cost * ((100 - edition[500])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#600').text(parseFloat(_round((cost * ((100 - edition[600])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#700').text(parseFloat(_round((cost * ((100 - edition[700])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		extra = parseFloat(extra) - 0.15;
		jQuery('#800').text(parseFloat(_round((cost * ((100 - edition[800])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#900').text(parseFloat(_round((cost * ((100 - edition[900])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#1000').text(parseFloat(_round((cost * ((100 - edition[1000])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		extra = parseFloat(extra) - 0.25;
		jQuery('#1500').text(parseFloat(_round((cost * ((100 - edition[1500])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#2000').text(parseFloat(_round((cost * ((100 - edition[2000])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#3000').text(parseFloat(_round((cost * ((100 - edition[3000])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#5000').text(parseFloat(_round((cost * ((100 - edition[5000])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
	}
	else if(jQuery('[name=cal_conn]:checked').val() == 'spi' && jQuery('[name=cal_clock]:checked').val() != 'tak')
	{
		extra = parseFloat(extra) - 0.01;
		jQuery('#400').text(parseFloat(_round((cost * ((100 - edition[400])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#500').text(parseFloat(_round((cost * ((100 - edition[500])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#600').text(parseFloat(_round((cost * ((100 - edition[600])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#700').text(parseFloat(_round((cost * ((100 - edition[700])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		extra = parseFloat(extra) - 0.02;
		jQuery('#800').text(parseFloat(_round((cost * ((100 - edition[800])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#900').text(parseFloat(_round((cost * ((100 - edition[900])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#1000').text(parseFloat(_round((cost * ((100 - edition[1000])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		extra = parseFloat(extra) - 0.03;
		jQuery('#1500').text(parseFloat(_round((cost * ((100 - edition[1500])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#2000').text(parseFloat(_round((cost * ((100 - edition[2000])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#3000').text(parseFloat(_round((cost * ((100 - edition[3000])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#5000').text(parseFloat(_round((cost * ((100 - edition[5000])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
	}
	else if(jQuery('[name=cal_conn]:checked').val() == 'spi' && jQuery('[name=cal_clock]:checked').val() == 'tak')
	{
		extra = parseFloat(extra) - 0.11;
		jQuery('#400').text(parseFloat(_round((cost * ((100 - edition[400])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#500').text(parseFloat(_round((cost * ((100 - edition[500])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#600').text(parseFloat(_round((cost * ((100 - edition[600])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#700').text(parseFloat(_round((cost * ((100 - edition[700])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		extra = parseFloat(extra) - 0.17;
		jQuery('#800').text(parseFloat(_round((cost * ((100 - edition[800])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#900').text(parseFloat(_round((cost * ((100 - edition[900])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#1000').text(parseFloat(_round((cost * ((100 - edition[1000])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		extra = parseFloat(extra) - 0.28;
		jQuery('#1500').text(parseFloat(_round((cost * ((100 - edition[1500])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#2000').text(parseFloat(_round((cost * ((100 - edition[2000])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#3000').text(parseFloat(_round((cost * ((100 - edition[3000])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
		jQuery('#5000').text(parseFloat(_round((cost * ((100 - edition[5000])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
	}

    if(jQuery('[name=cal_gd]:checked').val() == 0) jQuery('#pay_graph').text('0.00 PLN');
	else if(jQuery('[name=cal_gd]:checked').val() == 120) jQuery('#pay_graph').text('120.00 PLN');
	else if(jQuery('[name=cal_gd]:checked').val() == 180) jQuery('#pay_graph').text('180.00 PLN');
	else if(jQuery('[name=cal_gd]:checked').val() == 250) jQuery('#pay_graph').text('250.00 PLN');
	else if(jQuery('[name=cal_gd]:checked').val() == 450) jQuery('#pay_graph').text('450.00 PLN');
    if(jQuery('[name=cal_copy]:checked').val() == '0') jQuery('#pay_proof').text('0.00 PLN');
	else if(jQuery('[name=cal_copy]:checked').val() == 'tak') jQuery('#pay_proof').text('40.00 PLN');


    var v1 = v2 = iss, w = 0.00;

    if(jQuery('[name=cal_type]:checked').val() == '1dz') w = 0.14;
	else if(jQuery('[name=cal_type]:checked').val() == '2dz') w = 0.16;
	else if(jQuery('[name=cal_type]:checked').val() == '3dz') w = 0.20;
	else if(jQuery('[name=cal_type]:checked').val() == '3dz') w = 0.24;

	if(jQuery('[name=cal_type]:checked').val() == 'm') w = parseFloat(w) + parseFloat(w * 0.07);
	else if(jQuery('[name=cal_type]:checked').val() == 'p') w = parseFloat(w) + parseFloat(w * 0.12);
    else if(jQuery('[name=cal_type]:checked').val() == 'g') w = parseFloat(w) + parseFloat(w * 0.15);

	if(jQuery('[name=cal_width]:checked').val() == 'sze') w = parseFloat(w) + parseFloat(w * 0.07);

	if(jQuery('[name=cal_conn]:checked').val() == 'spi') w = parseFloat(w) + 0.01;

	if(jQuery('[name=cal_clock]:checked').val() == 'tak') w = parseFloat(w) + 0.04;

	if(jQuery('[name=cal_advert]:checked').val() != '0') w = parseFloat(w * 1.02);

    if(jQuery('[name=cal_pack]:checked').val() == 'kp') w = parseFloat(w) + 0.03;
	else if(jQuery('[name=cal_pack]:checked').val() == 'kf') w = parseFloat(w) + 0.01;
	else if(jQuery('[name=cal_pack]:checked').val() == 'e') w = parseFloat(w) + 0.09;
    else if(jQuery('[name=cal_pack]:checked').val() == 'p') w = parseFloat(w) + 0.11;

    v1 = v1.split('id'); v1 = parseFloat(v1[1]).toFixed(0); v2 = jQuery('#'+v1).text(); v2 = v2.split(' '); v2 = parseFloat(v2[0]).toFixed(2);
    jQuery('#pay_issue').text(parseFloat(v1*v2).toFixed(2) + ' PLN'); jQuery('#pay_discount').text(parseFloat(v1*v2).toFixed(2) + ' PLN');
    if(jQuery('[name=cal_pay]:checked').val() == 50)
    {
        var m; m =  jQuery('#pay_issue').text(); m = m.split(' ');
        jQuery('#pay_discount').text(parseFloat(m[0]*0.975).toFixed(2)+' PLN');
    }
    else if(jQuery('[name=cal_pay]:checked').val() == 100)
    {
        var m; m =  jQuery('#pay_issue').text(); m = m.split(' ');
        jQuery('#pay_discount').text(parseFloat(m[0]*0.95).toFixed(2)+' PLN');
    }

	if(jQuery('[name=cal_clock]:checked').val() == 'tak')
	{ jQuery('#pay_weight').text(parseFloat(w * v1).toFixed(2)+' kg'); jQuery('#pay_pack').text(Math.ceil(parseFloat(v1 / 50)).toFixed(0)+' szt.'); }
	else
	{
		if(jQuery('[name=cal_pack]:checked').val() == 'e')
		{ jQuery('#pay_weight').text(parseFloat(w * v1).toFixed(2)+' kg'); jQuery('#pay_pack').text(Math.ceil(parseFloat(v1 / 70)).toFixed(0)+' szt.'); }
		else
		{
			if(jQuery('[name=cal_type]:checked').val() == '4dz')
			{ jQuery('#pay_weight').text(parseFloat(w * v1).toFixed(2)+' kg'); jQuery('#pay_pack').text(Math.ceil(parseFloat(v1 / 90)).toFixed(0)+' szt.'); }
			else if(jQuery('[name=cal_type]:checked').val() == '3dz')
			{ jQuery('#pay_weight').text(parseFloat(w * v1).toFixed(2)+' kg'); jQuery('#pay_pack').text(Math.ceil(parseFloat(v1 / 110)).toFixed(0)+' szt.'); }
			else if(jQuery('[name=cal_type]:checked').val() == '2dz')
			{ jQuery('#pay_weight').text(parseFloat(w * v1).toFixed(2)+' kg'); jQuery('#pay_pack').text(Math.ceil(parseFloat(v1 / 150)).toFixed(0)+' szt.'); }
			else if(jQuery('[name=cal_type]:checked').val() == '1dz')
			{ jQuery('#pay_weight').text(parseFloat(w * v1).toFixed(2)+' kg'); jQuery('#pay_pack').text(Math.ceil(parseFloat(v1 / 230)).toFixed(0)+' szt.'); }
		}
	}

    if(jQuery('[name=cal_trans]:checked').val() == 'o') jQuery('#pay_trans').text('0.00 PLN');
	else if(jQuery('[name=cal_trans]:checked').val() == 'k')
	{ var log =  jQuery('#pay_pack').text(); log = log.split(' '); log = log[0]; jQuery('#pay_trans').text(parseFloat(log * 10.00).toFixed() +'.00 PLN'); }
    else if(jQuery('[name=cal_trans]:checked').val() == 'i')
	{ var log =  jQuery('#pay_pack').text(); log = log.split(' '); log = log[0]; jQuery('#pay_trans').text(parseFloat(log * 23.00).toFixed() +'.00 PLN'); }

    var x, y = 0.00;
    y = jQuery('#pay_discount').text(); y = y.split(' '); x = parseFloat(y[0]);
    y = jQuery('#pay_graph').text(); y = y.split(' '); x = parseFloat(x) + parseFloat(y[0]);
    y = jQuery('#pay_proof').text(); y = y.split(' '); x = parseFloat(x) + parseFloat(y[0]);
    y = jQuery('#pay_trans').text(); y = y.split(' '); x = parseFloat(x) + parseFloat(y[0]);

    jQuery('#pay_netto').text(parseFloat(x).toFixed(2) + ' PLN');
    jQuery('#pay_tax').text(parseFloat(x * 0.23).toFixed(2) + ' PLN'); y = jQuery('#pay_tax').text(); y = y.split(' '); x = parseFloat(x) + parseFloat(y[0]);
    jQuery('#pay_brutto').text(parseFloat(x).toFixed(2) + ' PLN');
}
