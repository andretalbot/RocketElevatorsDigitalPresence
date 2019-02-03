/**	CONTACT FORM
*************************************************** **/
var _hash = window.location.hash;
var current_forfait =  $('#forfait').val();

$(".row-1,.row-2,.row-3,.row-4").hide();
// $(".col-md-4").show();

// $('#type_of_business').change(function() {


// 	alert( "je viens de change de choix dans la liste: " + this.value);
//   });
// $(""

  
// $("type_of_business").change(function() {





$('#type_of_business').change(function() {

	// TOUTE CACHER	

	console.log('change type of busines');
	var current_type_of_business =  $('#type_of_business').val();
	console.log('current type of busines = ' + current_type_of_business );
	
	// $if.on(clisk)("Residential")

	if( current_type_of_business == 'Residential'){
		console.log('Je suis dans le type residentiel');
		//Décache la section pour le résidentiel	
		$(".row-4").show();
	    $(".row-1,.row-2,.row-3").hide();
	}

	if( current_type_of_business == 'Commercial'){
		console.log('Je suis dans le type Commercial');
		$(".row-3").show();
		$(".row-1,.row-2,.row-4").hide();
	}
    if( current_type_of_business == 'Corporatif'){
		console.log('Je suis dans le type Corporatif');
		$(".row-2").show();
		$(".row-1,.row-3,.row-4").hide();

	}

	if( current_type_of_business == 'Hybride'){
		console.log('Je suis dans le type Hybride');
		$(".row-1").show();
		$(".row-2,.row-3,.row-4").hide();

		
	}
	jQuery(_hash).show();
});
 
$('input').keyup(function() {
	collect_data();
	compute();
});

var collect_data = function(){
	
	var nb_appartments = $('#nb_appartments').val();
    //  console.log(nb_appartments +"appartement");

	
    var nb_floors = $('#nb_floors').val();
	//  console.log(nb_floors + "etage");
	var nb_floors1 = $('#nb_floors1').val();
	//  console.log(nb_floors1 + "etag1");
	var nb_floors2 = $('#nb_floors2').val();
	//  console.log(nb_floors2 + "etag2");
	var nb_floors3 = $('#nb_floors3').val();
	//  console.log(nb_floors3 + "etag3");
	
    var nb_basement = $('#nb_basement').val();
	//  console.log(nb_basement +"sous sol");
	var nb_basement1 = $('#nb_basement1').val();
	// console.log(nb_basement1 +"sous sol1");
	var nb_basement2 = $('#nb_basement2').val();
	// console.log(nb_basement2 +"sous sol2");
	var nb_basement3 = $('#nb_basement3').val();
	//  console.log(nb_basement3 +"sous sol3");
	
	var nb_shop1 = $('#nb_shop1').val();
    // console.log(nb_shop1 +"shop1ok");
	var nb_shop3 = $('#nb_shop3').val();
	// console.log(nb_shop3 +"shop3ok");
	
    var nb_of_parking1 = $('#nb_of_parking1').val();
	// console.log(nb_of_parking1 + "nb1");
	var nb_of_parking2 = $('#nb_of_parking2').val();
	//  console.log(nb_of_parking2 + "nb2");
	var nb_of_parking3 = $('#nb_of_parking3').val();
	//  console.log(nb_of_parking3 + "nb3");

    var cage_elevator = $('#cage_elevator').val();
	// console.log(cage_elevator +"cage");
    var nb_People_by_floors =$('#People_by_floors').val();
	//  console.log(People_by_floors + "people floor");
    var nb_business=$('#nb_business').val();
	//  console.log(nb_business +"business");
    var Hours_of_activity=$('#Hours_of_activity').val();
    //   console.log(Hours_of_activity + "activity");
    var nb_people=$('#nb_people').val();
    //    console.log(nb_people + "Number_people");

	$('#forfait').change(function() {

		// TOUTE CACHER	
	
		console.log(' change forfait');
		var stand=  $('#forfait').val();
		console.log('standard= ' + stand );
		
		// $if.on(clisk)("Residential")
	
		if( stand == 'standard'){
			console.log('standard');
			//Décache la section pour le résidentiel	
			
		}
	
		if( stand == 'premium'){
			console.log('premium');
			
		}
		if( stand == 'excelium'){
			console.log('excelium');
						
		}
		jQuery(_hash).show();
	});


	 }
function myFunction() {
	
  }

function compute() {
       
        // PRIZE+ INSTALATION
	 var standard=7565;
	 var soustotalstandard=(standard * 1.10);
     var totalstandard=(soustotalstandard + Number + standard);	
	
	//  var prizestandard=(totalstandard * nbcage);

     var premium=12345;
     var soustotalpremium=(premium * 1.13);
     var totalpremium=(soustotalpremium + Number + premium);
    //  var prizepremium=(totalpremiun * nbcage); 

     var excelium=15400;
	 var soustotalexcelium=(excelium * 1.16);
	 var totalexcelium=(soustotalexcelium + Number + excelium);
	//  var prizeexcelium=(totalpremiun * nbcage); 
      
    // RESIDENTIAL

	var collect_data_nb_floors = document.getElementById("nb_floors") 
    var collect_data_nb_appartments = document.getElementById("nb_appartments")
    var collect_data_nb_basement = document.getElementById("nb_basement")

	var nbetage = (collect_data_nb_floors - collect_data_nb_basement);
	console.log(nbetage+"cest ok")
	var appetage = Math.ceil(collect_data_nb_appartments / nbetage );
	var nbtotalcage = Math.ceil(appetage / 6);

	var standardprize = nbtotalcage1 * totalstandard;
	var premiunprize= nbtotalcage1*totalpremium;
	var exceliunprize = nbtotalcage1*totalexcelium;

	if(current_forfait=="standard"){document.getElementById("prize").value = standardprize}
    else if ("#premium"){document.getElementById("prize").value = premiunprize}
	else if ("#excelium"){document.getElementById("prize").value = exceliunprize};






	    document.getElementById("cage").innerhtml = nbtotalcage;
    // };



	
	// HYBRIDE
     
	var collect_data_nb_basement3 = document.getElementById("basement3")
	var collect_data_nb_floors3 = document.getElementById("nb_floors3")
	var collect_data_nb_people = document.getElementById("nb_people")
	
    var etagetotal3 = (collect_data_nb_floors3 + Number + collect_data_nb_basement3);
    var occtotal3 = Math.ceil(collect_data_nb_people * etagetotal3 ); 
    var nbcolonne3 = Math.ceil(etagetotal3 / 20);
    var nbcage3 = Math.ceil(occtotal3 / 1000);
	var nbtotalcage3 = Math.ceil(nbcage3 * nbcolonne3);

	var standardprize3 = nbtotalcage1 * totalstandard;
	var premiunprize3= nbtotalcage1*totalpremium;
	var exceliunprize3 = nbtotalcage1*totalexcelium;

	if(current_forfait=="standard"){document.getElementById("prize").value = standardprize3}
    else if ("#premium"){document.getElementById("prize").value = premiunprize3}
	else if ("#excelium"){document.getElementById("prize").value = exceliunprize3};

	   document.getElementById("cage").innerhtml = nbtotalcage3;
// };
	
	// CORPORATIF
	var collect_data_nb_basement2 = document.getElementById("nb_basement2").value
     console.log(collect_data_nb_basement2 +"ok")
	var collect_data_nb_floors2  = document.getElementById("nb_floors2").value
	  console.log(collect_data_nb_floors2 +"okfloor")
	var collect_data_nb_People_by_floors = document.getElementById("People_by_floors").value
	 console.log(collect_data_nb_People_by_floors + "camava")
    var etagetotal2 = (collect_data_nb_floors2 + Number + collect_data_nb_basement2);
	 console.log(etagetotal2 +"oktoto")


   
    var occtotal2 = Math.ceil(collect_data_nb_People_by_floors * etagetotal2 ); 
    var nbcolonne2 = Math.ceil(etagetotal2 / 20);
    var nbcage2 = Math.ceil(occtotal2 / 1000);
	var nbtotalcage2 = Math.ceil(nbcage2 * nbcolonne2);
	
	   document.getElementById("cage").value = nbtotalcage2;

	var standardprize2 = nbtotalcage1 * totalstandard;
	var premiunprize2= nbtotalcage1*totalpremium;
	var exceliunprize2 = nbtotalcage1*totalexcelium;
	
	if(current_forfait=="standard"){document.getElementById("prize").value = standardprize2}
    else if (current_forfait=="premium"){document.getElementById("prize").value = premiunprize2}
	else if (current_forfait=="excelium"){document.getElementById("prize").value = exceliunprize2};
	
	// COMMERCIAL
	var nbtotalcage1 = document.getElementById("cage_elevator").value;

	var standardprize1 = nbtotalcage1 * totalstandard;
	var premiunprize1= nbtotalcage1*totalpremium;
	var exceliunprize1 = nbtotalcage1*totalexcelium;



	if(current_forfait=="standard"){document.getElementById("prize").value = standardprize1}
    else if (current_forfait=="premium"){document.getElementById("prize").value = premiunprize1}
    else if (current_forfait=="excelium"){document.getElementById("prize").value = exceliunprize1};

	// console.log(nbtotalcage1)
	  document.getElementById("cage").value = nbtotalcage1;

	


};

    //    FIN

	














