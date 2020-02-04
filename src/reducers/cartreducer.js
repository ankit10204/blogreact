const product = {
  cartproducts: []
}

function cartreducer(state=product,action){
	switch(action.type){
		case"ADD_TO_CART":
		var newstate = {...state};
        newstate.cartproducts.push(action.payload);
	    return newstate;
	}
	return state;
}

export default cartreducer;