import { ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/globals.css';
import { ZksyncSepoliaTestnet } from "@thirdweb-dev/chains";
import Navbar from '../components/Navbar';

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebProvider
			activeChain={ ZksyncSepoliaTestnet }
			clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
		><Navbar/>
			<Component {...pageProps} />
		</ThirdwebProvider>
	);
}

export default MyApp;