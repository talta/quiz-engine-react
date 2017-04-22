

const initialState ={
	username: ''
}



const userReducer = (state = initialState, action) =>{
	switch(action.type){
		case 'SAVE_USER':
			console.log('save user called with the username: ', action.username)
			// return {
			// 	...state,
			// 	username: action.username
			// }
			const usernameState=  {
				...state,
				username: action.username
			}
			console.log('usernameState from user reducer:', usernameState)
			return usernameState

		default: 
			return state
	}
}

export default userReducer