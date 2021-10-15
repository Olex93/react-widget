import React, { createContext, useReducer, useEffect } from "react";
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
  deviceType:'',
  sessionID: '',
  chatboxExpanded: false,
  bodyFont: '{"fontFamily": "Helvetica, sansSerif"}',
  titleFont: '{"fontFamily": "Helvetica, sansSerif", "fontWeight": "700", "fontSize": "32px"}',
  standFirstFont:'{"fontFamily": "Helvetica, sansSerif"}',
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
  chatBoxExpandedCo2Today: '5g',
  chatBoxExpandedCo2Total: '1.96kg',
  standFirst: 'Your visit today has generated {today}, and total emissions from all your visits is {total}.',
  body: 'However much or little, all carbon matters to us which is why we’re offsetting whatever is accrued by our users.',
  localStorageName:'ClickNeutral'
};


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
