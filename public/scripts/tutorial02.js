var CommentBox = React.createClass({
	render: function() {
		return (
			<div className="commentBox">
				Hello , this is comment box ! 
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox />,
	document.getElementById('content')
);