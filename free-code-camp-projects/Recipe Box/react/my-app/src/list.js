import React from "reat"

export default class list extends React.Component {
    render() {
        var recipes = this.props.recipes;
        var listItems = recipes.props.map((recipes) =>
            <div key={recipes}>
                {recipes}
            </div>
        );
        return (
            <div>{listItems}</div>
        );
    }


}



