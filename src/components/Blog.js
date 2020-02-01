import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Blog extends React.Component{
	constructor(props){
     super(props)
    console.log(this.props['myblogs'])
    }

    blogGrid(){
     return (<div>	
       { this.props['myblogs'].map(blog=>{
       	return (
       	<div className="col s12 m4" key={Math.random}>
		   <div className="card">
			  <div className="card-image">
			    <iframe width="100%" height="315" src={blog.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			    <span className="card-title">{blog.title}</span>
		     </div>
		    <div className="card-action">
			  <Link to={"/video/"+blog.id}>This is a link</Link>
            </div>
         </div>
       </div>
      )
    })}
    </div>)    
  }

	render(){
		return(
         <div>
          <h1>This is Blog</h1>
		   <div className="row">
	           { Object.keys(this.props['myblogs']).length !=0 ?
	           
	           this.blogGrid() : (

                <div className="col s12 m12">
			      <div className="card">
			        <div className="card-action">
			          <h4>No Blog</h4>
			        </div>
			      </div>
                </div>
			   )}
			  </div>	  
		 </div>
		)
	}
}

 const mapStateToProps=(state)=>{
  console.log(state)
   return{
    myblogs:state.blogs,
   }
 }

export default connect(mapStateToProps)(Blog)