import React, { Component } from 'react';

import classes from './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from './Utils/ProductData';
import CopyRights from './CopyRights/CopyRights';

class App extends Component {

  state = {
    ProductData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
  }
  //the onclick is clicked, it update the state of pos
  //If click on the second image, pos(1)
  //this change the state position to (1), and triggering the props change to get the second imageUrl (below)
  onColorOptionClick = (pos) => {
    console.log(this.state.currentPreviewImagePos)
    this.setState({currentPreviewImagePos:pos})
  }
  //the onclick is clicked, it update the state of pos
  onFeatureItemClick = (pos) => {
    console.log(this.state.currentSelectedFeature)
    this.setState({currentSelectedFeature:pos})
  }

  onBuyNowClick = () => {
    if(this.state.ProductData.inStock){
      alert('Product is in stock. Proceed with the purchase.')
    }else{
      alert('Product is currently out of stock.')
    }
  }

  render(){
    return (
        <div className="App">
        <Topbar/>

        <div className={classes.MainContainer}>
            <div className={classes.ProductPreview}>
                <ProductPreview currentPreviewImage={this.state.ProductData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
                showHeartBeatSection={this.state.showHeartBeatSection}
                currentSelectedFeature = {this.state.currentSelectedFeature}
                />
            </div>

            <div className={classes.ProductData}>
              <ProductDetails data={this.state.ProductData} 
              onColorOptionClick={this.onColorOptionClick} 
              currentPreviewImagePos={this.state.currentPreviewImagePos}
              onFeatureItemClick={this.onFeatureItemClick} 
              currentSelectedFeature= {this.state.currentSelectedFeature}
              onBuyNowClick={this.onBuyNowClick}/>
            </div>
                
        </div>

             <CopyRights data={this.state.ProductData}/>

      </div>
    );
  }
}

export default App;
