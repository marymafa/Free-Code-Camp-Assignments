import React from "react";
import EditForm from "./EditForm";

export default class RecipeItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    
    }
  }
  editItem() {
    //this.props.edit(this.state.recipeName, this.statse.ingredients)
    this.setState({ editing: true })
  }

  deleteItem() {
    this.props.delete(this.props.recipeName, this.props.ingredients)
  }

  render() {
    if (this.state.editing) {
      return (
        <EditForm recipeName={this.props.recipeName} ingredients={this.props.ingredients} onChange={this.editItem.bind(this)} />
      )
    }
    return (
      <div className="list">

        <h5>{this.props.recipe}</h5>

        <div id={`collapse-${this.props.num}`} className="collapse show">
          <div className="list">
            <ul>
              {
                this.props.recipeName

              }
              <button className="editButton" onClick={this.editItem.bind(this)}>edit</button>
              <button className="deleteButton" onClick={this.deleteItem.bind(this)} value={this.value} >delete</button>

            </ul>
          </div>
        </div>
      </div>
    );
  }
}