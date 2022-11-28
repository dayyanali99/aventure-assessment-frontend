import {createContext, useState} from "react";

export const BarsContext = createContext({});


const BarsProvider = ({children}) => {
  const [isMuted, setIsMuted] = useState(true);

  const BarsObj = {
    isMuted,
    setIsMuted
  }

  return (
    <BarsContext.Provider value={BarsObj}>
      {children}
    </BarsContext.Provider>
  )
}

export default BarsProvider