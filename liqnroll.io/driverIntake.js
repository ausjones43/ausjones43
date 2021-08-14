/**
 * 
 */
class driverIntake{
	function driverIntake() {
                
		// Create a form synamically
		var form = document.createElement("form");
		form.setAttribute("method", "post");
		form.setAttribute("action", "submitDriver.php");
 
		// Create an input element for Full Name
		var fullName = document.createElement("input");
		fullName.setAttribute("type", "text");
		fullName.setAttribute("name", "fullName");
		fullName.setAttribute("placeholder", "Enter Full Name");
 
			// Create an input element for emailID
			var emailID = document.createElement("input");
			emailID.setAttribute("type", "text");
			emailID.setAttribute("name", "emailID");
			emailID.setAttribute("placeholder", "Enter E-Mail");
  
			// Create an input element for Phone
			var phone = document.createElement("input");
			phone.setAttribute("type","phone");
			phone.setAttribute("name", "phone");
			phone.setAttribute("placeholder", "Enter Phone");
  
			// Create an input element for Address
			var address = document.createElement("input");
			address.setAttribute("type", "address");
			address.setAttribute("name", "address");
			address.setAttribute("placeholder", "Street Address");

			// Create an input element for City
			var city = document.createElement("input");
			city.setAttribute("type", "city");
			city.setAttribute("name", "city");
			city.setAttribute("placeholder", "City");
			
			// Create an input element for City
			var state = document.createElement("input");
			state.setAttribute("type", "state");
			state.setAttribute("name", "state");
			state.setAttribute("placeholder", "State");
			
			// Create an input element for City
			var zip = document.createElement("input");
			zip.setAttribute("type", "zip");
			zip.setAttribute("name", "zip");
			zip.setAttribute("placeholder", "Zip")		
						
		//if this submit button is clicked send to HR for Onboarding
        // create a submit button
		var s = document.createElement("input");
		s.setAttribute("type", "submit");
		s.setAttribute("value", "submit");
                  
		// Append the full name input to the form
		form.appendChild(fullName); 
                  
		// Inserting a line break
		form.appendChild(br.cloneNode()); 
            
		// Append the emailID to the form
		form.appendChild(emailID); 
		form.appendChild(br.cloneNode()); 
                  
		// Append the Password to the form
		form.appendChild(phone); 
		form.appendChild(br.cloneNode()); 
                  
		// Append the address to the form
		form.appendChild(address); 
		form.appendChild(br.cloneNode()); 

		//Append city to form
		form.appendChild(city); 
		form.appendChild(br.cloneNode());  
			
		//append state to form
		form.appendChild(state); 
		form.appendChild(br.cloneNode()); 
			
		//append zip to form
		form.appendChild(zip); 
		form.appendChild(br.cloneNode());    
			              
		// Append the submit button to the form
		form.appendChild(s); 
  
		document.getElementsByTagName("Submit")[0]
	   	appendChild(form);
	}

	function sendemail()
	{
		var url = '/submit.php';

		new Ajax.Request(url,{
				onComplete:function(transport)
				{
					var feedback = transport.responseText.evalJSON();
					if(feedback.result==0)
						alert('There was a problem sending the email, please try again.');
				}
		});
	}
}
