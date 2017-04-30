import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import findIndex from 'lodash.findindex';
import isEmpty from 'lodash/isEmpty';

import {fetchQuizzes, saveUser, selectQuiz, incrementCounter} from '../actions';
import {loadStorage} from '../helpers/localStorage';

export class Welcome extends React.Component {
    constructor(props, context){
        super(props);
        this.router=context.router;
        // this.handleChange=this.handleChange.bind(this);
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
        console.log('component will be mount');
    }

    componentDidMount(){
        let selected;
        console.log('selected Quiz?: ', this.props.quizzes);
        // selected = this.props.quizzes[0].name;
        console.log('selected: ', selected);

        // if(this.props.value!== undefined){
        //     console.log('selected in else: ', this.props.value);
            // selected = this.props.value;
        // }else{
        //     console.log('selected Quiz is default: ', this.props.quizzes[0].name);
            // selected = this.props.quizzes[0].name;
        // }


        // if (this.props.selectedQuiz==='' || this.props.value=== undefined) {
        //     console.log('selected Quiz is default: ', this.props.quizzes[0].name);
        //     selected = this.props.quizzes[0].name;
        // }else {
        //     console.log('selected in else: ', this.props.value);
        //     selected = this.props.value;
        // }
        // this.props.dispatch(selectQuiz(selected));
        console.log('Welcome Component Selected Quiz Prop: ', this.props.selectedQuiz);
    }

    handleSelectedQuiz(event){
         event.preventDefault();
        console.log('handle selected quiz', this.props.selectedQuiz);
        if(isEmpty(this.props.selectedQuiz)){
            console.log('theresa set the default quiz here');
            console.log('defaulted quiz: ', this.props.quizzes[0])
            this.props.dispatch(selectQuiz(this.props.quizzes[0]));
            console.log('selected quiz after dispatch: ', this.props.selectedQuiz);
        }
        let selectedQuiz = this.props.selectedQuiz;
	    let foundQuizIndex = findIndex(this.props.quizzes, function(i){return i.name=== selectedQuiz})
	    let currentQuiz = this.props.quizzes[foundQuizIndex];
	    // this.props.dispatch(selectQuiz(currentQuiz));
        this.router.history.push({
             pathname: `/quiz`,
             state:{selectedQuiz: this.props.selectedQuiz}
         });
     }
    
    getSelectedFromProps(props) {
        console.log('get selected from props called');
        let selected;
        console.log('Welcome Props.value', this.props);
        if (this.props.selectedQuiz==='' || this.props.selectedQuiz=== {}) {
            console.log('the first quiz was selected');
            // selected = this.props.quizzes[0].name;
            console.log('selected Quiz: ', this.props.quizzes[0]);
            console.log('selected within if: ', selected);
        } else {
            selected = this.props.value;
        }
        console.log('selected: ', selected);
        // this.props.dispatch(selectQuiz(selected));
    }

    handleChange(e) {
        let selected;
        console.log('selected in handler: ', selected);
        console.log('this in handler: ', this);
        this.props.dispatch(selectQuiz(selected));
        console.log('Quiz props : ', this.props)
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