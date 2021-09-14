import React, { createContext, useReducer } from "react";
import Reducer from "./RootReducer";

const initialState = {
  widgetType: 'chatBox',
  authToken:'',
  ipAddress:'',
  totalPageResourceSize:'',
  totalSessionResourcSize:'',
  countryFromIp: '',
  cityFromIp: '',
  chatboxExpanded: true,
  bodyFont: 'Arial, Helvetica, sans-serif',
  headingFont: null,
  //COLLAPSED CHATBOX VARS
  chatBoxCollapsedBg: '#ffffff',
  chatBoxCollapsedBorderColor: '#e1e8ec',
  chatBoxCollapsedFontColor: '#002b49',
  chatBoxCollapsedLogoColor: '#29ad9c',
  //EXPANDED CHATBOX VARS
  chatBoxExpandedTitleText:'Did you know?',
  chatBoxExpandedTitleColor: '#ffffff',
  chatBoxExpandedFrameTopBg: '#29ad9c',
  chatBoxExpandedFrameBottomBg: '#e1e8ec',
  chatBoxExpandedTextBgColor: '#ffffff',
  chatBoxExpandedTextColor:'#002b49',
  chatBoxExpandedTextHighlightColor: '#29ad9c',
  chatBoxExpandedIconColor: '#f1563f',
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
