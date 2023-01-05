import React from 'react'
import { info } from '../assets/Info'


const Info = () => {

  const col1data = info[0]
  const col2data = info[1]

  return (
    <div className='h-fit flex flex-col'>
        <div className='ml-[38px] -mt-6 w-[240px] h-[36px] text-[24px] md:ml-[187px] md:mt-[40px] md:w-[229px] md:h-9 md:text-2xl font-semibold text-[#800080]'>How Does it Work ?</div>
        <div className='md:flex'>
          <div  className=' flex flex-col mt-4'>
          {col1data.map((value,key)=>{
            return <div key={key} className="">
                <div className='ml-[38px] flex m-2 md:m-5 md:ml-[189px]'>
                  <div style={{width: 65,height:65}} className='bg-[#d9d9d940] rounded-full '>
                    <div style={{marginLeft:19,marignRight:0,marginTop:20,marginBottom:35
  }}>{value.icon}</div>
                  </div>
                  <div>
                    <div style={{width:264}} className='h-6 ml-5 text-[#000000] font-medium text-base'>{value.prompt}</div>
                    <div style={{width: 274}} className='h-12 text-[#4D4D4D] text-base font-normal ml-5'>{value.para}</div>
                  </div>
                </div>
            </div>
          })}
          </div>

          <div  className='flex flex-col'>
          {col2data.map((value,key)=>{
            return <div key={key} className="">
                <div className='ml-[38px] flex m-2 md:ml-[50px] md:mt-[35px] '>
                  <div style={{width: 65,height:65}} className='bg-[#d9d9d940] rounded-full '>
                    <div style={{marginLeft:19,marignRight:0,marginTop:20,marginBottom:35
  }}>{value.icon}</div>
                  </div>
                  <div>
                    <div style={{width:264}} className='h-6 ml-5 text-[#000000] font-medium text-base'>{value.prompt}</div>
                    <div style={{width: 274}} className='h-12 text-[#4D4D4D] text-base font-normal ml-5'>{value.para}</div>
                  </div>
                </div>
            </div>
          })}
          </div>
        </div>
    </div>
  )
}

export default Info