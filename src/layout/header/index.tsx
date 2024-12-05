import { Link } from "react-router-dom"
import ConnectWalletBtn from "./connect-wallet-btn"
import SelectChainBtn from "./select-chain-btn"
import MobileView from "./mobile-view"
import { useEffect, useState } from "react"
import Resource from "./resource"

export default function Header() {
    const [clicked, setClicked] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 960) {
                setClicked(false)
            }
        }

        window.addEventListener('resize', handleResize)
    }, [])

    return (
        <div className="relative">
            <nav className="sticky top-0 left-0 w-full flex justify-between items-center border-b border-borderColor bg-bgColor z-[9999]">
                <div className="w-[20vw] lg:w-[17vw] py-5 pl-[4.3vw] lg:pl-[2.2vw] flex items-center select-none">
                    <Link to='/' className="flex items-center cursor-pointer lg-max:w-max">
                        <img src="/assets/images/HYD.png" alt="logo" className="w-12 lg:w-[44px] xl:w-[48px] 2xl:w-[52px]" />
                        <h4 className="ml-4 hidden md:block lg-max:text-2xl">HYDRA</h4>
                    </Link>
                </div>
                <div className="flex-1">
                    <div className="lg-max:block hidden">
                        <div className="ml-4 w-[24px] h-20 cursor-pointer relative" onClick={() => setClicked(!clicked)}>
                            <span className={"menu-top-line absolute bg-white h-[1px] w-full duration-150" + (clicked ? ' top-1/2 translate-x-[-0.5px] rotate-45' : ' top-[45%]')} />
                            <span className={"menu-bottom-line absolute bg-white h-[1px] w-full duration-150" + (clicked ? ' top-1/2 translate-x-[-0.5px] -rotate-45' : ' top-[55%]')} />
                        </div>
                    </div>
                    <div className="flex justify-between items-center border-l border-borderColor text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] lg-max:hidden pr-[2vw]">
                        <Resource />
                        {/* <div className="w-[79.5%] flex items-center justify-evenly">
                            <DAOGovernance />
                            <Launchpad />
                            <NFTMarketplace />
                            <Dex />
                            <Socials />
                        </div> */}
                    </div>
                </div>
                <div className="flex justify-end xl:gap-10 pr-[4.3vw]">
                    <SelectChainBtn />
                    <ConnectWalletBtn />
                </div>
            </nav>
            {clicked && (<MobileView setClicked={setClicked} />)}
        </div>
    )
}

