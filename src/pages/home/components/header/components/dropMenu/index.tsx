import { collapsableMenuOptions } from "./list/OptionsList";
import { useContext } from "react";
import { Language } from "../../../../../../store";
import { MdLanguage } from "react-icons/md";

interface Props {
  setIsOpenMenu:React.Dispatch<React.SetStateAction<boolean>>;
  isOpenMenu: boolean
}

const DropMenu = (props:Props) => {
  const {isOpenMenu,setIsOpenMenu} = props
  const {language, handleState } = useContext(Language);
  const handleLanguage = (id:string):void => {
    if(id==="languageLink"){
      handleState()
    }
  }

  return  (
    <>
<section className={`
border-b-[1px]
  w-full
  h-64
  bg-[#333252]
  flex
  flex-col
  absolute
  p-5
  pt-2
  rounded-b-lg
  transition-all
  duration-500
  ease-in 
  md:hidden
  ${isOpenMenu ? "top-full " : "top-[-400px]"}
`}
>
{/* 
      <div className=" flex-1  flex justify-start align-middle ">
        <button onClick={()=> {setIsOpenMenu((prevState) => !prevState)}} className="text-2xl hover:text-red-600  w-ful">
          <FaArrowRight/> 
        </button>
      </div> */}
      {collapsableMenuOptions.map((item) => (
        <div className=" flex-1  flex justify-start " key={item.id}>
          <a href={item.to}>
          <button onClick={()=> { handleLanguage(item.id) ,setIsOpenMenu(prevState => ! prevState)}} className="text-2xl flex justify-items-start w-full text-center gap-1">
            <div className="pt-1 ">
              <p className="text-white">{item.icon}</p>
            </div>
            <p className="text-2xl text-white">{(!language && item.nameEn ) || item.nameEs }</p>
          </button>
          </a>
        </div>
      )
      )}
        <button className="flex text-2xl text-yellow-400 items-center gap-2  " onClick={()=>{handleLanguage("languageLink")}}>
        <span >
          <MdLanguage/>
        </span>
          <p className="">{language ? "English (En) " : "Español (Es)"}</p> 
        </button>

    </section>

    </>
  )
}

export {DropMenu}