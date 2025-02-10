import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
    return (
        <div>
            <Header />

            <div>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Layouts;