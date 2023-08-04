    const ProductData = {
    title: 'Infinite Connections - The Next-Gen Smartwatch',
    description: 'Experience a new era of connectivity with the Infinite Connections Smartwatch. This cutting-edge wearable seamlessly integrates advanced technology with sleek design, offering a multitude of features to enhance your lifestyle. Stay effortlessly connected with real-time notifications, track your fitness goals, and explore a world of possibilities at your fingertips. Embrace the future of wearable technology and elevate your daily adventures with the Infinite Connections Smartwatch.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    featureList: [
        "Time", 
        "Heart Rate"
    ],
    inStock: false, // Set this to true if the product is in stock, or false if it's out of stock
    copyRights: 'Copyright © Patrick 2023. All rights reserved.',
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;