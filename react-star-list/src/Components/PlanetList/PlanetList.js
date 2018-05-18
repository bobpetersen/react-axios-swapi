import React, { Component } from 'react';


class PlanetList extends Component {

	render() {
		return (
			<div>
				<ul>
					{this.props.planetList.map(planet => <li key={planet.name}>
					 The planet "{planet.name}" is {planet.climate} </li>)}
				</ul>
			</div>
		);
	}
}

export default PlanetList;