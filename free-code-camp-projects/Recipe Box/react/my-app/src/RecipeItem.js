import React from "react";
import EditForm from "./EditForm";

export default class RecipeItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //data: [{ recipeName: this.props.recipeName, ingredients: this.props.ingredients }],
      ingredients: props.ingredients,
      recipeName: props.recipeName,
      editing: false,
      data: props.collection,
    };
  }
  editItem() {
    this.setState({ editing: true })
  }

  delete() {
    this.props.delete(this.props.collection, this.state.recipeName, this.state.ingredients)
  }
  hideEditing(name, ing) {
    this.setState({
      editing: false,
      recipeName: name,
      ingredients: ing
    })
  }

  render() {
    if (this.state.editing) {
      return (
        <EditForm recipeName={this.state.recipeName} hideEditing={this.hideEditing.bind(this)} ingredients={this.state.ingredients} onChange={this.editItem.bind(this)} />
      )
    }
    return (
      <div className="list">

        <h1>{this.state.recipeName}</h1>

        <div id={`collapse-${this.props.num}`} className="collapse show">
          <div className="list">

            <ul>
              {
                this.state.ingredients

              }
              <button className="editButton" onClick={this.editItem.bind(this)}>edit</button>
              <button className="deleteButton" onClick={this.delete.bind(this)} value={this.value} >delete</button>

            </ul>
          </div>
        </div>
      </div>
    );
  }
}