// import { IconDots, IconLoader2 } from "@tabler/icons-react"
import { useState } from "react"
import { useAccount, useChainId, useChains, useSwitchChain } from 'wagmi'

const ConnectWalletBtn = () => {
  const chains = useChains()
  const chainId = useChainId()
  const { switchChain } = useSwitchChain()
  const { isConnected } = useAccount()
  const [openMenu, setOpenMenu] = useState(false)

  return (
    !isConnected ? null :
      <span
        className="inline-block p-2 cursor-pointer relative 2xl:scale-100 xl:scale-90 scale-75 translate-x-[12.5%] lg:translate-x-0"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <div className="bg-[#0A090F] h-min w-max flex gap-2 justify-between items-center px-2">
          <p className="flex items-center gap-4 shrink-text">
            {chains.some(x => x.id === chainId) ?
              <>
                <img src={`/assets/images/chains/${chains.findIndex(x => x.id === chainId) + 1}.png`} width="30" height="30" />
                <span>{chains.find(x => x.id === chainId)?.name}</span>
              </>
              : "Wrong Network"
            }
          </p>
        </div>
        {openMenu &&
          <div className="flex flex-col absolute top-[calc(100%+10px)] right-0 bg-black border border-white" style={{ width: 'max-content' }}>
            {chains.map((x: any, i) =>
              <button className="flex items-center gap-4 transition hover:bg-grey1 px-5 py-2" key={i} onClick={() => switchChain({ chainId: x.id })}>
                <img src={`/assets/images/chains/${i + 1}.png`} width="30" height="30" />
                <span>{x.name} {x.id === chainId && "(Using)"}</span>
              </button>
            )}
          </div>
        }
        <span className="bg-white w-full h-[1px] absolute top-[-4px] left-[4px]" />
        <span className="bg-white h-full w-[1px] absolute bottom-[4px] right-[-4px]" />
        <span className="bg-white w-full h-[1px] absolute bottom-[-4px] right-[4px]" />
        <span className="bg-white h-[70%] w-[1px] absolute bottom-[-4px] left-[-4px]" />
        <span className="bg-white h-[11.312px] w-[1px] absolute bottom-[-5.3px] right-0 rotate-45" />
        <span className="bg-white h-[11.312px] w-[1px] absolute top-[-5.3px] left-0 rotate-45" />
      </span>
  )
}

export default ConnectWalletBtn
