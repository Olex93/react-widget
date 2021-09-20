import React, { createContext, useReducer, useEffect, useState } from "react";
// import Reducer from "./RootReducer";


// FOURLEAF INITIAL
const initialState = {
  domainID:'',
  previewMode: true,
  placementID: 3,
  collapsedStyleID:1,
  widgetType: 'chatBox',
  authToken:'',
  ipAddress:'',
  totalPageResourceSize:'',
  totalSessionResourcSize:'',
  countryFromIp: '',
  cityFromIp: '',
  chatboxExpanded: false,
  bodyFont: 'Arial, Helvetica, sans-serif',
  titleFont: "Arial, Helvetica, sans-serif",
  standFirstFont:"Arial, Helvetica, sans-serif",
  collapsedBackgroundColor: '#ffffff',
  lowerFrameColor: '#e1e8ec',
  collapsedForegroundColor: '#002b49',
  logoColor: '#29ad9c',
  showTitle:true,
  title:'Did you know?',
  titleColor: '#ffffff',
  upperFrameColor: '#29ad9c',
  expandedBackgroundColor: '#ffffff',
  standFirstForegroundColor: '#002b49',
  bodyForegroundColor:'#002b49',
  standFirstAccentColor: '#29ad9c',
  iconColor: '#f1563f',
  chatBoxExpandedCo2Today: '5g CO2e',
  chatBoxExpandedCo2Total: '1.96kg CO2e',
  standFirst: 'Your visit today has generated {today}, and total emissions from all your visits is {total}.',
  body: 'However much or little, all carbon matters to us which is why we’re offsetting whatever is accrued by our users.',
  localStorageName:'ClickNeutral'
};

// const initialState = {
//   widgetType: 'chatBox',
//   authToken:'',
//   ipAddress:'',
//   totalPageResourceSize:'',
//   totalSessionResourcSize:'',
//   countryFromIp: '',
//   cityFromIp: '',
//   chatboxExpanded: false,
//   bodyFont: 'Arial, Helvetica, sans-serif',
//   titleFont: 'Verdana, Geneva, Tahoma, sans-serif',
//   standFirstFont:"Arial, Helvetica, sans-serif",
//   //COLLAPSED CHATBOX VARS
//   collapsedBackgroundColor: '#ffffff',
//   lowerFrameColor: '#001514',
//   collapsedForegroundColor: '#221D23',
//   logoColor: '#B76914',
//   //EXPANDED CHATBOX VARS
//   title:'Did you know?',
//   titleColor: '#ffffff',
//   upperFrameColor: '#B76914',
//   lowerFrameColor: '#001514',
//   expandedBackgroundColor: '#ffffff',
//   bodyForegroundColor:'#221D23',
//   standFirstAccentColor: '#B76914',
//   iconColor: '#6B0504',
//   chatBoxExpandedCo2Today: '5g CO2e',
//   chatBoxExpandedCo2Total: '1.96kg CO2e',
//   standFirst: 'Your visit today has generated {today}, and total emissions from all your visits is {total}.',
//   body: 'However much or little, all carbon matters to us which is why we’re offsetting whatever is accrued by our users.',
// };

let storageName = '';


let reducer = (state, newState) => {
  if (newState === null) {
    localStorage.removeItem(`state_${storageName}`);
    return initialState;
  }
  return { ...state, ...newState };
};


const Context = createContext();

function Store(props) {

  storageName = (props.domElement.dataset["productkey"])

  const localState = JSON.parse(localStorage.getItem(`state_${storageName}`));

  const [state, dispatch] = useReducer(reducer, localState || initialState);



  useEffect(() => {
    localStorage.setItem(`state_${storageName}`, JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={[ state, dispatch ]}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, Store };


//BELOW WORKS WITH NO PERSISTANCE FOR STATE
// const Store = ({ children }) => {
  
//   const [state, dispatch] = useReducer(Reducer, initialState);


//   return (
//     <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
//   );
// };

// export const Context = createContext(initialState);

// export default Store;
