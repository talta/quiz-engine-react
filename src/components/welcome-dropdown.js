import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchQuizzes, saveUser, selectQuiz} from '../actions';

import {loadStorage} from '../helpers/localStorage';

export class WelcomeDropdown extends React.Component {
    constructor(props, context){
        super(props);
        this.router=context.router;

        this.handleChange=this.handleChange.bind(this);
        this.handleSelectedQuiz=this.handleSelectedQuiz.bind(this);
    }
    console.log('welcome')
    render(){
        return(
        this.props.quizzes.map(function(quiz) {
                        console.log('quiz ID: ', quiz._id);
            console.log('quiz name:', quiz.name);
            return (
                <option key={quiz._id} value={quiz.name}>
                    {quiz.name}
                </option>
            )
        });

    )
    }
}
    
            


WelcomeDropdown.defaultProps={
            value: null,
            valueField: 'value',
            labelField: 'label',
            onChange: null
}


const mapStateToProps=(state)=>{
    console.log('this is the state before we map it: ', state.quizAPI);
    const {quizzes} = state.quizAPI;
    const {username} = state.userReducer;
    const {selectedQuiz, selected}= state.quizReducer;
    return {quizzes, username, selectedQuiz, selected} 
};


// ///if using history.push, pass the router through proptypes
WelcomeDropdown.contextTypes={router:PropTypes.object}


export default connect(mapStateToProps)(WelcomeDropdown);