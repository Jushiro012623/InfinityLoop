import type { FormProps } from '@heroui/react'
import React from 'react'
import { Form } from 'react-router'

const CustomForm = ({onSubmit, children}: React.PropsWithChildren<FormProps>) => {
    
  return (
    <Form className="flex w-[450px] dark:bg-[#18181a] flex-col items-center px-8 pb-12  pt-5 border border-gray-200 dark:border-[#1f1e23]  rounded-xl shadow-md font-figtree" 
        onSubmit={onSubmit}
    >
        {children}
    </Form>
  )
}

export default CustomForm