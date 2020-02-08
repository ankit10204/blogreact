import React from 'react';


class Login extends React.Component{
 constructor(props){
   super(props)
   this.state={username:'',password:'',error:''}
 }	

 handleform(e){
  e.preventDefault();
  this.props.history.push('/products');
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