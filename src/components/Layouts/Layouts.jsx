import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
    return (
        <div className='w-full'>
            <Header />

            <div>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Layouts;