import React from 'react';
import {connect} from 'react-redux';

import QuestionAnswer from 'question-answers';


		return (

              <div> 
                <input onChange={(event)=>this.handleChange(event)}>
                  {question.answers.map((item, i)=>(
                    <option key={i} id={`${i}`} value={item.answer} onChange={this.handleChange}>{item.message}</option>
                  ))};
                </input>
              </div> 

)