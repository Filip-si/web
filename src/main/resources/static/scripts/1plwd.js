function _round(_num, _dec) { return parseFloat(Math.round(_num * Math.pow(10, _dec)) / Math.pow(10, _dec)); }

jQuery('[name^=cal_], [id^="price_"]').bind('change click', function() { config(); img(); pay(); });

config();
function config()
{	
	jQuery('#view_aa, #view_ab, #view_ca, #view_cb, #view_12cb, #view_ja, #view_jb, #view_la, #view_lb').hide();
	
	jQuery('#view_'+jQuery('[name=cal_type]:checked').val()).show();
	
	jQuery('#price_cost_ab').val(parseFloat(6.00).toFixed(2));
	jQuery('#price_cost_ca').val(parseFloat(5.45).toFixed(2));
	jQuery('#price_cost_cb').val(parseFloat(6.25).toFixed(2));
    jQuery('#price_cost_12cb').val(parseFloat(4.40).toFixed(2));
	jQuery('#price_cost_ja').val(parseFloat(5.10).toFixed(2));
	jQuery('#price_cost_jb').val(parseFloat(5.90).toFixed(2));
	jQuery('#price_cost_la').val(parseFloat(5.60).toFixed(2));
	jQuery('#price_cost_lb').val(parseFloat(6.50).toFixed(2));
	
	if(jQuery('[name=cal_col]:checked').val() != 0)
	{
		jQuery('#price_print_ab').val(jQuery('#price_issue_ab').val());
		jQuery('#price_print_ca').val(jQuery('#price_issue_ca').val());
		jQuery('#price_print_cb').val(jQuery('#price_issue_cb').val());
        jQuery('#price_print_12cb').val(jQuery('#price_issue_12cb').val());
		jQuery('#price_print_ja').val(jQuery('#price_issue_ja').val());
		jQuery('#price_print_jb').val(jQuery('#price_issue_jb').val());
		jQuery('#price_print_la').val(jQuery('#price_issue_la').val());
		jQuery('#price_print_lb').val(jQuery('#price_issue_lb').val());
	}
	else { jQuery('#price_print_ab, #price_print_ca, #price_print_cb, #price_print_12cb, #price_print_ja, #price_print_jb, #price_print_la, #price_print_lb').val(0); }
}

img();
function img()
{
	
}

pay();
function pay()
{

	var pay_issue = 0.00, pay_issues = 0;
	jQuery('[id^="price_cost_"]').each(function()
	{
		var end = jQuery(this).attr('id').split('_'); end = end[2];
		pay_issues += parseInt(jQuery('#price_issue_'+end).val());
		pay_issue += parseFloat(jQuery(this).val() * jQuery('#price_issue_'+end).val());
	});
	if(pay_issues >= 60)
	{
		jQuery('#pay_issue').text(parseFloat(pay_issue).toFixed(2)+' PLN');
		
		if(jQuery('[name=cal_col]:checked').val() == 0) jQuery('#pay_print').text('0.00 PLN');
		else if(jQuery('[name=cal_col]:checked').val() == 1)
		{
			if(pay_issues >= 60 && pay_issues <= 80) jQuery('#pay_print').text('230.00 PLN');
			else if(pay_issues > 80 && pay_issues <= 100) jQuery('#pay_print').text(parseFloat(pay_issues * 2.54).toFixed(2) +' PLN');
			else if(pay_issues > 100 && pay_issues < 200) jQuery('#pay_print').text(parseFloat(pay_issues * 2.32).toFixed(2) +' PLN');
			else if(pay_issues >= 200 && pay_issues < 500) jQuery('#pay_print').text(parseFloat(pay_issues * 2.25).toFixed(2) +' PLN');
			else if(pay_issues >= 500) jQuery('#pay_print').text(parseFloat(pay_issues * 1.89).toFixed(2) +' PLN');
			
		}
		else if(jQuery('[name=cal_col]:checked').val() == 2)
		{
			if(pay_issues >= 60 && pay_issues <= 80) jQuery('#pay_print').text('330.00 PLN');
			else if(pay_issues > 80 && pay_issues <= 100) jQuery('#pay_print').text(parseFloat(pay_issues * 3.48).toFixed(2) +' PLN');
			else if(pay_issues > 100 && pay_issues < 200) jQuery('#pay_print').text(parseFloat(pay_issues * 3.34).toFixed(2) +' PLN');
			else if(pay_issues >= 200 && pay_issues < 500) jQuery('#pay_print').text(parseFloat(pay_issues * 2.97).toFixed(2) +' PLN');
			else if(pay_issues >= 500) jQuery('#pay_print').text(parseFloat(pay_issues * 2.66).toFixed(2) +' PLN');
		}
		else if(jQuery('[name=cal_col]:checked').val() == 3)
		{
			if(pay_issues >= 60 && pay_issues <= 80) jQuery('#pay_print').text('450.00 PLN');
			else if(pay_issues > 80 && pay_issues <= 100) jQuery('#pay_print').text(parseFloat(pay_issues * 4.42).toFixed(2) +' PLN');
			else if(pay_issues > 100 && pay_issues < 200) jQuery('#pay_print').text(parseFloat(pay_issues * 4.28).toFixed(2) +' PLN');
			else if(pay_issues >= 200 && pay_issues < 500) jQuery('#pay_print').text(parseFloat(pay_issues * 4.13).toFixed(2) +' PLN');
			else if(pay_issues >= 500) jQuery('#pay_print').text(parseFloat(pay_issues * 3.43).toFixed(2) +' PLN');
		}
		else if(jQuery('[name=cal_col]:checked').val() == 4)
		{
			if(pay_issues >= 60 && pay_issues <= 80) jQuery('#pay_print').text('600.00 PLN');
			else if(pay_issues > 80 && pay_issues <= 100) jQuery('#pay_print').text(parseFloat(pay_issues * 7.10).toFixed(2) +' PLN');
			else if(pay_issues > 100 && pay_issues < 200) jQuery('#pay_print').text(parseFloat(pay_issues * 6.60).toFixed(2) +' PLN');
			else if(pay_issues >= 200 && pay_issues < 500) jQuery('#pay_print').text(parseFloat(pay_issues * 6.38).toFixed(2) +' PLN');
			else if(pay_issues >= 500) jQuery('#pay_print').text(parseFloat(pay_issues * 5.32).toFixed(2) +' PLN');
		}
		
		jQuery('#pay_prep').text(parseFloat(jQuery('[name=cal_col]:checked').val() * 50).toFixed(2)+ ' PLN');
		
		jQuery('#pay_pack').text(Math.ceil(parseFloat(pay_issues / 100)).toFixed(0)+' szt.');
		if(jQuery('[name=cal_trans]:checked').val() == 'o') 
            jQuery('#pay_trans').text('0.00 PLN');
		else if(jQuery('[name=cal_trans]:checked').val() == 'k')
		{ 
            var log =  jQuery('#pay_pack').text(); 
            log = log.split(' '); 
            log = log[0]; 
            jQuery('#pay_trans').text(parseFloat(log * 10.00).toFixed() +'.00 PLN'); 
        }else if(jQuery('[name=cal_trans]:checked').val() == 'i')
		{ 
            var log =  jQuery('#pay_pack').text(); 
            log = log.split(' '); 
            log = log[0]; jQuery('#pay_trans').text(parseFloat(log * 26.00).toFixed() +'.00 PLN'); 
        }
		
		var x, y = 0.00;
		y = jQuery('#pay_issue').text(); y = y.split(' '); x = parseFloat(y[0]);
		y = jQuery('#pay_print').text(); y = y.split(' '); x = parseFloat(x) + parseFloat(y[0]);
		y = jQuery('#pay_prep').text(); y = y.split(' '); x = parseFloat(x) + parseFloat(y[0]);
		y = jQuery('#pay_trans').text(); y = y.split(' '); x = parseFloat(x) + parseFloat(y[0]);
		
		jQuery('#pay_netto').text(parseFloat(x).toFixed(2) + ' PLN');
		jQuery('#pay_tax').text(parseFloat(x * 0.23).toFixed(2) + ' PLN'); y = jQuery('#pay_tax').text(); y = y.split(' '); x = parseFloat(x) + parseFloat(y[0]);
		jQuery('#pay_brutto').text(parseFloat(x).toFixed(2) + ' PLN');
	}
	else
	{
		//zerujemy
		jQuery('#pay_issue').text('0.00 PLN');
		jQuery('#pay_print').text('0.00 PLN');
		jQuery('#pay_prep').text('0.00 PLN');
		jQuery('#pay_pack').text('0 szt.');
		jQuery('#pay_trans').text('0.00 PLN');
		jQuery('#pay_netto').text('0.00 PLN');
		jQuery('#pay_tax').text('0.00 PLN');
		jQuery('#pay_brutto').text('0.00 PLN');
	}
	
/*	
	if(jQuery('[name=cal_exp]:checked').val() == 'n') { jQuery('#pay_mat').text('170.00 PLN'); } else { jQuery('#pay_mat').text('0.00 PLN'); }
	
	var pay_exp = 0.00;
	if(jQuery('[name=cal_exp]:checked').val() == '0') { jQuery('#pay_exp').text('0.00 PLN'); }
	else
	{
		jQuery('[id^="price_exp_"]').each(function() { pay_exp += parseInt(jQuery(this).val()); });
		if(parseInt(pay_exp) <= 30 && pay_exp != 0) { pay_exp = 40.00; } else if(parseInt(pay_exp) > 30) { pay_exp = 40.00 + ((parseInt(pay_exp) - 30) * 0.60); }
	}
	jQuery('#pay_exp').text(parseFloat(pay_exp).toFixed(2)+' PLN');
	
	
	var pay_logo = 0.00;
	if(jQuery('[name=cal_logo]:checked').val() == '0') { jQuery('#pay_logo').text('0.00 PLN'); }
	else
	{
		jQuery('[id^="price_logo_"]').each(function() { pay_logo += parseInt(jQuery(this).val()); });
		if(jQuery('[name=cal_logo]:checked').val() == '12') pay_logo = parseFloat(pay_logo * 3.60);
		else if(jQuery('[name=cal_logo]:checked').val() == '20') pay_logo = parseFloat(pay_logo * 6.00);
		else if(jQuery('[name=cal_logo]:checked').val() == '30') pay_logo = parseFloat(pay_logo * 9.00);
		else if(jQuery('[name=cal_logo]:checked').val() == '40') pay_logo = parseFloat(pay_logo * 12.00);
	}
	jQuery('#pay_logo').text(parseFloat(pay_logo).toFixed(2)+' PLN');
	
	var pay_pers = 0.00;
	if(jQuery('[name=cal_pers]:checked').val() == '0') { jQuery('#pay_pers').text('0.00 PLN'); }
	else
	{
		jQuery('[id^="price_pers_"]').each(function() { pay_pers += parseInt(jQuery(this).val()); });
		pay_pers = parseFloat(pay_pers * 1.50);
	}
	jQuery('#pay_pers').text(parseFloat(pay_pers).toFixed(2)+' PLN');
	
	var pay_ins = 0.00;
	if(jQuery('[name=cal_ins]:checked').val() == '0') { jQuery('#pay_ins').text('0.00 PLN'); jQuery('#pay_graph').text('0.00 PLN'); }
	else
	{
		jQuery('[id^="price_ins_"]').each(function() { pay_ins += parseInt(jQuery(this).val()); });
		if(jQuery('[name=cal_type]:checked').val() == 'a4t' || jQuery('[name=cal_type]:checked').val() == 'a4tm' || jQuery('[name=cal_type]:checked').val() == 'b5t' || jQuery('[name=cal_type]:checked').val() == 'b5tb' || jQuery('[name=cal_type]:checked').val() == 'b5tl' || jQuery('[name=cal_type]:checked').val() == 'b5d')
		{
			if(jQuery('[name=cal_ins]:checked').val() == 1)
			{ if(pay_ins <= 30 && pay_ins != 0) { pay_ins = 90.00; } else if(pay_ins > 30) { pay_ins = ((parseInt(pay_ins) - 30) * 1.50) + 90.00; } }
			else if(jQuery('[name=cal_ins]:checked').val() == 2)
			{ if(pay_ins <= 30 && pay_ins != 0) { pay_ins = 180.00; } else if(pay_ins > 30) { pay_ins = ((parseInt(pay_ins) - 30) * 2.50) + 180.00; } }
		}
		else if(jQuery('[name=cal_type]:checked').val() == 'a5d' || jQuery('[name=cal_type]:checked').val() == 'a5db' || jQuery('[name=cal_type]:checked').val() == 'a5tn' || jQuery('[name=cal_type]:checked').val() == 'a5dl' || jQuery('[name=cal_type]:checked').val() == 'a5df' || jQuery('[name=cal_type]:checked').val() == 'a5de' || jQuery('[name=cal_type]:checked').val() == 'b6tp')
		{
			if(jQuery('[name=cal_ins]:checked').val() == 1)
			{ if(pay_ins <= 30 && pay_ins != 0) { pay_ins = 50.00; } else if(pay_ins > 30) { pay_ins = ((parseInt(pay_ins) - 30) * 0.90) + 50.00; } }
			else if(jQuery('[name=cal_ins]:checked').val() == 2)
			{ if(pay_ins <= 30 && pay_ins != 0) { pay_ins = 100.00; } else if(pay_ins > 30) { pay_ins = ((parseInt(pay_ins) - 30) * 1.50) + 100.00; } }
		}
		
		if(jQuery('[name=cal_graph]:checked').val() == 'k') jQuery('#pay_graph').text('0.00 PLN');
		else if(jQuery('[name=cal_graph]:checked').val() == 'i')
		{
			if(jQuery('[name=cal_ins]:checked').val() == 1) jQuery('#pay_graph').text('70.00 PLN');
			else if(jQuery('[name=cal_ins]:checked').val() == 2) jQuery('#pay_graph').text('120.00 PLN');
		}
	}
	jQuery('#pay_ins').text(parseFloat(pay_ins).toFixed(2)+' PLN');

    jQuery('#pay_discount').text(jQuery('#pay_issue').text());

    if(jQuery('[name=cal_pay]:checked').val() == 50)
    {
        var m; m =  jQuery('#pay_issue').text(); m = m.split(' ');
        jQuery('#pay_discount').text(parseFloat(m[0]*0.91).toFixed(2)+' PLN');
    }
    else if(jQuery('[name=cal_pay]:checked').val() == 100)
    {
        var m; m =  jQuery('#pay_issue').text(); m = m.split(' ');
        jQuery('#pay_discount').text(parseFloat(m[0]*0.97).toFixed(2)+' PLN');
    }

	jQuery('#pay_pack').text(Math.ceil(parseFloat(pay_issues / 30)).toFixed(0)+' szt.');
	
    
	
    
*/
}
