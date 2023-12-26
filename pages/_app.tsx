import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
// import { Sepolia } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// const activeChain = "goerli";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
    activeChain={{
      // === Required information for connecting to the network === \\
      chainId: 152, // Chain ID of the network
      // Array of RPC URLs to use
      rpc: ["https://rbn-gcp-australia-southeast1-a-0-b-v2.devnet.redbelly.network:8545/"],
      // === Information for adding the network to your wallet (how it will appear for first time users) === \\
      // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
      nativeCurrency: {
        decimals: 18,
        name: "Redbelly",
        symbol: "RBNT",
      },
      shortName: "Redbelly", // Display value shown in the wallet UI
      slug: "Redbelly", // Display value shown in the wallet UI
      testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
      chain: "Redbelly", // Name of the network
      name: "RedbellyDevNet", // Name of the network
    }}

      clientId={process.env.CLIENT_ID}  
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
