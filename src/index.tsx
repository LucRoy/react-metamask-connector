// index.tsx
import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App'
import { DAppProvider, Config, Chain, Mainnet, DEFAULT_SUPPORTED_CHAINS } from '@usedapp/core'

export const WallabyChain: Chain = {
  chainId: 31415,
  chainName: 'Filecoin - Wallaby testnet',
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0xa6Ac206000C7b3525Fe88Fc58c7ce854519aa29e',
  rpcUrl: 'https://wallaby.node.glif.io/rpc/v0',
  blockExplorerUrl: 'https://explorer.glif.io',
  getExplorerAddressLink: (address: string) => `https://explorer.glif.io/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) => `https://explorer.glif.io/wallaby/tx/${transactionHash}`,
}

const config: Config = {
  readOnlyChainId: WallabyChain.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: 'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
    [WallabyChain.chainId]: 'https://wallaby.node.glif.io/rpc/v0',
  },
  networks: [WallabyChain],
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
  {/* 
     Wrap our app in the provider, config is required, 
      but can be left as an empty object: 
  */}
  <DAppProvider config={config}>
    <App />
  </DAppProvider> 
</React.StrictMode>,
);