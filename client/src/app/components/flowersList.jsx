import React, { useState } from "react";
import Flower from "./flower";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../api";

const Flowers = ({ flowers, ...rest }) => {
    const count = flowers.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [categories] = useState(api.categories.fetchAll());
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleCategorySelect = (params) => {
        console.log(params);
    };
    console.log(categories);

    const flowerCrop = paginate(flowers, currentPage, pageSize);
    return (
        <>
            <GroupList items={categories} onItemSelect={handleCategorySelect} />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Название</th>
                        <th scope="col">Категория</th>
                        <th scope="col">Цена</th>
                    </tr>
                </thead>
                <tbody>
                    {flowerCrop.map((flower) => (
                        <Flower key={flower._id} {...flower} />
                    ))}
                </tbody>
            </table>
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

Flowers.propTypes = {
    flowers: PropTypes.array
};

export default Flowers;
