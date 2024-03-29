import React from "react";
import PropTypes from "prop-types";

const GroupList = ({ items, valueProperty, contentProperty }) => {
    return (
        <ul className="list-group">
            {Object.keys(items).map((item) => (
                <li key={items[item][valueProperty]} className="list-group-item">
                    {items[item][contentProperty]}
                </li>
            ))}
        </ul>
    );
};

GroupList.propTypes = {
    items: PropTypes.object.isRequired,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired
};

export default GroupList;
