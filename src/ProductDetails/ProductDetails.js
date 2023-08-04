import React from 'react';

import classes from './ProductDetails.module.css';

import ProductData from '../Utils/ProductData';

const ProductDetails = (props) => {
    //using map to locate the elements in array
    const colorOptions = props.data.colorOptions.map((item,pos) => {
        const classArr = [classes.ProductImage]
        if(pos === props.currentPreviewImagePos){
            classArr.push(classes.SelectedProductImage);
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={()=>props.onColorOptionClick(pos)}/>
        );
    } )

    const featureList = props.data.featureList.map((item,pos) => {
        const classArr = [classes.FeatureItem];
        //whatever position it is at, will select the item. pos(0) => time, pos (1) => heartrate
        if(pos === props.currentSelectedFeature){
            classArr.push(classes.SelectedFeatureItem);
        }
        return(
            <button key={pos} className={classArr.join(' ')} onClick={() => props.onFeatureItemClick(pos)}>{item}</button>
        )
    })


    return(
    <div className={classes.ProductData}>
        <h1 className={classes.ProductTitle}>{props.data.title}</h1>
        <p className={classes.ProductDescription}>{props.data.description}</p>

        <h3 className={classes.SectionHeading}>Select Your Color: {props.data.colorOptions[props.currentPreviewImagePos].styleName} </h3>
        
        
        <div className={classes.Product}>
            {colorOptions}
          {/* <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black Watch"/>
          <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red Watch"/>
          <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Watch"/>
          <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Watch"/> */}
        </div>

        <h3 className={classes.SectionHeading}>Features</h3>

        <div className={classes.FeatureList}>
          {/* <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>
          <button className={classes.FeatureItem}>Heart Rate</button> */}
          {featureList}
        </div>

        <button className={classes.PrimaryButton} onClick={props.onBuyNowClick}>Buy Now</button>

    </div>        
    )
}

export default ProductDetails;