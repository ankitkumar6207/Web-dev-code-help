console.log('helo ji');


let rectangle= {
  length:1, // adding properties
  breadth:2,

  draw:function() // adding behaviour
  {
    console.log('this is a draw method');
  }

};
// let rectangle1= {
//     length:1, // adding properties
//     breadth:2,
  
//     draw:function() // adding behaviour
//     {
//       console.log('this is a draw method');
//     }
  
//   };
//   let rectangle2= {
//     length:1, // adding properties
//     breadth:2,
  
//     draw:function() // adding behaviour
//     {
//       console.log('this is a draw method');
//     }
  
//   };

//   so to create multiple Objects we will use factory function :
function createRectangle(len,bre) { // you can pass argument also
    let rectangle= {
        length:len, // adding properties
        breadth:bre,
      
        draw:function() // adding behaviour
        {
          console.log('this is a draw method');
        },
        run() //2nd way to create method inside the object
        {
            console.log("it is running");

        }
      
      };
      return rectangle;

}

let rectangleobj1 =  new createRectangle(4,5);
console.log(rectangleobj1.length); 

let rectangleobj2 = new createRectangle(6,7);
console.log(rectangleobj2.run());

// constructor functions 
function Rectangle3(len,bre) // here you can also give arguments;
{
    this.length=len; // this will refer to the current object.
    this.breadth=bre;
    this.draw=function()
    {
        console.log('drawing');
    }

}

let rectangleObject = new Rectangle3(4,5);
// we can add or remove the properties of object  

rectangleObject.color ='blue';
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject)

// what is the constructor of rectangleObject : Rectangle3
// what is the constructor of Rectangle3 :   inbuilt constructor Function()

// the below code is used to create the inbuilt Function
// this is not important  
let Rectangle2 = new Function(
    'length',
    'breadth',
    `this.length=length; 
    this.breadth=breadth;
    this.draw=function()
    {
        console.log('drawing');
    }`
)

let rect = new Rectangle2(3);
console.log(rect);
