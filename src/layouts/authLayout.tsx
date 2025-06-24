import SEO from '@/components/helmet';
import { pageMetaList } from '@/config/pagesTitles';
import { Outlet, useLocation } from 'react-router';

const AuthLayout = () => {
    const { pathname } = useLocation();

    const currentMeta = pageMetaList.find(meta => meta.path === pathname);
    document.title = currentMeta?.title ?? 'Infinity Loop'
    return (
        <section className="flex items-center justify-center w-full h-screen">
            <SEO title={document.title} description="Home" />
            <Outlet />
        </section>
    )
}

export default AuthLayout