import './styles/global.css'
import Logo from './assets/Logo.svg'
import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Separator } from './components/Separator'


function App() {

	return (
		<div className="layout">
			<Sidebar />
			<div className="content">
				<main className="timeline">
					<Header title="Home" />
					<form className="new-tweet-form">
						<label htmlFor="tweet">
							<img src="https://avatars.githubusercontent.com/u/74678945?v=4" alt="Kauacnok avatar" />
							<textarea id="tweet" placeholder="What's happening?" />
						</label>
						<button type="submit">Tweet</button>
					</form>

					<Separator />

					<Tweet />
					<Tweet />
					<Tweet />
					<Tweet />
				</main>
			</div>
		</div>
	)
}

export default App
