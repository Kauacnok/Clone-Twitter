import { useState } from 'react'
import { Outlet } from "react-router-dom";
import useLocalStorage from 'use-local-storage'
import { Sidebar } from '../components/Sidebar'
import '../styles/default-layout.css'

export function Default() {
	const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const [theme, setTheme] = useState(isDarkTheme ? 'dark' : 'light')
	document.body.style.backgroundColor = isDarkTheme ? '#121214' : '#FFFFFF'

	return (
		<div className="layout" data-theme={theme}>
			<Sidebar themeName={theme} setTheme={setTheme} />
			<div className="content">
				<Outlet />
			</div>
		</div>
	)
}