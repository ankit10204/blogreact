const iState={
	blogs:[],
}

const blogreducer=(state=iState,action)=>{
	switch(action.type){
	 case"UPLOAD_BLOG":
	 var newstate = {...state}	
	 //console.log(newstate.blogs);
	 newstate.blogs.push(action.payload)
	 return newstate;
	 
	 default:
	 return state;
	}
	
}

export default blogreducer