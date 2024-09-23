import React, { useState, useEffect } from 'react';
import { getInventoryItems } from '../services/api';
import InventoryItem from './InventoryItem';

function InventoryList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const data = await getInventoryItems();
      setItems(data);
    } catch (error) {
      console.error('Error fetching inventory items:', error);
    }
  };

  return (
    <div className="inventory-list">
      <h2>Inventory Items</h2>
      {items.map(item => (
        <InventoryItem key={item.id} item={item} onUpdate={fetchItems} />
      ))}
    </div>
  );
}

export default InventoryList;