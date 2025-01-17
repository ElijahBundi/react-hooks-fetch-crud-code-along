import React from "react";

function Item({ onDeleteItem, onUpdateItem, item }) {

  // PATCH method...........USES ITEM.ID
  function handleAddToCartButton() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        isInCart : !item.isInCart,
      }),
    })
      .then(res => res.json())
      .then((updatedItem) => onUpdateItem(updatedItem))
  }

    // DELETE method..........USES ITEM.ID
  function handleDeleteButton() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => onDeleteItem(item))
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"} onClick={handleAddToCartButton}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDeleteButton} >Delete</button>
    </li>
  );
}

export default Item;
