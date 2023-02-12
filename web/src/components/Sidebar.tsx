import { Link, NavLink } from 'react-router-dom'
import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle } from 'phosphor-react'
import Logo from '../assets/Logo.svg'
import '../styles/sidebar.css'

export function Sidebar() {
	return (
		<aside className="sidebar">
			<img src={Logo} alt="Logo" className="logo" />

			<nav className="main-navigation">
				<NavLink to="/">
					<House weight="fill" />
					Home
				</NavLink>
				<Link to="/">
					<Hash />
					Explore
				</Link>
				<Link to="/">
					<Bell />
					Notifications
				</Link>
				<Link to="/">
					<Envelope />
					Messages
				</Link>
				<Link to="/">
					<BookmarkSimple />
					Bookmarks
				</Link>
				<Link to="/">
					<FileText />
					Lists
				</Link>
				<Link to="/">
					<User />
					Profile
				</Link>
				<Link to="/">
					<DotsThreeCircle />
					More
				</Link>
			</nav>

			<button className="new-tweet" type="button">Tweet</button>
		</aside>
	)
}