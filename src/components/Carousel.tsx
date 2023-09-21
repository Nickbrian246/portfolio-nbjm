import React, { useState } from "react";
import { pointOfSaleData } from "../utils/carouselData";
import { Divider } from "./Divider";

interface Props {
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Carousel = (props: Props) => {
    const { setIsOpenModal } = props;
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [selectedImage, setSelectedImage] = useState(pointOfSaleData[selectedIndex].img);

    const prev = () => {
        const condition = selectedIndex > 0;
        const nextIndex = condition ? selectedIndex - 1 : pointOfSaleData.length - 1;
        setSelectedImage(pointOfSaleData[nextIndex].img);
        setSelectedIndex(nextIndex);
    };
    const next = () => {
        const condition = selectedIndex < pointOfSaleData.length - 1;
        const nextIndex = condition ? selectedIndex + 1 : 0;
        setSelectedImage(pointOfSaleData[nextIndex].img);
        setSelectedIndex(nextIndex);
    };

    return (
        <>
            <section
              
                style={{
                    width: "900px",
                    minHeight: "600px",
                    background: "#ffff",
                    padding: "20px",
                    border: "2px solid",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                    borderRadius: "5px",
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: "1000",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        maxHeight: "600px",
                        position: "absolute",
                        opacity: 0.2, // Cambiar a un valor entre 0 y 1 para la opacidad
                    }}
                />
                <p
                    className="text-center mt-3 font-semibold text-lg"
                >
                    {pointOfSaleData[selectedIndex].descriptionEs}
                </p>
                <div
                    className="bg-slate-950 w-full h-1"
                >
                </div>
                <img
                    src={selectedImage}
                />

                <button
                    onClick={() => { prev() }}
                    className="
                        absolute
                        top-[45%]
                        -left-32
                        rounded-full
                        border
                        bg-slate-300
                        w-20
                        h-20
                        outline-none
                    ">
                    {`<`}
                </button>
                <button
                    onClick={() => next()}
                    className="
                        outline-none
                        absolute
                        top-[45%]
                        -right-32
                        rounded-full
                        border
                        bg-slate-300
                        w-20
                        h-20
                        text-lg
                    ">
                    <span>{`>`}</span>
                </button>
            </section>
        </>
    );
};

export { Carousel };
