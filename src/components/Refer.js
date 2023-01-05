import React from 'react'


const Refer = (props) => {

  const {balance,code}=props;

  return (
    <div className='flex md:h-fit space-x-20 max-[428px]:-ml-36 max-[428px]:flex-wrap max-[428px]:w-[358px] max-[428px]:h-[
      198px] max-[428px]:mt-12'>
        <div className='-mt-[35px] md:mt-[35px] ml-[180px] md:ml-[187px] h-[188px] w-[486px] flex flex-col w-fit rounded-xl shadow-[0_3px_80px_rgba(0,0,0,0.1);] md:shadow-[0_3px_100px_rgba(0,0,0,0.1);]'>
            <div className='flex flex-wrap '>
                <div className='mx-auto p-3 text-sm h-32'>
                  <div  className='text-[#800080] font-normal text-sm max-[428px]:-ml-4'>Referral Earning</div>
                  <div style={{fontSize:32,marginTop:10}} className=' mt-1 font-medium max-[428px]:-ml-4'>₹ 2,500</div>
                </div>
                <div className=' mx-auto p-3 h-24 text-sm '> 
                  <div className='text-[#800080] font-normal text-sm'>Total Referrals</div>
                  <div style={{fontSize:32,width: 18,height:48,marginTop:10}} className='mt-1 font-medium'>7</div>
               </div>
                <div className=' mx-auto p-3 text-sm h-24 max-[428px]:-mt-10 max-[428px]:ml-3 '>
                  <div  className='text-[#800080] font-normal text-sm'>Wallet Balance</div>
                  <div style={{fontSize:32 ,marginTop:10}}>₹{balance}</div>
                </div>
            </div>
            <div className='max-[428px]:-mt-14 max-[428px]:mr-5'>
              <button style={{width:180,height:40,marginLeft:153,marginTop:-10,borderRadius:20}} className='bg-[#800080] text-white flex flex-row flex-Start py-2 px-4 '>Withdraw Balance</button>
            </div>
    
        </div>
        <div  className='md:bg-white h-48'>
            <div style={{width:300,height:36}} className='ml-16 md:-ml-[36px] font-semibold text-[24px] text-center item-center w-[228px] h-[36px] mt-[30px] text-[#800080] md:font-semibold md:text-2xl'>Your Referral Code</div>
            <div style={{marginTop:5}} className='md:ml-[0px] ml-[101px] h-[63px] w-[355px] md:h-[63px] md:w-[355px] flex md:text-[#800080] justify-center items-center rounded-xl bg-gradient-to-r from-[#FF864C] to-[#800080]'>
              <div className=' h-[59.92px] w-[351px] rounded-xl bg-white '>
                <div className=' text-[20px] mt-[15px] ml-[67px] w-[230px] h-[30px] md:h-10 md:w-[227px] text-center tracking-[0.55em] font-medium'>
                  {code}
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Refer;