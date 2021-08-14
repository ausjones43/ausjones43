	function signUpToDrive() {
                
			// Create a form synamically
			var form = document.createElement("form");
			form.setAttribute("method", "post");
			form.setAttribute("action", "submitEmployee.php");
  
			// Create an input element for Full Name
			var FN = document.createElement("input");
			FN.setAttribute("type", "text");
			FN.setAttribute("name", "FullName");
			FN.setAttribute("placeholder", "Full Name");
  
			// Create an input element for date of birth
			var DOB = document.createElement("input");
			DOB.setAttribute("type", "text");
			DOB.setAttribute("name", "dob");
			DOB.setAttribute("placeholder", "DOB");
  
			// Create an input element for emailID
			var EID = document.createElement("input");
			EID.setAttribute("type", "text");
			EID.setAttribute("name", "emailID");
			EID.setAttribute("placeholder", "E-Mail ID");
  
			// Create an input element for Phone
			var phone = document.createElement("input");
			phone.setAttribute("type", "password");
			phone.setAttribute("name", "password");
			phone.setAttribute("placeholder", "Password");
  
			// Create an input element for Address
			var address = document.createElement("input");
			address.setAttribute("type", "password");
			address.setAttribute("name", "reTypePassword");
			address.setAttribute("placeholder", "ReEnter Password");
			
			// Create an input element for City
			var city = document.createElement("City");
			city.setAttribute("type", "city");
			city.setAttribute("name", "City");
			city.setAttribute("placeholder", "City");
			
			// Create an input element for State
			var state = document.createElement("State");
			state.setAttribute("type", "State");
			state.setAttribute("name", "State");
			state.setAttribute("placeholder", "State");
			
			// Create an input element for Zip
			var zip = document.createElement("Zip Code");
			zip.setAttribute("type", "Zip Code");
			zip.setAttribute("name", "Zip Code");
			zip.setAttribute("placeholder", "Zip Code");
			
			// Create an input element for Zip
			var vehicleType = document.createElement("Zip Code");
			vehicleType.setAttribute("type", "Zip Code");
			vehicleType.setAttribute("name", "Zip Code");
			vehicleType.setAttribute("placeholder", "Zip Code");
			
			//if this submit button is clicked send to HR for Onboarding
            // create a submit button
			var s = document.createElement("input");
			s.setAttribute("type", "submit");
			s.setAttribute("value", "Submit");
                  
			// Append the full name input to the form
			form.appendChild(FN); 
                  
			// Inserting a line break
			form.appendChild(br.cloneNode()); 
                  
			// Append the DOB to the form
			form.appendChild(DOB); 
			form.appendChild(br.cloneNode()); 
		  
			// Append the emailID to the form
			form.appendChild(EID); 
			form.appendChild(br.cloneNode()); 

			// Append the phone to the form
			form.appendChild(EID); 
			form.appendChild(br.cloneNode());

			// Append the address to the form
			form.appendChild(address); 
			form.appendChild(br.cloneNode());			
			
			// Append the City to the form
			form.appendChild(city); 
			form.appendChild(br.cloneNode()); 
                  
			// Append the State to the form
			form.appendChild(state); 
			form.appendChild(br.cloneNode()); 
                  
			// Append the Zip to the form
			form.appendChild(zip); 
			form.appendChild(br.cloneNode()); 
			
			// Append the Vehicle Type to the form
			form.appendChild(vehicleType); 
			form.appendChild(br.cloneNode());
			
			// Append the submit button to the form
			form.appendChild(s); 
  
			document.getElementsByTagName("body")[0]
	   .	appendChild(form);
    }