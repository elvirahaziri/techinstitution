$(document).ready(function(){
	var datatimeNow=new Date();
	
	console.log("DOM is ready!",datatimeNow);
	
$('#border-wait-form').submit(function(event){
	
	event.preventDefault();
	var datetimeNow=$('#datetime-now');
	//hyrje ne minuta
	var pikaKufitare= $('#pika-kufitare').val();
	var hyrjeMinMinuta=$('#hyrje-min-minuta').val();
	var hyrjeMaxMinuta=$('#hyrje-max-minuta').val();
	var daljeMinMinuta=$('#dalje-min-minuta').val();
	var daljeMaxMinuta=$('#dalje-max-minuta').val();
	//console.log(pikaKufitare);
	//dalje ne minuta
	//hyrje ne metra
	var hyrjeMinMetra=$('#hyrje-min-metra').val();
	var hyrjeMaxMetra=$('#hyrje-max-metra').val();
	var daljeMinMetra=$('#dalje-min-metra').val();
	var daljeMaxMetra=$('#dalje-max-metra').val();
	//dalje ne metra
	
	var dataJson={ "pikaKufitare":pikaKufitare,
	               "hyrjeMinMinuta": parseInt( hyrjeMinMinuta),
				   "hyrjeMaxMinuta":parseInt (hyrjeMaxMinuta),
				   "daljeMinMinuta":parseInt(daljeMinMinuta),
				   "daljeMaxMinuta":parseInt(daljeMaxMinuta),
				   "hyrjeMinMetra":parseInt(hyrjeMinMetra),
				   "hyrjeMaxMetra":parseInt(hyrjeMaxMetra),
				   "daljeMinMetra":parseInt(daljeMinMetra),
	                "daljeMaxMetra":parseInt(daljeMaxMetra)};
	console.log(dataJson);
	
	
	//console.log("pikaKufitare:",pikaKufitare,"\n Hyrje min:",hyrjeMinMinuta,"Hyrje Max:" ,hyrjeMaxMinuta,"Dalje Min:",daljeMinMinuta,"Dalje Max:",daljeMaxMinuta);
	//console.log("hyrje min:" ,hyrjeMinMetra,"hyrje Max:",hyrjeMaxMetra,"daljeMin:",daljeMinMetra,"dalje Max:",daljeMaxMetra);
	
});
});

