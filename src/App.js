import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import About from './components/About';
import Video from './components/Video';
import Blog from './components/Blog';
import Products from './components/Products';
import {connect} from 'react-redux';
import M from 'materialize-css';
import Login from './components/Login';
import GuestRoute from './components/auth/GuestRoute';
import AuthRoute from './components/auth/AuthRoute';
import Profile from './components/Profile';


class App extends React.Component{
 
 constructor(props){
  super(props);
  //this.handleSubmit = this.handleSubmit.bind(this);
  this.state={
    link:'Link Read'
  }
 }
 
render(){
 
  return (
   <BrowserRouter> 
    <div className="App">
       <Navbar/>
       <Switch>  
          <Route path="/home" exact render={(props)=>(
              <Home {...props} formaction={this.props}/>
            )}/>
          <Route path="/about" component={About}/>
          <Route path="/video/:video_id" render={(props)=>(<Video {...props} videos={this.props}/>)}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/products" component={Products}/>
          <GuestRoute path="/login" component={Login}/>
          <AuthRoute path="/profile" component={Profile}/>
        </Switch>
    </div>
   </BrowserRouter> 
  );
 }
}

function Home(props){
  return(   
   <div className="row" style={{marginTop:'50px'}}>
    <form id="blogform" className="col s12" onSubmit={e=>{props.formaction.uploadblog(e,props)}}>
    <div className="row"> 
      <div className="input-field col s6 offset-s3">
          <input placeholder="Title" name="title" type="text" className="validate"/>
          <label for="first_name">Title</label>
       </div>
    </div>
    <div className="row"> 
      <div className="input-field col s6 s6 offset-s3">
          <input placeholder="url" name="url" type="text" className="validate"/>
          <label for="first_name">Url</label>
      </div>
    </div>
     <div className="row"> 
      <div className="input-field col s6 s6 offset-s3">
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
           <i className="material-icons right"></i>
          </button>
      </div>
    </div>  
    </form>
   </div> 
  )
 }



const handleSubmit=(e)=>{
  
   e.preventDefault();
   var data = {};

   for(const pair of new FormData(e.target)){
      data['title']=pair[0];
      data['url']=pair[1];  
   }
   console.log(data)
  // dispatch({type:'UPLOAD_BLOG',payload:data});
 }

 const mapStateToProps=(state)=>{
  //console.log(state.blog.blogs)
   return{
    mytitle:state.blog.blogs,
   }
 }

 const mapdispatchToProps=(dispatch)=>{
  
  return{
    uploadblog:(e,props)=>{
      let key=Object.keys(props['formaction'].mytitle).length;
      e.preventDefault();
      var data = {};
       for(const pair of new FormData(e.target)){
          data['id']=key+1
          data['title']=pair[0];
          data['url']=pair[1].replace("/watch?v=", "/embed/"); 
       }
      dispatch({type:'UPLOAD_BLOG',payload:data})
     
      M.toast({html: 'Blog uploaded succesfully. !'})

      document.getElementById('blogform').reset();
    }
  }
 }

export default connect(mapStateToProps,mapdispatchToProps)(App);
