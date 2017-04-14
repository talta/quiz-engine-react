export default class Header extends React.Component{
	render(){
		return (
			<header>
				<h1>
					<IndexLink to={this.props.root}> Home</IndexLink> 
				</h1>
			</header>
		)
	}
}