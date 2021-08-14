class MyHeader extends React.Component {

		var down = document.getElementById("GFG_DOWN");
            
		// Create a break line element
		var br = document.createElement("br"); 
		function getOrderForm() {
                
			// Create a form synamically
			var form = document.createElement("form");
			form.setAttribute("method", "post");
			form.setAttribute("action", "submit.php");
  
			// Create an input element for first Name
			var FN = document.createElement("input");
			FN.setAttribute("type", "text");
			FN.setAttribute("name", "firstName");
			FN.setAttribute("placeholder", "First Name");
  
			// Create an input element for pickup address
			var address = document.createElement("input");
			address.setAttribute("type", "text");
			address.setAttribute("name", "Pickup Address");
			address.setAttribute("placeholder", "Pickup Address");
  
			// Create an input element for emailID
			var EID = document.createElement("input");
			EID.setAttribute("type", "text");
			EID.setAttribute("name", "emailID");
			EID.setAttribute("placeholder", "E-Mail");
  
			// Create an input element for phone
			var PWD = document.createElement("input");
			PWD.setAttribute("type", "phoneNumber");
			PWD.setAttribute("name", "phoneNumber");
			PWD.setAttribute("placeholder", "Phone Number");
  
			// Create an input element for time for pickup
			var pickupTime = document.createElement("input");
			pickupTime.setAttribute("type", "pickupTime");
			pickupTime.setAttribute("name", "pickupTime");
			pickupTime.setAttribute("placeholder", "Requested Pickup Time");
			
			// Create an input element for date for pickup
			var pickupDate = document.createElement("input");
			pickupDate.setAttribute("type", "pickupDate");
			pickupDate.setAttribute("name", "pickupDate");
			pickupDate.setAttribute("placeholder", "Requested Pickup Date");
			
            // create a submit button
			var s = document.createElement("input");
			s.setAttribute("type", "submit");
			s.setAttribute("value", "Submit");
                  
			// Append the full name input to the form
			form.appendChild(FN); 
                  
			// Inserting a line break
			form.appendChild(br.cloneNode()); 
                  
			// Append the Address to the form
			form.appendChild(address); 
			form.appendChild(br.cloneNode()); 
		  
			// Append the emailID to the form
			form.appendChild(EID); 
			form.appendChild(br.cloneNode()); 
                  
			// Append the Phone to the form
			form.appendChild(PWD); 
			form.appendChild(br.cloneNode()); 
             
			form.appendChild(pickupTime); 
			form.appendChild(br.cloneNode()); 
			
			// Append the ReEnterPassword to the form
			form.appendChild(pickupDate); 
			form.appendChild(br.cloneNode()); 
                  
			// Append the submit button to the form
			form.appendChild(s); 
  
			document.getElementsByTagName("body")[0]
	   .	appendChild(form);
    }
	function signUpToDrive() {
                
			// Create a form synamically
			var form = document.createElement("form");
			form.setAttribute("method", "post");
			form.setAttribute("action", "submit.php");
  
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
  
			// Create an input element for password
			var PWD = document.createElement("input");
			PWD.setAttribute("type", "password");
			PWD.setAttribute("name", "password");
			PWD.setAttribute("placeholder", "Password");
  
			// Create an input element for retype-password
			var RPWD = document.createElement("input");
			RPWD.setAttribute("type", "password");
			RPWD.setAttribute("name", "reTypePassword");
			RPWD.setAttribute("placeholder", "ReEnter Password");
  
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
                  
			// Append the Password to the form
			form.appendChild(PWD); 
			form.appendChild(br.cloneNode()); 
                  
			// Append the ReEnterPassword to the form
			form.appendChild(RPWD); 
			form.appendChild(br.cloneNode()); 
                  
			// Append the submit button to the form
			form.appendChild(s); 
  
			document.getElementsByTagName("body")[0]
	   .	appendChild(form);
    }
	
		function whatWeDo() {
			//get What we do page
		}
	function upCycleMarket() {
        //get Upcycle and vendor Page
    }
	
	function farmersMarket(){
		//get Farmers Market Page
	}
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));