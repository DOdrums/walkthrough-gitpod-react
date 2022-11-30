import React, {useState} from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,category,comments)
    }

    return (
    <div>
        <h2>Please fill out the form below:</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='id-name'>Your Name:</label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    id='id-name'
                    name='name'
                    type="text"/>
            </div>
            <div>
                <label htmlFor='id-category'>Query category:</label>
                <select value={category} name="category" id="id-category" onChange={(e) => setCategory(e.target.value)}>
                    <option value="website">Website issue</option>
                    <option value="order">Order issue</option>
                    <option value="general">General inquiry</option>
                </select>
            </div>
            <div>
                <label htmlFor="id-comments">Comments:</label>
                <textarea value={comments} name="comments" id="id-comments" onChange={(e) => setComments(e.target.value)}></textarea>
            </div>
                <input type="submit" value="submit"/>
        </form>
    </div>
    )
    }


export default ControlledFormHooks