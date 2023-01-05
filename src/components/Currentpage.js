import React from 'react'

const Currentpage = (props) => {

  const {page,setTabs} = props;
  const allLinks = page.split(">")
  const handleTab =(val)=>{
    setTabs(val)
  }

  return (
    <div className='h-[76px] flex md:w-full text-sm max-[428px]:-ml-[140px] max-[428px]:mt-16 md:h-[
      210px]'>
        <div className='ml-[175px] mt-[25px] w-[350px] md:ml-[187px] md:mt-[30px] flex space-x-3 cursor-pointer'>
            {
              allLinks.map((val,key)=>{return <div key={key} onClick={()=>handleTab(key)}> {val}{key < allLinks.length-1 ? ">" : null }</div>})
            }
        </div>
    </div>
  )
}

export default Currentpage;