import CreateTokenCard from "./CreateTokenCard";

const CreateTokenList: React.FC = () => {
  return (
    <div className="h-[calc(100vh-178px)] overflow-y-scroll py-10">
      <div className="py-[50px] flex flex-wrap justify-center mb-16">
        <div className="w-full sm:w-3/5 md:w-2/5 2xl:w-1/3 pb-5">
          <CreateTokenCard title="Create Token With Dynamic Fair Launch Presale" href="/with-presale/first-step" image="/assets/images/memo-coin.png" />
        </div>
        <div className="w-full sm:w-3/5 md:w-2/5 2xl:w-1/3 pb-5">
          <CreateTokenCard title="Create ERC20 Token Without Presale" href="/no-presale" image="/assets/images/ERC-coin.png" />
        </div>
      </div>
      <div className="border-2 border-borderColor p-5 lg:mx-20 rounded-lg">
        <p className="text-[#8C8C8C] text-[16px] font-primary">
          Terms & Conditions:<br /><br />
          1. The Terms & Conditions outline the process for creating a token with a Dynamic Fairlaunch Presale. Users can create a token and presale without paying service fees, but a 5% platform fee is charged on the total funds raised if the presale is successful. Token creators have the option to lock up 10% to 20% of the tokens for a specified period, with these tokens being unlocked after the lockup ends. The remaining tokens are added to the presale, where investors can trade during the live event, helping to determine the token price. To be listed on a decentralized exchange (Dex), the presale must raise at least 30% of the target funds. After the presale, automated liquidity is added to the Dex, and LP tokens are burned, which helps prevent rug pulls and ensures community trust.<br /><br />
          2. The creation of an ERC20 token without a presale will incur a fee of $20 USDC, and the total supply of the token will be transferred directly to the token creator's wallet.
        </p>
      </div>
    </div>
  )
}
export default CreateTokenList;