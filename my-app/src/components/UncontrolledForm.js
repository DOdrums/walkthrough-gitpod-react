import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
      this.inputName = React.createRef();
      this.inputCategory = React.createRef();
      this.inputComments = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value);
        console.log(this.inputCategory.current.value);
        console.log(this.inputComments.current.value);
    }

    render() {
        return (
        <div>
            <h2>Please fill out the form below:zz zz</h2>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='id-name'>Your Name:</label>
                    <input
                        id='id-name'
                        name='name'
                        type="text"
                        defaultValue="John Smith"
                        ref={this.inputName} 
                        />
                </div>
                <div>
                    <label htmlFor='id-category'>Query category:</label>
                    <select name="category" id="id-category" ref={this.inputCategory}>
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments:</label>
                    <textarea name="comments" id="id-comments" ref={this.inputComments}></textarea>
                </div>
                    <input type="submit" value="submit"/>
            </form>
        </div>
        )
    }
}

export default ControlledForm