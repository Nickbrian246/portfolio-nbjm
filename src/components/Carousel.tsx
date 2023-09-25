import React, { useState, useContext } from "react";
import { CarouselData } from "../interfaces";
import { Language } from "../store";
import { TiDeleteOutline } from "react-icons/ti";

interface Props {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  dataForCarousel: CarouselData[];
}

const Carousel = (props: Props) => {
  const { dataForCarousel ,setIsOpenModal} = props;
  const { language } = useContext(Language);
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
        className={`
          w-4/5
          md:w-3/5
          min-h-70
          md:h-[600px]
          bg-white
          p-5
          border-2
          flex
          flex-col
          justify-center
          items-center
          gap-5
          rounded-5
          fixed
          top-1/2
          left-1/2
          transform
          -translate-x-1/2
          -translate-y-1/2
          z-10
        `}
      >
          <button
            onClick={()=>{setIsOpenModal((prevState) => !prevState)}}
            className="
            bg-slate-50
            rounded-full
            border
            absolute
            z-40
            -right-5
            -top-5
            text-5xl
            text-red-700">
              <TiDeleteOutline/>
            </button>
        <div
          className={`
            flex
            items-center
            justify-center
            w-full
            h-full
            absolute
            opacity-20
          `}
        />
        <p className="text-center mt-3 font-semibold text-sm md:text-lg">
          {language ? dataForCarousel[selectedIndex].descriptionEs : dataForCarousel[selectedIndex].descriptionEn}
        </p>
        <div className="bg-slate-950 w-full h-1"></div>
    <div className=" flex justify-center align-middle w-full h-3/4">
    <img
          className={`
            w-full

          `}
          src={selectedImage}
        />
    </div>
        <button
          onClick={() => prev()}
          className={`
            absolute
            top-[45%]
            -left-10
            md:-left-32
            rounded-full
            border
            bg-slate-300
            w-11
            h-11
            md:w-20
            md:h-20
            outline-none
          `}
        >
          {`<`}
        </button>
        <button
          onClick={() => next()}
          className={`
            outline-none
            absolute
            top-[45%]
            -right-10
            md:-right-40
            rounded-full
            border
            bg-slate-300
            w-11
            h-11
            md:w-20
            md:h-20
            text-lg
          `}
        >
          <span>{`>`}</span>
        </button>
      </section>
    </>
  );
};

export { Carousel };
