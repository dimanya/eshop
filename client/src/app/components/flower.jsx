import React from "react";
import PropTypes from "prop-types";

const Flower = ({ _id, name, categories, price }) => {
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{categories.name}</td>
            <td>{price}</td>
            <td>
                <button className={"btn btn-primary"}>Открыть карточку</button>
            </td>
        </tr>
    );
};

Flower.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    categories: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired
};

export default Flower;
