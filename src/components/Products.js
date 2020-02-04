import React,{useEffect} from 'react';
import Cart from './Cart';
import {connect} from 'react-redux';
import M from 'materialize-css';

class Products extends React.Component{
	constructor(props){
     super(props)
     this.state={
     	products:[
     	{id:1,name:'levis tshirt',prize:'1800',image:'https://cdn.laredoute.com/products/641by641/3/1/b/31bad1f2bc0ae2bba3286d7b5b02b6e9.jpg'},
     	{id:2,name:'levis jeans',prize:'1300',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwnMJN3f1ot_XakHXfc6PUOoP-2rSi-7wAKJftVp5qJgmPUvKv'},
     	{id:3,name:'levis jacket',prize:'5800',image:'https://www.usmagazine.com/wp-content/uploads/2019/10/Levis-Star-Wars-Collection-Feature.jpg'},
     	{id:4,name:'levis black tshirt',prize:'800',image:'https://cdn.laredoute.com/products/641by641/3/1/b/31bad1f2bc0ae2bba3286d7b5b02b6e9.jpg'}
     	],
     	cart:[],
     }
    }

	// componentDidUpdate(prevProps,prevState){
 //      console.log('Component update',this.state);
 //    }
     
    render(){
	console.log(this.props);
		return(
        <div className="row">
	     {this.state['products'].map(product=>{
	     	return(
           <div className="col s12 m3" key={Math.random()}>
		      <div className="card">
		        <div className="card-image">
		          <img src={product.image} style={{width:'313px',height:'313px'}}/>
		          <span className="card-title" style={{color:'black'}}>{product.name}</span>
		        </div>
		        <div className="card-content">
		          <p>Lorem ipson...</p>
		        </div>
		        <div className="card-content">
		          <p>Price : Rs<strong>{product.prize}</strong></p>
		        </div>
		        <div className="card-action">
		          <button className="btn waves-effect waves-light" onClick={()=>{this.props.addtocart(product); this.setState({cart:product})}}>Add to Cart
                       <i className="material-icons right"></i>
                   </button>
		        </div>
		      </div>
          </div>
	      )
	     })} 
        
	      <Cart AddProduct={this.state.cart}/>
        
        </div>
	    )
	}
}

const mapStatetoprops=(state)=>{
  return{
  	mycart : state.cart.cartproducts
  }
}


const mapDispatchToProps=(dispatch)=>{
  return{
  	addtocart:(product)=>{
  	 dispatch({type:'ADD_TO_CART',payload:product});
     M.toast({html: 'Product added. !'})
  	}
  }
}

export default connect(mapStatetoprops,mapDispatchToProps)(Products);