import React from "react";

const WebPlayerContext = React.createContext(null);

const WebPlayerProvider = ({ value, children }) => {
  return (
    <WebPlayerContext.Provider value={value}>
      {children}
    </WebPlayerContext.Provider>
  );
};

export const useWebPlayer = () => React.useContext(WebPlayerContext);

export default WebPlayerProvider;
