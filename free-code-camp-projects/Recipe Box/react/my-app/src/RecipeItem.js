import React from "react";

export default class RecipeItem extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      test: this.props.ingredients
    }
  }
   
  render() {
    console.log(this.state.test)
    return(
      <div className="list">
    
          <h5>{this.props.recipe}</h5>

        <div id={`collapse-${ this.props.num }`} className="collapse show">
          <div className="list">
            <ul>
            {
              this.state.test.map((value) => {
                return (
                  <li>{value}</li>
                )
              })
            }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
