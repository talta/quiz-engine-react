

const initialState ={
	user: ''
}



const userReducer = (state = initialState, action) =>{
	switch(action.type){
		case 'SAVE_USER':
			return {
				...state,
				user: action.username
			}
			
		default: 
			return state
	}
}

export default userReducer