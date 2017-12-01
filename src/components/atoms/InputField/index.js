import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';


/**
 * InputField for any form.
 */

class InputField extends React.Component {
	constructor(props) {
	    super(props);
	    this.onFocus = this.onFocus.bind(this);
	    this.onBlur = this.onBlur.bind(this);
	    this.state = {isFocused: false, isFilled: false};
	}
	componentDidMount() {
		if(this.fieldInput.value!=='') {
			this.setState({isFilled: true});
		}
	}
	onFocus(e) {
		this.setState({isFocused: true});
	}
	onBlur(e) {
		this.setState({isFocused: false});
		if(this.fieldInput.value!=='') {
			this.setState({isFilled: true});
		}
	}
    render () {
    	const id = uniqueId('input_'); 
		const getIcon = this.props.icon!==null?this.props.icon:<div></div>;
		const classNames = (this.state.isFocused?"focused ":"")+(this.state.isFilled?"filled ":"")+(this.props.icon!==null?"has-icon ":"")+"inputfield"
		return (
			<div className={classNames}>
				<input autoCapitalize="off" autoCorrect="off" autoComplete="off" id={id} type={this.props.type} {...this.props} onFocus={this.onFocus} onBlur={this.onBlur} ref={(input) => { this.fieldInput = input; }}  />
				<label htmlFor={id}>{this.props.label}</label>
				{getIcon}
			</div>
		)
    }

}
InputField.propTypes = {
	/** InputField Type */
	type: PropTypes.oneOf(['text','email','search','password']),
	/** InputField Icon */
	icon: PropTypes.node,
	/** InputField Label */
	label: PropTypes.string.isRequired,
}


InputField.defaultProps = {
  type: "text"
}

export default InputField;