import React, { useState } from 'react';
import InventoryList from '../components/InventoryList';
import InventoryForm from '../components/InventoryForm';

function InventoryPage() {
  const [isAdding, setIsAdding] = useState(false);
  const [refreshList, setRefreshList] = useState(false);

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleFormSubmit = () => {
    setIsAdding(false);
    setRefreshList(prev => !prev);
  };

  return (
    <div className="inventory-page">
      <h1>Inventory Management</h1>
      {isAdding ? (
        <InventoryForm onSubmit={handleFormSubmit} />
      ) : (
        <button onClick={handleAddClick}>Add New Item</button>
      )}
      <InventoryList key={refreshList} />
    </div>
  );
}

export default InventoryPage;