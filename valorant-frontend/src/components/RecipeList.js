import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { addRecipe } from '../actions';

class Form extends Component {
    state = {
        name: "",
        ingredients: "",
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.addRecipe(this.state, this.props.history);
    }

    render() {
        const { name, ingredients } = this.state;
        return (
            <div>
                <h3>Create An Album You Would Like To Review!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <p><label htmlFor="name">Dish Name</label></p>
                        <input id="name" name="name" value={name} onChange={this.handleChange} />
                    </div>
                    <br />
                    <div>
                        <p><label htmlFor="ingredients">Ingredients</label></p>
                        <input id="ingredients" name="ingredients" value={ingredients} onChange={this.handleChange} />
                    </div>
                    <br />

                    <input type="submit" value="Create Recipe" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addRecipe })(Form)