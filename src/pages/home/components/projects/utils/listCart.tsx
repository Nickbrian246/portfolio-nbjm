import pointOfSaleHomePicture from  "../../../../../assets/pointOfSale/home.png"
import { AiFillHtml5,AiOutlineAntDesign, AiOutlineGithub } from "react-icons/ai";
import {FiNavigation} from "react-icons/fi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiReactrouter,
  SiTypescript,
  SiTailwindcss,
  SiJsonwebtokens,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

import { Card } from "../interfaces";
import {
  pointOfSaleData,
  fiananzasApp,
  mercadoLibreClonData,
} from "../../../../../utils/carouselData";
import fiananzasAppImage from "../../../../../assets/finanzasApp/home finanzas app.webp";
import mercadoLibreImage from "../../../../../assets/mercadoLibreClon/home1.webp";




export const card: Card[] = [
  {
    id:"proyectoPuntoDeVENTA-225512",
    titleEn:"Point of sale",
    tittleEs:"Punto de venta",
    spanTittleEs:" (Proyecto FullStack )",
    spanTittleEn:" (FullStack Project)",
    dataForCarousel:pointOfSaleData,
    isResponsive:false,
    borderColor:"#e8f3f3",
    

    imgSrc:pointOfSaleHomePicture,
    imgALT:"point Of Sale project", 

    subTittleTechnologiesEs:"Tecnologías usadas en este proyecto",
    subTittleTechnologiesEn:"Technologies used in the project",

    IsActiveJs:false,
    ListItemTechologiJavascript:"Javascript",
    ListItemTechnologyJavaScriptIcon:<SiJavascript/>,

    IsActiveJsonWebToken:true,
    listItemTechologiJsonWebToken:"json webToken",
    ListItemTechnologyJsonWebToken:<SiJsonwebtokens/>,

    IsActiveHtml:true,
    ListItemTechologiHtml:"Html",
    ListItemHtmlIcon:  <AiFillHtml5/>,

    IsActiveCss:true,
    ListItemTechologiCSS:"Css",
    ListItemTechnologyCssIcon:<SiCss3/>,

    IsActiveReactJs:true,
    ListItemTechologiReactJs:"React Js",
    ListItemTechnologyReactJsIcon:<FaReact/>,

    IsActiveReactRedux:true,
    ListItemTechologiReactRedux:"React Redux",
    ListItemTechnologyReactReduxIcon:<TbBrandRedux/>,

    ListItemTechologiReactRouter:"React Router",
    ListItemTechnologyReactRouterIcon:<SiReactrouter/>,
    IsActiveReactRouter:true,

    IsActiveNodeJs:true,
    ListItemTechologiNodeJs:"Node Js",
    ListItemTechnologyNodeJsIcon:<FaNodeJs/>,

    IsActiveExpressJs:true,
    ListItemTechologiExpress:"Expesss Js",
    ListItemTechnologyExpressJsIcon:<SiExpress/>,

    IsActiveMongoDb:true,
    ListItemTechologiMongoDB:"Mongo DB",
    ListItemTechnologyMongoDbIcon:<SiMongodb/>,

    IsActiveMaterialUi:true,
    ListItemTechologiMaterialUi:"MaterialUI",
    ListItemTechnologyMaterialUiIcon:<SiMui/>,

    IsActiveAntDesign:false,
    ListItemTechologiAntDesign:"Ant Design",
    ListItemTechnologyAntDesignIcon:<AiOutlineAntDesign/>,

    IsActiveTailwind:false,
    ListItemTechologiTailwind:"Tailwind",
    ListItemTechnologyTailwindIcon:<SiTailwindcss/>,

    IsActiveTypeScript:true,
    ListItemTechologiTypeScript:"TypeScript",
    ListItemTechnologyTypeScript:  <SiTypescript/>,

    DescriptionTittleEs:"Descripción",
    DescriptionTittleEnglish:"Description",

    DescriptionTextEs:`
    En este proyecto, puedes realizar el registro (calcular precio por porcentaje), actualización y eliminación de productos. Además, puedes registrar ventas y generar informes de ventas para una fecha seleccionada por el usuario. Los informes pueden ser presentados en formato gráfico para comparar las ventas entre diferentes días. También se ofrece la opción de descargar los informes en formato Excel.<br /><br />
El proyecto incluye una sección de inventario que permite filtrar por nombre, ordenar de mayor a menor y viceversa, y aplicar filtros por rangos. Además, se resaltan visualmente las filas que cumplen con las condiciones establecidas en los rangos. También se brinda la opción de descargar el inventario en formato Excel.
`,
    DescriptionTextEn:`
    In this project, you can register products (calculate price based on desired profit percentage), update them, and delete them. Similarly, you can register sales. The project includes a reports section where you can generate a sales report for the user-selected date. There is an option to view the data in a graphical format for cases where multiple days are involved, allowing you to visually observe the difference in sales between one day and another. Additionally, the project offers the option to download the report in Excel format.<br /><br />
    There is also an inventory section where you can filter by name, sort in ascending or descending order, apply range filters, and highlight rows that meet the range conditions. Furthermore, you can download the inventory in Excel format.
    `,
    
    IsLinkToGitHub:true,
    linkHrefGitHub:"https://github.com/Nickbrian246/Farmacia_meneses_v1",
    LinkGitHubIcon: <AiOutlineGithub/>,
    LinkChildrenTextEs:"Visualizar codigo en gitHub",
    linkChildrenTextEn:"View code on GitHub ",

    IsLinkToProject:true,
    linkHrefToProject:"https://puntodeventa.nbjdev.com/",
    LinkToProjectIcon: <FiNavigation/>,
    LinkChildrenTextToProjectEs:"Visitar sitio web",
    linkChildrenTextToProjectEn:"Visit web site",


  },
  {
    id:"proyectoMercadoLibreClone-225512",
    titleEn:"Mercado libre E-commerce clone ",
    tittleEs:"Mercado libre Clone",
    spanTittleEs:" (Proyecto solo FrontEnd )",
    spanTittleEn:" (Frontend Project)",
    dataForCarousel:mercadoLibreClonData,
    isResponsive:false,
    borderColor:"#fff159",

    imgSrc:mercadoLibreImage,
    imgALT:"e-commerce project ", 

    subTittleTechnologiesEs:"Tecnologías usadas en este proyecto",
    subTittleTechnologiesEn:"Technologies used in the project",

    
    
    IsActiveJs:true,
    ListItemTechologiJavascript:"Javascript",
    ListItemTechnologyJavaScriptIcon:<SiJavascript/>,
    
    IsActiveJsonWebToken:false,
    listItemTechologiJsonWebToken:"json webToken",
    ListItemTechnologyJsonWebToken:<SiJsonwebtokens/>,
    IsActiveHtml:true,
    ListItemTechologiHtml:"Html",
    ListItemHtmlIcon:  <AiFillHtml5/>,

    IsActiveCss:true,
    ListItemTechologiCSS:"Css",
    ListItemTechnologyCssIcon:<SiCss3/>,

    IsActiveReactJs:true,
    ListItemTechologiReactJs:"React Js",
    ListItemTechnologyReactJsIcon:<FaReact/>,

    IsActiveReactRedux:true,
    ListItemTechologiReactRedux:"React Redux",
    ListItemTechnologyReactReduxIcon:<TbBrandRedux/>,

    ListItemTechologiReactRouter:"React Router",
    ListItemTechnologyReactRouterIcon:<SiReactrouter/>,
    IsActiveReactRouter:true,

    IsActiveNodeJs:false,
    ListItemTechologiNodeJs:"Node Js",
    ListItemTechnologyNodeJsIcon:<FaNodeJs/>,

    IsActiveExpressJs:false,
    ListItemTechologiExpress:"Expesss Js",
    ListItemTechnologyExpressJsIcon:<SiExpress/>,

    IsActiveMongoDb:false,
    ListItemTechologiMongoDB:"Mongo DB",
    ListItemTechnologyMongoDbIcon:<SiMongodb/>,

    IsActiveMaterialUi:false,
    ListItemTechologiMaterialUi:"MaterialUI",
    ListItemTechnologyMaterialUiIcon:<SiMui/>,

    IsActiveAntDesign:true,
    ListItemTechologiAntDesign:"Ant Design",
    ListItemTechnologyAntDesignIcon:<AiOutlineAntDesign/>,

    IsActiveTypeScript:false,
    ListItemTechologiTypeScript:"TypeScript",
    ListItemTechnologyTypeScript:  <SiTypescript/>,

    IsActiveTailwind:false,
    ListItemTechologiTailwind:"Tailwind",
    ListItemTechnologyTailwindIcon:<SiTailwindcss/>,

    DescriptionTittleEs:"Descripción",
    DescriptionTittleEnglish:"Description",

    DescriptionTextEs:`
    Este proyecto es exclusivamente frontend. Se utiliza la biblioteca Fake.js para simular la información del backend. Además, se presenta una recreación del sitio de comercio electrónico "Mercado Libre". El proyecto consta de 4 páginas principales.<br /><br />
En primer lugar, está la página de inicio (home) donde se muestran todos los productos disponibles. Luego, se encuentra la página del producto individual, donde se muestra el producto junto con una sección de críticas y calificaciones. Por último, está la página de compra del producto, donde los usuarios pueden realizar la compra del producto seleccionado.
`,
    DescriptionTextEn:`
    This project is exclusively frontend. The Fake.js library is used to simulate backend information. Additionally, a recreation of the "Mercado Libre" e-commerce site is presented. The project consists of 4 main pages.<br /><br />
    Firstly, there is the home page where all available products are displayed. Next, there is the individual product page, which showcases the product along with a section for reviews and ratings. Lastly, there is the product purchase page, where users can make a purchase of the selected product.
    `,
    
    IsLinkToGitHub:true,
    linkHrefGitHub:"https://github.com/Nickbrian246/mercado-libre-clon",
    LinkGitHubIcon: <AiOutlineGithub/>,
    LinkChildrenTextEs:"Visualizar codigo en gitHub",
    linkChildrenTextEn:"View code on GitHub ",

    IsLinkToProject:true,
    linkHrefToProject:"https://e-commerce.nbjdev.com/",
    LinkToProjectIcon: <FiNavigation/>,
    LinkChildrenTextToProjectEs:"Visitar sitio web",
    linkChildrenTextToProjectEn:"Visit website",


  },
  {
    id:"proyectoFinanceApp-225512",
    titleEn:"Finance app",
    tittleEs:"Finanzas app ",
    spanTittleEs:" (Proyecto frontEnd )",
    spanTittleEn:" (Frontend Project)",
    dataForCarousel :fiananzasApp,
    isResponsive:true,
    borderColor:"#0000ff",

    imgSrc:fiananzasAppImage,
    imgALT:"Finance app", 

    subTittleTechnologiesEs:"Tecnologías usadas en este proyecto",
    subTittleTechnologiesEn:"Technologies used in the project",

    IsActiveJs:true,
    ListItemTechologiJavascript:"Javascript",
    ListItemTechnologyJavaScriptIcon:<SiJavascript/>,

    IsActiveJsonWebToken:false,
    listItemTechologiJsonWebToken:"json webToken",
    ListItemTechnologyJsonWebToken:<SiJsonwebtokens/>,

    IsActiveHtml:true,
    ListItemTechologiHtml:"Html",
    ListItemHtmlIcon:  <AiFillHtml5/>,

    IsActiveCss:true,
    ListItemTechologiCSS:"Css",
    ListItemTechnologyCssIcon:<SiCss3/>,

    IsActiveReactJs:true,
    ListItemTechologiReactJs:"React Js",
    ListItemTechnologyReactJsIcon:<FaReact/>,

    IsActiveReactRedux:false,
    ListItemTechologiReactRedux:"React Redux",
    ListItemTechnologyReactReduxIcon:<TbBrandRedux/>,

    ListItemTechologiReactRouter:"React Router",
    ListItemTechnologyReactRouterIcon:<SiReactrouter/>,
    IsActiveReactRouter:false,

    IsActiveNodeJs:false,
    ListItemTechologiNodeJs:"Node Js",
    ListItemTechnologyNodeJsIcon:<FaNodeJs/>,

    IsActiveExpressJs:false,
    ListItemTechologiExpress:"Expesss Js",
    ListItemTechnologyExpressJsIcon:<SiExpress/>,

    IsActiveMongoDb:false,
    ListItemTechologiMongoDB:"Mongo DB",
    ListItemTechnologyMongoDbIcon:<SiMongodb/>,

    IsActiveMaterialUi:false,
    ListItemTechologiMaterialUi:"MaterialUI",
    ListItemTechnologyMaterialUiIcon:<SiMui/>,

    IsActiveAntDesign:false,
    ListItemTechologiAntDesign:"Ant Design",
    ListItemTechnologyAntDesignIcon:<AiOutlineAntDesign/>,

    IsActiveTailwind:true,
    ListItemTechologiTailwind:"Tailwind",
    ListItemTechnologyTailwindIcon:<SiTailwindcss/>,

    IsActiveTypeScript:false,
    ListItemTechologiTypeScript:"TypeScript",
    ListItemTechnologyTypeScript:  <SiTypescript/>,

    DescriptionTittleEs:"Descripción",
    DescriptionTittleEnglish:"Description",

    DescriptionTextEs:`
    En esencia, este proyecto se compone de tres elementos clave. En primer lugar, se presenta una sección informativa que proporciona información sobre cómo usar la página. A continuación, el proyecto incluye tres formularios específicos que permiten a los usuarios ingresar sus gastos de acuerdo con el criterio del formulario.
    <br /><br />Una vez que los datos se han introducido y el usuario ha hecho clic en el botón "generar balance", el sistema genera proyecciones financieras mensuales y anuales en forma de gráficos, lo que facilita la visualización de su situación financiera a lo largo del tiempo. Además, los usuarios también podrán visualizar un carrusel de consejos financieros que les ayudarán a mejorar su salud financiera en general.

`,
    DescriptionTextEn:`
  Essentially, this project consists of three key elements. First, it features an informative section that provides information on how to use the page. Next, the project includes three specific forms that allow users to enter their expenses according to the form's criteria.
<br /><br />Once the data has been entered and the user has clicked the "generate balance" button, the system generates monthly and annual financial projections in the form of charts, making it easier to visualize their financial situation over time. Additionally, users will also be able to view a carousel of financial tips to help them improve their overall financial health.

    `,
    
    IsLinkToGitHub:true,
    linkHrefGitHub:"https://github.com/Nickbrian246/Farmacia_meneses_v1",
    LinkGitHubIcon: <AiOutlineGithub/>,
    LinkChildrenTextEs:"Visualizar codigo en gitHub",
    linkChildrenTextEn:"View code on GitHub ",

    IsLinkToProject:true,
    linkHrefToProject:"http://finanzasapp.nbjdev.com/",
    LinkToProjectIcon: <FiNavigation/>,
    LinkChildrenTextToProjectEs:"Visitar sitio web",
    linkChildrenTextToProjectEn:"Visit website",


  },
//   {
//     id:"proyectoWeatherApi-225512",
//     titleEn:"Weather Api",
//     tittleEs:" Api del Clima",
//     spanTittleEs:"(Proyecto FrontEnd)",
//     spanTittleEn:"(Frontend Project)",
//     dataForCarousel:[],

//     imgSrc:"https://i.pinimg.com/564x/a2/bb/de/a2bbdea29ae94f652292da1f0b9c589c.jpg",
//     imgALT:"Weather Api", 

//     subTittleTechnologiesEs:"Tecnologías usadas en este proyecto",
//     subTittleTechnologiesEn:"Technologies used in the project",

//     IsActiveJs:true,
//     ListItemTechologiJavascript:"Javascript",
//     ListItemTechnologyJavaScriptIcon:<SiJavascript/>,

//     IsActiveJsonWebToken:false,
//     listItemTechologiJsonWebToken:"json webToken",
//     ListItemTechnologyJsonWebToken:<SiJsonwebtokens/>,

//     IsActiveHtml:true,
//     ListItemTechologiHtml:"Html",
//     ListItemHtmlIcon:  <AiFillHtml5/>,

//     IsActiveCss:true,
//     ListItemTechologiCSS:"Css",
//     ListItemTechnologyCssIcon:<SiCss3/>,

//     IsActiveReactJs:true,
//     ListItemTechologiReactJs:"React Js",
//     ListItemTechnologyReactJsIcon:<FaReact/>,

//     IsActiveReactRedux:true,
//     ListItemTechologiReactRedux:"React Redux",
//     ListItemTechnologyReactReduxIcon:<TbBrandRedux/>,

//     ListItemTechologiReactRouter:"React Router",
//     ListItemTechnologyReactRouterIcon:<SiReactrouter/>,
//     IsActiveReactRouter:true,

//     IsActiveNodeJs:false,
//     ListItemTechologiNodeJs:"Node Js",
//     ListItemTechnologyNodeJsIcon:<FaNodeJs/>,

//     IsActiveExpressJs:false,
//     ListItemTechologiExpress:"Expesss Js",
//     ListItemTechnologyExpressJsIcon:<SiExpress/>,

//     IsActiveMongoDb:false,
//     ListItemTechologiMongoDB:"Mongo DB",
//     ListItemTechnologyMongoDbIcon:<SiMongodb/>,

//     IsActiveMaterialUi:false,
//     ListItemTechologiMaterialUi:"MaterialUI",
//     ListItemTechnologyMaterialUiIcon:<SiMui/>,

//     IsActiveAntDesign:true,
//     ListItemTechologiAntDesign:"Ant Design",
//     ListItemTechnologyAntDesignIcon:<AiOutlineAntDesign/>,

//     IsActiveTailwind:false,
//     ListItemTechologiTailwind:"Tailwind",
//     ListItemTechnologyTailwindIcon:<SiTailwindcss/>,

//     IsActiveTypeScript:false,
//     ListItemTechologiTypeScript:"TypeScript",
//     ListItemTechnologyTypeScript:  <SiTypescript/>,

//     DescriptionTittleEs:"Descripción",
//     DescriptionTittleEnglish:"Description",

//     DescriptionTextEs:`
//     En este proyecto, se consume una API de clima que incluye geolocalización y búsqueda por ciudad. El proyecto consta de dos páginas principales: la página de búsqueda y la página de visualización de información.    <br /><br />

//     En la página de búsqueda, los usuarios pueden buscar la información del clima utilizando la geolocalización o ingresando el nombre de una ciudad específica. Por otro lado, en la página de visualización de información, se muestra la información detallada del clima para la ubicación seleccionada.    <br /><br />
    
//     En el apartado de información, se pueden visualizar datos como la temperatura, sensación térmica, velocidad del viento y los rayos UV, proporcionando a los usuarios una visión general del clima actual en la ubicación elegida.
// `,
//     DescriptionTextEn:`

//     In this project, a weather API is consumed, which includes geolocation and city search functionalities. The project consists of two main pages: the search page and the information display page.   <br /><br />


//     On the search page, users can search for weather information by using geolocation or entering the name of a specific city. On the other hand, the information display page shows detailed weather information for the selected location.   <br /><br />
    
    
//     In the information section, users can view data such as temperature, perceived temperature, wind speed, and UV index, providing them with an overview of the current weather conditions in the chosen location.
//     `,
    
//     IsLinkToGitHub:true,
//     linkHrefGitHub:"https://github.com/Nickbrian246/weather-api/tree/main",
//     LinkGitHubIcon: <AiOutlineGithub/>,
//     LinkChildrenTextEs:"Visualizar codigo en gitHub",
//     linkChildrenTextEn:"View code on GitHub ",

//     IsLinkToProject:false,
//     linkHrefToProject:"",
//     LinkToProjectIcon: <AiOutlineGithub/>,
//     LinkChildrenTextToProjectEs:"Visualizar codigo en gitHub",
//     linkChildrenTextToProjectEn:"View code on GitHub ",


//   },
]
