import finanzasImageWelcome from "../../assets/finanzasApp/home finanzas app.webp";
import instructions from "../../assets/finanzasApp/instrucciones de fiananzas app.webp";
import inputsData from "../../assets/finanzasApp/inputs de informacin finanzas app.webp";
import balanceGraphic from "../../assets/finanzasApp/graficas de balanca finanzas app.webp";
import finanzasAdviceSlider from "../../assets/finanzasApp/slider de consejos financieros.webp"
import { CarouselData } from "../../interfaces";
    export const fiananzasApp:CarouselData[]=[
        {
            img: finanzasImageWelcome,
            descriptionEs: "Esta web se desarrolló con la intención de que el usuario pueda hacer un balance de sus ingresos y egresos y visualizar la salud de sus finanzas.",
            descriptionEn: "This website was developed with the intention that the user can create a balance of their income and expenses and visualize the health of their finances.",
            objectDescription: "Imagen de bienvenida de finanzas. Permite a los usuarios realizar un balance de ingresos y gastos para evaluar su situación financiera."
        },
        {
            img: instructions,
            descriptionEs: "Instrucciones para el uso de la página web.",
            descriptionEn: "Instructions for using the website.",
            objectDescription: "Instrucciones para utilizar el sitio web."
        },
        {
            img: inputsData,
            descriptionEs: "Formularios donde el usuario ingresará sus gastos según corresponda. Después, debe hacer clic en el botón 'Generar balance'.",
            descriptionEn: "Forms where the user will enter their expenses as appropriate, and then click on the 'Generate balance' button.",
            objectDescription: "Formularios para ingresar gastos y generar un balance."
        },
        {
            img: balanceGraphic,
            descriptionEs: "Gráficas que muestran una proyección del balance de sus gastos mensuales y anuales. En caso de ser positivo, se muestran felicitaciones; en caso contrario, se dan consejos.",
            descriptionEn: "Graphics that show a projection of your monthly and annual expense balance. If it's positive, congratulations are shown; otherwise, advice is given.",
            objectDescription: "Gráficas de proyección de balance de gastos mensuales y anuales."
        },
        {
            img: finanzasAdviceSlider,
            descriptionEs: "Carrousel de consejos financieros.",
            descriptionEn: "Carousel of financial tips.",
            objectDescription: "Carrusel de consejos financieros."
        }
    ]
    
    
    

