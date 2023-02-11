import './styles/global.css'
import Logo from './assets/Logo.svg'
import { RouterProvider } from "react-router-dom";
import { router } from './routes'
import { Sidebar } from './components/Sidebar'

function App() {

	return (
		<div className="layout">
			<Sidebar />
			<div className="content">
				<RouterProvider router={router} />
			</div>
		</div>
	)
}

export default App
