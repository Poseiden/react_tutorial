var InputBox = React.createClass({
	getInitialState:function() {
		return {displayWords: ''};
	},
	handleTextChange:function(e) {
		this.setState({displayWords:e.target.value});
	},
	render:function() {
		return (
			<div>
				<input type='text' onChange={this.handleTextChange} />
				<input type='text' value={this.state.displayWords} readOnly='readOnly' />
			</div>
			)
	}
})

ReactDOM.render(
	<InputBox />,
	document.getElementById('content')
	)