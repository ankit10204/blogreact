import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import axios from 'axios';

function Navbar(props){
  //console.log(props);
 //if(props.location.pathname ==='/'){props.history.push('/about')}
 
 const navigation = [
   {Name:'Home',to:'home'},
   {Name:'About',to:'/about'},
   {Name:'Video',to:'/video'},
   {Name:'Blog',to:'/blog'},
   {Name:'Products',to:'/products'}
 ]
 const token = localStorage.getItem('token');
 const logout=()=>{
  const data = {
    token:token
  }

  axios.post('http://localhost:8000/api/auth/logout',data)
  .then(response=>{
   if(response.status==200){
    localStorage.getClear();
    props.history.push('/login');
   }
  })
  .catch(error=>console.log(error))
 }

 return(
     <nav style={{backgroundColor:'#8a6eee'}}>
        <div className="nav-wrapper">
         <a href="#" className="right" style={{marginRight:'20px'}}>Logout</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
          {navigation.map(nav=>{
            
            return (<li key={Math.random()}><Link to={nav.to} style={{color:'#ffff',textDecoration:'none'}}>{nav.Name}</Link></li>)
           
           })
          }
         </ul>
        </div>
      </nav>
   )
} 

export default withRouter(Navbar)