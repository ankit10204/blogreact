import React from 'react';
import {connect} from 'react-redux';
import $ from "jquery";

class Cart extends React.Component{
	constructor(props){
		super(props)
	 this.state = {
	  myproduct: this.props.AddProduct,
	  cartTotal: this.props.TotalCart,
	  value:''
	 }
	}

	// static getDerivedStateFromProps(props, state) {
 //     console.log(props,state);
 //    }

	componentDidUpdate(prevProps,prevState){
      console.log('Cart Component update',this.state);
    }
    

    cartList(){
       return(<tbody>
     	{this.state.myproduct.map((prods,key)=>{
         return (<tr>
            <td id={"data_"+prods.id}>{key+1}</td>
          	<td>{prods.name}</td>
          	<td>
          		<input id="quantity" type="text" className="validate" style={{width:'30px'}} min="1" onChange={(e)=>{this.props.AddQuantity(e,prods)}}/>
          	</td>
          	<td className={"prize"+prods.id}>{prods.prize}</td>
          	<td><button className="btn waves-effect waves-light" onClick={()=>this.props.removeProduct(prods)}>remove</button></td>
          </tr>)
        })}
     	</tbody>)

    }

    render(){
		return(
         <div className="row">
           <div className="col s6 offset-s3">
            <table>
	        <thead>
	          <tr>
	              <th>S.no</th>
	              <th>Item Name</th>
	              <th>Quantity</th>
	              <th>Item Price</th>
	              <th></th>
	          </tr>
	        </thead>
	        
            {Object.keys(this.state.myproduct).length < 0 ?(
             <tbody><tr><td colSpan="3" style={{textAlign:'center'}}>No products</td></tr> </tbody>  
	         ): this.cartList()
	         }
	          
	       <tfoot>
	       	<tr>
	       	  <td colSpan="4" style={{textAlign:'center'}}>Total : {this.props.TotalCart}</td>	
	       	</tr>
	       </tfoot>
	      </table>
           </div>
         </div>
	   )
	}
}

const mapStatetoProps=(state)=>{
 return{
  mycart :state.cart.cartproducts	
 }
}

const mapDispatchToProps=(dispatch)=>{
	return{
		removeProduct:(id)=>{
          dispatch({type:'REMOVE_PRODUCT',payload:id})
		},
		AddQuantity:(event,prod)=>{
		  
		 let quantity = (event.target.value!="")?event.target.value : prod.defaultQuantity; 
         let data= {quantity:quantity,id:prod.id};
          console.log(quantity);
         $(".prize"+prod.id).html(parseInt(quantity)*parseInt(prod.prize));
         //dispatch({type:'INCREASE_QUANTITY',payload:data});
		}
	}
}

export default connect(mapStatetoProps,mapDispatchToProps)(Cart);