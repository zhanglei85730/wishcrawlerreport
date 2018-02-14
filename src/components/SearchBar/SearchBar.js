import React, {Component} from 'react';
import {Button} from 'antd';
// import {search, addButton} from './index.css';

const SearchBar = ({onAdd, children}) => {

    return (
        <div>
            {children}
            <div className={addButton}>
                <Button type="primary" onClick={onAdd}>搜索</Button>
            </div>
        </div>
    );
};

export default SearchBar;