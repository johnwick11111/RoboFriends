import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';


class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield:''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => this.setState({ robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
	

		return !this.state.robots.length ?
			<h1 className='tc white'>LOADING...</h1> :
			(
			<div className='tc'>
				<h1><a href="https://fontmeme.com/sega-font/"><img src="https://fontmeme.com/permalink/210128/9ff8c8f52dfb7da3400fa3d9125163ac.png" alt="sega-font" border="0"/></a></h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
			);
	}
}

export default App;