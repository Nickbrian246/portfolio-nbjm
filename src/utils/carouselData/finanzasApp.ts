import finanzasImageWelcome from "../../assets/finanzasApp/home finanzas app.webp";
import instructions from "../../assets/finanzasApp/instrucciones de fiananzas app.webp";
import inputsData from "../../assets/finanzasApp/inputs de informacin finanzas app.webp";
import balanceGraphic from "../../assets/finanzasApp/graficas de balanca finanzas app.webp";
import finanzasAdviceSlider from "../../assets/finanzasApp/slider de consejos financieros.webp"
import { CarouselData } from "../../interfaces";
export const fiananzasApp:CarouselData[]= [
    {
        img:finanzasImageWelcome,
        descriptionEs:"",
        descriptionEn:"",
        objectDescription:""
    },
    {
        img:instructions,
        descriptionEs:"Panel de inicio, busque productos por nombre, agréguelos al carrito y complete el registro de la venta.",
        descriptionEn:`Home panel, search for products by name, add them to the cart, and complete the sale registration.`,
        objectDescription:"imagen de home  "
    },
    {
        img:inputsData,
        descriptionEs:"Modal de venta, ingrese el efectivo recibido y realice la venta.",
        descriptionEn:`Sales modal, enter the received cash, and complete the sale.`,
        objectDescription:"imagen de modal de venta "
    },
    {
        img:balanceGraphic,
        descriptionEs:"Crea, elimina, actualiza productos ",
        descriptionEn:" Create, Update, delete products",
        objectDescription:"imagen de modal de  agregar productos "
    },
    {
        img:finanzasAdviceSlider,
        descriptionEs:`Panel de visualización de información de inventario en el que puedes filtrar por nombre, ordenar por precio, cantidad en inventario o por cuántos artículos trae cada paquete, así como filtrar por rangos según el criterio anterior (precio, cantidad en inventario...). `,
        descriptionEn:`"Inventory information display panel where you can filter by name, sort by price, inventory quantity, or how many items each package contains, and also filter by ranges based on the previous criteria (price, inventory quantity...).`,
        objectDescription:"imagen de panel de inventario"
    },
]

