var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return {
			text: '',
			classIs: true
		}
	},
	render: function(){
		return <div>
		<div className={this.state.classIs ? "input-group has-success":"input-group has-error"}>
			<input 
			value={this.state.text}
			onChange={this.handleInputChange}
			onClick={this.handleInputChange}
			type="text" 
			className="form-control" />
			<span className="input-group-btn">
				<button
				onClick={this.handleClick}
				className="btn btn-default" type="button"
				disabled={this.state.classIs ? "":"disabled"}>
					Add
				</button>
			</span>
		</div>
		<div className={this.state.classIs ? "content":"loaded"}>
		<p>Must enter valid email address!</p>
		</div>
		</div>
	},
		handleClick: function(){
		//not the same as array.push it is telling firebase to save NOT append
		this.props.emailsStore.push({
			text: this.state.text,
			done: false
		});

		this.setState({text: ''});
	},
	handleInputChange: function(event){
		var patt = /\S+@\S+\.\S+/;
		this.setState({text: event.target.value})
		patt.test(this.state.text) ? this.setState({classIs: true}):this.setState({classIs: false});
	}
})