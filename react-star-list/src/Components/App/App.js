import React, { Component } from 'react';
import axios from 'axios';

import Introduction from '../Introduction/Introduction';
import NewStar from '../NewStar/NewStar';
import StarList from '../StarList/StarList';
import NewStarForm from '../NewStarForm/NewStarForm';
import PlanetList from '../PlanetList/PlanetList'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newStar: {
				name: '',
				diameter: '',
			},
			starList: [
				{ name: 'Menkar', diameter: '89 suns' },
				{ name: 'Kochab', diameter: '42 suns' },
				{ name: 'Hadar', diameter: '8.6 suns' },
			],
			planetList: [ ],
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeFor = propertyName => event => {
		this.setState({
			newStar: {
				...this.state.newStar,
				[propertyName]: event.target.value,
			}
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log('submitted!');
		this.setState({
			newStar: {
				name: '',
				diameter: '',
			},
			starList: [...this.state.starList, this.state.newStar],
		});
	}

	componentDidMount() {
		this.getPlanets('https://swapi.co/api/planets/?format=json');
		
	}
	getPlanets = (nextUrl) => {
		if(nextUrl) {
		axios({
			method: 'GET',
			url: nextUrl,
		}).then(response => {
			console.log(response);
			this.setState({
				planetList: [...this.state.planetList, ...response.data.results],
			});
			this.getPlanets(response.data.next);
		}).catch(error => {
			console.log(error);
		});
	}
	}


// render is a lifecycle event
	render() {
		return (
			<div>
				<Introduction />
				<NewStar newStar={this.state.newStar} />
				<NewStarForm newStar={this.state.newStar} handleChangeForChild={this.handleChangeFor} handleSubmit={this.handleSubmit} />

				<StarList starList={this.state.starList} />
				<p>

				</p>
				<PlanetList planetList={this.state.planetList}/>
			</div>
		);
	}
}

export default App;