import { lazy } from "react"

import { Navigate } from "react-router-dom"

import Loader from "src/components/Loader"
import Complaints from "src/content/pages/Complaints"
import BaseLayout from "src/layout/Base"
import Sidebar from "src/layout/Sidebar"
import { AuthRoute } from "./AuthRoute"
import { ProtectedRoute } from "./ProtectedRoute"

//?  PAGES
//* LOGIN PAGE
const LoginPage = Loader(lazy(() => import('src/content/pages/Login')))
//* END LOGIN PAGE

//* DASHBOARD PAGE
const DashboardPage = Loader(lazy(() => import('src/content/pages/Dashboard')))
//* END DASHBOARD PAGE

//* DASHBOARD PAGE
const UsersPage = Loader(lazy(() => import('src/content/pages/Users')))
//* END DASHBOARD PAGE

export const routes = [
	{
		path: "",
		element: <AuthRoute><BaseLayout /></AuthRoute>,
		children: [
			{
				// Ruta por defecto
				path: "",
				element: <Navigate to="/login" />
			},
			{
				path: "/login",
				element: <LoginPage />
			}
		]
	},
	{
		path: "dashboard",
		element: <ProtectedRoute><Sidebar /></ProtectedRoute>,
		children: [
			{
				path: "",
				element: <DashboardPage />
			}
		]
	},
	{
		path: "denuncias",
		element: <ProtectedRoute><Sidebar /></ProtectedRoute>,
		children: [
			{
				path: "",
				element: <Complaints />
			}
		]
	},
	{
		path: "usuarios",
		element: <ProtectedRoute><Sidebar /></ProtectedRoute>,
		children: [
			{
				path: "",
				element: <UsersPage />
			}
		]
	},
]