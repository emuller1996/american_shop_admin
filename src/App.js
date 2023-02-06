import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Products from 'pages/Products';
import Tables from 'pages/Tables';
import Maps from 'pages/Maps';
import CreateProducts from 'pages/Products/CreateProduct';
import Footer from 'components/Footer';

// Tailwind CSS Style Sheet
import 'react-toastify/dist/ReactToastify.css';

import 'assets/styles/tailwind.css';

import { ToastContainer } from 'react-toastify';
import Category from 'pages/Products/Category';

function App() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/Productos" component={Products} />
                    <Route exact path="/Productos/CrearNuevo" component={CreateProducts} />
                    <Route exact path="/Productos/Categorias" component={Category} />


                    <Route exact path="/tables" component={Tables} />
                    <Route exact path="/maps" component={Maps} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
                <ToastContainer
                    position="top-center"
                    autoClose={1500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </>
    );
}

export default App;
