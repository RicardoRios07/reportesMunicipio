import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import ThemeProviderWrapper from './theme/ThemeProvider'
import SidebarProvider from './context/SidebarContext'
import { BrowserRouter } from 'react-router-dom'
import SessionProvider from './context/SessionContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProviderWrapper>
			<BrowserRouter>
				<SessionProvider>
					<SidebarProvider>
						<App />
					</SidebarProvider>
				</SessionProvider>
			</BrowserRouter>
		</ThemeProviderWrapper>
	</React.StrictMode>,
)
