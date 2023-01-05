import React, { useEffect } from 'react'
import Refer from "../components/Refer";

const Page1 = (props) => {

    const {balance,code,page,setPage}=props;

    useEffect(() => {
        setPage("UI/UX > Refer & Earn")   
    }, [])
    

  return (
    <div>
      <Refer balance={balance} code={code}/>
    </div>
  )
}

export default Page1;