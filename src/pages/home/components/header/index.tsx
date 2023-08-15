import { useState } from "react"
import {AiOutlineMenu} from "react-icons/ai"
import { DropMenu } from "./components/dropMenu"
import {RxCross1} from "react-icons/rx"
import { collapsableMenuOptions } from "./components/dropMenu/list/OptionsList"
import { Language } from "../../../../store"
import {useContext} from "react"
import { GrLanguage } from "react-icons/gr"

interface Props {
  contact:boolean,
  aboutMe:boolean,
  projects:boolean,
}

const Nav = (props:Props) =>  {
  const {aboutMe,contact,projects} = props
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const {language, handleState } = useContext(Language);
  const handleLanguage = (id:string):void => {
    if(id==="languageLink"){
      handleState()
    }
  }

  return (
    <>
      <nav  className="w-full md:max-w-7xl  flex  h-full m-auto align-middle relative  " >
        <button
        onClick={()=>{setIsOpenMenu((prevState) => !prevState)}}
        className = {`
        w-10
        h-full
        flex
        justify-center
        content-center
        flex-wrap
        text-2xl
        md:hidden
        ${isOpenMenu ?" text-red-800 font-bold " :" text-slate-50"}`}>
          {isOpenMenu ? <RxCross1/>:<AiOutlineMenu />}
        </button>
        {isOpenMenu && (
          <DropMenu setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu}/>
        )}
        <ul className=" w-full justify-around gap-7 hidden md:flex" >
        {collapsableMenuOptions.map((item) => (
          <li
          key={item.id}
          className="flex align-middle hover:cursor-pointer"
          >
            <a
            href={item.to}
            className={`flex self-center gap-2  text-2xl
            ${(aboutMe && item.id==="aboutmelinks") ? "text-white"
            :(projects && item.id==="projectslinks") ? "text-white"
            :(contact && item.id==="contactlinks") ? "text-white" : "text-slate-500" }`}
            >
              <span className="self-center">{item.icon}</span>
              {language && item.nameEs ||item.nameEn }
            </a>
          </li>
        ))}
        <button className="flex items-center gap-2   p-2 m-1 rounded-md text-2xl bg-yellow-400 " onClick={()=>{handleLanguage("languageLink")}}>
          <span className="text-white"><GrLanguage/></span>
          <p className="text-white">{language ? "English (En) " : "Español (Es)"}</p>
        </button>
        </ul>


        
      </nav>

    </>
  )
}
export {Nav}
"text-slate-500"