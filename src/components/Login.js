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
   	 console.log(response);
     if(response.data.status==401){
   	 	let err_email = response.data.errors.email ? response.data.errors.email : null; 
      let err_password =  response.data.errors.password ? response.data.errors.password : null
       this.setState({errors:{err_email:err_email,err_password:err_password}});   
   	 }
     if(response.data.status==200){
      localStorage.setItem('token',response.data.access_token);
      localStorage.setItem('user',JSON.stringify(response.data.user));
      this.props.history.push('about'); 
     }
   })
   .catch(error=>{ console.error(error); return Promise.reject(error); })
   

  //this.props.history.push('/products');
 }

 handleInput(e){
     const name = e.target.name;
     const value = e.target.value;
     this.setState({[name]:value});
 }

 render(){

 	return(
      <div className="login">
        <div class="row">
        <form class="col s12" style={{marginTop:'40px'}} onSubmit={(e)=>this.handleform(e)}>
		     <div class="row">
		        <div class="input-field col s4 offset-s4">
		          <i class="material-icons prefix">account_circle</i>
		          <input id="icon_prefix" type="text" name="username" class="validate" onChange={(e)=>this.handleInput(e)}/>
		          <label for="icon_prefix">Username</label>
		         {this.state.errors.err_email ? (<p style={{color:'red'}}>{this.state.errors.err_email[0]}</p>):("") }
            </div>
		        <div class="input-field col s4 offset-s4">
		          <i class="material-icons prefix">lock</i>
		          <input id="icon_password" type="tel" name="password" class="validate" onChange={(e)=>this.handleInput(e)}/>
		          <label for="icon_lock">Password</label>
		        {this.state.errors.err_password ? (<p style={{color:'red'}}>{this.state.errors.err_password[0]}</p>):("") }
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