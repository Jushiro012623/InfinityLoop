import { Fragment, type FC } from 'react'
import Root from "@/router";
import { HeroUIProvider } from '@heroui/react';
import {ToastProvider} from "@heroui/toast";

const App: FC = () => {
    return (
    <Fragment>
        <HeroUIProvider>
            <ToastProvider placement="top-right" toastOffset={75}/>
            <Root />
        </HeroUIProvider>
    </Fragment>
  )
}

export default App