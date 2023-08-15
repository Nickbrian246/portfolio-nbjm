import {FcAbout} from "react-icons/fc"
import {AiOutlineFolderOpen,AiFillContacts} from "react-icons/ai"

interface collapsableMenuOptions{
  nameEn:string,
  id:string,
  nameEs:string,
  to:string,
  icon:React.ReactNode
}

export const  collapsableMenuOptions:collapsableMenuOptions[]= [
  {
    nameEn:"About me",
    id:"aboutmelinks",
    nameEs:"Acerca de mi",
    to:"",
    icon:<FcAbout/>
  }, 
  {
    nameEn:"Projects ",
    id:"projectslinks",
    nameEs:"Proyectos",
    to:"#Projects",
    icon:<AiOutlineFolderOpen/>
  }, 
  {
    nameEn:"Contact",
    id:"contactlinks",
    nameEs:"Contacto",
    to:"#Contact",
    icon:<AiFillContacts/>
  }, 
  // {
  //   nameEn:"Spanish",
  //   id:"languageLink",
  //   nameEs:"Ingles",
  //   to:"",
  //   icon:<GrLanguage/>
  // }, 
]