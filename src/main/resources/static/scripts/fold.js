jQuery('[name^=c_]').bind('change', function(){
    config();
});

config();

function config()
{
    jQuery('label[for*=type_], label[for*=line_]').show();

    if(jQuery('[name=c_type]:checked').val() == '2dz' || jQuery('[name=c_type]:checked').val() == '3dz')
    {
    	jQuery('#line_pre').prop('checked', true);
//    	jQuery('label[for=line_mid]').hide();
//    	jQuery('label[for=line_eko]').show();
//    	jQuery('label[for=line_pre]').show();

    }else if(jQuery('[name=c_type]:checked').val() == '1dz'){
        jQuery('label[for=line_mid]').show();
        jQuery('label[for=line_eko]').show();
        jQuery('label[for=line_pre]').show();

    }

}