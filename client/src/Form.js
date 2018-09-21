import React from 'react';
import TextField from '@material-ui/core/TextField';

export default class Form extends React.Component {

    state = {
        text: ''
    }


    handleChange = e => {
        this.setState({text: e.target.value});
    }

    handleKeyDown = e => {
        if(e.key === 'Enter'){
            this.props.submit(this.state.text);
            this.setState({text: ''});
        }
    }


    render(){

        const {text} = this.state;

        return (
            <TextField
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            value={text}
            label="To Do ..."
            margin="normal"
            fullWidth
          />
        );
    }

}