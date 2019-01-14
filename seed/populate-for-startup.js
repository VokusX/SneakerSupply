var User = require('../models/user');
var Category = require('../models/categories');
var Department = require('../models/department');
var Product = require('../models/product');
var Variant = require('../models/variant');
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/shoppingApp');
//mongoose.connect('mongodb://localhost/myShoppingApp3', { useNewUrlParser: true, useCreateIndex: true, });
mongoose.connect('mongodb://localhost/myShoppingApp3');


// // For testing only, removes the existing models so that we can re-make them
// Product.remove({}, function(err) { 
//     console.log('Products removed') 
//  });
//  Category.remove({}, function(err) { 
//     console.log('Categories removed') 
//  });
//  Department.remove({}, function(err) { 
//     console.log('Departments removed') 
//  });
//  Variant.remove({}, function(err) { 
//     console.log('Variants removed') 
//  });

var categories =
    [
        new Category({
            categoryName: 'YEEZY'
        }),
        new Category({
            categoryName: 'Ultraboost'
        }),
        new Category({
            categoryName: 'Air Jordan'
        }),
        new Category({
            categoryName: 'Vans'
        })
    ]

for (let i = 0; i < categories.length; i++) {
    categories[i].save(function (e, r) {
        if (i === categories.length - 1) {
            exit();
        }
    });
}

var departments =
    [
        new Department({
            departmentName: 'Brands',
            categories: 'YEEZY,Ultraboost,Air Jordan,Vans'
        }),
        new Department({
            departmentName: 'Upcoming',
            categories: ''
        })
    ]

for (let i = 0; i < departments.length; i++) {
    departments[i].save(function (e, r) {
        if (i === departments.length - 1) {
            exit();
        }
    });
}

var products =
    [
        new Product({
            _id: "5bedf31cc14d7822b39d9d43",
            imagePath: 'https://static.highsnobiety.com/wp-content/uploads/2018/01/17155130/2017-sneaker-trends-yeezys-2-480x321.jpg',
            title: 'YEEZY 350 V2',
            description: 'Adidas and Kanye West bring the iconic YEEZY 350 sneaker in a variety of colourways.',
            price: 300,
            color: 'Zebra',
            size: 'SOLD OUT',
            quantity: 0,
            department: 'Brands',
            category: 'YEEZY',
        }),
        new Product({
            _id: "5bedf3b9c14d7822b39d9d45",
            imagePath: 'https://www.sneakers-actus.fr/wp-content/uploads/2018/09/adidas-yeezy-700-on-feet-@jiostamaria.jpg',
            title: 'YEEZY 700',
            description: 'Adidas and Kanye West bring a new spin on the YEEZY with the 700 in a variety of colourways.',
            price: 350,
            color: 'Waverunner',
            size: '7, 10.5, 12.5, 13',
            quantity: 15,
            department: 'Brands',
            category: 'YEEZY',
        }),
        new Product({
            _id: "5bedf448c14d7822b39d9d47",
            imagePath: 'https://i.ytimg.com/vi/aXZ-37_vma0/maxresdefault.jpg',
            title: 'YEEZY 500',
            description: 'Bringing back the dad shoes.',
            price: 280,
            color: 'Salt',
            size: '7.5, 10, 10.5, 11, 12.5, 13',
            quantity: 90,
            department: 'Brands',
            category: 'YEEZY',
        }),
        new Product({
            _id: "5bedf55bc14d7822b39d9d4b",
            imagePath: 'https://c1.staticflickr.com/2/1849/43628191834_55d5033815_b.jpg',
            title: 'Adidas Ultraboost',
            description: 'Adidas Ultraboost technology offers the best comfort in a shoe. Period.',
            price: 210,
            color: 'Red/Black',
            size: '7.5, 10, 10.5, 11, 12.5, 13',
            quantity: 20,
            department: 'Brands',
            category: 'Ultraboost',
        }),
        new Product({
            _id: "5bedf5eec14d7822b39d9d4e",
            imagePath: 'https://sneakernews.com/wp-content/uploads/2017/08/air-jordan-1-flyknit-bred-banned-on-feet-images-03.jpg',
            title: 'Nike Air Jordan 1',
            description: 'The iconic Nike AJ1.',
            price: 225,
            color: 'Red/Black',
            size: '7.5, 10, 10.5, 11, 12.5, 13',
            quantity: 20,
            department: 'Brands',
            category: 'Air Jordan',
        }),
        new Product({
            _id: "5bedf6b5c14d7822b39d9d51",
            imagePath: 'https://cdn.thesolesupplier.co.uk/2018/10/Off-White-x-Nike-Zoom-Fly-SP-Black-AJ4588-001-03.jpg',
            title: 'Nike x Off/White Zoom Fly',
            description: 'This upcoming shoe releases December 14th, 2018. Quantities extremely limited.',
            price: 180,
            color: 'Black',
            size: 'RELEASES 14/12/18',
            quantity: 0,
            department: 'Upcoming',
            category: '',
        }),
        new Product({
            _id: "5bedf720c14d7822b39d9d52",
            imagePath: 'https://i.imgur.com/dT60unq.jpg',
            title: 'Off/White AJ1',
            description: 'Are people even reading descriptions now.',
            price: 450,
            color: 'Off White',
            size: 'SOLD OUT',
            quantity: 0,
            department: 'Brands',
            category: 'Air Jordan',
        }),
        new Product({
            _id: "5bedf7ecc14d7822b39d9d55",
            imagePath: 'https://s3.amazonaws.com/solelinks/storage/releaseImages/3306/vans-x-nasa-sk8-hi-46-mte-dx-black-multicolor-vn0a3dq5uq31-mood-3.jpg',
            title: 'NASA x Vans',
            description: 'Had to show some love for the Vans.',
            price: 100,
            color: 'NASA',
            size: '7.5, 10, 10.5, 11, 12.5, 13',
            quantity: 12,
            department: 'Brands',
            category: 'Vans',
        })
    ];

for (let i = 0; i < products.length; i++) {
    products[i].save(function (e, r) {
        if (i === products.length - 1) {
            exit();
        }
    });
}

var variants =
    [
        new Variant({
            productID: '5bedf31cc14d7822b39d9d43',
            imagePath: 'https://sneakernews.com/wp-content/uploads/2018/03/adidas-yeezy-boost-350-v2-cream-restock-3.jpg',
            color: 'Cream',
            size: '7.5, 10, 10.5, 11, 12.5, 13',
            quantity: 10,
        }),
        new Variant({
            productID: '5bedf3b9c14d7822b39d9d45',
            imagePath: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F06%2Fkanye-west-adidas-yeezy-boost-700-wave-runner-mauve-release-date-00.jpg?q=75&w=800&cbr=1&fit=max',
            color: 'Mauve',
            size: '10',
            quantity: 5,
        }),
        new Variant({
            productID: '5bedf448c14d7822b39d9d47',
            imagePath: 'https://images.solecollector.com/complex/images/c_crop,h_501,w_1000,x_0,y_45/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_680/m16yafajealc11xxy2mm/adidas-yeezy-boost-500-utility-black-f36640',
            color: 'Utlity Black',
            size: 'SOLD OUT',
            quantity: 0,
        })
    ];

for (let i = 0; i < variants.length; i++) {
    variants[i].save(function (e, r) {
        if (i === variants.length - 1) {
            exit();
        }
    });
}

var newUser = new User({
    username: 'admin@admin.com',
    password: 'admin',
    fullname: 'Admin',
    admin: true
});
User.createUser(newUser, function (err, user) {
    if (err) throw err;
    console.log(user);
});

newUser = new User({
    username: 'david@voicu.me',
    password: 'david',
    fullname: 'David Voicu',
    admin: true
});
User.createUser(newUser, function (err, user) {
    if (err) throw err;
    console.log(user);
});

newUser = new User({
    username: 'colin.macpherson@carleton.ca',
    password: 'colin',
    fullname: 'Colin MacPherson',
    admin: true
});
User.createUser(newUser, function (err, user) {
    if (err) throw err;
    console.log(user);
});

function exit() {
    mongoose.disconnect();
}
