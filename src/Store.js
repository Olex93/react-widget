import React, { createContext, useReducer } from "react";
import Reducer from "./RootReducer";


//FOURLEAF INITIAL
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
//   headingFont: null,
//   //COLLAPSED CHATBOX VARS
//   chatBoxCollapsedBg: '#ffffff',
//   chatBoxCollapsedBorderColor: '#e1e8ec',
//   chatBoxCollapsedFontColor: '#002b49',
//   chatBoxCollapsedLogoColor: '#29ad9c',
//   //EXPANDED CHATBOX VARS
//   chatBoxExpandedTitleText:'Did you know?',
//   chatBoxExpandedTitleColor: '#ffffff',
//   chatBoxExpandedFrameTopBg: '#29ad9c',
//   chatBoxExpandedFrameBottomBg: '#e1e8ec',
//   chatBoxExpandedTextBgColor: '#ffffff',
//   chatBoxExpandedTextColor:'#002b49',
//   chatBoxExpandedTextHighlightColor: '#29ad9c',
//   chatBoxExpandedIconColor: '#f1563f',
//   chatBoxExpandedCo2Today: '5g CO2e',
//   chatBoxExpandedCo2Total: '1.96kg CO2e',
//   chatBoxExpandedStandFirstText: 'Your visit today has generated {today}, and total emissions from all your visits is {total}.',
//   chatBoxExpandedParagraphOneText: 'However much or little, all carbon matters to us which is why we’re offsetting whatever is accrued by our users.',
// };

const initialState = {
  widgetType: 'chatBox',
  authToken:'',
  ipAddress:'',
  totalPageResourceSize:'',
  totalSessionResourcSize:'',
  countryFromIp: '',
  cityFromIp: '',
  chatboxExpanded: false,
  bodyFont: 'Arial, Helvetica, sans-serif',
  headingFont: null,
  //COLLAPSED CHATBOX VARS
  chatBoxCollapsedBg: '#ffffff',
  chatBoxCollapsedBorderColor: '#001514',
  chatBoxCollapsedFontColor: '#221D23',
  chatBoxCollapsedLogoColor: '#B76914',
  //EXPANDED CHATBOX VARS
  chatBoxExpandedTitleText:'Did you know?',
  chatBoxExpandedTitleColor: '#ffffff',
  chatBoxExpandedFrameTopBg: '#B76914',
  chatBoxExpandedFrameBottomBg: '#001514',
  chatBoxExpandedTextBgColor: '#ffffff',
  chatBoxExpandedTextColor:'#221D23',
  chatBoxExpandedTextHighlightColor: '#B76914',
  chatBoxExpandedIconColor: '#6B0504',
  chatBoxExpandedCo2Today: '5g CO2e',
  chatBoxExpandedCo2Total: '1.96kg CO2e',
  chatBoxExpandedStandFirstText: 'Your visit today has generated {today}, and total emissions from all your visits is {total}.',
  chatBoxExpandedParagraphOneText: 'However much or little, all carbon matters to us which is why we’re offsetting whatever is accrued by our users.',
};


const Store = ({ children }) => {

  
  const [state, dispatch] = useReducer(Reducer, initialState);

  

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);

export default Store;
