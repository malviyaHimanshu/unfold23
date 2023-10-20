import App from "next/app";
import cookies from "next-cookies";

import UserProvider from "../context/UserContext";
import Layout from "../components/layout";
import React from "react";
import { useRouter } from "next/router";

import "typeface-nunito-sans";
import "typeface-roboto";
import "../shared/global.scss";

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Canvas App',
  projectId: '2b8d7b07147c502209a093973cdc4f47',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

const MyApp = ({ Component, pageProps, isAuthenticated }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider coolMode chains={chains} theme={lightTheme({
        accentColor:"#303030",
        accentColorForeground:"#F7F6F1",
        borderRadius:"none",
        fontStack:"system"
      })}>
        <UserProvider isAuthenticated={isAuthenticated}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

MyApp.getInitialProps = async (context) => {
  let isAuthenticated = false;

  // WARNING - We only check if a cookie called token is present
  // We do not verify the token on the server at this point
  // In this case, it might be fine since we only need the auth state
  // for UI purposes. Any sensitive data fetch is secured separately
  const { token } = cookies(context.ctx);
  if (token) {
    isAuthenticated = true;
  }

  const appProps = await App.getInitialProps(context);
  return { ...appProps, isAuthenticated };
};

export default MyApp;
