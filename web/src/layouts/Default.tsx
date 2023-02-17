import { useState } from 'react'
import { Outlet } from "react-router-dom";
import useLocalStorage from 'use-local-storage'
import { Sidebar } from '../components/Sidebar'
import '../styles/default-layout.css'

export function Default() {
	const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const [theme, setTheme] = useState(isDarkTheme ? 'dark' : 'light')

	return (
		<div className="layout" data-theme={theme}>
			<Sidebar />
			<div className="content">
				<Outlet />
			</div>
		</div>
	)
}