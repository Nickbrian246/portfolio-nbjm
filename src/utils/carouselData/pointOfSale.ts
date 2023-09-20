import logInImage from "../../assets/pointOfSale/Captura de pantalla 2023-09-19 192522.png";
import createExcelReport from  "../../assets/pointOfSale/createExvelRepots.png";
import createStockRports from  "../../assets/pointOfSale/createStockReports.png";
import crud from  "../../assets/pointOfSale/crud.png";
import filterReortData from  "../../assets/pointOfSale/filterReportData.png";
import homeImage from "../../assets/pointOfSale/home.png";
import modalSale from "../../assets/pointOfSale/modalSale.png";
import twoColomnsGraphic from "../../assets/pointOfSale/visualiceSellsGrapirhcsTwiColomns.png";
import sellGraphi from  "../../assets/pointOfSale/visualiceSellsInGhrapichs.png";
import { CarouselData } from "../../interfaces";


export const pointOfSaleData:CarouselData[]= [
    {
        img:logInImage,
        descriptionEs:"LogIn con cifrado de contraseña con JSON Web Token.",
        descriptionEn:"LogIn with password encryption using JSON Web Token.",
        objectDescription:" imagen de login"
    },
    {
        img:createExcelReport,
        descriptionEs:"Genera reportes de ventas asi como del Inventario ",
        descriptionEn:"Generate excel reports about sales and the current stock.",
        objectDescription:" imagen de excel reporte"
    },
    {
        img:createStockRports,
        descriptionEs:`Pane de visualizacin de informacion de inventario en el puede filtrar por nombre, ordenar  por Precio,
        Cantidad en inventario o por cuantos articulos trae cada paquete, asi como filtar por Rangos segun el criterio anterior (precio,cantidad en inventario...)`,
        descriptionEn:`"Inventory information display panel where you can filter by name, sort by price, inventory quantity, or how many items each package contains, and also filter by ranges based on the previous criteria (price, inventory quantity...).`,
        objectDescription:"imagen de panel de inventario"
    },
    {
        img:crud,
        descriptionEs:"Crea, elimina, actualiza productos ",
        descriptionEn:" Create, Update, delete products",
        objectDescription:"imagen de modal de  agregar productos "
    },
    {
        img:filterReortData,
        descriptionEs:"filtre por rangos  y marque por color,segun el criterio seleccionado (precio,cantidad en inventario, cantidad por paquete)",
        descriptionEn:`"Filter by ranges and color code according to the selected criteria (price, inventory quantity, quantity per package).`,
        objectDescription:"imagen de productos filtrados y marcados por color "
    },
    {
        img:homeImage,
        descriptionEs:"Panel de inicio, busque productos por nombre, agréguelos al carrito y complete el registro de la venta.",
        descriptionEn:`Home panel, search for products by name, add them to the cart, and complete the sale registration.`,
        objectDescription:"imagen de home  "
    },
    {
        img:modalSale,
        descriptionEs:"Modal de venta, ingrese el efectivo recibido y realice la venta.",
        descriptionEn:`Sales modal, enter the received cash, and complete the sale.`,
        objectDescription:"imagen de modal de venta "
    },
    {
        img:twoColomnsGraphic,
        descriptionEs:"Visualice las ventas en gráfica",
        descriptionEn:`Visualize sales on a graph.`,
        objectDescription:"imagen de grafica de dos columnas"
    },
    {
        img:sellGraphi,
        descriptionEs:"Visualice las ventas de la semana en grafica",
        descriptionEn:`Visualize the week's sales on a graph.`,
        objectDescription:"imagen de grafica de ventas de la semana"
    },

]