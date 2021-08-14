const items_data = [
    {
        id: 1,
        title: 'Orange',
        description: 'An Orange T Shirt',
        price: 19.99,
        pictureUrl: 'https://www.transparentpng.com/download/t-shirt/JcvzGC-orange-t-shirt-image.png'
    },
    {
        id: 2,
        title: 'Red',
        description: 'A Red T Shirt',
        price: 19.99,
        pictureUrl: 'https://www.transparentpng.com/download/t-shirt/Xfp8Xd-red-t-shirt-picture.png'
    },
    {
        id: 3,
        title: 'Green',
        description: 'A Green T Shirt',
        price: 19.99,
        pictureUrl: 'https://www.transparentpng.com/download/t-shirt/BJCV0J-green-t-shirt-best-picture.png'
    },
    {
        id: 4,
        title: 'Black',
        description: 'A Black T Shirt',
        price: 29.99,
        pictureUrl: 'https://www.transparentpng.com/download/t-shirt/sYHTQX-t-shirt-flexible-transparent-picture.png'
    },
    {
        id: 5,
        title: 'Blue',
        description: 'A Blue T Shirt',
        price: 19.99,
        pictureUrl: 'https://www.transparentpng.com/download/t-shirt/mD03wQ-women-blue-t-shirt-icon-clipart.png'
    },
    {
        id: 6,
        title: 'White',
        description: 'A White T Shirt',
        price: 9.99,
        pictureUrl: 'https://www.transparentpng.com/download/t-shirt/uWGRvG-man-t-shirt-clipart-photo.png'
    },
];

export function getItems(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(items_data)
          //reject("Network error")
        }, 2000);
    })
}

export function getItem(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(items_data[id-1])
          //reject("Network error")
        }, 2000);
    })
}
