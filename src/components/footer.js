import React from 'react';
import {connect} from 'react-redux';

import styles from './css/footer.css';

export function Footer(props){

	return(
		<footer>
			<ul className={styles.bottomnav}>
				<li className={styles.bottomnav}>
					<a href="www.google.com">Learn more</a>
				</li>
				<li className={styles.bottomnav}>
					The more you read, the more you know.  Oh the places you'll go!
				</li>
				<li className={styles.bottomnav}>
					<a href="https://www.commonsensemedia.org/blog/cool-tools-to-help-kids-learn-to-code">Learn to code</a>
				</li>
			</ul>
		</footer>
	)
}

export default connect()(Footer);