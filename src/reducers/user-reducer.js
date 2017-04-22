

const initialState ={
	user: ''
}



const userReducer = (state = initialState, action) =>{
	switch(action.type){
		case 'SAVE_USER':
			console.log('save user called with the username: ', action.username)
			return {
				...state,
				username: action.username
			}

		default: 
			return state
	}
}

export default userReducer