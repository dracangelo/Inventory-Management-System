import React, { useState } from 'react';
import { createInventoryItem, updateInventoryItem } from '../services/api';

function InventoryForm({ item, onSubmit }) {
  const [formData, setFormData] = useState(item || {
    name: '',
    quantity: 0,
    description: '',
    category: '',
    unit_price: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (item) {
        await updateInventoryItem(item.id, formData);
      } else {
        await createInventoryItem(formData);
      }
      onSubmit();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Item Name"
        required
      />
      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        placeholder="Quantity"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <input
        type="number"
        name="unit_price"
        value={formData.unit_price}
        onChange={handleChange}
        placeholder="Unit Price"
        step="0.01"
      />
      <button type="submit">{item ? 'Update' : 'Add'} Item</button>
    </form>
  );
}

export default InventoryForm;