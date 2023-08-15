import {createContext} from "react"
import { LanguageContext } from "./interface"

export const Language = createContext<LanguageContext>({ 
  language:false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleState: ():void => {},
})

