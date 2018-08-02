////////////////////////////////////////////////////////////
//// Exploring JSX
// Challenge1 : Create a templateTwo var JSX expression using
// div
//  h1 -> My name
//  p -> Age :
//  p -> Location :
// Render templateTwo instead of template

// var user = {
//   name: 'Andrew',
//   age: 26,
//   location: 'Phili'
// };
// var templateTwo = (
// <div>
//   <h1>{user.name}</h1>
//   <p> Age : {user.age} </p>
//   <p> Location : {user.location} </p>
// </div>
// );

////////////////////////////////////////////////////////////
//// JSX Expressions
// Challenge2 : Create an app object title/subtitle
// use title/subtitle in the template
// render template

// var game = {
//   title : 'counter strike',
//   subtitle : 'global offensive'
// }

// var app = (
//   <div>
//     <h1>{game.title}</h1>
//     <p>{game.subtitle}</p>
//   </div>
// );

////////////////////////////////////////////////////////////
//// Conditional rendering in JSX
/// Challenge3 : Only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" unless "No options"
// var app = {
//   title : 'Indecision App',
//   subtitle : 'Put your life in the hands of a computer',
//   options: ['One', 'Two']
// };
// var template = ( 
//   <div>
//     <h1>{app.title}</h1> 
//     {app.subtitle && <p>Subtitle : {app.subtitle}</p>}
//     <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//     <ol>
//       <li>Item one</li>
//       <li>Item two</li>
//     </ol>
//   </div>
//   );

////////////////////////////////////////////////////////////
//// Events and Attributes
/// Challenge4 : Make button "-1" - setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"
// const minusOne = () => console.log("MINUSONE");
// const reset = () => console.log("RESET");

// const templateThree = (
//   <div>
//   <button onClick={minusOne}>-1</button> 
//   <br></br>
//   <button onClick={reset}>reset</button>
//   </div>
// )

////////////////////////////////////////////////////////////
//// Manual Data Binding
/// Challenge5 
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// }
// const minusOne = () => {
//   // subtract 1 from count - rerender
//   count--;
//   renderCounterApp();
// }
// const reset = () => {
//   count = 0;
//   renderCounterApp();
//   // set count to 0 a rerender
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button> 
//       <button onClick={minusOne}>-1</button> 
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot); 
// }
// renderCounterApp();

////////////////////////////////////////////////////////////
//// Manual Data Binding
/// Challenge6-1 : Create render function that renders the new JSX 
// Call it right away
// Call it after options array added to 
// var app = {
//   title : 'Indecision App',
//   subtitle : 'Put your life in the hands of a computer',
//   options: []
// };
// const onFormSubmit = (e) => {
//   e.preventDefault(); // prevents page refresh 

//   const option = e.target.elements.option.value; //this points to the element that the event started on

//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = '';
//     render();
//   }
  
// };

// const appRoot = document.getElementById('app');
  

// const render = () => {
//   var template = ( 
//     <div>
//       <h1>{app.title}</h1> 
//       {app.subtitle && <p>Subtitle : {app.subtitle}</p>}
//       <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//       <p>{app.options.length}</p>
//       <ol>
//         <li>Item one</li>
//         <li>Item two</li>
//       </ol>
//       <form onSubmit={onFormSubmit}>
//        <input type="text" name="option"/>
//        <button>Add Option</button>
//       </form>
//     </div>
//   );
  
//   ReactDOM.render(template, appRoot);
// };

// render();

/// Challenge6-2 : Create "Remove All" button above list
// On click -> wipe the array -> rerender
// var app = {
//   title : 'Indecision App',
//   subtitle : 'Put your life in the hands of a computer',
//   options: []
// };
// const onFormSubmit = (e) => {
//   e.preventDefault(); // prevents page refresh 

//   const option = e.target.elements.option.value; //this points to the element that the event started on

//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = '';
//     render();
//   } 
// };

// const onRemoveAll = () => {
//   app.options = [];
//   render();
// };
// const appRoot = document.getElementById('app');

// const render = () => {
//   var template = ( 
//     <div>
//       <h1>{app.title}</h1> 
//       {app.subtitle && <p>Subtitle : {app.subtitle}</p>}
//       <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//       <p>{app.options.length}</p>
//       <button onClick={onRemoveAll}>Remove All</button>
//       <ol>
//         <li>Item one</li>
//         <li>Item two</li>
//       </ol>
//       <form onSubmit={onFormSubmit}>
//        <input type="text" name="option"/>
//        <button>Add Option</button>
       
//       </form>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };
// render();
