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
	if(jQuery('[name=cal_type]:checked').val() == 'n' || jQuery('[name=cal_type]:checked').val() == 'p')
	{
		jQuery('#clk_none').prop('checked', true);
		jQuery('label[for=clk_clock]').hide();
	}
	else { jQuery('label[for=clk_clock]').show(); }
	
	if(jQuery('[name=cal_conn]:checked').val() == 'spi')
	{
		jQuery('label[for=calm_w]').hide();
		if(jQuery('[name=cal_calm]:checked').val() == 'w') jQuery('#calm_v').prop('checked', true);
	}
	else { jQuery('label[for=calm_w]').show(); }
	
	if(jQuery('[name=cal_type]:checked').val() == 'p')
	{
		jQuery('label[for=conn_h]').show();
		jQuery('#conn_h').prop('checked', true);
		jQuery('label[for=conn_b]').hide();
		jQuery('label[for=height_sta]').hide();
		jQuery('#height_wys').prop('checked', true);
		jQuery('label[for=calm_p]').show();
		jQuery('label[for=calm_w], label[for=calm_v], label[for=calm_h]').hide();
		jQuery('#calm_p').prop('checked', true);
	}
	else { jQuery('label[for=conn_b]').show(); jQuery('label[for=height_sta]').show(); jQuery('label[for=calm_p]').hide(); jQuery('label[for=calm_w], label[for=calm_v], label[for=calm_h]').show(); }
	
	if(jQuery('[name=cal_clock]:checked').val() == '0')
	{
		jQuery('label[for=pack_p]').hide(); jQuery('label[for=pack_0], label[for=pack_k]').show();
		if(jQuery('[name=cal_pack]:checked').val() == 'p') jQuery('#pack_0').prop('checked', true);
	}
	else
	{
		jQuery('label[for=pack_p]').show(); jQuery('label[for=pack_0], label[for=pack_k]').hide();
		jQuery('#pack_p').prop('checked', true);
	}
	
	if(jQuery('[name=cal_pay]:checked').val() == 50 || jQuery('[name=cal_pay]:checked').val() == 100)
	{ jQuery('#pay_discount_row').show(); jQuery('#pay_issue').css('text-decoration', 'line-through'); }
    else { jQuery('#pay_discount_row').hide(); jQuery('#pay_issue').css('text-decoration', 'none'); }
}

img();
function img()
{
	if(jQuery('[name=cal_type]:checked').val() == 'n')
	{
	    jQuery('#cal_img_width, #cal_img_body').css('width', '195px');
	    jQuery('#cal_img_width').css('background', 'url(/images/biurkowe/w150.jpg) no-repeat');
	    jQuery('#cal_img_helix').css('position','relative');
        jQuery('#cal_img_helix').css('top','-165px')
	    jQuery('#cal_img_calm').css('position','relative');
	    jQuery('#cal_img_calm').css('right','-30px');
	    jQuery('#cal_img_add').css('position','relative');
	    jQuery('#cal_img_add').css('left','-65%');
	    jQuery('#cal_img_add').css('width', '36px');
	    jQuery('#cal_img_add').css('top', '-2 px');
	    }
	else if(jQuery('[name=cal_type]:checked').val() == 'p'){
	    jQuery('#cal_img_width, #cal_img_body').css('width', '247px');
	    jQuery('#cal_img_width').css('background', 'url(/images/biurkowe/w190.jpg) no-repeat');
	    jQuery('#cal_img_add').css('position','relative');
        jQuery('#cal_img_add').css('left','-515px');
        jQuery('#cal_img_add').css('width', '36px');
        jQuery('#cal_img_add').css('top', '-2 px');}
	else if(jQuery('[name=cal_type]:checked').val() == 's'){
	    jQuery('#cal_img_width, #cal_img_body').css('width', '325px');
	    jQuery('#cal_img_width').css('background', 'url(/images/biurkowe/w250.jpg) no-repeat');
	    jQuery('#cal_img_calm').css('position','relative');
        jQuery('#cal_img_calm').css('right','-160px');
        jQuery('#cal_img_add').css('position','relative');
        jQuery('#cal_img_add').css('left','-555px');
        jQuery('#cal_img_add').css('width', '36px');
        jQuery('#cal_img_add').css('top', '-2 px');
        }
	
	if(jQuery('[name=cal_height]:checked').val() == 's'){
	    jQuery('#cal_img_height, #cal_img_body, #cal_img_add').css('height', '169px');
	    jQuery('#cal_img_height').css('background', 'url(/images/biurkowe/h130.jpg) no-repeat');
	    jQuery('#cal_img_helix').css('position','relative');
        jQuery('#cal_img_helix').css('top','-165px');
        }
	else if(jQuery('[name=cal_height]:checked').val() == 'w' && jQuery('[name=cal_type]:checked').val() == 'p'){
	    jQuery('#cal_img_height, #cal_img_body, #cal_img_add').css('height', '195px');
	    jQuery('#cal_img_height').css('background', 'url(/images/biurkowe/h150.jpg) no-repeat');
	    jQuery('#cal_img_helix').css('position','relative');
	    jQuery('#cal_img_helix').css('top','-165px');
	    }
	else if(jQuery('[name=cal_height]:checked').val() == 'w' && jQuery('[name=cal_type]:checked').val() != 'p'){
	    jQuery('#cal_img_height, #cal_img_body, #cal_img_add').css('height', '208px');
	    jQuery('#cal_img_height').css('background', 'url(/images/biurkowe/h160.jpg) no-repeat');
	    }

	
	if(jQuery('[name=cal_conn]:checked').val() == 'spi')
	    jQuery("#cal_img_helix").show();
	else
	    jQuery("#cal_img_helix").hide();


    jQuery('#cal_img_calm').css('height','160px');
    jQuery('#cal_img_calm').css('width','160px');
	jQuery('#cal_img_calm').css('background', 'url(/images/biurkowe/calm_'+jQuery('[name=cal_calm]:checked').val()+'.png) no-repeat right 5px');
	jQuery('#cal_img_add').css('background', 'url(/images/biurkowe/'+jQuery("[name=cal_height]:checked").val()+'.png) no-repeat right');
	jQuery('#cal_img_body').css('background', 'url(/images/biurkowe/'+jQuery("[name=cal_type]:checked").val()+'_'+jQuery("[name=cal_height]:checked").val()+'_'+jQuery("[name=cal_clock]:checked").val()+'.jpg) no-repeat');
}

spec();
function spec()
{
	if(jQuery('[name=cal_type]:checked').val() == 'n' || jQuery('[name=cal_type]:checked').val() == 's') jQuery('#spec_cal').text('druk 4+0 CMYK, karton 240g/m2');
	else if(jQuery('[name=cal_type]:checked').val() == 'p') jQuery('#spec_cal').text('podkład karton 350g/m2 niezadrukowany');
	if(jQuery('[name=cal_type]:checked').val() == 'n') jQuery('#spec_type').text('namiot - 150mm szerokości');
	else if(jQuery('[name=cal_type]:checked').val() == 's') jQuery('#spec_type').text('sat - 250mm szerokości');
	else if(jQuery('[name=cal_type]:checked').val() == 'p') jQuery('#spec_type').text('13planszowy - 190mm szerokości');
	
	if(jQuery('[name=cal_height]:checked').val() == 's') jQuery('#spec_height').text('130mm');
	else if(jQuery('[name=cal_type]:checked').val() == 'p' && jQuery('[name=cal_height]:checked').val() == 'w') jQuery('#spec_height').text('150mm');
	else if(jQuery('[name=cal_height]:checked').val() == 'w') jQuery('#spec_height').text('160mm');
	
	if(jQuery('[name=cal_conn]:checked').val() == 'spi') jQuery('#spec_conn').text('spiralowanie');
	else if(jQuery('[name=cal_conn]:checked').val() == 'big') jQuery('#spec_conn').text('bigowanie');
	
	if(jQuery('[name=cal_clock]:checked').val() == '0') jQuery('#spec_clk').text('brak');
	else if(jQuery('[name=cal_clock]:checked').val() == '1') jQuery('#spec_clk').text('zamontowany we froncie kalendarza');
	
	
	if(jQuery('[name=cal_graph]:checked').val() == 0)
		jQuery('#spec_graph').text('projekt klienta plik zamknięty - PDF produkcyjny');
	else if(jQuery('[name=cal_graph]:checked').val() == 120)
		jQuery('#spec_graph').text('prosta praca zgodnie z sugestiami klienta (2 warianty, wykonane z tych samych elementów graficznych), napisy + zdjęcie (kadrowanie, bez skomplikowanej obróbki) + logo bez odrysowywania, nanoszenie zmian nie więcej niż dwukrotne');
	else if(jQuery('[name=cal_graph]:checked').val() == 180)
		jQuery('#spec_graph').text('nieskomplikowana praca zgodnie z sugestiami klienta  (2 warianty, wykonane z tych samych elementów  graficznych), napisy + zdjęcia (2-3, ewentualny montaż, bez skomplikowanej obróbki) + logo z ewentualnym odrysowywaniem, nanoszenie zmian nie więcej niż dwukrotne');
	
	if(jQuery('[name=cal_calm]:checked').val() == 'w') jQuery('#spec_calm').text('wdrukowane, pełny kolor');
	else if(jQuery('[name=cal_calm]:checked').val() == 'v')
		jQuery('#spec_calm').text('papier offset 80g/m2, polskie święta, imiona, miesiące w języku polskim, angielskim, niemiecki, rosyjskim, 90mm x 115mm');
	else if(jQuery('[name=cal_calm]:checked').val() == 'h')
		jQuery('#spec_calm').text('papier offset 80g/m2, polskie święta, imiona, miesiące w języku polskim, angielskim, niemiecki, rosyjskim, 130mm x 75mm');
	else if(jQuery('[name=cal_calm]:checked').val() == 'p')
		jQuery('#spec_calm').text('kreda 200g/m2, indywidualne, 4+0, 190mm x 140mm');
}

pay();
function pay()
{
	var cost = 2.88, extra = 0.00, weight = 0.00, pack = 0;
    var edition = new Array();
	if(jQuery('[name=cal_type]:checked').val() == 'p')
	{
    edition[50] = 0; edition[100] = 8.40; edition[150] = 13.80; edition[200] = 19.20; edition[250] = 23.50; edition[300] = 27.40;
    edition[400] = 30.00; edition[500] = 33.00; edition[600] = 33.50; edition[700] = 34.00; edition[800] = 34.50; edition[900] = 35.00;
    edition[1000] = 35.50; edition[1500] = 36.00; edition[2000] = 36.50; edition[3000] = 37.00; edition[5000] = 38.00;
	}
	else
	{
		edition[50] = 0; edition[100] = 20.00; edition[150] = 28.00; edition[200] = 34.00; edition[250] = 40.00; edition[300] = 47.00;
		edition[400] = 53.00; edition[500] = 59.00; edition[600] = 63.00; edition[700] = 67.00; edition[800] = 69.00; edition[900] = 70.50;
		edition[1000] = 72.00; edition[1500] = 73.50; edition[2000] = 74.25; edition[3000] = 75.00; edition[5000] = 77.50;
	}

    if(jQuery('[name=cal_type]:checked').val() == 's') cost = parseFloat(_round(cost + cost*0.7, 2)).toFixed(2);
    else if(jQuery('[name=cal_type]:checked').val() == 'p') cost = parseFloat(_round(cost + cost*1.54, 2)).toFixed(2);
    if(jQuery('[name=cal_conn]:checked').val() == 'spi') extra += 0.20;
    if(jQuery('[name=cal_clock]:checked').val() == 1) extra += 4.55;
    if(jQuery('[name=cal_calm]:checked').val() == 'v' || jQuery('[name=cal_calm]:checked').val() == 'h') extra += 0.55;
    if(jQuery('[name=cal_pack]:checked').val() == 'k') extra += 0.25;
	
    jQuery('#50').text(parseFloat(_round(cost, 2) + parseFloat(extra)).toFixed(2)+' PLN');
    jQuery('#100').text(parseFloat(_round((cost * ((100 - edition[100])/100)) , 2)  + parseFloat(extra)).toFixed(2)+' PLN');
    jQuery('#150').text(parseFloat(_round((cost * ((100 - edition[150])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
    jQuery('#200').text(parseFloat(_round((cost * ((100 - edition[200])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
    jQuery('#250').text(parseFloat(_round((cost * ((100 - edition[250])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
    jQuery('#300').text(parseFloat(_round((cost * ((100 - edition[300])/100)) , 2) + parseFloat(extra)).toFixed(2)+' PLN');
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

	
    if(jQuery('[name=cal_graph]:checked').val() == 0) jQuery('#pay_graph').text('0.00 PLN');
	else if(jQuery('[name=cal_graph]:checked').val() == 120 && jQuery('[name=cal_type]:checked').val() != 'p') jQuery('#pay_graph').text('60.00 PLN');
	else if(jQuery('[name=cal_graph]:checked').val() == 180 && jQuery('[name=cal_type]:checked').val() != 'p') jQuery('#pay_graph').text('90.00 PLN');
	else if(jQuery('[name=cal_graph]:checked').val() == 120 && jQuery('[name=cal_type]:checked').val() == 'p') jQuery('#pay_graph').text('350.00 PLN');
	else if(jQuery('[name=cal_graph]:checked').val() == 180 && jQuery('[name=cal_type]:checked').val() == 'p') jQuery('#pay_graph').text('550.00 PLN');
    if(jQuery('[name=cal_proof]:checked').val() == 'nie') jQuery('#pay_proof').text('0.00 PLN');
	else if(jQuery('[name=cal_proof]:checked').val() == 'tak' && jQuery('[name=cal_type]:checked').val() != 'p') jQuery('#pay_proof').text('40.00 PLN');
	else if(jQuery('[name=cal_proof]:checked').val() == 'tak' && jQuery('[name=cal_type]:checked').val() == 'p') jQuery('#pay_proof').text('110.00 PLN');
	
	
	var v1 = v2 = iss, w = 0;
	if(jQuery('[name=cal_type]:checked').val() == 'n') w += 0.011; else if(jQuery('[name=cal_type]:checked').val() == 's') w += 0.014;
    if(jQuery('[name=cal_height]:checked').val() == 'w') w += 0.002;
    if(jQuery('[name=cal_conn]:checked').val() == 'spi') w += 0.002; if(jQuery('[name=cal_clock]:checked').val() == 1) w += 0.04; if(jQuery('[name=cal_calm]:checked').val() != 'w') w += 0.01;
    if(jQuery('[name=cal_pack]:checked').val() == 'k') w += 0.005; else if(jQuery('[name=cal_pack]:checked').val() == 'p') w += 0.03;
	
	
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
	
	if(jQuery('[name=cal_clock]:checked').val() == 1)
	{ jQuery('#pay_weight').text(parseFloat(w * v1).toFixed(2)+' kg'); jQuery('#pay_pack').text(Math.ceil(parseFloat(v1 / 76)).toFixed(0)+' szt.'); }
	else
	{
		jQuery('#pay_weight').text(parseFloat(w * v1).toFixed(2)+' kg'); jQuery('#pay_pack').text(Math.ceil(parseFloat(w * v1 / 28)).toFixed(0)+' szt.');
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
