import { useEffect, useRef } from "react";
import { useContext, useState } from "react";
import { Nav } from "./components/header";
import { Language } from "../../store";
import { card } from "./components/projects/utils";
import { CardProjects } from "./components/projects/projectsCard";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {MdOutlineEmail } from "react-icons/md"
import CV from "../../assets/NBJM-CV-ES.pdf";
import CV_EN from  "../../assets/NBJM-CV-EN.pdf";
import { DividerWithText } from "../../components/DividesWithText";


function Home() {
  const {language } = useContext(Language);
  const [isIntersectingProjects, setIsIntersectingProjects] = useState<boolean>(false)
  const [isIntersectingContact, setIsIntersectingContact] = useState<boolean>(false)
  const [isIntersectingAboutMe, setIsIntersectingAboutMe] = useState<boolean>(false)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const aboutMeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    
    const observerAboutMe = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersectingAboutMe(entry.intersectionRatio >= 0.75);
    }, { threshold: [0, 0.25, 0.4, 0.75, 1] });
    if (aboutMeRef.current) {
      observerAboutMe.observe(aboutMeRef.current);
    }
  
    const observerProjects = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersectingProjects(entry.isIntersecting);    
    }, { threshold: [0, 0.25, 0.5, 0.75, 1] });
    
    if (projectsRef.current) {
      observerProjects.observe(projectsRef.current);
    }
  
    const observerContact = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersectingContact(entry.intersectionRatio >= 0.25);
    }, { threshold: [0, 0.25, 0.4, 0.75, 1] });
    if (contactRef.current) {
      observerContact.observe(contactRef.current);
    }
  },);
  

  return (
    <>
      <header  className="
      w-full
      h-14
      border-b-[1px]
      border-gray-400
      bg-black
      p-0
      md:fixed
      md:top-0
      z-20">
        <Nav 
        aboutMe = {isIntersectingAboutMe}
        contact = {isIntersectingContact}
        projects = {isIntersectingProjects}/>
      </header>
      <article ref={aboutMeRef} className="max-full bg-[#343353] flex items-center justify-center  h-screen p-5 m-auto " >   {/* about me  */}
          <div className="md:w-2/4 h-screen  flex flex-col justify-center">
            <h2 className="font-semibold italic my-5 text-4xl text-white">
                {language ? "Hola, soy Nick Brian y soy Ingeniero Mecatrónico."
                :"Hello, my name is Nick Brian and I am a mechatronics engineer.  " }
            </h2>
            <p className="text-xl text-white">
              {language ? `Soy un ingeniero apasionado por el desarrollo web.¡El desarrollo web es donde mi corazón y mi ingenio se unen para dar vida a ideas digitales emocionantes!`
              : " I'm an engineer passionate about web development.Web development is where my heart and ingenuity come together to bring exciting digital ideas to life!." }
            </p>
            <a href={ language ?  CV :CV_EN} target="_blank" className="  my-14 w-44 h-14">
                <button className=" w-44 h-14 bg-red-700 rounded text-2xl text-white">
                {language ? "Ver Cv" : "View CV"}
                </button>
            </a>
          </div>
      </article>

      <section id="Projects" ref={projectsRef} className={`
      w-full
      my-20  p-5
      flex m-auto
      justify-around
      gap-4 flex-wrap
      transition-all ease-out duration-700
      ${isIntersectingProjects ? "opacity-1 " : " scale-[0.8]   opacity-0"}
      `}> {/**Proyectos */}
      <DividerWithText
        isIntersecting={isIntersectingProjects}
        TextEs="Proyectos"
        TextEn="Projects"
        language={language}
        />
        {card.map((item)=> { 
          return <CardProjects
          borderColor={item.borderColor}
          isResponsive ={item.isResponsive}
          dataForCarousel={item.dataForCarousel} 
            key={item.id}
            DescriptionTextEn={item.DescriptionTextEn}
            DescriptionTextEs={item.DescriptionTextEs}
            DescriptionTittleEnglish={item.DescriptionTittleEnglish}
            DescriptionTittleEs={item.DescriptionTittleEs}
            IsActiveAntDesign={item.IsActiveAntDesign}
            IsActiveCss={item.IsActiveCss}
            IsActiveExpressJs={item.IsActiveExpressJs}
            IsActiveHtml={item.IsActiveHtml}
            IsActiveJs={item.IsActiveJs}
            IsActiveMaterialUi={item.IsActiveMaterialUi}
            IsActiveMongoDb={item.IsActiveMongoDb}
            IsActiveNodeJs={item.IsActiveNodeJs}
            IsActiveReactJs={item.IsActiveReactJs}
            IsActiveReactRedux={item.IsActiveReactRedux}
            IsActiveReactRouter={item.IsActiveReactRouter}
            IsActiveTypeScript={item.IsActiveTypeScript}
            IsLinkToGitHub={item.IsLinkToGitHub}
            IsLinkToProject={item.IsLinkToProject}
            LinkChildrenTextEs={item.LinkChildrenTextEs}
            LinkChildrenTextToProjectEs={item.LinkChildrenTextToProjectEs}
            LinkGitHubIcon={item.LinkGitHubIcon}
            LinkToProjectIcon={item.LinkToProjectIcon}
            ListItemHtmlIcon={item.ListItemHtmlIcon}
            ListItemTechnologyAntDesignIcon={item.ListItemTechnologyAntDesignIcon}
            ListItemTechnologyCssIcon={item.ListItemTechnologyCssIcon}
            ListItemTechnologyExpressJsIcon={item.ListItemTechnologyExpressJsIcon}
            ListItemTechnologyJavaScriptIcon={item.ListItemTechnologyJavaScriptIcon}
            ListItemTechnologyMaterialUiIcon={item.ListItemTechnologyMaterialUiIcon}
            ListItemTechnologyMongoDbIcon={item.ListItemTechnologyMongoDbIcon}
            ListItemTechnologyNodeJsIcon={item.ListItemTechnologyNodeJsIcon}
            ListItemTechnologyReactJsIcon={item.ListItemTechnologyReactJsIcon}
            ListItemTechnologyReactReduxIcon={item.ListItemTechnologyReactReduxIcon}
            ListItemTechnologyReactRouterIcon={item.ListItemTechnologyReactRouterIcon}
            ListItemTechnologyTypeScript={item.ListItemTechnologyTypeScript}
            ListItemTechologiAntDesign={item.ListItemTechologiAntDesign}
            ListItemTechologiCSS={item.ListItemTechologiCSS}
            ListItemTechologiExpress={item.ListItemTechologiExpress}
            ListItemTechologiHtml={item.ListItemTechologiHtml}
            ListItemTechologiJavascript={item.ListItemTechologiJavascript}
            ListItemTechologiMaterialUi={item.ListItemTechologiMaterialUi}
            ListItemTechologiMongoDB={item.ListItemTechologiMongoDB}
            ListItemTechologiNodeJs={item.ListItemTechologiNodeJs}
            ListItemTechologiReactJs={item.ListItemTechologiReactJs}
            ListItemTechologiReactRedux={item.ListItemTechologiReactRedux}
            ListItemTechologiReactRouter={item.ListItemTechologiReactRouter}
            ListItemTechologiTypeScript={item.ListItemTechologiTypeScript}
            ListItemTechnologyTailwindIcon={item.ListItemTechnologyTailwindIcon}
            ListItemTechologiTailwind={item.ListItemTechologiTailwind}
            IsActiveTailwind={item.IsActiveTailwind}
            imgALT={item.imgALT}
            imgSrc={item.imgSrc}
            linkChildrenTextEn={item.linkChildrenTextEn}
            linkChildrenTextToProjectEn={item.linkChildrenTextToProjectEn}
            linkHrefGitHub={item.linkHrefGitHub}
            subTittleTechnologiesEn={item.subTittleTechnologiesEn}
            subTittleTechnologiesEs={item.subTittleTechnologiesEs}
            titleEn={item.titleEn}
            tittleEs={item.tittleEs}
            linkHrefToProject={item.linkHrefToProject}
            spanTittleEn={item.spanTittleEn}
            spanTittleEs={item.spanTittleEs}
            IsActiveJsonWebToken ={item.IsActiveJsonWebToken}
            ListItemTechnologyJsonWebToken ={item.ListItemTechnologyJsonWebToken}
            listItemTechologiJsonWebToken={item.listItemTechologiJsonWebToken}
            id={item.id}

            />
          })}
      </section>

      <footer id="Contact" ref={contactRef} className="w-full  my-20  p-5 mb-0 bg-[#333252]  flex justify-center m-auto h-1/2" >
        <section className="sm:max-w-7xl w-full flex flex-col gap-8  ">
        <DividerWithText  isIntersecting={isIntersectingContact} TextEs="Contacto" TextEn="Contact" language={language}/>
            <div className="flex-col w-fit
                          mt-2
                          items-center
                          gap-1
                          text-2xl
                          ">
                <ul>
                  <li><a href="https://www.linkedin.com/in/nick-jauregui-meneses-524256213/"  target="_blank" className="
                  flex items-center gap-1 text-sky-400
                  hover:underline
                  hover:cursor-pointer
                  ">
                    <AiFillLinkedin/>
                    LinkedIn
                    </a>
                    </li>
                  <li >
                    <a href="mailto:nicknbjm@gmail.com" className="
                          w-fit
                          mt-2
                          flex
                          text-cyan-300
                          items-center
                          gap-1
                          hover:underline
                          "
                          >
                            <MdOutlineEmail/>nicknbjm@gmail.com
                    </a>
                  </li>
                  <li>
                    <a 
                    href="https://github.com/Nickbrian246"  target="_blank" 
                    className="
                    flex items-center gap-1 text-white
                    hover:underline
                    hover:cursor-pointer
                    hover:text-black"
                    >
                      <AiFillGithub/>
                      GitHub
                      </a>
                    </li>
                </ul>
            </div>
        </section>
      </footer>
    </>
  );
}

export default Home;
