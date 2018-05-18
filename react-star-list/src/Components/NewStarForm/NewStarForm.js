import React from 'react';

const NewStarForm = props => <form onSubmit={props.handleSubmit}>
	<input value={props.newStar.name} onChange={props.handleChangeForChild('name')} placeholder="name" />
	<input value={props.newStar.diameter} onChange={props.handleChangeForChild('diameter')} placeholder="diameter" />
	<input type="submit" value="Add New Star!" />
</form>;

export default NewStarForm;