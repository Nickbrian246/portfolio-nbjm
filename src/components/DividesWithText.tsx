
interface Props {
  TextEn:string,
  TextEs:string,
  language:boolean,
  isIntersecting:boolean
}

const DividerWithText = (props:Props) => {
const {TextEn,TextEs,language,isIntersecting} = props
  return (
    <>
      <div className="w-full flex justify-between gap-2 items-center">
        <div className="h-1 bg-slate-500  w-full"></div>
        <div ><h2 className={isIntersecting ? `text-2xl  text-yellow-400 ` :"text-2xl" }>{language?   TextEs :TextEn}</h2></div>
        <div className="h-1 bg-slate-500  w-full"></div>

      </div>
    </>
  )
}

export {DividerWithText}