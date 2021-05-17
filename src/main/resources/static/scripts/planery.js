var iss = 'id50';
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
	jQuery('#cal_img_width, #cal_img_body').css('width', '296px'); jQuery('#cal_img_height, #cal_img_body').css('height', '206px');
	jQuery('#cal_img_body').css('background', 'url("/images/planery/planer_'+jQuery('[name=cal_lst]:checked').val()+'.png');
}

spec();
function spec()
{
	if(jQuery('[name=cal_lst]:checked').val() == '0') jQuery('#spec_lst').text('brak');
	else if(jQuery('[name=cal_lst]:checked').val() == '1') jQuery('#spec_lst').text('jest');

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

	cal['050']=21.35;
	cal['0100']=11.07;
	cal['0200']=6.37;
	cal['0300']=4.64;
	cal['0400']=3.88;
	cal['0500']=3.43;
	cal['0600']=3.08;
	cal['0700']=2.87;
	cal['0800']=2.71;
	cal['0900']=2.58;
	cal['01000']=2.48;
	cal['150']=23.24;
	cal['1100']=13.31;
	cal['1200']=8.17;
	cal['1300']=6.38;
	cal['1400']=5.62;
	cal['1500']=5.17;
	cal['1600']=4.79;
	cal['1700']=4.58;
	cal['1800']=4.42;
	cal['1900']=4.30;
	cal['11000']=4.20;

    jQuery('#50').text(parseFloat(cal[jQuery('[name=cal_lst]:checked').val()+'50']).toFixed(2)+' PLN');
    jQuery('#100').text(parseFloat(cal[jQuery('[name=cal_lst]:checked').val()+'100']).toFixed(2)+' PLN');
    jQuery('#200').text(parseFloat(cal[jQuery('[name=cal_lst]:checked').val()+'200']).toFixed(2)+' PLN');
    jQuery('#300').text(parseFloat(cal[jQuery('[name=cal_lst]:checked').val()+'300']).toFixed(2)+' PLN');
    jQuery('#400').text(parseFloat(cal[jQuery('[name=cal_lst]:checked').val()+'400']).toFixed(2)+' PLN');
    jQuery('#500').text(parseFloat(cal[jQuery('[name=cal_lst]:checked').val()+'500']).toFixed(2)+' PLN');
    jQuery('#600').text(parseFloat(cal[jQuery('[name=cal_lst]:checked').val()+'600']).toFixed(2)+' PLN');
    jQuery('#700').text(parseFloat(cal[jQuery('[name=cal_lst]:checked').val()+'700']).toFixed(2)+' PLN');
    jQuery('#800').text(parseFloat(cal[jQuery('[name=cal_lst]:checked').val()+'800']).toFixed(2)+' PLN');
    jQuery('#900').text(parseFloat(cal[jQuery('[name=cal_lst]:checked').val()+'900']).toFixed(2)+' PLN');
    jQuery('#1000').text(parseFloat(cal[jQuery('[name=cal_lst]:checked').val()+'1000']).toFixed(2)+' PLN');

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
	{ var log =  jQuery('#pay_pack').text(); log = log.split(' '); log = log[0]; jQuery('#pay_trans').text(parseFloat(log * 22.00).toFixed() +'.00 PLN'); }
	
    var x, y = 0.00;
    y = jQuery('#pay_discount').text(); y = y.split(' '); x = parseFloat(y[0]);
    y = jQuery('#pay_graph').text(); y = y.split(' '); x = parseFloat(x) + parseFloat(y[0]);
    y = jQuery('#pay_proof').text(); y = y.split(' '); x = parseFloat(x) + parseFloat(y[0]);
    y = jQuery('#pay_trans').text(); y = y.split(' '); x = parseFloat(x) + parseFloat(y[0]);

    jQuery('#pay_netto').text(parseFloat(x).toFixed(2) + ' PLN');
    jQuery('#pay_tax').text(parseFloat(x * 0.23).toFixed(2) + ' PLN'); y = jQuery('#pay_tax').text(); y = y.split(' '); x = parseFloat(x) + parseFloat(y[0]);
    jQuery('#pay_brutto').text(parseFloat(x).toFixed(2) + ' PLN');
}