import React from 'react';
import {connect} from 'react-redux';

import footer from './css/footer.css';

export function Footer(props){

////potentially have the links be dynamic to the quiz, this link might need to be stored within the state/ db

	return(
		<footer>
			<ul className={footer.bottomnav}>
				<li className={footer.bottomnav}>
					<a href="www.google.com">Learn more</a>
				</li>
				<li className={footer.bottomnav}>
					The more you read, the more you know.  Oh the places you'll go!
				</li>
				<li className={footer.bottomnav}>
					<a href="https://www.commonsensemedia.org/blog/cool-tools-to-help-kids-learn-to-code">Learn to code</a>
				</li>
			</ul>
		</footer>
	)
}

export default connect()(Footer);