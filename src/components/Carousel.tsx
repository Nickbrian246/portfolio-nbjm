import React, { useState, useContext } from "react";
import { CarouselData } from "../interfaces";
import { Language } from "../store";

interface Props {
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    dataForCarousel:CarouselData[]

}   

const Carousel = (props: Props) => {
    const { setIsOpenModal,dataForCarousel } = props;
    const {language } = useContext(Language);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [selectedImage, setSelectedImage] = useState(dataForCarousel[selectedIndex].img);
    
    

    const prev = () => {
        const condition = selectedIndex > 0;
        const nextIndex = condition ? selectedIndex - 1 : dataForCarousel.length - 1;
        setSelectedImage(dataForCarousel[nextIndex].img);
        setSelectedIndex(nextIndex);
    };
    const next = () => {
        const condition = selectedIndex < dataForCarousel.length - 1;
        const nextIndex = condition ? selectedIndex + 1 : 0;
        setSelectedImage(dataForCarousel[nextIndex].img);
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
                        opacity: 0.2, 
                    }}
                />
                <p
                    className="text-center mt-3 font-semibold text-lg"
                >
                    { Language? dataForCarousel[selectedIndex].descriptionEn  :  dataForCarousel[selectedIndex].descriptionEn}
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
