
    var allTypes = ['1dz','2dz','3dz'];
    var allTypesLi = document.querySelectorAll('.allTypes li');

    var allLines = ['eko','mid','premium'];
    var allLinesLi = document.querySelectorAll('.allLines li');

    var allWidths = ['standard', 'width'];
    var allWidthsLi = document.querySelectorAll('.allWidths li');

    var allConnects = ['big', 'helix'];
    var allConnectsLi = document.querySelectorAll('.allConnects li');

    var allClocks = ['noclock','clock'];
    var allClocksLi = document.querySelectorAll('.allClocks li');

    var allAdverts = ['adv0','adv1','adv3'];
    var allAdvertsLi = document.querySelectorAll('.allAdverts li');

    var allBackColour = ['c1','c2','c3'];
    var allBackColourLi = document.querySelectorAll('.allBackColour li');

    var allPacks = ['pack0','packkp','packkf','packe','packp'];
    var allPacksLi = document.querySelectorAll('.allPacks li');

    var allVarCal = ['w1','w2','w3','w4'];
    var allVarCalLi = document.querySelectorAll('.allVarCal li');

    var allGraphicDesigns = ['gown','gw1','gw2','gw3', 'gw4'];
    var allGraphicDesignsLi = document.querySelectorAll('.allGraphicDesigns li');

    var allPrintProductions = ['noprint','print'];
    var allPrintProductionsLi = document.querySelectorAll('.allPrintProductions li');

    var allTrans = ['personally','clientC','infomaxC'];
    var allTransLi = document.querySelectorAll('.allTrans li');

    var allPayments = ['p7d','p14d','pp100'];
    var allPaymentsLi = document.querySelectorAll('.allPayments li');

    var allCalendaryImg = ['1dz_big','1dz_spi','2dz_big','2dz_spi','3dz_big_1','3dz_spi_1'];
    var headImg = document.querySelector('.imgHeader .clock');
    var calendaryImg = document.querySelector('.imgHeader .conn');



    var allHeadsImg = ['1dz_nie','2dz_nie','3dz_nie'];

    /*TYPE CHOICE*/
    allTypesLi.forEach(el => el.addEventListener('click', function (el) {
        for(var i = 0; i < allTypesLi.length; i++){
            allTypesLi[i].classList.remove('active');
        }

        /*1DZ TYPE*/
        if(this.className === '1dz col-xs-12 col-sm-12 col-md-4 col-lg-4'){
            /*IMAGES*/
            headImg.src = 'images/dzielne/'+allHeadsImg[0]+'.jpg';
            calendaryImg.src = 'images/dzielne/'+allCalendaryImg[0]+'.png';

            /*SHOW AND HIDE*/
            $(".mid").show();

            /*1DZ LINE CHOICE*/
            allLinesLi.forEach(el1 => el1.addEventListener('click', function (el1) {
                for(var i = 0; i < allLinesLi.length; i++ ){allLinesLi[i].classList.remove('active');}
                /*1DZ EKO LINE*/
                if(this.className === 'eko col-xs-12 col-sm-12 col-md-4 col-lg-4'){
                    /*IMAGES*/

                    /*SHOW AND HIDE*/
                    $(".width").hide();
                    $(".helix").hide();
                    $(".clock").hide();
                    $(".adv0").show();
                    $(".adv1").show();
                    $(".adv3").hide();
                    $(".c1").show();
                    $(".c2").show();
                    $(".c3").show();
                    $(".w1").show();
                    $(".w2").hide();
                    $(".w3").hide();
                    $(".w4").hide();
                    $(".packp").hide();

                    /*1DZ EKO WIDTH CHOICE*/
                    allWidthsLi.forEach(el2 => el2.addEventListener('click', function (el2) {

                        for(var i = 0; i < allWidthsLi.length; i++){ allWidthsLi[i].classList.remove('active');}

                        /*1DZ EKO STD */
                         if(this.className === 'standard col-xs-12 col-sm-6 col-md-6 col-lg-6'){
                            /*IMAGES*/

                            /*SHOW AND HIDE*/

                            /*1DZ EKO STD CONNECT CHOICE*/
                            allConnectsLi.forEach(el3 => el3.addEventListener('click', function (el3) {
                                for(var i = 0; i < allConnects.length; i++){ allConnectsLi[i].classList.remove('active');}

                                /*1DZ EKO STD BIG*/
                                if(this.className === 'big col-xs-12 col-sm-6 col-md-6 col-lg-6'){
                                   /*IMAGES*/

                                   /*SHOW AND HIDE*/

                                   /*1DZ EKO STD BIG CLOCK CHOICE*/
                                   allClocksLi.forEach(el4 => el4.addEventListener('click', function (el4) {
                                       for(var i = 0; i < allClocks.length; i++){ allClocksLi[i].classList.remove('active');}

                                       /*1DZ EKO STD BIG NOCLOCK*/
                                       if(this.className === 'noclock col-xs-12 col-sm-6 col-md-6 col-lg-6'){
                                            /*IMAGES*/

                                            /*SHOW AND HIDE*/
                                            $(".packp").hide();


                                            /*1DZ EKO STD BIG NOCLOCK ADVERT CHOICE*/
                                            allAdvertsLi.forEach(el5 => el5.addEventListener('click', function (el5) {
                                                for(var i = 0; i < allAdverts.length; i++){allAdvertsLi[i].classList.remove('active');}


                                                /*1DZ EKO STD BIG NOCLOCK ADV0*/
                                                if(this.className === 'adv0 col-xs-12 col-sm-6 col-md-6 col-lg-4'){
                                                    /*IMAGES*/

                                                    /*SHOW AND HIDE*/
                                                    /*1DZ EKO STD BIG NOCLOCK ADV0 BACKCOLOR CHOICE*/
                                                    allBackColourLi.forEach(el6 => el6.addEventListener(('click'), function (el6) {
                                                        for(var i = 0; i < allBackColour.length; i++){ allBackColourLi[i].classList.remove('active');}

                                                        /*1DZ EKO STD BIG NOCLOCK ADV0 C1*/
                                                        if(this.className === 'c1 col-xs-12 col-sm-6 col-md-6 col-lg-4'){
                                                             /*IMAGES*/

                                                             /*SHOW AND HIDE*/
                                                             allVarCalLi.forEach(el7 => el7.addEventListener(('click'),function(el7){
                                                                for(var i = 0; i < allVarCal.length; i++){ allVarCalLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c1 VARCALS*/
                                                                if(this.className === 'w1 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'w2 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'w3 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'w4 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                             }))

                                                             allPacksLi.forEach(el8 => el8.addEventListener(('click'),function(el8){
                                                                for(var i = 0; i < allPacks.length; i++){ allPacksLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c1 PACKS*/
                                                                if(this.className === 'pack0 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'packkp col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'packkf col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'packe col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'packp col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                             }))
                                                             allGraphicDesignsLi.forEach(el81 => el81.addEventListener(('click'),function(el81){
                                                                for(var i = 0; i < allGraphicDesigns.length; i++){ allGraphicDesignsLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c1 GRAPHIC DESIGN*/
                                                                if(this.className === 'gown col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw1 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw2 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw3 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw4 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                             }))
                                                             allPrintProductionsLi.forEach(el82 => el82.addEventListener(('click'),function(el82){
                                                                for(var i = 0; i < allPrintProductions.length; i++){ allPrintProductionsLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c1 PRINT PRODUCTION*/
                                                                if(this.className === 'noprint col-xs-12 col-sm-6 col-md-6 col-lg-6')
                                                                this.classList.add('active');
                                                                if(this.className === 'print col-xs-12 col-sm-6 col-md-6 col-lg-6')
                                                                this.classList.add('active');
                                                             }))

                                                             allTransLi.forEach(el83 => el83.addEventListener(('click'),function(el83){
                                                                for(var i = 0; i < allTrans.length; i++){ allTransLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c1 TRANSPORT*/
                                                                if(this.className === 'personally col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'clientC col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'infomaxC col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                             }))
                                                             allPaymentsLi.forEach(el84 => el84.addEventListener(('click'),function(el84){
                                                                for(var i = 0; i < allPayments.length; i++){ allPaymentsLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c1 PAYMENTS*/
                                                                if(this.className === 'p7d col-xs-12 col-sm-6 col-md-6 col-lg-4')
                                                                this.classList.add('active');
                                                                if(this.className === 'p14d col-xs-12 col-sm-6 col-md-6 col-lg-4')// bez cols
                                                                this.classList.add('active');
                                                                if(this.className === 'pp100 col-xs-12 col-sm-6 col-md-6 col-lg-4')
                                                                this.classList.add('active');

                                                             }))

                                                             this.classList.add('active');

                                                         }

                                                         /*1DZ EKO STD BIG NOCLOCK ADV0 C2*/
                                                         if(this.className === 'c2 col-xs-12 col-sm-6 col-md-6 col-lg-4'){
                                                            /*IMAGES*/

                                                             /*SHOW AND HIDE*/
                                                             allVarCalLi.forEach(el9 => el9.addEventListener(('click'),function(el9){
                                                                for(var i = 0; i < allVarCal.length; i++){ allVarCalLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c2 VAR CALS*/
                                                                if(this.className === 'w1 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'w2 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'w3 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'w4 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                             }))

                                                             allPacksLi.forEach(el10 => el10.addEventListener(('click'),function(el10){
                                                                for(var i = 0; i < allPacks.length; i++){ allPacksLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c2 PACKS*/
                                                                if(this.className === 'pack0  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                                if(this.className === 'packkp  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                                if(this.className === 'packkf  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                                if(this.className === 'packe  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                                if(this.className === 'packp  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                             }))

                                                             allGraphicDesignsLi.forEach(el81 => el81.addEventListener(('click'),function(el81){
                                                                for(var i = 0; i < allGraphicDesigns.length; i++){ allGraphicDesignsLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c2 GRAPHIC DESIGN*/
                                                                if(this.className === 'gown col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw1 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw2 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw3 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw4 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                             }))
                                                             allPrintProductionsLi.forEach(el82 => el82.addEventListener(('click'),function(el82){
                                                                for(var i = 0; i < allPrintProductions.length; i++){ allPrintProductionsLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c2 PRINT PRODUCTION*/
                                                                if(this.className === 'noprint col-xs-12 col-sm-6 col-md-6 col-lg-6')
                                                                this.classList.add('active');
                                                                if(this.className === 'print col-xs-12 col-sm-6 col-md-6 col-lg-6')
                                                                this.classList.add('active');
                                                             }))

                                                             allTransLi.forEach(el83 => el83.addEventListener(('click'),function(el83){
                                                                for(var i = 0; i < allTrans.length; i++){ allTransLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c2 TRANSPORT*/
                                                                if(this.className === 'personally col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'clientC col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'infomaxC col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                             }))
                                                             allPaymentsLi.forEach(el84 => el84.addEventListener(('click'),function(el84){
                                                                for(var i = 0; i < allPayments.length; i++){ allPaymentsLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c2 PAYMENTS*/
                                                                if(this.className === 'p7d col-xs-12 col-sm-6 col-md-6 col-lg-4')
                                                                this.classList.add('active');
                                                                if(this.className === 'p14d col-xs-12 col-sm-6 col-md-6 col-lg-4')// bez cols
                                                                this.classList.add('active');
                                                                if(this.className === 'pp100 col-xs-12 col-sm-6 col-md-6 col-lg-4')
                                                                this.classList.add('active');

                                                             }))


                                                             this.classList.add('active');


                                                         }

                                                            /*1DZ EKO STD BIG NOCLOCK ADV0 C3*/
                                                         if(this.className === 'c3 col-xs-12 col-sm-6 col-md-6 col-lg-4'){
                                                             /*IMAGES*/

                                                             /*SHOW AND HIDE*/
                                                             allVarCalLi.forEach(el11 => el11.addEventListener(('click'),function(el11){
                                                                for(var i = 0; i < allVarCal.length; i++){ allVarCalLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c3 W1*/
                                                                if(this.className === 'w1 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'w2 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'w3 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'w4 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                             }))

                                                             allPacksLi.forEach(el12 => el12.addEventListener(('click'),function(el12){
                                                                for(var i = 0; i < allPacks.length; i++){ allPacksLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c3 W1*/
                                                                if(this.className === 'pack0  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                                if(this.className === 'packkp  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                                if(this.className === 'packkf  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                                if(this.className === 'packe  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                                if(this.className === 'packp  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                             }))

                                                             allGraphicDesignsLi.forEach(el81 => el81.addEventListener(('click'),function(el81){
                                                                for(var i = 0; i < allGraphicDesigns.length; i++){ allGraphicDesignsLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c3 GRAPHIC DESIGN*/
                                                                if(this.className === 'gown col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw1 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw2 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw3 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw4 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                             }))
                                                             allPrintProductionsLi.forEach(el82 => el82.addEventListener(('click'),function(el82){
                                                                for(var i = 0; i < allPrintProductions.length; i++){ allPrintProductionsLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c3 PRINT PRODUCTION*/
                                                                if(this.className === 'noprint col-xs-12 col-sm-6 col-md-6 col-lg-6')
                                                                this.classList.add('active');
                                                                if(this.className === 'print col-xs-12 col-sm-6 col-md-6 col-lg-6')
                                                                this.classList.add('active');
                                                             }))

                                                             allTransLi.forEach(el83 => el83.addEventListener(('click'),function(el83){
                                                                for(var i = 0; i < allTrans.length; i++){ allTransLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c3 TRANSPORT*/
                                                                if(this.className === 'personally col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'clientC col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'infomaxC col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                             }))
                                                             allPaymentsLi.forEach(el84 => el84.addEventListener(('click'),function(el84){
                                                                for(var i = 0; i < allPayments.length; i++){ allPaymentsLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c3 PAYMENTS*/
                                                                if(this.className === 'p7d col-xs-12 col-sm-6 col-md-6 col-lg-4')
                                                                this.classList.add('active');
                                                                if(this.className === 'p14d col-xs-12 col-sm-6 col-md-6 col-lg-4')// bez cols
                                                                this.classList.add('active');
                                                                if(this.className === 'pp100 col-xs-12 col-sm-6 col-md-6 col-lg-4')
                                                                this.classList.add('active');

                                                             }))


                                                             this.classList.add('active');


                                                         }
                                                         this.classList.add('active');
                                                         }))


                                                }

                                                /*1DZ EKO STD BIG NOCLOCK ADV1*/
                                                if(this.className === 'adv1 col-xs-12 col-sm-6 col-md-6 col-lg-4'){
                                                    /*IMAGES*/

                                                    /*SHOW AND HIDE*/
                                                    /*1DZ EKO STD BIG NOCLOCK ADV0 BACKCOLOR CHOICE*/
                                                    allBackColourLi.forEach(el6 => el6.addEventListener(('click'), function (el6) {
                                                        for(var i = 0; i < allBackColour.length; i++){ allBackColourLi[i].classList.remove('active');}

                                                        /*1DZ EKO STD BIG NOCLOCK ADV1 C1*/
                                                        if(this.className === 'c1 col-xs-12 col-sm-6 col-md-6 col-lg-4'){
                                                             /*IMAGES*/

                                                             /*SHOW AND HIDE*/
                                                             allVarCalLi.forEach(el7 => el7.addEventListener(('click'),function(el7){
                                                                for(var i = 0; i < allVarCal.length; i++){ allVarCalLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv1 c1 VARCALS*/
                                                                if(this.className === 'w1 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'w2 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'w3 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'w4 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                             }))

                                                             allPacksLi.forEach(el8 => el8.addEventListener(('click'),function(el8){
                                                                for(var i = 0; i < allPacks.length; i++){ allPacksLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv1 c1 PACKS*/
                                                                if(this.className === 'pack0 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'packkp col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'packkf col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'packe col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'packp col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                             }))
                                                             allGraphicDesignsLi.forEach(el81 => el81.addEventListener(('click'),function(el81){
                                                                for(var i = 0; i < allGraphicDesigns.length; i++){ allGraphicDesignsLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv1 c1 GRAPHIC DESIGN*/
                                                                if(this.className === 'gown col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw1 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw2 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw3 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw4 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                             }))
                                                             allPrintProductionsLi.forEach(el82 => el82.addEventListener(('click'),function(el82){
                                                                for(var i = 0; i < allPrintProductions.length; i++){ allPrintProductionsLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv1 c1 PRINT PRODUCTION*/
                                                                if(this.className === 'noprint col-xs-12 col-sm-6 col-md-6 col-lg-6')
                                                                this.classList.add('active');
                                                                if(this.className === 'print col-xs-12 col-sm-6 col-md-6 col-lg-6')
                                                                this.classList.add('active');
                                                             }))

                                                             allTransLi.forEach(el83 => el83.addEventListener(('click'),function(el83){
                                                                for(var i = 0; i < allTrans.length; i++){ allTransLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv1 c1 TRANSPORT*/
                                                                if(this.className === 'personally col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'clientC col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'infomaxC col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                             }))
                                                             allPaymentsLi.forEach(el84 => el84.addEventListener(('click'),function(el84){
                                                                for(var i = 0; i < allPayments.length; i++){ allPaymentsLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv1 c1 PAYMENTS*/
                                                                if(this.className === 'p7d col-xs-12 col-sm-6 col-md-6 col-lg-4')
                                                                this.classList.add('active');
                                                                if(this.className === 'p14d col-xs-12 col-sm-6 col-md-6 col-lg-4')// bez cols
                                                                this.classList.add('active');
                                                                if(this.className === 'pp100 col-xs-12 col-sm-6 col-md-6 col-lg-4')
                                                                this.classList.add('active');

                                                             }))

                                                             this.classList.add('active');

                                                         }

                                                         /*1DZ EKO STD BIG NOCLOCK ADV1 C2*/
                                                         if(this.className === 'c2 col-xs-12 col-sm-6 col-md-6 col-lg-4'){
                                                            /*IMAGES*/

                                                             /*SHOW AND HIDE*/
                                                             allVarCalLi.forEach(el9 => el9.addEventListener(('click'),function(el9){
                                                                for(var i = 0; i < allVarCal.length; i++){ allVarCalLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv1 c2 VAR CALS*/
                                                                if(this.className === 'w1 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'w2 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'w3 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'w4 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                             }))

                                                             allPacksLi.forEach(el10 => el10.addEventListener(('click'),function(el10){
                                                                for(var i = 0; i < allPacks.length; i++){ allPacksLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv1 c2 PACKS*/
                                                                if(this.className === 'pack0  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                                if(this.className === 'packkp  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                                if(this.className === 'packkf  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                                if(this.className === 'packe  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                                if(this.className === 'packp  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                             }))

                                                             allGraphicDesignsLi.forEach(el81 => el81.addEventListener(('click'),function(el81){
                                                                for(var i = 0; i < allGraphicDesigns.length; i++){ allGraphicDesignsLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv1 c2 GRAPHIC DESIGN*/
                                                                if(this.className === 'gown col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw1 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw2 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw3 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw4 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                             }))
                                                             allPrintProductionsLi.forEach(el82 => el82.addEventListener(('click'),function(el82){
                                                                for(var i = 0; i < allPrintProductions.length; i++){ allPrintProductionsLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv1 c2 PRINT PRODUCTION*/
                                                                if(this.className === 'noprint col-xs-12 col-sm-6 col-md-6 col-lg-6')
                                                                this.classList.add('active');
                                                                if(this.className === 'print col-xs-12 col-sm-6 col-md-6 col-lg-6')
                                                                this.classList.add('active');
                                                             }))

                                                             allTransLi.forEach(el83 => el83.addEventListener(('click'),function(el83){
                                                                for(var i = 0; i < allTrans.length; i++){ allTransLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv1 c2 TRANSPORT*/
                                                                if(this.className === 'personally col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'clientC col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'infomaxC col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                             }))
                                                             allPaymentsLi.forEach(el84 => el84.addEventListener(('click'),function(el84){
                                                                for(var i = 0; i < allPayments.length; i++){ allPaymentsLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv1 c2 PAYMENTS*/
                                                                if(this.className === 'p7d col-xs-12 col-sm-6 col-md-6 col-lg-4')
                                                                this.classList.add('active');
                                                                if(this.className === 'p14d col-xs-12 col-sm-6 col-md-6 col-lg-4')// bez cols
                                                                this.classList.add('active');
                                                                if(this.className === 'pp100 col-xs-12 col-sm-6 col-md-6 col-lg-4')
                                                                this.classList.add('active');

                                                             }))


                                                             this.classList.add('active');


                                                         }

                                                            /*1DZ EKO STD BIG NOCLOCK ADV0 C3*/
                                                         if(this.className === 'c3 col-xs-12 col-sm-6 col-md-6 col-lg-4'){
                                                             /*IMAGES*/

                                                             /*SHOW AND HIDE*/
                                                             allVarCalLi.forEach(el11 => el11.addEventListener(('click'),function(el11){
                                                                for(var i = 0; i < allVarCal.length; i++){ allVarCalLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c3 W1*/
                                                                if(this.className === 'w1 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'w2 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'w3 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                                if(this.className === 'w4 col-xs-12 col-sm-12 col-md-3 col-lg-3')
                                                                this.classList.add('active');
                                                             }))

                                                             allPacksLi.forEach(el12 => el12.addEventListener(('click'),function(el12){
                                                                for(var i = 0; i < allPacks.length; i++){ allPacksLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c3 W1*/
                                                                if(this.className === 'pack0  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                                if(this.className === 'packkp  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                                if(this.className === 'packkf  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                                if(this.className === 'packe  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                                if(this.className === 'packp  col-xs-12 col-sm-12 col-md-3 col-lg-3 ')
                                                                this.classList.add('active');
                                                             }))

                                                             allGraphicDesignsLi.forEach(el81 => el81.addEventListener(('click'),function(el81){
                                                                for(var i = 0; i < allGraphicDesigns.length; i++){ allGraphicDesignsLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c3 GRAPHIC DESIGN*/
                                                                if(this.className === 'gown col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw1 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw2 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw3 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'gw4 col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                             }))
                                                             allPrintProductionsLi.forEach(el82 => el82.addEventListener(('click'),function(el82){
                                                                for(var i = 0; i < allPrintProductions.length; i++){ allPrintProductionsLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c3 PRINT PRODUCTION*/
                                                                if(this.className === 'noprint col-xs-12 col-sm-6 col-md-6 col-lg-6')
                                                                this.classList.add('active');
                                                                if(this.className === 'print col-xs-12 col-sm-6 col-md-6 col-lg-6')
                                                                this.classList.add('active');
                                                             }))

                                                             allTransLi.forEach(el83 => el83.addEventListener(('click'),function(el83){
                                                                for(var i = 0; i < allTrans.length; i++){ allTransLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c3 TRANSPORT*/
                                                                if(this.className === 'personally col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'clientC col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                                if(this.className === 'infomaxC col-xs-12 col-sm-12 col-md-12 col-lg-12')
                                                                this.classList.add('active');
                                                             }))
                                                             allPaymentsLi.forEach(el84 => el84.addEventListener(('click'),function(el84){
                                                                for(var i = 0; i < allPayments.length; i++){ allPaymentsLi[i].classList.remove('active')}
                                                                /*1dz eko std big noclock adv0 c3 PAYMENTS*/
                                                                if(this.className === 'p7d col-xs-12 col-sm-6 col-md-6 col-lg-4')
                                                                this.classList.add('active');
                                                                if(this.className === 'p14d col-xs-12 col-sm-6 col-md-6 col-lg-4')// bez cols
                                                                this.classList.add('active');
                                                                if(this.className === 'pp100 col-xs-12 col-sm-6 col-md-6 col-lg-4')
                                                                this.classList.add('active');

                                                             }))


                                                             this.classList.add('active');


                                                         }
                                                         this.classList.add('active');
                                                         }))



                                                }
                                            this.classList.add('active');
                                            }))

                                       }
                                       this.classList.add('active');
                                       }))

                                }
                                this.classList.add('active');
                                }))
                         }
                         this.classList.add('active');
                    }))

                }
                /*1DZ MID LINE*/
                if(this.className === 'mid col-xs-12 col-sm-12 col-md-4 col-lg-4'){
                    /*IMAGES*/

                    /*SHOW AND HIDE*/
                    $(".width").hide();
                    $(".helix").hide();
                    $(".clock").hide();
                    $(".adv0").hide();
                    $(".adv1").show();
                    $(".adv3").hide();
                    $(".c1").hide();
                    $(".c2").hide();
                    $(".c3").addClass("active");
                    $(".w1").show();
                    $(".w2").hide();
                    $(".w3").hide();
                    $(".w4").hide();
                    $(".packp").hide();
                }
                /*1DZ PREMIUM LINE*/
                if(this.className === 'premium col-xs-12 col-sm-12 col-md-4 col-lg-4'){
                    /*IMAGES*/

                    /*SHOW AND HIDE*/
                    $(".width").show();
                    $(".helix").show();
                    $(".clock").show();
                    $(".adv0").show();
                    $(".adv1").show();
                    $(".adv3").hide();
                    $(".c1").show();
                    $(".c2").show();
                    $(".c3").show();
                    $(".w1").show();
                    $(".w2").hide();
                    $(".w3").hide();
                    $(".w4").hide();
                    $(".packp").hide();
                }

                this.classList.add('active');
            }))
        }
        /*2DZ TYPE*/
        if(this.className === '2dz col-xs-12 col-sm-12 col-md-4 col-lg-4'){
            /*IMAGES*/
            headImg.src = 'images/dzielne/'+allHeadsImg[1]+'.jpg';
            calendaryImg.src = 'images/dzielne/'+allCalendaryImg[2]+'.png';

            /*SHOW AND HIDE*/
            $(".mid").hide();
            allLinesLi.forEach(el2 => el2.addEventListener('click', function (el1) {
                            for(var i = 0; i < allLinesLi.length; i++ ){
                                allLinesLi[i].classList.remove('active');
                            }

                            if(this.className === 'mid col-xs-12 col-sm-12 col-md-4 col-lg-4'){
                                $(".width").hide();
                            }
            }))
        }
        /*3DZ TYPE*/
        if(this.className === '3dz col-xs-12 col-sm-12 col-md-4 col-lg-4'){
            headImg.src = 'images/dzielne/'+allHeadsImg[2]+'.jpg';
            calendaryImg.src = 'images/dzielne/'+allCalendaryImg[4]+'.png';
            $(".mid").hide();
        }
        this.classList.add('active');
    }))

