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
