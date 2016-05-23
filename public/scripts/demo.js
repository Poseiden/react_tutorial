var MyButtonBox = React.createClass({
	getInitialState: function() {
		return {words:'can you see me ?',type:'text'}
	},
	handleClick:function() {
		if(this.state.type === 'text'){
			this.setState({type:'hidden'});
		}else{
			this.setState({type:'text'});
		}
	},
	render:function() {
		return (
			<div>
				<div>
					<button id = 'button' onClick={this.handleClick}>Click Me !</button>
				</div>
				<div>
					<input readOnly='true' type={this.state.type} value={this.state.words} />
				</div>
			</div>
			)
	}
})

// ReactDOM.render(
// 	<MyButtonBox />,
// 	document.getElementById('content')
// 	)
export default wrapPageSlider(MyButtonBox);