import './assets/css/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Congratulations from './pages/Congratulations';
import NotFound from './pages/NotFound';
import Provider from './helpers/hooks/useGlobalContext';
function App() {
	return (
		<Provider>
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route path="/categories/:idc/products/:idp" element={<Details />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/congratulation" element={<Congratulations />} />
					<Route path="*" element={NotFound} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
