import React from "react";

const Card = ({ item }) => {
  return (
    <div className="container">
      <div className="user-info">
        <img className="Picture" src={item.urlToImage} alt="" />

        <div className="rightSection">
          <div className="Author">{item.author}</div>
          <div className="Title">{item.title}</div>
        </div>
      </div>

      <div className="description">{item.description}</div>

      <div className="bottom">
        <div className="date">09/01/2024</div>
        <a href="" className="website">
          www.google.com
        </a>
        <a href="" className="content">
          random content
        </a>
      </div>
    </div>
  );
};

export default Card;
