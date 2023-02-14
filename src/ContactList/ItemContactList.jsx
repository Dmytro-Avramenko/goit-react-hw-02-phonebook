import React from "react";
import PropTypes from 'prop-types';

export const ItemContactList = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      {`${name}: ${number}`}
      <button type="button"
        onClick={() => onDeleteContact(id)}>Delete
      </button>
    </li>
  )  
}

ItemContactList.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  number: PropTypes.any,
  onDeleteContact: PropTypes.func
}



