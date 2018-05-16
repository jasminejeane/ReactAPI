import React, {Component} from 'react';
import axios from 'axios';


class IdeaList extends Component {
	state = {
		ideas: []
	}

  componentWillMount() {
    axios.get('http://localhost:8080/ideas')
    .then((response) => {
      this.setState({ideas: response.data})
    })
    .catch((error) =>{
      console.log('Error retrieving ideas!');
      console.log(error);
    })
  }

  
	render() {
	    return (
	        <div>
	            <h1>Idea Board</h1>
	        </div>
	    )
	}
}

export default IdeaList;
