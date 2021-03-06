import React, { useContext, useState, createContext } from "react";
import ReactDOM from "react-dom";

const initialState = 10;
// creating context
const context = createContext({ state: 40 }); //  { state: 40 } is the default value if provider is missing




const App = () => {
  const [state, setState] = useState(initialState);
  const obj = { state: state, setState: setState };
  // const obj = "nice";
  // const obj = { state, setState }; // shorthand

  // Provider (prodvies) - publisher - value - data
  return (
    <context.Provider value={obj}>
      {/* value={anyDatatype} */}
      <div>
        {/* <MyChild state={state} setState={setState} /> */}
        <MyChild />
      </div>
    </context.Provider>
  );
};

const MyChild = () => {
    return (
      <div>
        <MyGrandChild />
      </div>
    );
  };


const MyGrandChild = () => {
    // useContext - subscribe
  
    // value={obj} - passed in App
    const { state, setState } = useContext(context);
    // const msg = useContext(context);
  
    console.log({ state, setState });
  
    const increment = () => {
      setState(state + 1);
    };
  
    return (
      <div>
        <button onClick={increment}>increment</button>
        {state}
      </div>
    );
  };


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//  App -> MyChild (props) -> MyGrandChild (props)
// props drilling


// 1. Creating - createContext
// 2. Publisher - provider - context.Provider
// 3. Subscriber - useContext - useContext(context)



// const MyGrandChild = ({ state, setState }) => {
//   const increment = () => {
//     setState(state + 1);
//   };

//   return (
//     <div>
//       <button onClick={increment}>increment</button>
//       {state}
//     </div>
//   );
// };

// const MyChild = ({ state, setState }) => {
//   // Only reason that state, setState - is taken in
//   //  - because MyGrandChild uses it
//   // MyChild does not use state
//   return (
//     <div>
//       <MyGrandChild state={state} setState={setState} />
//     </div>
//   );
// };