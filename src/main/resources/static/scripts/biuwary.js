var iss = 'id10';
function _round(_num, _dec) { return parseFloat(Math.round(_num * Math.pow(10, _dec)) / Math.pow(10, _dec)); }



jQuery('[name^=cal_]').bind('change', function() {
//    jQuery('label[for^='+jQuery(this).attr('name')+']').removeClass('checked'); jQuery('label[for='+jQuery(this).attr('id')+']').addClass('checked');
	config(); img(); spec(); pay(); });

jQuery('.offer_pay tr[class^=id]').bind('click', function() {
    jQuery('.offer_pay tr[class^=id]').removeClass('checked'); jQuery('.offer_pay tr[class='+jQuery(this).attr('class')+']').addClass('checked'); iss = jQuery(this).attr('class'); pay(); });


config();
function config()
{
	if(jQuery('[name=cal_pay]:checked').val() == 50 || jQuery('[name=cal_pay]:checked').val() == 100)
	{ jQuery('#pay_discount_row').show(); jQuery('#pay_issue').css('text-decoration', 'line-through'); }
    else { jQuery('#pay_discount_row').hide(); jQuery('#pay_issue').css('text-decoration', 'none'); }
}

img();
function img()
{
    if(jQuery('[name=cal_corn]:checked').val() == 'z'){
        jQuery('#cal_img_body').css('border-radius','15px');
    }
    else if (jQuery('[name=cal_corn]:checked').val() == 'p'){
        jQuery('#cal_img_body').css('border-radius','0px');
    }
	if(jQuery('[name=cal_size]:checked').val() == 'b2')
	{
		jQuery('#cal_img_width, #cal_img_body').css('width', '353px'); jQuery('#cal_img_height, #cal_img_body').css('height', '250px');
		jQuery('#cal_img_width').css('background', 'url(/images/biuwary/w707.jpg)');
		jQuery('#cal_img_height').css('background', 'url(/images/biuwary/h500.jpg)');
	}
	else if(jQuery('[name=cal_size]:checked').val() == 'a2')
	{
		jQuery('#cal_img_width, #cal_img_body').css('width', '297px'); jQuery('#cal_img_height, #cal_img_body').css('height', '210px');
		jQuery('#cal_img_width').css('background', 'url(/images/biuwary/w594.jpg)');
		jQuery('#cal_img_height').css('background', 'url(/images/biuwary/h420.jpg)');
	}
	else if(jQuery('[name=cal_size]:checked').val() == 'b3')
	{
		jQuery('#cal_img_width, #cal_img_body').css('width', '250px'); jQuery('#cal_img_height, #cal_img_body').css('height', '177px');
		jQuery('#cal_img_width').css('background', 'url(/images/biuwary/w500.jpg)');
		jQuery('#cal_img_height').css('background', 'url(/images/biuwary/h353.jpg)');
	}
	else if(jQuery('[name=cal_size]:checked').val() == 'a3')
	{
		jQuery('#cal_img_width, #cal_img_body').css('width', '210px'); jQuery('#cal_img_height, #cal_img_body').css('height', '149px');
		jQuery('#cal_img_width').css('background', 'url(/images/biuwary/w420.jpg)');
		jQuery('#cal_img_height').css('background', 'url(/images/biuwary/h297.jpg)');
	}
	jQuery('#cal_img_body').css('background', 'url(/images/biuwary/'+jQuery('[name=cal_size]:checked').val()+'_'+jQuery('[name=cal_corn]:checked').val()+'.jpg)');
}

spec();
function spec()
{
	if(jQuery('[name=cal_size]:checked').val() == 'a2') jQuery('#spec_size').text('A2 - 594mm x 420mm');
	else if(jQuery('[name=cal_size]:checked').val() == 'b3') jQuery('#spec_size').text('B3 - 500mm x 353mm');
	else if(jQuery('[name=cal_size]:checked').val() == 'a3') jQuery('#spec_size').text('A3 - 420mm x 297mm');
	else if(jQuery('[name=cal_size]:checked').val() == 'b2') jQuery('#spec_size').text('A3 - 707mm x 500mm');
	
	if(jQuery('[name=cal_card]:checked').val() == '26') jQuery('#spec_card').text('26 kartek');
	else if(jQuery('[name=cal_card]:checked').val() == '52') jQuery('#spec_card').text('52 kartki');
	
	if(jQuery('[name=cal_corn]:checked').val() == 'p') jQuery('#spec_corn').text('prostokątne');
	else if(jQuery('[name=cal_corn]:checked').val() == 'z') jQuery('#spec_corn').text('zaokrąglone');

	if(jQuery('[name=cal_graph]:checked').val() == 0)
		jQuery('#spec_graph').text('projekt klienta plik zamknięty - PDF produkcyjny');
	else if(jQuery('[name=cal_graph]:checked').val() == 1)
		jQuery('#spec_graph').text('prosta praca zgodnie z sugestiami klienta (2 warianty, wykonane z tych samych elementów graficznych), napisy + zdjęcie (kadrowanie, bez skomplikowanej obróbki) + logo bez odrysowywania, nanoszenie zmian nie więcej niż dwukrotne');
	else if(jQuery('[name=cal_graph]:checked').val() == 2)
		jQuery('#spec_graph').text('nieskomplikowana praca zgodnie z sugestiami klienta  (2 warianty, wykonane z tych samych elementów  graficznych), napisy + zdjęcia (2-3, ewentualny montaż, bez skomplikowanej obróbki) + logo z ewentualnym odrysowywaniem, nanoszenie zmian nie więcej niż dwukrotne');
}

pay();
function pay()
{
	var cal = new Array();

	cal['a226p10']=54.68;cal['a226z10']=56.31;cal['a252p10']=60.22;cal['a252z10']=61.52;
	cal['a226p20']=29.78;cal['a226z20']=30.54;cal['a252p20']=34.56;cal['a252z20']=35.32;
	cal['a226p30']=20.69;cal['a226z30']=21.25;cal['a252p30']=25.80;cal['a252z30']=26.29;
	cal['a226p40']=16.62;cal['a226z40']=17.09;cal['a252p40']=21.50;cal['a252z40']=21.95;
	cal['a226p50']=14.09;cal['a226z50']=14.43;cal['a252p50']=18.27;cal['a252z50']=18.66;
	cal['a226p60']=12.47;cal['a226z60']=12.81;cal['a252p60']=16.92;cal['a252z60']=17.22;
	cal['a226p70']=11.28;cal['a226z70']=11.60;cal['a252p70']=15.69;cal['a252z70']=15.99;
	cal['a226p80']=10.43;cal['a226z80']=10.71;cal['a252p80']=15.00;cal['a252z80']=15.26;
	cal['a226p90']=9.74;cal['a226z90']=10.00;cal['a252p90']=14.24;cal['a252z90']=14.50;
	cal['a226p100']=9.25;cal['a226z100']=9.51;cal['a252p100']=13.47;cal['a252z100']=13.70;
	cal['a226p200']=6.94;cal['a226z200']=7.12;cal['a252p200']=11.20;cal['a252z200']=11.37;
	cal['a226p300']=6.16;cal['a226z300']=6.33;cal['a252p300']=10.44;cal['a252z300']=10.60;
	cal['a226p400']=5.78;cal['a226z400']=5.93;cal['a252p400']=10.05;cal['a252z400']=10.20;
	cal['a226p500']=5.54;cal['a226z500']=5.69;cal['a252p500']=9.82;cal['a252z500']=9.97;
	cal['a226p600']=5.39;cal['a226z600']=5.53;cal['a252p600']=9.67;cal['a252z600']=9.82;
	cal['a226p700']=5.28;cal['a226z700']=5.42;cal['a252p700']=9.56;cal['a252z700']=9.70;
	cal['a226p800']=5.20;cal['a226z800']=5.34;cal['a252p800']=9.48;cal['a252z800']=9.62;
	cal['a226p900']=5.14;cal['a226z900']=5.27;cal['a252p900']=9.42;cal['a252z900']=9.55;
	cal['a226p1000']=5.08;cal['a226z1000']=5.22;cal['a252p1000']=9.37;cal['a252z1000']=9.50;
	
	cal['a326p10']=35.15;cal['a326z10']=36.67;cal['a352p10']=37.65;cal['a352z10']=39.06;
	cal['a326p20']=18.99;cal['a326z20']=19.80;cal['a352p20']=21.54;cal['a352z20']=22.35;
	cal['a326p30']=13.30;cal['a326z30']=13.79;cal['a352p30']=15.72;cal['a352z30']=16.24;
	cal['a326p40']=10.58;cal['a326z40']=11.08;cal['a352p40']=13.10;cal['a352z40']=13.57;
	cal['a326p50']=8.77;cal['a326z50']=9.14;cal['a352p50']=11.47;cal['a352z50']=11.88;
	cal['a326p60']=7.76;cal['a326z60']=8.09;cal['a352p60']=10.40;cal['a352z60']=10.76;
	cal['a326p70']=7.08;cal['a326z70']=7.32;cal['a352p70']=9.67;cal['a352z70']=9.95;
	cal['a326p80']=6.48;cal['a326z80']=6.80;cal['a352p80']=9.08;cal['a352z80']=9.36;
	cal['a326p90']=6.09;cal['a326z90']=6.35;cal['a352p90']=8.66;cal['a352z90']=8.90;
	cal['a326p100']=5.86;cal['a326z100']=6.09;cal['a352p100']=8.18;cal['a352z100']=8.41;
	cal['a326p200']=4.36;cal['a326z200']=4.54;cal['a352p200']=6.71;cal['a352z200']=6.89;
	cal['a326p300']=3.86;cal['a326z300']=4.02;cal['a352p300']=6.23;cal['a352z300']=6.39;
	cal['a326p400']=3.61;cal['a326z400']=3.76;cal['a352p400']=5.99;cal['a352z400']=6.14;
	cal['a326p500']=3.46;cal['a326z500']=3.61;cal['a352p500']=5.84;cal['a352z500']=5.98;
	cal['a326p600']=3.36;cal['a326z600']=3.50;cal['a352p600']=5.74;cal['a352z600']=5.88;
	cal['a326p700']=3.30;cal['a326z700']=3.43;cal['a352p700']=5.68;cal['a352z700']=5.81;
	cal['a326p800']=3.24;cal['a326z800']=3.38;cal['a352p800']=5.63;cal['a352z800']=5.76;
	cal['a326p900']=3.20;cal['a326z900']=3.33;cal['a352p900']=5.59;cal['a352z900']=5.72;
	cal['a326p1000']=3.16;cal['a326z1000']=3.30;cal['a352p1000']=5.55;cal['a352z1000']=5.68;

	cal['b226p10']=58.37;cal['b226z10']=59.89;cal['b252p10']=63.47;cal['b252z10']=64.77;
	cal['b226p20']=32.06;cal['b226z20']=32.88;cal['b252p20']=38.03;cal['b252z20']=38.73;
	cal['b226p30']=22.54;cal['b226z30']=23.10;cal['b252p30']=28.07;cal['b252z30']=28.60;
	cal['b226p40']=18.72;cal['b226z40']=19.22;cal['b252p40']=24.07;cal['b252z40']=24.49;
	cal['b226p50']=15.59;cal['b226z50']=15.89;cal['b252p50']=20.62;cal['b252z50']=21.01;
	cal['b226p60']=13.87;cal['b226z60']=14.21;cal['b252p60']=19.15;cal['b252z60']=19.49;
	cal['b226p70']=12.67;cal['b226z70']=12.96;cal['b252p70']=17.86;cal['b252z70']=18.15;
	cal['b226p80']=11.96;cal['b226z80']=12.23;cal['b252p80']=17.12;cal['b252z80']=17.38;
	cal['b226p90']=11.22;cal['b226z90']=11.48;cal['b252p90']=16.33;cal['b252z90']=16.59;
	cal['b226p100']=10.50;cal['b226z100']=10.74;cal['b252p100']=15.66;cal['b252z100']=15.91;
	cal['b226p200']=8.17;cal['b226z200']=8.35;cal['b252p200']=13.24;cal['b252z200']=13.43;
	cal['b226p300']=7.33;cal['b226z300']=7.50;cal['b252p300']=12.43;cal['b252z300']=12.60;
	cal['b226p400']=6.95;cal['b226z400']=7.10;cal['b252p400']=12.03;cal['b252z400']=12.18;
	cal['b226p500']=6.73;cal['b226z500']=6.87;cal['b252p500']=11.79;cal['b252z500']=11.93;
	cal['b226p600']=6.55;cal['b226z600']=6.69;cal['b252p600']=11.63;cal['b252z600']=11.77;
	cal['b226p700']=6.45;cal['b226z700']=6.58;cal['b252p700']=11.51;cal['b252z700']=11.65;
	cal['b226p800']=6.37;cal['b226z800']=6.50;cal['b252p800']=11.42;cal['b252z800']=11.56;
	cal['b226p900']=6.29;cal['b226z900']=6.42;cal['b252p900']=11.36;cal['b252z900']=11.49;
	cal['b226p1000']=6.24;cal['b226z1000']=6.38;cal['b252p1000']=11.30;cal['b252z1000']=11.44;

	cal['b326p10']=41.54;cal['b326z10']=43.15;cal['b352p10']=37.98;cal['b352z10']=39.49;
	cal['b326p20']=22.88;cal['b326z20']=23.75;cal['b352p20']=22.19;cal['b352z20']=23.00;
	cal['b326p30']=15.96;cal['b326z30']=16.68;cal['b352p30']=16.31;cal['b352z30']=16.91;
	cal['b326p40']=12.96;cal['b326z40']=13.47;cal['b352p40']=14.20;cal['b352z40']=14.65;
	cal['b326p50']=10.76;cal['b326z50']=11.21;cal['b352p50']=12.16;cal['b352z50']=12.50;
	cal['b326p60']=9.61;cal['b326z60']=10.00;cal['b352p60']=11.15;cal['b352z60']=11.47;
	cal['b326p70']=8.77;cal['b326z70']=9.10;cal['b352p70']=10.38;cal['b352z70']=10.69;
	cal['b326p80']=8.37;cal['b326z80']=8.69;cal['b352p80']=10.04;cal['b352z80']=10.30;
	cal['b326p90']=7.86;cal['b326z90']=8.15;cal['b352p90']=9.57;cal['b352z90']=9.83;
	cal['b326p100']=7.20;cal['b326z100']=7.47;cal['b352p100']=9.08;cal['b352z100']=9.32;
	cal['b326p200']=5.49;cal['b326z200']=5.70;cal['b352p200']=7.69;cal['b352z200']=7.88;
	cal['b326p300']=4.92;cal['b326z300']=5.11;cal['b352p300']=7.18;cal['b352z300']=7.34;
	cal['b326p400']=4.69;cal['b326z400']=4.86;cal['b352p400']=6.96;cal['b352z400']=7.12;
	cal['b326p500']=4.51;cal['b326z500']=4.68;cal['b352p500']=6.80;cal['b352z500']=6.95;
	cal['b326p600']=4.40;cal['b326z600']=4.55;cal['b352p600']=6.72;cal['b352z600']=6.86;
	cal['b326p700']=4.33;cal['b326z700']=4.49;cal['b352p700']=6.64;cal['b352z700']=6.78;
	cal['b326p800']=4.27;cal['b326z800']=4.42;cal['b352p800']=6.60;cal['b352z800']=6.73;
	cal['b326p900']=4.22;cal['b326z900']=4.37;cal['b352p900']=6.58;cal['b352z900']=6.68;
	cal['b326p1000']=4.19;cal['b326z1000']=4.34;cal['b352p1000']=6.53;cal['b352z1000']=6.66;

    jQuery('#10').text(parseFloat(cal[jQuery('[name=cal_size]:checked').val()+jQuery('[name=cal_card]:checked').val()+jQuery('[name=cal_corn]:checked').val()+'10']).toFixed(2)+' PLN');
    jQuery('#20').text(parseFloat(cal[jQuery('[name=cal_size]:checked').val()+jQuery('[name=cal_card]:checked').val()+jQuery('[name=cal_corn]:checked').val()+'20']).toFixed(2)+' PLN');
    jQuery('#30').text(parseFloat(cal[jQuery('[name=cal_size]:checked').val()+jQuery('[name=cal_card]:checked').val()+jQuery('[name=cal_corn]:checked').val()+'30']).toFixed(2)+' PLN');
    jQuery('#40').text(parseFloat(cal[jQuery('[name=cal_size]:checked').val()+jQuery('[name=cal_card]:checked').val()+jQuery('[name=cal_corn]:checked').val()+'40']).toFixed(2)+' PLN');
    jQuery('#50').text(parseFloat(cal[jQuery('[name=cal_size]:checked').val()+jQuery('[name=cal_card]:checked').val()+jQuery('[name=cal_corn]:checked').val()+'50']).toFixed(2)+' PLN');
    jQuery('#60').text(parseFloat(cal[jQuery('[name=cal_size]:checked').val()+jQuery('[name=cal_card]:checked').val()+jQuery('[name=cal_corn]:checked').val()+'60']).toFixed(2)+' PLN');
    jQuery('#70').text(parseFloat(cal[jQuery('[name=cal_size]:checked').val()+jQuery('[name=cal_card]:checked').val()+jQuery('[name=cal_corn]:checked').val()+'70']).toFixed(2)+' PLN');
    jQuery('#80').text(parseFloat(cal[jQuery('[name=cal_size]:checked').val()+jQuery('[name=cal_card]:checked').val()+jQuery('[name=cal_corn]:checked').val()+'80']).toFixed(2)+' PLN');
    jQuery('#90').text(parseFloat(cal[jQuery('[name=cal_size]:checked').val()+jQuery('[name=cal_card]:checked').val()+jQuery('[name=cal_corn]:checked').val()+'90']).toFixed(2)+' PLN');
    jQuery('#100').text(parseFloat(cal[jQuery('[name=cal_size]:checked').val()+jQuery('[name=cal_card]:checked').val()+jQuery('[name=cal_corn]:checked').val()+'100']).toFixed(2)+' PLN');
    jQuery('#200').text(parseFloat(cal[jQuery('[name=cal_size]:checked').val()+jQuery('[name=cal_card]:checked').val()+jQuery('[name=cal_corn]:checked').val()+'200']).toFixed(2)+' PLN');
    jQuery('#300').text(parseFloat(cal[jQuery('[name=cal_size]:checked').val()+jQuery('[name=cal_card]:checked').val()+jQuery('[name=cal_corn]:checked').val()+'300']).toFixed(2)+' PLN');
    jQuery('#400').text(parseFloat(cal[jQuery('[name=cal_size]:checked').val()+jQuery('[name=cal_card]:checked').val()+jQuery('[name=cal_corn]:checked').val()+'400']).toFixed(2)+' PLN');
    jQuery('#500').text(parseFloat(cal[jQuery('[name=cal_size]:checked').val()+jQuery('[name=cal_card]:checked').val()+jQuery('[name=cal_corn]:checked').val()+'500']).toFixed(2)+' PLN');
    jQuery('#600').text(parseFloat(cal[jQuery('[name=cal_size]:checked').val()+jQuery('[name=cal_card]:checked').val()+jQuery('[name=cal_corn]:checked').val()+'600']).toFixed(2)+' PLN');
    jQuery('#700').text(parseFloat(cal[jQuery('[name=cal_size]:checked').val()+jQuery('[name=cal_card]:checked').val()+jQuery('[name=cal_corn]:checked').val()+'700']).toFixed(2)+' PLN');
    jQuery('#800').text(parseFloat(cal[jQuery('[name=cal_size]:checked').val()+jQuery('[name=cal_card]:checked').val()+jQuery('[name=cal_corn]:checked').val()+'800']).toFixed(2)+' PLN');
    jQuery('#900').text(parseFloat(cal[jQuery('[name=cal_size]:checked').val()+jQuery('[name=cal_card]:checked').val()+jQuery('[name=cal_corn]:checked').val()+'900']).toFixed(2)+' PLN');
    jQuery('#1000').text(parseFloat(cal[jQuery('[name=cal_size]:checked').val()+jQuery('[name=cal_card]:checked').val()+jQuery('[name=cal_corn]:checked').val()+'1000']).toFixed(2)+' PLN');

    if(jQuery('[name=cal_graph]:checked').val() == 0) jQuery('#pay_graph').text('0.00 PLN');
	else if(jQuery('[name=cal_graph]:checked').val() == 1) jQuery('#pay_graph').text('100.00 PLN');
	else if(jQuery('[name=cal_graph]:checked').val() == 2) jQuery('#pay_graph').text('150.00 PLN');
    if(jQuery('[name=cal_proof]:checked').val() == 'nie') jQuery('#pay_proof').text('0.00 PLN');
	else if(jQuery('[name=cal_proof]:checked').val() == 'tak') jQuery('#pay_proof').text('60.00 PLN');

    var v1 = v2 = iss, w = 0.00;

	if(jQuery('[name=cal_size]:checked').val() == 'a3') w = 0.30;
	else if(jQuery('[name=cal_size]:checked').val() == 'b3') w = 0.42;
	else if(jQuery('[name=cal_size]:checked').val() == 'a2') w = 0.59;
	else if(jQuery('[name=cal_size]:checked').val() == 'b2') w = 0.81;
	
	if(jQuery('[name=cal_card]:checked').val() == 52) w = parseFloat(w) * 2;

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

	//jQuery('#pay_weight').text(parseFloat(w * v1).toFixed(2)+' kg');
	jQuery('#pay_weight').text(parseFloat(w * v1).toFixed(2)+' kg'); jQuery('#pay_pack').text(Math.ceil(parseFloat(w * v1 / 28)).toFixed(0)+' szt.');
	
    if(jQuery('[name=cal_trans]:checked').val() == 'o') jQuery('#pay_trans').text('0.00 PLN');
	else if(jQuery('[name=cal_trans]:checked').val() == 'k')
	{ var log =  jQuery('#pay_pack').text(); log = log.split(' '); log = log[0]; jQuery('#pay_trans').text(parseFloat(log * 10.00).toFixed() +'.00 PLN'); }
    else if(jQuery('[name=cal_trans]:checked').val() == 'i')
	{ var log =  jQuery('#pay_pack').text(); log = log.split(' '); log = log[0]; jQuery('#pay_trans').text(parseFloat(log * 26.00).toFixed() +'.00 PLN'); }
	
    var x, y = 0.00;
    y = jQuery('#pay_discount').text(); y = y.split(' '); x = parseFloat(y[0]);
    y = jQuery('#pay_graph').text(); y = y.split(' '); x = parseFloat(x) + parseFloat(y[0]);
    y = jQuery('#pay_proof').text(); y = y.split(' '); x = parseFloat(x) + parseFloat(y[0]);
    y = jQuery('#pay_trans').text(); y = y.split(' '); x = parseFloat(x) + parseFloat(y[0]);

    jQuery('#pay_netto').text(parseFloat(x).toFixed(2) + ' PLN');
    jQuery('#pay_tax').text(parseFloat(x * 0.23).toFixed(2) + ' PLN'); y = jQuery('#pay_tax').text(); y = y.split(' '); x = parseFloat(x) + parseFloat(y[0]);
    jQuery('#pay_brutto').text(parseFloat(x).toFixed(2) + ' PLN');
	
}