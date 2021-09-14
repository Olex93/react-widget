const Reducer = (state, action) => {
  switch (action.type) {
    //GENERAL SETUP VARS
    case "SET_WIDGET_TYPE":
      return {
        ...state,
        widgetType: action.payload,
      };
    case "SET_AUTH_TOKEN":
      return {
        ...state,
        authToken: action.payload,
      };
    case "SET_IP_ADDRESS":
      return {
        ...state,
        ipAddress: action.payload,
      };
    case "SET_TOTAL_PAGE_SIZE":
      return {
        ...state,
        totalPageResourceSize: action.payload,
      };
    case "TOTAL_SESSION_RESOURCE_SIZE":
      return {
        ...state,
        totalSessionResourcSize: action.payload,
      };
    case "SET_LOCATION":
      return {
        ...state,
        countryFromIp: action.country,
        cityFromIp: action.city,
      };

    //CHATBOX VARS
    case "TOGGLE_CHATBOX":
      return {
        ...state,
        chatboxExpanded: action.payload,
      };
    case "COLLAPSED_CHATBOX_STYLE":
      return {
        ...state,
        chatBoxCollapsedBg: action.chatBoxCollapsedBg,
        chatBoxCollapsedBorderColor: action.chatBoxCollapsedBorderColor,
        chatBoxCollapsedFontColor: action.chatBoxCollapsedFontColor,
        chatBoxCollapsedLogoColor: action.chatBoxCollapsedLogoColor,
      };

    case "EXPANDED_CHATBOX_STYLE":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default Reducer;
