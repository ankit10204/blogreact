const product = {
  cartproducts: [],
  cartTotal:0
}

function cartreducer(state=product,action){
	switch(action.type){
		case"ADD_TO_CART":
		var newstate = {...state};
        newstate.cartproducts.push(action.payload);
        newstate.cartTotal =  parseInt(newstate.cartTotal)+ parseInt(action.payload.prize); 
	    return newstate;

	    case "REMOVE_PRODUCT":
	    var newstate = {...state};
	    for(var i=0;i<newstate.cartproducts.length;i++){
	     if(newstate.cartproducts[i].id==action.payload){
           //console.log([i])
           newstate.cartTotal= parseInt(newstate.cartTotal)-parseInt(newstate.cartproducts[i].prize)
           newstate.cartproducts.splice(i,1);
           
	     }	
	    }
	    return newstate;

	    case "INCREASE_QUANTITY":
	    //console.log(action.payload.id)
	     var newstate1 = {...state};
	    for(var i=0;i<newstate1.cartproducts.length;i++){
          console.log(newstate1.cartproducts[i])
          if(newstate1.cartproducts[i].id==action.payload.id){
          	newstate1.cartproducts[i].prize =parseInt(newstate1.cartproducts[i].prize) * parseInt(action.payload.quantity);
          }
	    }
	    return newstate1;
	}
	return state;
}

export default cartreducer;