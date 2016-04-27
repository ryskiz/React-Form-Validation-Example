var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var FormInput = require('./formInput');
var Firebase = require('firebase');
var EList = require('./emailList');
var rootUrl = 'https://form-validation-ex.firebaseio.com/';


var Main = React.createClass({
	mixins: [ ReactFire ],
	getInitialState: function(){
		return{
			emails: {},
			loaded: false
		}
	},
	componentWillMount: function(){
		fb = new Firebase(rootUrl + 'emails/');
		this.bindAsObject(fb, 'emails');
		fb.on('value', this.handleDataLoaded);
	},
  render: function() {
    return <div className="row panel panel-default">
    	<div className="col-md-8 col-md-offset-2">
    		<h1 className="text-center">
      			Validation Example
    		</h1>
    	<FormInput emailsStore={this.firebaseRefs.emails}/>
    	<hr />
    	<div className={"content " + (this.state.loaded ? "loaded": "")}>
    	<EList emails={this.state.emails}/>
    	</div>
    	</div>
    </div>
  },
  handleDataLoaded: function(){
  	this.setState({loaded:true});
  }
});

var element = React.createElement(Main, {});
ReactDOM.render(element, document.querySelector('.container'));
