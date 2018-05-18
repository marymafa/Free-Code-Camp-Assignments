
import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown  from 'react-markdown';
import './index.css';

class Markdown extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		source: ''
	  };
	  
	
	}   
	handleChange(e) {
	  this.setState({source: e.target.value});
	}
	
	render() {
	  return ( 

	  <div>
		<h1 >Markdown Preview</h1>
			<textarea  id="Markdown" class="Markdown" onChange={this.handleChange.bind(this)} placeholder="Type here please!"></textarea>
           
            <ReactMarkdown source={this.state.source} />
            
	  </div>
	  )
	}
  }

ReactDOM.render(<Markdown/>,document.getElementById('root'))





