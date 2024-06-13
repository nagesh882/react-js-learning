import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custome App !</h1>
    </div>
  )
}


// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Visit google'
// }

const anotherElement = (
  <h1>Hello React js</h1>
)

const anotherUser = 'jemmy'

const reactElement = React.createElement(
  'a', // first parameter is html tag name
  {href: 'https://google.com', target: '_blank'}, // second paramenter is an object of html attribute key and value
  'Click me to visit google ', // third parameter is children note
  anotherUser // fourth parameter is enject variable it is an evaluated expression
)



ReactDOM.createRoot(document.getElementById('root')).render(

  // <MyApp /> 
  // <App />
  // reactElement
  // anotherElement
  reactElement

)
