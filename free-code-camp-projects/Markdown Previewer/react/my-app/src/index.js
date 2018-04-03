
import React from 'react';
import ReactDOM from 'react-dom';
// import ReactMarkdown  from 'react-markdown';
import axios from 'axios';
import camper from "./camper";
import './index.css';

// class Markdown extends React.Component {
// 	constructor(props) {
// 	  super(props);
// 	  this.state = {
// 		source: ''
// 	  };
	  
// 	  this.handleChange = this.handleChange.bind(this);
	
// 	}   
// 	handleChange(e) {
// 	  this.setState({source: e.target.value});
// 	}
// 	// createMarkdownPreview() {
// 	//   return<p dangerouslySetInnerHTML={{__html: ReactMarkdown(this.props.source)}}/>;
// 	// }
// 	render() {
// 	  return ( 

// 	  <div>
// 		<h1 >Markdown Preview</h1>
// 			<textarea  id="Markdown" class="Markdown" onChange={this.handleChange}></textarea>
           
//             <ReactMarkdown source={this.state.source} />
            
// 	  </div>
// 	  )
// 	}
//   }

ReactDOM.render(<camper/>,document.getElementById('root'))





