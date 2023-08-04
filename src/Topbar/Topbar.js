import React from 'react';

import classes from './Topbar.module.css';

const Topbar = () => {
    return(
        <nav className={classes.Topbar}>
            <img src="/company.png" alt="Company logo"></img>
        </nav>
    )
}

export default Topbar;