import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'i18n';
import { ThemeProvider } from '@material-ui/core';
import { theme } from 'theme';
import { RTL } from 'components/RTL';
import Layout from 'components/layout';
import { useEffect } from 'react';
import AuthProvider from 'providers/AuthProvider';

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement?.removeChild(jssStyles);
		}
	}, []);

	return (
		<RTL>
			<ThemeProvider theme={theme}>
				<AuthProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</AuthProvider>
			</ThemeProvider>
		</RTL>
	);
}
export default MyApp;
