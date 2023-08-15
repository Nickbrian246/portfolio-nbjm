
interface Props {
  height:string,
  width:string,
  bg:string,
}

const Divider = (props:Props) => {
  const {width} = props

  

  return (
    <>
    <div className={` h-[3px] w-${width}  bg-[#333252]`}>

    </div>
    </>
  )
}

export {Divider}