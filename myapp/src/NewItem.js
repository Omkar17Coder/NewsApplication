import React, { Component } from "react";

export class NewItem extends Component {


  render() {
    const { title, description, url ,linkme} = this.props;
    
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={url} className="card-img-top" alt="Card image" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={linkme} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;
