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
  
  deleteItem() {
    var newData = [];
    console.log('collection', this.props.collection)
    var currentRecipe = { recipeName: this.state.recipeName, ingredients: this.state.ingredients };
    for(var i in this.props.collection){
      if( this.props.collection[i].recipeName !== currentRecipe.recipeName && this.props.collection[i].ingredients !== currentRecipe.ingredients ){
        newData.push(this.props.collection[i]);
      }
    }
   
   this.setState({ data: newData })
    localStorage.setItem('OBJ', JSON.stringify(newData));
    console.log("newdata",newData);
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

        <h5>{this.props.recipe}</h5>

        <div id={`collapse-${this.props.num}`} className="collapse show">
          <div className="list">
            <ul>
              {
                this.state.recipeName

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