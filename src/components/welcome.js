import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import findIndex from 'lodash.findindex';

import {fetchQuizzes, saveUser, selectQuiz} from '../actions';


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
            this.props.dispatch(fetchQuizzes());
            console.log('Welcome props before username: ', this.props);
            this.props.dispatch(saveUser(username));
        }
        else{
            this.router.history.push('/username');
        }
        console.log('Welcome props after username: ', this.props);



        
    }
    componentDidMount(){
        console.log('component did mount called');
        let selected;
        if (this.props.value === null && this.props.quizzes.length !== 0) {
            selected = this.props.quizzes[0].name;
            console.log('selected within if: ', selected);
        }else {
            console.log('props value: ', this.props.value);
            selected = this.props.value;
            console.log('selected within else: ', selected);
        }
        console.log('selected Props after logic: ', selected);
        this.props.dispatch(selectQuiz(selected));
        console.log('selected within mount: ', selected)
        console.log('props after selectedQuiz prop set: ', this.props.selectedQuiz);
    }

    
    ////route the user to the selected quiz:
     handleSelectedQuiz(event){
         event.preventDefault();

         ////store the selected Quiz Variable to the state
         console.log('selected quiz in props: ', this.props.selectedQuiz);
         let selectedQuiz = this.props.selectedQuiz;
         console.log('selected quiz before action: ', selectedQuiz);
         // this.props.dispatch(selectQuiz(selectedQuiz));
         console.log('welcome props after selected quiz action: ', this.props.selectedQuiz)
             console.log('selected quiz prop: ',  this.props.selectedQuiz);
	  	 // selectedQuiz = this.props.selectedQuiz;
	    console.log('selected qiuz var: ', selectedQuiz);
	    let foundQuizIndex = findIndex(this.props.quizzes, function(i){return i.name=== selectedQuiz})
	    console.log('found quiz: ', foundQuizIndex);
	    console.log('Quiz props: ', this.props)
	    let currentQuiz = this.props.quizzes[foundQuizIndex];
	    console.log(' current quiz definition: ', this.props.quizzes[foundQuizIndex])
	    console.log('current Quiz: ', currentQuiz);
	    console.log('Quiz props: ', this.props)

	    this.props.dispatch(selectQuiz(currentQuiz));
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
Welcome.contextTypes={router:PropTypes.object}


export default connect(mapStateToProps)(Welcome);




