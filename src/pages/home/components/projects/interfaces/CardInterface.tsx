import { ReactNode } from "react";

export interface Card {
  id:string,
  titleEn: string;
  tittleEs: string;
  spanTittleEs?: string;
  spanTittleEn?: string;

  imgSrc: string;
  imgALT: string;

  subTittleTechnologiesEs: string;
  subTittleTechnologiesEn: string;

  IsActiveJs: boolean;
  ListItemTechologiJavascript: string;
  ListItemTechnologyJavaScriptIcon: ReactNode;

  IsActiveHtml: boolean;
  ListItemTechologiHtml: string;
  ListItemHtmlIcon: ReactNode;

  IsActiveCss: boolean;
  ListItemTechologiCSS: string;
  ListItemTechnologyCssIcon: ReactNode;

  IsActiveReactJs: boolean;
  ListItemTechologiReactJs: string;
  ListItemTechnologyReactJsIcon: ReactNode;

  IsActiveReactRedux: boolean;
  ListItemTechologiReactRedux: string;
  ListItemTechnologyReactReduxIcon: ReactNode;

  ListItemTechologiReactRouter: string;
  ListItemTechnologyReactRouterIcon: ReactNode;
  IsActiveReactRouter: boolean;

  IsActiveNodeJs: boolean;
  ListItemTechologiNodeJs: string;
  ListItemTechnologyNodeJsIcon: ReactNode;

  IsActiveExpressJs: boolean;
  ListItemTechologiExpress: string;
  ListItemTechnologyExpressJsIcon: ReactNode;

  IsActiveMongoDb: boolean;
  ListItemTechologiMongoDB: string;
  ListItemTechnologyMongoDbIcon: ReactNode;

  IsActiveMaterialUi: boolean;
  ListItemTechologiMaterialUi: string;
  ListItemTechnologyMaterialUiIcon: ReactNode;

  IsActiveAntDesign: boolean;
  ListItemTechologiAntDesign: string;
  ListItemTechnologyAntDesignIcon: ReactNode;

  IsActiveTailwind:boolean,
  ListItemTechologiTailwind:string, 
  ListItemTechnologyTailwindIcon:ReactNode,

  IsActiveTypeScript: boolean;
  ListItemTechologiTypeScript: string;
  ListItemTechnologyTypeScript: ReactNode;

  DescriptionTittleEs: string;
  DescriptionTittleEnglish: string;

  DescriptionTextEs: string;
  DescriptionTextEn: string;

  IsLinkToGitHub: boolean;
  linkHrefGitHub: string;
  LinkGitHubIcon: ReactNode;
  LinkChildrenTextEs: string;
  linkChildrenTextEn: string;

  IsLinkToProject: boolean;
  linkHrefToProject?: string;
  LinkToProjectIcon: ReactNode;
  LinkChildrenTextToProjectEs: string;
  linkChildrenTextToProjectEn: string;
}