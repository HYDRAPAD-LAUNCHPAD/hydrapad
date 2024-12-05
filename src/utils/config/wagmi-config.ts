import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { mainnet, arbitrum, optimism, apeChain, base, bsc, polygon, sonicTestnet, avalanche, sepolia } from 'wagmi/chains'
import { VITE_WALLET_PROJECT_ID } from '../constants/constant'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = VITE_WALLET_PROJECT_ID

// 2. Create wagmiConfig
const metadata = {
  name: 'WHD',
  description: 'White Hat DAO',
  url: 'https://www.whitehatdao.com/', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum, optimism, apeChain, base, bsc, polygon, sonicTestnet, avalanche, sepolia] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})
