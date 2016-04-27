var React = require('react');
var Firebase = require('firebase');
var rootUrl = 'https://form-validation-ex.firebaseio.com/';
module.exports = React.createClass({
	getInitialState: function(){
		return {
			text: this.props.email.text,
		}
	},
	componentWillMount: function(){
		this.fb = new Firebase(rootUrl + 'emails/' + this.props.email.key);
	},
	render: function(){
		return <div className="input-group">
			<li
			className="form-control">
			{this.state.text}
			</li><span className="input-group-btn">
				<button className="btn btn-default">Delete</button>
			</span>
		</div>
	}
});