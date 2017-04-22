

const initialState ={
	username: ''
}



const userReducer = (state = initialState, action) =>{
	switch(action.type){
		case 'SAVE_USER':
			return {
				...state,
				username: action.username
			}

		default: 
			return state
	}
}

export default userReducer