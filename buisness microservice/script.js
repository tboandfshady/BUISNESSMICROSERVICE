//EVENT LISTENER FOR BUTTON ON CLICK
    var event1 = document.getElementById("button1");
    event1.addEventListener('click',screeningProcess,false);
    
   
function screeningProcess() {
//	alert("testing")
	var age = parseInt(document.getElementById("age").value);
	var weight = parseInt(document.getElementById("weight").value);
	var height = parseInt(document.getElementById("height").value);
	
	if (age < 26 && weight > 49 && weight < 91 && height > 149 && height < 191) 
	// if they are within the requirements
		
	{
		if (weight > 49 && weight < 91) {
		// if they pass the weight test 
			//passed the weight so must have failed the height test
		document.getElementById("result").innerHTML = "you failed the height test"; 
				}
	
		else {
					
		document.getElementById("result").innerHTML = "you failed the weight test"; 
		// failed the weight test										
		}
		
		
	}
	
	else if (age > 27){
	// if too old	
	
		            if (weight > 49 && weight < 91) {
		            // if they are the right weight
			
					//passed the weight test so must have failed the height test
					  document.getElementById("result").innerHTML = "you failed the height and age test"; 
				}
		
		            // if they are right height
					else if (height > 150 && height < 191){
					document.getElementById("result").innerHTML = "you failed the weight and age test"; 	
					}
		
				    else if (height > 150 && weight > 90){
					document.getElementById("result").innerHTML = "you failed the height, weight and age test";									
				    }
		
			        else if (weight > 90){
		            document.getElementById("result").innerHTML = "you failed the weight and age test";	
		            }
		
		            else {
					document.getElementById("result").innerHTML = "you failed the age test"; 
				    }
					// failed the weight test										
				
		
		
//		document.getElementById("result").innerHTML = "you too old"; 
	}

    else 
	// the user passed the test	
	{
	document.getElementById("result").innerHTML = "You passed";
    }


	
	
	
	
	
}




//Participants must to be less than 26 years of age
//Participants must be greater than 50kg and less than 90kg in weight
//Participants must be between 150cm and 190cm in height