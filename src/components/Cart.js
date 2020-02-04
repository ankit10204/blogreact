import React from 'react';
import {connect} from 'react-redux';

class Cart extends React.Component{
	constructor(props){
		super(props)
	 this.state = {
	  myproduct: this.props.AddProduct
	 }
	 
	}

	static getDerivedStateFromProps(props, state) {
     console.log(props,state);
    }

	componentDidUpdate(prevProps,prevState){
      console.log('Cart Component update',this.state);
    }
    
    componentWillReceiveProps(nextProps){
     console.log('hello')
    }

    render(){
		console.log(this.state.myproduct);
		return(
         <div className="row">
           <div className="col s6 offset-s3">
            <table>
	        <thead>
	          <tr>
	              <th>S.no</th>
	              <th>Item Name</th>
	              <th>Item Price</th>
	          </tr>
	        </thead>

	        <tbody>
	         {Object.keys(this.state.myproduct).length < 0 ?(
               <tr><td colspan="3" style={{textAlign:'center'}}>No products</td></tr>
	         ):(
               <tr>
	            <td>1</td>
	            <td>Eclair</td>
	            <td>$0.87</td>
	          </tr>
	         )}
	          
	        </tbody>
	      </table>
           </div>
         </div>
	   )
	}
}

// const mapStatetoProps=(state)=>{
//  return{
//   mycart :state.cart.cartproducts	
//  }
// }

export default Cart;