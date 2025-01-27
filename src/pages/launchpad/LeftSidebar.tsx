import { Link, useLocation } from "react-router-dom";
import clsx from 'clsx';
import { Props } from '../../types'
// import TwitterSvg from "@/components/icons/twitter-svg";
// import TelegramSvg from "@/components/icons/Telegram-svg";
// import DiscordSvg from "@/components/icons/Discord-svg";

interface listType {
  title: string;
  url: string;
}

const listArrOne: listType[] = [
  { title: "All Presales", url: "/" },
  { title: "➕ Create Token", url: "/create-token" },
];

const listArrTwo: listType[] = [
  { title: "➕ Create Presale", url: "/create-regular-presale" },
  { title: "⚙️ Manage Presale", url: "/manage-presale" },
  { title: "🔐 Lock", url: "/locks" },
  { title: "📈 Portfolio", url: "/my-portfolio/tokens" },
  { title: "🍭 Airdrop", url: "/create-airdrop" },
];

const listArrThree: listType[] = [
  // { title: "📩 Contact Us", url: "/contact-us" },
  // { title: "Doc", url: "/doc" },
  // { title: "Apply For Audit", url: "/apply-for-audit" },
  // { title: "Market Makers", url: "/market-makers" },
  // { title: "Advertising Orgs", url: "/advertising-orgs" },
  // { title: "KOL Groups", url: "/kol-groups" },
]

const LeftSidebar: React.FC<Props> = ({ setContactVisible }) => {
  return (
    <div className="px-3 py-8 h-[calc(100vh-85px)] overflow-y-scroll flex flex-col justify-between">
      <div>
        <ul className="">
          {
            listArrOne.map((item: listType) => (
              <LinkText key={item.title} title={item.title} url={item.url} />
            ))
          }
        </ul>
        {/* <hr className="mt-10 border-borderColor" /> */}
        <ul className="">
          {
            listArrTwo.map((item: listType) => (
              <LinkText key={item.title} title={item.title} url={item.url} />
            ))
          }
        </ul>
        {/* <hr className="mt-10 border-borderColor" /> */}
        <ul className="">
          {
            listArrThree.map((item: listType) => (
              <LinkText key={item.title} title={item.title} url={item.url} />
            ))
          }
          <li className="flex items-center gap-2 my-2 p-3 font-primary text-[13px] border border-white rounded-md cursor-pointer" onClick={() => setContactVisible(true)}>
            <span>📩 Contact Us</span>
          </li>
        </ul>
        <img className="mt-5" src="/assets/images/hd2.jpg" alt="" />
      </div>
      <div className="">
        {/* <ul>
          <LinkText title="Contact Us" url="/contact-us" />
        </ul>
        <div className="flex">
          <Link to="https://x.com/Hydra_Pad" target="_blank">
            <TwitterSvg className="mr-2 w-7 h-7 cursor-pointer hover:opacity-80 duration-150" />
          </Link>
          <Link to="http://t.me/hydra_pad" target="_blank">
            <TelegramSvg className="mr-2 w-7 h-7 cursor-pointer hover:opacity-80 duration-150" />
          </Link>
          <Link to="http://discord.gg/ESnjKeeRbE" target="_blank">
            <DiscordSvg className="mr-2 w-7 h-7 cursor-pointer hover:opacity-80 duration-150" />
          </Link>
        </div> */}
      </div>
    </div>
  )
}

interface LinkTextProp {
  title: string,
  url: string
}
const LinkText: React.FC<LinkTextProp> = ({ title, url }) => {
  const route = useLocation();
  return (
    <Link to={url}>
      <li className={clsx("flex items-center gap-2 my-2 p-3 font-primary text-[13px] border border-white rounded-md", route.pathname.split("/")[1] === url.split("/")[1] && "gradient-text")}>
        {title === "All Presales" && <img src="/assets/icons/apps.svg" alt="" width="24" height="24" />}
        <span>{title}</span>
      </li>
    </Link>
  )
}
export default LeftSidebar;