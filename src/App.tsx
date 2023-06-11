import FileAccessForm from "./Components/FileAccessForm";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { filecoin } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [filecoin],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "HackFS",
  projectId: import.meta.env.VITE_WALLET_CONNECT,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <FileAccessForm />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
