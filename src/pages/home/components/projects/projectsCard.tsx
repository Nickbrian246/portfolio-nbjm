import { useContext, useState } from "react";
import { Divider } from "../../../../components/Divider";
import { Card } from "./interfaces";
import React from "react";
import { Language } from "../../../../store";
import { TextShortedNextWhiteSpace } from "../../utils";
import { Carousel } from "../../../../components/Carousel";

import {MdDoNotDisturbAlt} from "react-icons/md";
import {AiOutlineCheckCircle} from "react-icons/ai"

const CardProjects = (props:Card) => {
  const {
    isResponsive,
    dataForCarousel,
    DescriptionTextEn,
    DescriptionTextEs,
    DescriptionTittleEnglish,
    DescriptionTittleEs,
    IsActiveAntDesign,
    IsActiveCss,
    IsActiveExpressJs,
    IsActiveHtml,
    IsActiveJs,
    IsActiveMaterialUi,
    IsActiveMongoDb,
    IsActiveReactJs,
    IsActiveReactRedux,
    IsActiveReactRouter,
    IsActiveTypeScript,
    IsLinkToGitHub,
    IsLinkToProject,
    LinkChildrenTextEs,
    LinkChildrenTextToProjectEs,
    LinkGitHubIcon,
    LinkToProjectIcon,
    ListItemHtmlIcon,
    ListItemTechnologyAntDesignIcon,
    ListItemTechnologyCssIcon,
    ListItemTechnologyExpressJsIcon,
    ListItemTechnologyJavaScriptIcon,
    ListItemTechnologyMaterialUiIcon,
    ListItemTechnologyMongoDbIcon,
    ListItemTechnologyNodeJsIcon,
    ListItemTechnologyReactJsIcon,
    ListItemTechnologyReactReduxIcon,
    ListItemTechnologyReactRouterIcon,
    ListItemTechnologyTypeScript,
    imgALT,
    imgSrc,
    linkChildrenTextEn,
    linkChildrenTextToProjectEn,
    linkHrefGitHub,
    subTittleTechnologiesEn,
    subTittleTechnologiesEs,
    titleEn,
    tittleEs,
    linkHrefToProject,
    spanTittleEn,
    spanTittleEs,
    IsActiveTailwind,
    ListItemTechnologyTailwindIcon,
    IsActiveJsonWebToken,
    ListItemTechnologyJsonWebToken,

    } = props
  const {language } = useContext(Language);
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false);
  const[isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };


  const addLineBreaks = (text:string)=> {
      return text.split('<br /><br />').map((paragraph, index) => (
        <React.Fragment key={index}>
          {paragraph}
          <br /><br />
        </React.Fragment>
      ));
  };



  const titleStyles = "text-xlW  leading-7 font-medium"
  return(
    <>
      
        <div  className={` 
        max-w-md
        border-2
        rounded-lg
        border-[#333252]
        sm:p-4
        p-1 
        h-fit
        ${isOpenModal ? "relative" : "static  "}`}
        > {/** contenedor de la carta */}
          <div className="flex justify-center">
          <h2 className="text-2xl mb-3"  >{ /**titulo */
            language ? tittleEs : titleEn}
            {(spanTittleEn  || spanTittleEs) && (
              <span
              className="text-slate-500"
              >
                {language ? spanTittleEs : spanTittleEn}
              </span>
            )}
          </h2>
          </div>

          <div className=" flex-col " >{/**Imagen y tecnologias */}
              <a target="_self" href="#carouselModal">
              <picture
              onClick={()=>{setIsOpenModal(true)}} 
              className=" max-h-56 cursor-pointer ">
                <img className={`
                border-2
                rounded-md
                max-w-[400px]
                max-h-56
                m-auto
                hover:scale-110
                transition-all
                duration-500`}
                src={imgSrc}
                alt={imgALT}/>
              </picture>
              </a>
              <div className="mt-3">
                <p className={titleStyles}>{
                language ? subTittleTechnologiesEs
                :subTittleTechnologiesEn}
                </p>
                  <div className="flex h-auto flex-wrap gap-2 "> {/**Listas de tecnologias */}
                      <ul  className="  flex-col h-auto ">
                    {IsActiveJs && (
                        <li
                        className="  flex  gap-1 items-center text-base text-amber-400 font-medium"
                        >
                          <span>{ListItemTechnologyJavaScriptIcon}</span>
                        JavaScript.
                        </li>
                    )}
                        {IsActiveTypeScript && (
                        <li
                        className="  flex  gap-1 items-center text-base text-blue-700 font-medium"
                        >
                          <span>{ListItemTechnologyTypeScript}</span>
                          TypeScript
                        </li>
                      )}
                      {IsActiveHtml && (
                        
                        <li
                        className="  flex  gap-1 items-center text-base text-orange-500 font-medium"
                        >
                          <span>{ListItemHtmlIcon}</span>
                          Html
                        </li>
                      )}

                      {IsActiveCss && (
                        <li
                        className="  flex  gap-1 items-center text-base text-blue-400 font-medium"
                        >
                          <span>{ListItemTechnologyCssIcon}</span>
                        Css.
                        </li>
       
                      )}
                      </ul>
         
                      <ul className="  flex-col h-auto  ">
                          {IsActiveReactJs && (
                              <li
                              className="  flex  gap-1 items-center text-base text-cyan-500 font-medium"
                              >
                                <span>{ListItemTechnologyReactJsIcon}</span>
                                React js.
                              </li>
                          )}
                          
                          {IsActiveReactRedux && (
                              <li
                              className="  flex  gap-1 items-center text-base text-violet-600 font-medium"
                              >
                                <span>{ListItemTechnologyReactReduxIcon}</span>
                                React Redux
                              </li>
                          )

                          }
                        {IsActiveReactRouter && (
                          <li
                          className="  flex  gap-1 items-center text-base text-red-500 font-medium"
                          >
                            <span>{ListItemTechnologyReactRouterIcon}</span>
                          React Router
                          </li>
                        )
                        }

                      </ul>
                      <ul  className="  flex-col h-auto  ">
                        {IsActiveExpressJs && ( 
                          <li
                          className="  flex  gap-1 items-center text-base text-lime-500 font-medium"
                          >
                            <span>{ListItemTechnologyNodeJsIcon}</span>
                            Node js.
                          </li>
                        )}
                        {IsActiveExpressJs && (
                            <li
                            className="  flex  gap-1 items-center text-base text-slate-400 font-medium"
                            >
                            <span>{ListItemTechnologyExpressJsIcon}</span>
                            Express Js
                            </li>
                        )

                        }
                        {IsActiveMongoDb && (
                          
                          <li
                          className="  flex  gap-1 items-center text-base text-green-600 font-medium"
                          >
                            <span>{ListItemTechnologyMongoDbIcon}</span>
                          MongoDB
                          </li>
                        )}
                        {IsActiveJsonWebToken && (
                            <li
                            className="  flex  gap-1 items-center text-base text-slate-400 font-medium"
                            >
                            <span>{ListItemTechnologyJsonWebToken}</span>
                            JsonWebToken
                            </li>
                        )

                        }

                      </ul>
                      <ul className="  flex-col h-auto  ">
                      {IsActiveMaterialUi && (
                      <li
                      className="  flex  gap-1 items-center text-base text-blue-700 font-medium"
                      >
                        <span>{ListItemTechnologyMaterialUiIcon}</span>
                        Material UI
                      </li>
                      )}

                      {IsActiveAntDesign && (
                        <li
                        className="  flex  gap-1 items-center text-base text-red-600 font-medium"
                        >
                          <span>{ListItemTechnologyAntDesignIcon}</span>
                          Ant Design
                        </li>
                      )}
                      {IsActiveTailwind && (
                        <li
                        className="  flex  gap-1 items-center text-base text-cyan-400 font-medium"
                        >
                          <span>{ListItemTechnologyTailwindIcon}</span>
                          Tailwind Css
                        </li>
                      )}
            

                      </ul>
                  </div>
            </div>
          </div>
          <Divider bg="bg-slate-500" height="3" width="full" />
          <div  className={`overflow-hidden transition-height ease-in-out duration-1000 ${!showFullDescription ? "h-auto" : "h-auto"}`}> {/**Descripcion */}
            <h2  className={titleStyles}>{
            language ? DescriptionTittleEs
            : DescriptionTittleEnglish
            }
            </h2>

            {language ? (<p className="text-justify">{!showFullDescription?  TextShortedNextWhiteSpace(DescriptionTextEs).replace(/<br\s*\/?>/g, ' ') : addLineBreaks(DescriptionTextEs)}</p>)
            :(<p className="text-justify">{!showFullDescription?  TextShortedNextWhiteSpace(DescriptionTextEn).replace(/<br\s*\/?>/g, ' ') : addLineBreaks(DescriptionTextEn)}</p>)}
            
            
            {(DescriptionTextEs.length > 150 || DescriptionTextEn.length > 150 )  && (
              <button className="text-blue-600" onClick={toggleDescription}>
              {language ? (!showFullDescription ? 'Ver más...' : 'Ver menos')
              :(!showFullDescription ? 'Show more...' : 'Show less') }
              </button>
            )}
          </div>
                  {/*Enlaces*/}
            {IsLinkToGitHub && (
                      <a 
                      href={linkHrefGitHub}
                      target="_blank"
                      className="
                      w-fit
                      mt-2
                      flex
                      items-center
                      gap-1
                      text-base
                      hover:underline
                      hover:scale-110
                      transition-all
                      
                      "
                      >
                        {LinkGitHubIcon}
                        {language ? LinkChildrenTextEs : linkChildrenTextEn}
                      </a>
            )}
            {IsLinkToProject && (
                      <a 
                      href={linkHrefToProject}
                      target="_blank"
                      className="
                      w-fit
                      mt-2
                      flex
                      items-center
                      gap-1
                      text-base
                      hover:underline
                      hover:scale-110
                      transition-all
                      "
                      >
                        {LinkToProjectIcon}
                        {language ? LinkChildrenTextToProjectEs : linkChildrenTextToProjectEn}
                      </a>
            )}
            <span 
            className={`
            flex
            justify-start
            items-center
            gap-1
            text-base
          ${isResponsive ? "text-cyan-500" : "text-red-600" }`
        }
          
          >
          {isResponsive ?  <AiOutlineCheckCircle/> : <MdDoNotDisturbAlt/>}
          { language ? (isResponsive ? "Es responsivo" : "No es responsivo" ): (isResponsive ? "It's responsive" : "It's not responsive")}
          </span>


        </div>
        {isOpenModal && (
          <div
          id="carouselModal"
          className={`
          w-full
          flex
          justify-center
          items-center
          absolute
          z-30
          left-0
          h-full
          backdrop-blur-sm`}
          >

          <div 
          >

            <Carousel 
            dataForCarousel = {dataForCarousel}
            setIsOpenModal={setIsOpenModal}
            />
          </div>
          </div>
        )}
    </>
  )
};

export {CardProjects}