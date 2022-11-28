import {useContext} from 'react'
import { BarsContext } from '../context/BarsProvider'

const useBars = () => {
    const barsObj = useContext(BarsContext);

  return barsObj;
}

export default useBars