import React, { Component, PropTypes } from 'react';

export default class load extends Component {
	render(){
		const { data, children } = this.props
		
		if(data.length>0){
			return (<div>{children}</div>)
			
		}else{
			return <h1>on loading ......  </h1>
		}
		
	}

}