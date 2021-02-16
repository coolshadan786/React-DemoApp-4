import React from 'react'
import { add, sub, multi, div } from './components/Calculator.js'

import ReactDOM from 'react-dom'
// import { add, sub, multi, div } from './components/Calculator.js'
// import App from './App'
import Card from './components/Card/Cards'
import LinkData from './components/Card/LinkData'

// Calculator function
// function App() {
//   return (
//     <>
//       <ul>
//         <li> Sum of two number is {add(40, 4)}</li>
//         <li> Sub of two number is {sub(40, 4)}</li>
//         <li> Multi of two number is {multi(40, 4)}</li>
//         <li> Div of two number is {div(40, 3)}</li>
//       </ul>
//     </>
//   )
// }

// NetFlix function

// ReactDOM.render(
//   <h1 contentEditable="true"> My name is {name}</h1>,
//   document.getElementById('root')
//)

// ReactDOM.render(
//   // <>
//   //   <ul>
//   //     <li> Sum of two number is {add(40, 4)}</li>
//   //     <li> Sub of two number is {sub(40, 4)}</li>
//   //     <li> Multi of two number is {multi(40, 4)}</li>
//   //     <li> Div of two number is {div(40, 3)}</li>
//   //   </ul>
//   // </>,
//   <App />,
//   document.getElementById('root')
// )

// function Card(props) {
//   return (
//     <div className="cards">
//       <div className="cards">
//         <img src={props.imgsrc} alt="myPic" className="card__img" />
//         <div className="card__info">
//           <span className="card__category">{props.title} </span>
//           <h3 className="card__title"> {props.sname}</h3>
//           <a href={props.link} target="_blank">
//             <button>Watch Now</button>
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// function nCard(val) {
//   console.log(val)
//   return (
//     <Card
//       imgsrc={val.imgscr}
//       title={val.title}
//       sname={val.sname}
//       link={val.links}
//     />
//   )
// }

const favSeries = 'netflix'

const FavS = () => {
  if (favSeries === 'netflix') {
    return (
      <Card
        key={LinkData[1].id}
        imgsrc={LinkData[1].imgscr}
        title={LinkData[1].title}
        sname={LinkData[1].sname}
        link={LinkData[1].links}
      />
    )
  }
}

const App = () => (
  <>
    <h1>List of top Five Netflix Series of 2021 </h1>
    {/* 1st mtdh */}
    {/* <Card
      imgsrc="https://picsum.photos/seed/picsum/900/500"
      title="A Netflix Original Series"
      sname="Dark"
      link="https://picsum.photos/seed/picsum/900/500"
    />
    <Card
      imgsrc="https://picsum.photos/id/237/900/500"
      title="A Netflix Original Series"
      sname="Natural"
      link="https://picsum.photos/id/237/900/500"
    />
    <Card
      imgsrc="https://picsum.photos/900/500?grayscale"
      title="A Netflix Original Series"
      sname="Check Natural"
      link="https://picsum.photos/900/500?grayscale"
    /> */}
    {/* 2nd mtdh */}
    {/* <Card
          key={val.id}
      imgsrc={LinkData[0].imgscr}
      title={LinkData[0].title}
      sname={LinkData[0].sname}
      link={LinkData[0].links}
    />
    <Card
          key={val.id}
      imgsrc={LinkData[1].imgscr}
      title={LinkData[1].title}
      sname={LinkData[1].sname}
      link={LinkData[1].links}
    />
    <Card
          key={val.id}
      imgsrc={LinkData[2].imgscr}
      title={LinkData[2].title}
      sname={LinkData[2].sname}
      link={LinkData[2].links}
    /> */}
    {/* 3rd mtdh  */}
    {/* {LinkData.map(nCard)} */}
    {/* 4th mtdh */}
    {/* {LinkData.map((val) => {
      console.log(val)
      return (
        <Card
          key={val.id}
          imgsrc={val.imgscr}
          title={val.title}
          sname={val.sname}
          link={val.links}
        />
      )
    })} */}

    <FavS />
  </>
)

export default App
