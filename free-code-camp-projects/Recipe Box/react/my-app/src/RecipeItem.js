import React from "react";
import EditForm from "./EditForm";

export default class RecipeItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    data:props.collection
    };
    // console.log("props", props.collection)
  }
  editItem() {
    this.setState({ editing: true })
  }

  deleteItem() {
    var recipes=this.state.data;
  
    console.log("recipes",recipes)
   var currentRecipe= {recipeName:this.props.recipeName, ingredients: this.props.ingredients}
   console.log("currentRecipe",currentRecipe)
   var newData = recipes.filter(function(val){val !== currentRecipe})
   console.log("newData", recipes)
   
  //  this.setState({data: currentRecipe})
  //  localStorage.setItem('OBJ', JSON.stringify(newData));
  
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
              <button className="deleteButton"   onClick={this.deleteItem.bind(this)} value={this.value} >delete</button>

            </ul>
          </div>
        </div>
      </div>
    );
  }
}