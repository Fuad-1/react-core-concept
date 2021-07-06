import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit done <code>src/App.js</code> and save to reload.
//         </p>
//       </header>
//     </div>
//   );
// }
// ---------------------------------------------------------
 /*//first one->
function App() {

  var person =  {
    name: "Dr. mahfuz",
    job: "Singer"
  }
  var person2 = {
    name: "Eva Rahman",
    job: "Kokil Konthi"
  }

var style = {
  color: 'red',
  backgroundColor: 'yellow' 
  
}
  return (
    <div className="App">
      <header classNam e="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        
        <h1 className ="first" style={style}>My Heading: {2+3}</h1>
        <h1>Singer1: {person.name +" "+ person.job}</h1>
        <h3 style={{backgroundColor: 'cyan'}}>Singer2: {person2.name +" "+ person2.job}</h3>
        <p>My first React Paragraph</p>


      </header>
    </div>
  );
}
*/
//Second
/*function App() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>I am a React Developer</p>
          <Person name="Rubel Nayok"></Person>
          <Person></Person>

        </header>
      </div>
    );
  }

//create component:
////similar in look:
 //function Person(){
//   // style way-1
//   var PersonStyle ={
//     border: '2px solid yellow',
//     margin: '10px'
//   }
//   return (<div style={PersonStyle}>
//       <h1>Name: Fuad Hasan</h1>
//       <h3>hero of the Year</h3>
//     </div>)

  // //style way-2
  // return (<div style={{border: "2px solid red", margin: '10px'}}>
  //   <h1>Name: Fuad Hasan</h1>
  //   <h3>hero of the Year</h3>
  // </div>)  
  
}*/
//third
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>I am a React Developer</p>
        <Person name="Rubel Nayok" nayika="Mousumi"></Person>
        <Person name="Jashim" nayika="Shabana"></Person>
        <Person name="BurgerChain"></Person>
        <Person name="Pasta"></Person>

      </header>
    </div>
  );
}

//different in data:
function Person(props){  //props means properties parameter
    //style way-1
    var PersonStyle ={
      border: '2px solid yellow',
      margin: '10px'
    }
    //console.log(props);
  return (<div style={PersonStyle}>
      <h1>Nayok: {props.name}</h1>
      <h1>Nayika: {props.nayika}</h1>
      <h3>hero of the Year</h3>
    </div>)

}*/

//fourth
/*function App() {
  const nayoks= ['Anwar', 'Rubel', 'jashim', 'Bugerchain', 'pastaa']
  return (
    <div className="App">
      <header className="App-header">
        
        <p>I am a React Developer</p>
        <Person name="Rubel Nayok" nayika="Mousumi"></Person>
        <Person name="Jashim" nayika="Shabana"></Person>
        <Person name="BurgerChain"></Person>
        <Person name="Pasta"></Person>
        <Person name={nayoks[0]} nayika="Mousumi"></Person>

      </header>
    </div>
  );
}

//different in data:
function Person(props){  //props means properties parameter
    //style way-1
    var PersonStyle ={
      border: '2px solid yellow',
      margin: '10px'
    }
    //console.log(props);
  return (<div style={PersonStyle}>
      <h1>Nayok: {props.name}</h1>
      <h1>Nayika: {props.nayika}</h1>
      <h3>hero of the Year</h3>
    </div>)

}*/

//fifth
//function App() {
//   const products = [
//     {name: 'Photoshop', price: '$90.99'},
//     {name: 'Illustrator', price: '$60.99'},
//     {name: 'PDF Reader', price: '$6.99'}
//     ]
//     return (
//       <div className="App">
//         <header className="App-header">
//           <p>I am React Developer</p>
//          {/* <Product name={products[0].name} price={products[0].price}></Product>
//          <Product name={products[0].name} price={products[0].price}></Product>
//          <Product name={products[0].name} price={products[0].price}></Product> */}

//          <Product Product={products[0]}></Product>
//          <Product Product={products[1]}></Product>
//          <Product Product={products[2]}></Product>
//         </header>
//       </div>
//     );
//   }

//   function Product(props) {
//     const Style={
//       border: "1px solid gray",
//       borderRadius: '5px',
//       backgroundColor: 'lightgray',
//       height: '200px',
//       width: '200px',
//       float: 'left'
//     }

//     //Destructuring to access:
//     const {name,price} = props.Product;
//     //console.log(name,price);

//     return (
//       <div style={Style}>
//         <h3>{name} </h3>
//         <h4> {price}</h4>
//         <button>Buy Now</button>
//       </div>
//     )

//     //without Destructing to access:
//     /*console.log(props);
//       return (
//         <div style={Style}>
//           <h3>{props.Product.name} </h3>
//           <h4> {props.Product.price}</h4>
//           <button>Buy Now</button>
//         </div>
//       )*/
//   }

//sixth
// function App() {
//   //collecton of object
//   const products = [
//     {name: 'Photoshop', price: '$90.99'},
//     {name: 'Illustrator', price: '$60.99'},
//     {name: 'PDF Reader', price: '$6.99'},
//     {name: 'Premium', price: '$8.99'}
//     ]

//     //using map to access:
//     // const productNames = products.map(product=>product.name)
//     // console.log(productNames);

//     return (
//       <div className="App">
//         <header className="App-header">
//           <p>I am React Developer</p>

//         {/* create list for */}
//         <ul>
//         {
//           products.map(product => <li>{product.name}</li>)
//         }
//         </ul>

//         {/* alternative-1 */}
//         {
//         products.map(product =><Product Product={product}></Product>)
//         }

//         {/* alternative-1|^ */}

//          {/* <Product Product={products[0]}></Product>
//          <Product Product={products[1]}></Product>
//          <Product Product={products[2]}></Product> */}
         
//         </header>
//       </div>
//     );
//   }

//   function Product(props) {
//     const Style={
//       border: "1px solid gray",
//       borderRadius: '5px',
//       backgroundColor: 'lightgray',
//       height: '200px',
//       width: '200px',
//       float: 'left'
//     }

//     //Destructuring
//     const {name,price} = props.Product;
//     //console.log(name,price);

//     return (
//       <div style={Style}>
//         <h3>{name} </h3>
//         <h4> {price}</h4>
//         <button>Buy Now</button>
//       </div>
//     )

//   }

// seventh(32-10)
function App() {
  //collecton of object
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premium', price: '$8.99'}
    ]

    //using map to access:
    // const productNames = products.map(product=>product.name)
    // console.log(productNames);

    return (
      <div className="App">
        <header className="App-header">
          <p>I am React Developer</p>
          <Counter></Counter>

          <Users></Users>

        {/* create list for */}
        <ul>
        {
          products.map(product => <li>{product.name}</li>)
        }
        </ul>

        {/* alternative-1 */}
        {
        products.map(product =><Product Product={product}></Product>)
        }

        {/* alternative-1|^ */}

         {/* <Product Product={products[0]}></Product>
         <Product Product={products[1]}></Product>
         <Product Product={products[2]}></Product> */}
         
        </header>
      </div>
    );
  }
      //--------------------------------------------------------
// create new component
function Counter() {
// create state:
  const [count, setCount] = useState(10);
// arrow function declare
  // const handleIncrease = () => console.log('clicked');

  // //uisng multipleline 
  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };
  //using multipleline alternative shortcut:
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

    return(
      <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>

      </div>
    )
}
        // --------------------------------------------------

// create another component:
  function Users () {
    // create state using useState  
    const [users, setUsers] = useState([]);

    //useEffect used for data load
    useEffect(()=>{
      //console.log("calling Effect");
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));   //setUsers for data set
    }, [])

      return(
        <div>

          <h1>Dynamic Users: {users.length}</h1>
          {
           console.log(users)
          }
          {/* map for collection of object */}
          <ul>
            {
              users.map(user => <li>{user.name} {user.phone} {user.email}</li>)
            }
          </ul>
        </div>
      )
  }


  function Product(props) {
    const Style={
      border: "1px solid gray",
      borderRadius: '5px',
      backgroundColor: 'lightgray',
      height: '200px',
      width: '200px',
      float: 'left'
    }

    //Destructuring
    const {name,price} = props.Product;
    //console.log(name,price);

    return (
      <div style={Style}>
        <h3>{name} </h3>
        <h4> {price}</h4>
        <button>Buy Now</button>
      </div>
    )

  }




// -------------------------------------------------------
export default App;
