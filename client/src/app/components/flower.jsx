import React from 'react';

const Flower = ({
    _id,
    name,
    categories,
    price
}) => {
    return ( 
    <tr>
        <td>{_id}</td>
        <td>{name}</td>
        <td>{categories.name}</td>
        <td>{price}</td>
        <td>
          <button className={"btn btn-primary"}>
            Открыть карточку
          </button>
        </td>
      </tr>
     );
}
 
export default Flower;