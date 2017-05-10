import React from 'react';
import {connect} from 'react-redux';
import findIndex from 'lodash.findindex';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

import {fetchQuizzes, saveUser, selectQuiz} from '../actions';
import {loadStorage} from '../helpers/localStorage';

export class Welcome extends React.Component {
    currentQuiz = '';
    constructor(props, context){
        super(props);
        this.router=context.router;
        this.handleChange=this.handleChange.bind(this);
        this.handleSelectedQuiz=this.handleSelectedQuiz.bind(this);
    }
    
    componentWillMount(){
        ///////set the selected Quiz to be the inital state when reach this page:
        console.log('selected Quiz value', this.props.selectedQuiz);
        console.log('selected quiz is an empty object', this.props.selectedQuiz ==={});
        const username = loadStorage();
        if (username !== undefined && username !== null){
            this.props.dispatch(saveUser(username));
            this.props.dispatch(fetchQuizzes());
        }
        else{
            this.router.history.push('/username');
        } 

    }

    handleSelectedQuiz(event){
        event.preventDefault();
        if(isEmpty(this.props.selectedQuiz)){
            this.props.dispatch(selectQuiz(this.props.quizzes[0]));
        }
        else{
            this.props.dispatch(selectQuiz(this.currentQuiz));
        }
        console.log('selectedQuiz: ', this.props.selectedQuiz);
        this.router.history.push({
             pathname: `/quiz`,
             state:{selectedQuiz: this.props.selectedQuiz}
         });
     }

    handleChange(e) {
        let selected= e.target.value;
        let foundQuizIndex = findIndex(this.props.quizzes, function(i){return i.name=== selected})
        console.log('foundQuizIndex: ', foundQuizIndex);
        this.currentQuiz = this.props.quizzes[foundQuizIndex];
        console.log('currentQuiz: ', this.currentQuiz);
    }

    render() {
        var self = this;

        ///potentially moved into the welcome dropdown component:
        var options = self.props.quizzes.map(function(quiz) {
            return (
                <option key={quiz._id} value={quiz.name}>
                    {quiz.name}
                </option>
            )
        });

        return (
            <div>
                <div>
                     <h2>Welcome {this.props.username},
                     </h2>
                </div>
	            <form onSubmit={this.handleSelectedQuiz} id='selectQuiz'>
	                <label> Test your chops with one of the following quizzes: 
	                    <select id={this.props.id} 
	                            className='form-control' 
	                            value={this.props.name} 
	                            onChange={this.handleChange}>
	                        {options}
	                    </select>
	                </label>
	                <button type="submit" value="submit"> Select Quiz</button>
	            </form>
         	</div>
        )
    }
}



Welcome.defaultProps={
    value: '',
    valueField: 'value',
    labelField: 'label',
    onChange: null
}


const mapStateToProps=(state)=>{
    const {quizzes} = state.quizAPI;
    const {username} = state.userReducer;
    const {selectedQuiz, selected, loading}= state.quizReducer;
    return {quizzes, username, selectedQuiz, selected} 
};

// ///if using history.push, pass the router through proptypes
Welcome.contextTypes={router:PropTypes.object}

export default connect(mapStateToProps)(Welcome);