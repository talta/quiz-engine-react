import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchQuizzes, saveUser, selectQuiz} from '../actions';

import {loadStorage} from '../helpers/localStorage';

export class WelcomeDropdown extends React.Component {
    constructor(props, context){
        super(props);
        this.router=context.router;
        this.handleChange=this.handleChange.bind(this);
    }
    
    componentWillMount(){
        const username = loadStorage();
        if (username !== undefined && username !== null){
            this.props.dispatch(fetchQuizzes());
            console.log('Welcome props before username: ', this.props);
            this.props.dispatch(saveUser(username));
        }
        else{
            this.router.history.push('/username');
        }
        console.log('Welcome props after username: ', this.props);


        let selected;
        if (this.props.value === null && this.props.quizzes.length !== 0) {
            selected = this.props.quizzes[0].name;
        } else {
            selected = this.props.value;
        }
        
    }


    
    getSelectedFromProps(props) {
        var selected;
        if (props.value === null && props.quizzes.length !== 0) {
            selected = props.quizzes[0].name;
        } else {
            selected = props.value;
        }
        this.props.dispatch(selectQuiz(selected));
    }



    handleChange(e) {
        let selected = e.target.value
        console.log('selected in handler: ', selected);
        console.log('this in handler: ', this);
        this.props.dispatch(selectQuiz(selected));
        console.log('props selectedQuiz: ', this.props.selectedQuiz)
    }

    render() {
        var self = this;

        var options = self.props.quizzes.map(function(quiz) {
                        console.log('quiz ID: ', quiz._id);
            console.log('quiz name:', quiz.name);
            return (
                <option key={quiz._id} value={quiz.name}>
                    {quiz.name}
                </option>
            )
        });
        console.log('this: ', this);

        return (
            <select id={this.props.id} 
                    className='form-control' 
                    value={this.props.selectedQuiz} 
                    onChange={this.handleChange}>
                {options}
            </select>
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



export default connect(mapStateToProps)(WelcomeDropdown);