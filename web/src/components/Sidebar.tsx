import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle, Pencil } from 'phosphor-react'
import Logo from '../assets/Logo.svg'
import '../styles/sidebar.css'
import "../styles/more-menu-tab.css"

interface SidebarProps {
	themeName: string,
	setTheme: Function
}

export function Sidebar({themeName, setTheme}: SidebarProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	function setMenu() {
		if (isMenuOpen) {
			setIsMenuOpen(false)
			return
		}
		setIsMenuOpen(true)
	}

	function toggleTheme() {
		if (themeName == 'light') {
			setTheme('dark')
			return
		}
		setTheme('light')
	}

	return (
		<aside className="sidebar">
			<img src={Logo} alt="Logo" className="logo" />

			<nav className="main-navigation">
				<NavLink to="/">
					<House weight="fill" />
					<span>Home</span>
				</NavLink>
				<Link to="/">
					<Hash />
					<span>Explore</span>
				</Link>
				<Link to="/">
					<Bell />
					<span>Notifications</span>
				</Link>
				<Link to="/">
					<Envelope />
					<span>Messages</span>
				</Link>
				<Link to="/">
					<BookmarkSimple />
					<span>Bookmarks</span>
				</Link>
				<Link to="/">
					<FileText />
					<span>Lists</span>
				</Link>
				<Link to="/">
					<User />
					<span>Profile</span>
				</Link>
				<button type="button" onClick={setMenu}>
					<DotsThreeCircle />
					<span>More</span>
					{ isMenuOpen && 
						<div className="more-menu-container">
							<p onClick={toggleTheme}>Trocar para o tema { themeName == 'dark' ? 'claro' : 'escuro' }</p>
							<p onClick={setMenu}>Fechar</p>
						</div>
					}

				</button>
			</nav>

			<button className="new-tweet" type="button">
				<Pencil />
				<span>Tweet</span>
			</button>
		</aside>
	)
}