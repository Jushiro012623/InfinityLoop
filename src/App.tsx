import React from 'react'
import Root from "@/router";
import { HeroUIProvider } from '@heroui/react';
import {ToastProvider} from "@heroui/toast";

const App = () => {
  return (
    <React.Fragment>
        <HeroUIProvider>
            <ToastProvider placement="top-right" toastOffset={60}/>
            <Root />
        </HeroUIProvider>
    </React.Fragment>
  )
}

export default App