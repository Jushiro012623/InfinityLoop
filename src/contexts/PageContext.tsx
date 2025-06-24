import React, { createContext, useState } from 'react'



const PageContextProvider = createContext<any>(undefined) 

const PageContext = () => {

    const [currentPage, setCurrentPage] = useState<any>()



  return (
    <div>PageContext</div>
  )
}

export default PageContext