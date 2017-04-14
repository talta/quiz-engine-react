import React from 'react';
import {connect} from 'react-redux';

export function Footer(props){

////potentially have the links be dynamic to the quiz, this link might need to be stored within the state/ db

	return(
		<footer>
			<row>
				<div>
					<a href="www.google.com">Learn more</a>
				</div>
				<div>
					<h5>The more you read, the more you know.  Oh the places you'll go!</h5>
				</div>
				<div>
					<a href="https://www.commonsensemedia.org/blog/cool-tools-to-help-kids-learn-to-code">Learn to code</a>
				</div>
			</row>
		</footer>
	)
}

export default connect()(Footer);