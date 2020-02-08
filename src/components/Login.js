import React from 'react';
import axios from 'axios';

class Login extends React.Component{
 constructor(props){
   super(props)
   this.state={username:'',password:'',errors:''}
 }	

  handleform(e){
   e.preventDefault();
   const data = {
   	email:this.state.username,
   	password:this.state.password
   }

   axios.post('http://localhost:8000/api/auth/login',data)
   .then(response=>{
   	 if(response.data.status==401){
   	 	console.log(response);
       //this.setState({errors:response.data.errors});   
   	  for(const error in response.data.errors){
   	  	console.log(error);
   	  }
   	 }
    })
   .catch(err=>console.log(err))
   

  //this.props.history.push('/products');
 }

 handleInput(e){
     const name = e.target.name;
     const value = e.target.value;
     this.setState({[name]:value});
 }

 render(){
 	const error = this.state.errors
 	return(
      <div className="login">
        <div class="row">
             {error.length > 0 ? (<h5 style={{color:'red'}}>{error}</h5>):("") }
		    <form class="col s12" style={{marginTop:'40px'}} onSubmit={(e)=>this.handleform(e)}>
		     <div class="row">
		        <div class="input-field col s4 offset-s4">
		          <i class="material-icons prefix">account_circle</i>
		          <input id="icon_prefix" type="text" name="username" class="validate" onChange={(e)=>this.handleInput(e)}/>
		          <label for="icon_prefix">Username</label>
		        </div>
		        <div class="input-field col s4 offset-s4">
		          <i class="material-icons prefix">lock</i>
		          <input id="icon_password" type="tel" name="password" class="validate" onChange={(e)=>this.handleInput(e)}/>
		          <label for="icon_lock">Password</label>
		        </div>
		        <div class="input-field col s4 offset-s4">
                  <button class="btn waves-effect waves-light" type="submit" name="action">login
                  </button>
		        </div>
		      </div>
		    </form>
        </div>
      </div>
 	)
 }
}

export default Login