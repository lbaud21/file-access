import FileAccessForm from "./components/FileAccessForm";
import "@rainbow-me/rainbowkit/styles.css";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { filecoin, filecoinCalibration } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { GlobalStyle } from "./components/FileAccessForm.style";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";

const { chains, publicClient } = configureChains(
  [filecoin, filecoinCalibration],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Only File",
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
        <GlobalStyle />
        <FileAccessForm />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
