import React from 'react';
import Search from './Search';
import Button from './Button';

const Header = (props) => {


    return (
        <div className="header">
            <Search />
            <Button text="Add course" />
        </div>
    );
};

export default Header;