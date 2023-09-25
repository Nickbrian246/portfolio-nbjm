import logInImage from "../../assets/pointOfSale/Captura de pantalla 2023-09-19 192522.png";
import createExcelReport from  "../../assets/pointOfSale/createExvelRepots.png";
import createStockReports from  "../../assets/pointOfSale/createStockReports.png";
import crud from  "../../assets/pointOfSale/crud.png";
import filterReportData from  "../../assets/pointOfSale/filterReportData.png";
import homeImage from "../../assets/pointOfSale/home.png";
import modalSale from "../../assets/pointOfSale/modalSale.png";
import twoColumnsGraphic from "../../assets/pointOfSale/visualiceSellsGrapirhcsTwiColomns.png";
import sellGraphic from  "../../assets/pointOfSale/visualiceSellsInGhrapichs.png";
import { CarouselData } from "../../interfaces";


export const pointOfSaleData:CarouselData[]=[
    {
        img: logInImage,
        descriptionEs: "Inicio de sesión con encriptación de contraseña mediante JSON Web Token.",
        descriptionEn: "Login with password encryption using JSON Web Token.",
        objectDescription: "Imagen de inicio de sesión."
    },
    {
        img: homeImage,
        descriptionEs: "Panel de inicio. Busque productos por nombre, agréguelos al carrito y complete el registro de la venta.",
        descriptionEn: "Home panel, search for products by name, add them to the cart, and complete the sale registration.",
        objectDescription: "Imagen de panel de inicio."
    },
    {
        img: modalSale,
        descriptionEs: "Modal de venta, ingrese el efectivo recibido y realice la venta.",
        descriptionEn: "Sales modal, enter the received cash, and complete the sale.",
        objectDescription: "Imagen del modal de venta."
    },
    {
        img: crud,
        descriptionEs: "Cree, elimine, actualice productos.",
        descriptionEn: "Create, update, delete products.",
        objectDescription: "Imagen del modal de agregar productos."
    },
    {
        img: createStockReports,
        descriptionEs: "Panel de visualización de información de inventario en el que puedes filtrar por nombre, ordenar por precio, cantidad en inventario o por cuántos artículos trae cada paquete, así como filtrar por rangos según el criterio anterior (precio, cantidad en inventario...).",
        descriptionEn: "Inventory information display panel where you can filter by name, sort by price, inventory quantity, or how many items each package contains, and also filter by ranges based on the previous criteria (price, inventory quantity...).",
        objectDescription: "Imagen del panel de inventario."
    },
    {
        img: filterReportData,
        descriptionEs: "Filtre por rangos y marque por color, según el criterio seleccionado (precio, cantidad en inventario, cantidad por paquete).",
        descriptionEn: "Filter by ranges and color code according to the selected criteria (price, inventory quantity, quantity per package).",
        objectDescription: "Imagen de productos filtrados y marcados por color."
    },
    {
        img: createExcelReport,
        descriptionEs: "Genera reportes de ventas así como del inventario.",
        descriptionEn: "Generate Excel reports about sales and the current stock.",
        objectDescription: "Imagen de reporte en Excel."
    },
    {
        img: twoColumnsGraphic,
        descriptionEs: "Visualice las ventas en gráficos de dos columnas.",
        descriptionEn: "Visualize sales on a two-column graph.",
        objectDescription: "Imagen de gráfico de dos columnas."
    },
    {
        img: sellGraphic,
        descriptionEs: "Visualice las ventas de la semana en gráficos.",
        descriptionEn: "Visualize the week's sales on a graph.",
        objectDescription: "Imagen de gráfico de ventas de la semana."
    }
]
