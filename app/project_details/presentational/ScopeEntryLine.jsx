import React from 'react';
import { Button, Panel, Glyphicon } from 'react-bootstrap';


class ScopeEntryLine extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var rendered_ip_address = null;
		if (this.props.scope.ip_address) {
			rendered_ip_address = (
				<span>{this.props.scope.ip_address}</span>
			)
		}

		var rendered_hostname = null;
		if (this.props.scope.hostname) {
			if (this.props.scope.ip_address) {
				rendered_hostname = (
					<span>{"  -  " + this.props.scope.hostname}</span>
				)
			}
			else {
				rendered_hostname = (
					<span>{this.props.scope.hostname}</span>
				)					
			}
		}

		const header = ( 
			<h3>
				{rendered_ip_address}
				{rendered_hostname}
				<Button onClick={this.props.deleteScope}><Glyphicon glyph="remove"/></Button>
			</h3>
		)

		return (
			<div>
				<Panel header={header}>
					{this.props.scope.scope_id}
					{this.props.scope.hostname}
					{this.props.scope.ip_address}
				</Panel>
			</div>			

		)
	}
}

export default ScopeEntryLine;