import './styles/global.css'
import Logo from './assets/Logo.svg'
import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle, Sparkle } from 'phosphor-react'

function App() {

	return (
		<div className="layout">
			<aside className="sidebar">
				<img src={Logo} alt="Logo" className="logo" />

				<nav className="main-navigation">
					<a href="" className="active">
						<House weight="fill" />
						Home
					</a>
					<a href="">
						<Hash />
						Explore
					</a>
					<a href="">
						<Bell />
						Notifications
					</a>
					<a href="">
						<Envelope />
						Messages
					</a>
					<a href="">
						<BookmarkSimple />
						Bookmarks
					</a>
					<a href="">
						<FileText />
						Lists
					</a>
					<a href="">
						<User />
						Profile
					</a>
					<a href="">
						<DotsThreeCircle />
						More
					</a>
				</nav>

				<button className="new-tweet" type="button">Tweet</button>
			</aside>
			<div className="content">
				<main className="timeline">
					<div className="timeline-header">
						Home
						<Sparkle />
					</div>
					<form className="new-tweet-form">
						<label htmlFor="tweet">
							<img src="https://avatars.githubusercontent.com/u/74678945?v=4" alt="Kauacnok avatar" />
							<textarea id="tweet" placeholder="What's happening?" />
						</label>
						<button type="submit">Tweet</button>
					</form>

					<div className="separator" />
				</main>
			</div>
		</div>
	)
}

export default App
