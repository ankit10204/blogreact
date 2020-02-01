import React from 'react';
import {Link,withRouter} from 'react-router-dom';
function Navbar(props){
  //console.log(props);
 if(props.location.pathname =='/'){props.history.push('/about')}
 
 const navigation = [
   {Name:'Home',to:'home'},
   {Name:'About',to:'/about'},
   {Name:'Video',to:'/video'},
   {Name:'Blog',to:'/blog'}
 ]

 return(
     <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo right">Logo</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
          {navigation.map(nav=>{
         
         return <li key={Math.random()}><Link to={nav.to} style={{color:'#ffff',textDecoration:'none'}}>{nav.Name}</Link></li>
           
           })
          }
         </ul>
        </div>
      </nav>
   )
} 

export default withRouter(Navbar)