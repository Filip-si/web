config();
function config(){
let typeSelection = document.querySelector('select#cal_type');
typeSelection.addEventListener('change', () => {
    if(typeSelection.options[typeSelection.selectedIndex].value == '1dz')
    {
    document.getElementById('mid').style.display = 'block';
    let lineSelection = document.querySelector('select#cal_line');
    for(var i = 0; i < lineSelection.options.length; i++){
        var isSelected = lineSelection.options[i].defaultSelected;
    }
    lineSelection.addEventListener('change', () => {
        if((typeSelection.options[typeSelection.selectedIndex].value == '1dz')&&(lineSelection.options[lineSelection.selectedIndex].value == 'eko'))
        {window.alert('1dz and eko');
        }
        else if((typeSelection.options[typeSelection.selectedIndex].value == '1dz')&&(lineSelection.options[lineSelection.selectedIndex].value == 'mid'))
        {window.alert('md1');
        }
        else if((lineSelection.options[lineSelection.selectedIndex].value == 'pre'))
        {window.alert('pr1');
        }

    })

    }
    else if(typeSelection.options[typeSelection.selectedIndex].value == '2dz')
    {
    document.getElementById('mid').style.display = 'none';
    let lineSelection = document.querySelector('select#cal_line');
    for(var i = 0; i < lineSelection.options.length; i++){
            var isSelected = lineSelection.options[i].defaultSelected;
        }
    lineSelection.addEventListener('change', () => {
        if((lineSelection.options[lineSelection.selectedIndex].value == 'eko'))
        {window.alert('ek2');
        }
        else if((lineSelection.options[lineSelection.selectedIndex].value == 'pre'))
        {window.alert('pr2');
        }

    })
    }
    else if(typeSelection.options[typeSelection.selectedIndex].value == '3dz')
    {
    document.getElementById('mid').style.display = 'none';
    let lineSelection = document.querySelector('select#cal_line');
    for(var i = 0; i < lineSelection.options.length; i++){
            var isSelected = lineSelection.options[i].defaultSelected;
        }
    lineSelection.addEventListener('change', () => {
        if((lineSelection.options[lineSelection.selectedIndex].value == 'eko'))
        {window.alert('ek3');
        }
        else if((lineSelection.options[lineSelection.selectedIndex].value == 'pre'))
        {window.alert('pr3');
        }

    })
    }


})

}
