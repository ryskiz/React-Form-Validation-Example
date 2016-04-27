var React = require('react');
var SingleEmail = require('./singleEmail')
module.exports = React.createClass({
	render: function(){
		return <div>
		{this.renderList()}
		</div>
	},
	renderList: function(){
		if(this.props.emails && Object.keys(this.props.emails).length === 0){
			return <h4>
			Add an email!
			</h4>
		} else {
			var children = [];
			for(var key in this.props.emails){
				var email = this.props.emails[key];
				email.key = key;
				children.push(
					<SingleEmail 
						email = {email}
						key = {key}
						>
					</SingleEmail>
				)
			}
			return children;
		}
	}
});