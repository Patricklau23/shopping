import React from "react";
import classes from "./CopyRights.module.css"

const CopyRights = (props) => {
    const copyRights = props.data.copyRights;
    return(
        <p className={classes.CopyRights}>
            {copyRights}
        </p>
    )
}

export default CopyRights;