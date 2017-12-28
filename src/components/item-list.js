import React from 'react';
import Item from './item';

const ItemList = (props) => {
  const Vehicles = props.vehicles.map((vehicle) => {
     return (
         <Item
            item={vehicle}
         />
     );
  });

  return (
      <ul>
          {Vehicles}
      </ul>
  );
};

export default ItemList;