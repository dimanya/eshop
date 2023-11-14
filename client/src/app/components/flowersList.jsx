import React, { useState, useEffect } from "react";
import Flower from "./flower";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../api";

const Flowers = ({ flowers, ...rest }) => {
    const count = flowers.length;
    const pageSize = 4;
    const [categories, setCategories] = useState();
    useEffect(() => {
        api.categories.fetchAll().then((data) => setCategories(data));
    }, []);

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleCategorySelect = (params) => {};

    const flowerCrop = paginate(flowers, currentPage, pageSize);
    return (
        <>
            {categories && (
                <GroupList
                    items={categories}
                    onItemSelect={handleCategorySelect}
                    valueProperty="_id"
                    contentProperty="name"
                />
            )}

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
