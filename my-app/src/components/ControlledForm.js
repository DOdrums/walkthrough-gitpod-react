import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            name: "",
            category: "website",
            comment: "",
      }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
        <div>
            <h2>Please fill out the form below:zz zz</h2>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='id-name'>Your Name:</label>
                    <input
                        onChange={this.handleChange}
                        value={this.state.name}
                        id='id-name'
                        name='name'
                        type="text"/>
                </div>
                <div>
                    <label htmlFor='id-category'>Query category:</label>
                    <select value={this.state.category} name="category" id="id-category" onChange={this.handleChange}>
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments:</label>
                    <textarea value={this.state.text} name="comments" id="id-comments" onChange={this.handleChange}></textarea>
                </div>
                    <input type="submit" value="submit"/>
            </form>
        </div>
        )
    }
}

export default ControlledForm