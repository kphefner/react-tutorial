import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends React.Component {
	
	state = {
		characters: [],
	}
	
	removeCharacter = (index) => {
		
	  const {characters} = this.state
	
	  this.setState({
	    characters: characters.filter((character, i) => {
	      return i !== index
	    }),
	  })
	}
	
	handleSubmit = (character) => {
		// The ES6 spread feature will add all the items from the current state.characters PLUS the new one
	  this.setState({characters: [...this.state.characters, character]})
	}
	
	render() {
		const { characters } = this.state
		
		return (
		  <div className="container">
		    <Table characterData={characters} removeCharacter={this.removeCharacter} />
		    <Form handleSubmit={this.handleSubmit} />
		  </div>
		)
	}
}

export default App