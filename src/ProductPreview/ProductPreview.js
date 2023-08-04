import React from 'react';
import classes from './ProductPreview.module.css';

const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

const ProductPreview = (props) => {
    return(
        
    <div className={classes.ProductPreview}>
        <img src={props.currentPreviewImage} alt={props.currentPreviewImage}/>
        
        {
            props.currentSelectedFeature === 1 ?

            <div className={classes.HeartBeatSection}>
                <i class="fa-solid fa-heart-pulse"></i>
                <p>24</p>
            </div>
            :
            <div className={classes.FeatureData}>
            <p>{`${currentHour}:${currentMinute}`}</p>
        </div>
        }
    </div>
    );
    
}


export default ProductPreview;