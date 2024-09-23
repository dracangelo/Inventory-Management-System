import React, { useState } from 'react';
import { deleteInventoryItem } from '../services/api';
import InventoryForm from './InventoryForm';

function InventoryItem({ item, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteInventoryItem(item.id);
      onUpdate();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = () => {
    setIsEditing(false);
    onUpdate();
  };

  if (isEditing) {
    return <InventoryForm item={item} onSubmit={handleSubmit} />;
  }

  return (
    <div className="inventory-item">
      <h3>{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <p>Description: {item.description}</p>
      <p>Category: {item.category}</p>
      <p>Unit Price: ${item.unit_price.toFixed(2)}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default InventoryItem;