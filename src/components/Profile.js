import React from 'react';
import M from 'materialize-css';

class Profile extends React.Component{

componentDidMount(){
	this.DatePickerPlugin();
}

DatePickerPlugin(){
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
  });
}

 render(){
 	return(
     <div className="container">
      <h1>This is Profile</h1>
      <div className="row" style={{marginTop:'50px'}}>
   <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="First name" id="first_name" type="text" className="validate"/>
          <label for="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate" placeholder="Last name"/>
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input type="text" className="datepicker"/>
          <label for="disabled">Date of Birth</label>
        </div>
        <div className="input-field col s6">
          <input type="text" className="validate"/>
          <label for="mobile">Mobile no.</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input type="text" className="validate"/>
          <label for="country">Country</label>
        </div>
      </div>
      <div className="row">
         <div class="file-field input-field">
	      <div class="btn">
	        <span>Upload Profile Picture</span>
	        <input type="file"/>
	      </div>
	      <div class="file-path-wrapper">
	        <input class="file-path validate" type="text"/>
	      </div>
        </div>
      </div>
    </form>
      </div>
     </div>
 	)
 }
}

export default Profile;
