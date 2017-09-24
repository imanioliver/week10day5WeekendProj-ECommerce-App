const homes = {
    "blueprints": [
        {
            "id":1,
            "name":"Colonial",
            "layout":{
                "name":"Colonial",
                "livingArea":"closed",
                "bedrooms": 2,
                "bathrooms": 2,
            },
            "features":{
                "floors": 2,
                "bedroom":"lofted",
                "outdoorSpace": false,
                "laundryArea": true
            },
            "constructionMonths":3,
            "dimensionsInFeet":{
                "lotLength":50,
                "lotWidth":10,
                "height":12
            },
            "photos": {
                "interior":"https://i.pinimg.com/736x/ce/70/4a/ce704a66fd59c00566f2ee50da5ff5ab--battle-ground-washington-tiny-house-interiors.jpg",
                "exterior":"https://tinyliving.com/wp-content/uploads/2017/05/colonial-blue-1.jpg"
            },
            "basePrice": {
                "number": 13000,
                "string": "13,000"

            }
        },
        {
            "id":2,
            "name":"Ranch Style",
            "layout":{
                "name":"Ranch Style",
                "livingArea":"open",
                "bedrooms": 2,
                "bathrooms": 1
            },
            "features":{
                "floors": 2,
                "bedroom":"lofted",
                "outdoorSpace": true,
                "laundryArea": true
            },
            "constructionMonths":7,
            "dimensionsInFeet":{
                "lotLength":40,
                "lotWidth":10,
                "height":12

            },
            "photos": {
                "interior":"https://i.pinimg.com/736x/ce/70/4a/ce704a66fd59c00566f2ee50da5ff5ab--battle-ground-washington-tiny-house-interiors.jpg",
                "exterior":"http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2017/03/Amplified-Tiny-Houselead.jpg"
            },
            "basePrice": {
                "number": 12000,
                "string": "12,000"

            }
        },
        {
            "id":3,
            "name":"Lofted Row Home",
            "layout":{
                "name":"Ranch Style",
                "livingArea":"open",
                "bedrooms": 2,
                "bathrooms": 1
            },
            "features":{
                "floors": 2,
                "bedroom":"lofted",
                "outdoorSpace": true,
                "laundryArea": true
            },
            "constructionMonths":7,
            "dimensionsInFeet":{
                "lotLength":30,
                "lotWidth":10,
                "height":12

            },
            "photos": {
                "interior":"https://i.pinimg.com/736x/6d/12/8f/6d128fa28708225edbdc4593622f3ec4--tiny-house-blog-tiny-house-on-wheels.jpg",
                "exterior":"http://designszone.info/wp-content/uploads/2017/02/ideas-19-little-homes-on-tiny-house-walk-through-exterior-tiny-house-basics.jpg"
            },
            "basePrice": {
                "number": 10000,
                "string": "10,000"

            }
        }
    ],

    "roofs":[
        {
            "id":1,
            "type":"Flat",
            "img":"https://i.pinimg.com/736x/97/07/06/9707062b6700d1b0361d851603c2fabc--surf-shack-beach-shack.jpg"

        }, {
            "id":2,
            "type":"Vaulted",
            "img":"https://i1.wp.com/www.tinyhouseliving.com/wp-content/uploads/2016/08/Scandinavian-Modern-Tiny-House-by-Simon-Steffensen-exterior.jpg?fit=1200%2C800&resize=350%2C200"
        }, {
            "id":3,
            "type":"Solar Paneled",
            "img":"http://frontierdc.com/images/solar2.jpg?crc=4238318932"
        }
    ],

    "Shells" : [

        {
            "id":1, "material":"Brick", "img": "http://tinyhousetalk.com/wp-content/uploads/Three-Levels-by-Studioata-01-600x597.jpg", "addedPrice":3000
        },
        {
            "id":2, "material":"Wood", "img": "http://www.theshelterblog.com/wp-content/uploads/2015/07/millertinyhouse-048-edit1.jpg", "addedPrice":2000
        },
        {
            "id":3, "material":"Standard Shipping Container", "img": "http://tinyhousetalk.com/wp-content/uploads/Freedom-Shipping-Container-Tiny-House-001.jpg", "addedPrice":200
        }

    ]
}



export default homes;
