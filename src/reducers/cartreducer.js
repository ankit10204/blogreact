const product = {
  cartproducts: [],
  cartTotal:0
}

function cartreducer(state=product,action){
	switch(action.type){
		case"ADD_TO_CART":
		var newstate = {...state};
		console.log(newstate);
        newstate.cartproducts.push(action.payload);
        newstate.cartTotal =  parseInt(newstate.cartTotal)+ parseInt(action.payload.quantityPrize); 
	    return newstate;

	    case "REMOVE_PRODUCT":
	    console.log(action.payload)
	    var newstate2 = {...state};
	    for(var i=0;i<newstate2.cartproducts.length;i++){
	     if(newstate2.cartproducts[i].id==action.payload.id){
           
           newstate2.cartTotal= parseInt(newstate2.cartTotal)-parseInt(newstate2.cartproducts[i].quantityPrize)
           //newstate2.cartproducts[i].quantityPrize = newstate2.cartproducts[i].Prize;
           newstate2.cartproducts.splice(i,1);
           
	     }	
	    }
	    return newstate2;

	    case "INCREASE_QUANTITY":
	    //console.log(action.payload.id)
	     var newstate1 = {...state};
	    for(var i=0;i<newstate1.cartproducts.length;i++){
          if(newstate1.cartproducts[i].id==action.payload.id){
          	newstate1.cartproducts[i].defaultQuantity = parseInt(action.payload.quantity);
          	newstate1.cartproducts[i].quantityPrize =parseInt(newstate1.cartproducts[i].prize * newstate1.cartproducts[i].defaultQuantity);
            newstate1.cartTotal = newstate1.cartproducts[i].defaultQuantity*parseInt(newstate1.cartproducts[i].prize)	;
          }
          //console.log('sum',newstate1.cartproducts[i].Prize);
          
	    }
	    return newstate1;
	}
	return state;
}

export default cartreducer;