import home from "../../assets/mercadoLibreClon/home1.webp";
import searcherProducts from "../../assets/mercadoLibreClon/searchProducts.webp";
import productsCarousel from "../../assets/mercadoLibreClon/caoruselDeProductos.webp";
import offersCarousel from "../../assets/mercadoLibreClon/moreCaousels.webp";
import checkOutProductPage from "../../assets/mercadoLibreClon/paginaDeVisualizacionDeProductos1.webp"
import shoppingCart from "../../assets/mercadoLibreClon/addProductosToCart.webp";
import saleModal from "../../assets/mercadoLibreClon/modalDeCompra.webp";
import checkoutSaleDetails from "../../assets/mercadoLibreClon/checkoutdetails.webp";
import keepBuying from  "../../assets/mercadoLibreClon/sigaComprando.webp";
import choosePayment from "../../assets/mercadoLibreClon/choosePayMent.webp";
import { CarouselData } from "../../interfaces";

export const mercadoLibreClonData:CarouselData[]= [
    {
        img: home,
        descriptionEs: "Página principal donde se muestran los productos en diferentes sliders.",
        descriptionEn: "Main page where products are displayed in different sliders.",
        objectDescription: "Página principal con productos en sliders."
    },
    {
        img: searcherProducts,
        descriptionEs: "Buscador de productos.",
        descriptionEn: "Product search tool.",
        objectDescription: "Buscador de productos."
    },
    {
        img: productsCarousel,
        descriptionEs: "Slider de productos.",
        descriptionEn: "Product slider.",
        objectDescription: "Slider de productos."
    },
    {
        img: offersCarousel,
        descriptionEs: "Slider de ofertas.",
        descriptionEn: "Offers slider.",
        objectDescription: "Slider de ofertas."
    },
    {
        img: checkOutProductPage,
        descriptionEs: "Página donde se encuentran los detalles del producto, así como información del vendedor.",
        descriptionEn: "Page where product details are found, as well as seller information.",
        objectDescription: "Detalles de productos e información del vendedor."
    },
    {
        img: shoppingCart,
        descriptionEs: "Carrito de compras.",
        descriptionEn: "Shopping cart.",
        objectDescription: "Carrito de compras."
    },
    {
        img: choosePayment,
        descriptionEs: "Elija la forma de pago.",
        descriptionEn: "Choose the payment method.",
        objectDescription: "Elección de forma de pago."
    },
    {
        img: saleModal,
        descriptionEs: "Modal de venta.",
        descriptionEn: "Sales modal.",
        objectDescription: "Modal de venta."
    },
    {
        img: checkoutSaleDetails,
        descriptionEs: 'Página de información de pedido en la que se muestra el producto adquirido, así como la fecha de entrega y el total.',
        descriptionEn: 'Order information page that displays the purchased product, as well as the delivery date and total.',
        objectDescription: 'Información de pedido con producto adquirido, fecha de entrega y total.'
    },
    {
        img: keepBuying,
        descriptionEs: 'Dándole clic al enlace "seguir comprando" regresa al menú principal.',
        descriptionEn: 'By clicking on the "continue shopping" link, you return to the main menu.',
        objectDescription: 'Regreso al menú principal al hacer clic en "seguir comprando".'
    }
    
    
]