// JavaScript Document

//var cuento = location.search.substr(1);//alert(cuento);

if( isiPhone > -1 || isiPod > -1 || isiPad > -1 || android > -1 ) {
	
	//alert('window.orientation: ' + window.orientation);
	
	if ( window.orientation != 0 ){
		
		//alert('orientation != 0');
		/*$("#dialog8").css({"background-color":"transparent"});
		$("#dialog8").append('<img src="img/turn_screen.png" /> <a href="javascript:void(0)" class="close btCloseCredits"></a>');*/
		
	} else {
		
		//alert('orientation = 0');
		cuentosZoom();
		
	}//fin if ( window.orientation

} else {
	
	cuentosZoom();
	
}//fin if( isiPhone