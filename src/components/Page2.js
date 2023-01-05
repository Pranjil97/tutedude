import React from 'react'
import { enrolledInfo } from '../assets/enrolledInfo';

const Page2 = (props) => {
    const{balance,code,setTabs} = props;

  return (
        <div className='flex flex-col h-screen'>
            <div onClick={()=>setTabs(1)} className='mb-5 w-[100px] h-[24px] md:hidden flex ml-[38px] text-[#800080] font-medium cursor-pointer'>
                <div className='mt-[5px] mr-[10px]'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM16 7L1 7V9L16 9V7Z" fill="#800080"/></svg></div>
                <div>go back</div>
            </div>
            <div className='flex'>
                <div className='flex flex-col ml-[35px] item-center text-center justify-center'> 
                    <div className='mt-2 md:w-[150px] md:h-[24px] md:ml-[187px] md:mt-[2px] md:font-normal md:text-[16px] text-[#800080]'>Your Referral Code</div>
                    <div className='mt-[8px] h-[45px] md:ml-[187px] md:h-[50px] w-[150px] ring-2 ring-gray-100 rounded-xl flex items-center'>
                        <div className='w-[150px] h-[24px] font-medium text-[16px] text-center tracking-[0.25em]'>{code}</div>
                </div>
            </div>
            <div style={{borderRadius:20}} className=' ml-[60px] w-[153px] h-[74px] mt-[15px] md:mt-[2px] md:h-[85px] md:w-[145px] md:ml-[700px] flex flex-col bg-white shadow-[0_2px_8px_rgba(128,0,128,0.15);]'>
                <div className='mt-[15px] ml-[25px] md:mt-[20px] md:ml-[20px] w-[105px] h-[21px] font-normal text-[14px] text-[#800080]'>Wallet Balance</div>
                <div className='ml-[25px]'>₹ {balance}</div>
            </div>        
            </div>
            <div className='ml-[35px] w-[247] h-[30px] mt-[40px] md:mt-[60px] text-[24px] font-semibold md:ml-[189px] text-[#800080]'>Friends who enrolled <span className='md:text-[#626262] -ml-1'>(3)</span></div>
            <div className='mt-[20px] ml-[35px] md:w-[1180px] h-fit w-full md:flex md:-space-x-40 md:overflow-scroll '>
                {enrolledInfo.map((value,key)=>{
                   return  <div key={key} className=''>
                        <div style={{borderRadius:20}} className='mt-[20px] md:ml-[187px] h-[228px] w-[358px] text-white bg-gradient-to-r from-[#FF864C] to-[#800080] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                     <div className='flex '>
                         <div className=' mt-[20px] ml-[20px] h-[24px] w-[150px] font-bold text-[16px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>{value.name}</div>
                         <div className='ml-[85px] mt-[23px] mr-[20] w-[83px] h-[21px] font-normal text-[14px] opacity-75'>{value.date}</div>
                     </div>
                     <div className=' mt-[6px] w-[160px] h-[24px] ml-[20px] font-medium text-[14px]' >{value.coursesEnrolled}</div>
                     <div className='w-[330px] h-[80px]  ml-[15px] flex flex-wrap  mt-[10px] opacity-75'>
                             {value.tags.map((tag,tagkey)=>{
                                return (<div key={tagkey} className='w-fit p-2 h-[29px] mx-[0.7px] md:h-[30px] md:mt-[2px] ml-[10px] ring-[1.5px] ring-gray-100 rounded-xl flex items-center  md:p-2 '>
                                        <div className='w-fit mx-2 h-[21px] font-normal text-[12px] cursor-pointer '>{tag}</div></div>
                                    )
                             })}
                     </div>
                     <div className='w-[357px] h-[40px] mt-[10px] flex'>
                         <div className='w-[130px] h-[24px] ml-[20px] font-normal text-[16px] mt-[7px]'>Referral Amount</div>
                         <div className='w-[55px] h-[36px] ml-[10px] font-semibold text-[24px]'>{value.referralAmount}</div>
                     </div>
                 </div>
                   </div>
                })}
            </div>
                <div>
                    <div className='mt-[50px] ml-[38px] md:ml-[187px] md:mt-[60px] text-[#800080]'>Terms & Conditions</div>
                </div>
        </div>
  )
}

export default Page2