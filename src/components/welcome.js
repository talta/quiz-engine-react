import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import findIndex from 'lodash.findindex';

import {fetchQuizzes, saveUser, selectQuiz, incrementCounter} from '../actions';
import {loadStorage} from '../helpers/localStorage';

export class Welcome extends React.Component {
    constructor(props, context){
        super(props);
        this.router=context.router;
        this.handleChange=this.handleChange.bind(this);
        this.handleSelectedQuiz=this.handleSelectedQuiz.bind(this);
    }
    
    componentWillMount(){
        const username = loadStorage();
        if (username !== undefined && username !== null){
            this.props.dispatch(saveUser(username));
            this.props.dispatch(fetchQuizzes());
        }
        else{
            this.router.history.push('/username');
        } 
    }

    componentDidMount(){
        let selected;
        if (this.props.value === null && this.props.quizzes.length !== 0) {
            selected = this.props.quizzes[0].name;
        }else {
            selected = this.props.value;
        }
        this.props.dispatch(selectQuiz(selected));
        console.log('Welcome Component Selected Quiz Prop: ', this.props.selectedQuiz);
    }

    handleSelectedQuiz(event){
         event.preventDefault();

        let selectedQuiz = this.props.selectedQuiz;
	    let foundQuizIndex = findIndex(this.props.quizzes, function(i){return i.name=== selectedQuiz})
	    let currentQuiz = this.props.quizzes[foundQuizIndex];
	    this.props.dispatch(selectQuiz(currentQuiz));
        this.props.dispatch(incrementCounter());
        this.router.history.push({
             pathname: `/quiz`,
             state:{selectedQuiz: this.props.selectedQuiz}
         });
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

        ///potentially moved into the welcome dropdown component:
        var options = self.props.quizzes.map(function(quiz) {
            return (
                <option key={quiz._id} value={quiz.name}>
                    {quiz.name}
                </option>
            )
        });
        console.log('Welcome Render this: ', this);

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
	                            value={this.props.selectedQuiz} 
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

/////mapDispatchToProps



Welcome.defaultProps={
    value: '',
    valueField: 'value',
    labelField: 'label',
    onChange: null
}

const mapStateToProps=(state)=>{
    const {quizzes} = state.quizAPI;
    const {username} = state.userReducer;
    const {selectedQuiz, selected}= state.quizReducer;
    return {quizzes, username, selectedQuiz, selected} 
};

// ///if using history.push, pass the router through proptypes
Welcome.contextTypes={router:PropTypes.object}

export default connect(mapStateToProps)(Welcome);