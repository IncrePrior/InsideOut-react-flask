import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton/OpenModalButton';


export default function CollectionDropdownButton({ buttonText, collections }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="collection-dropdown-button">
      <OpenModalButton
        buttonText={buttonText}
        onButtonClick={toggleDropdown}
      />
      {isDropdownVisible && (
        <div className="collection-dropdown">
          <ul>
            {collections.map((collection) => (
              <li key={collection.id}>
                <Link to={`/collections/${collection.id}`}>{collection.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
