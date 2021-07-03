import React, { Component } from 'react'

class Recipe extends Component {

    render() {
        const { name, ingredients, release_year } = this.props.recipe;
        return (
            <div>
                <h3>{name}:</h3>
                <p>
                Ingredients:
                {ingredients}
                </p>
            </div>
        )
    }
}

export default Recipe