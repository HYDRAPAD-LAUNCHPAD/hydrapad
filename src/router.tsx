import Layout from "@/layout";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import AllPresales from "@/pages/launchpad/allpresales";
import CreateToken from "./pages/launchpad/createToken";
import CreateTokenList from "./pages/launchpad/createToken/createTokenList";
import WithPresaleFirstStep from "./pages/launchpad/createToken/withPresale/firstStep";
import WithPresale from "./pages/launchpad/createToken/withPresale";
import WithPresaleSecondStep from "./pages/launchpad/createToken/withPresale/secondStep";
import WithPresaleThirdStep from "./pages/launchpad/createToken/withPresale/thirdStep";
import NoPresale from "./pages/launchpad/createToken/noPresale";
import CreateRegularPresale from "./pages/launchpad/createRegularPresale";
import Locks from "./pages/launchpad/locks";
import ContactUs from "./pages/launchpad/contactus";
import MyPortfolio from "./pages/launchpad/myPortfoio";
import Tokens from "./pages/launchpad/myPortfoio/Tokens";
import MyInvestments from "./pages/launchpad/myPortfoio/myInvestments";
import CreateAirdrop from "./pages/launchpad/createAirdrop";
import ManagePresale from "./pages/launchpad/managePresale";
import ManagePosition from "./pages/launchpad/managePosition";
import LaunchPad from "./pages/launchpad";
import PresaleDetail from "./pages/launchpad/presaleDetail";

const element = createRoutesFromElements(
    <>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<LaunchPad />}>
                <Route path="" element={<AllPresales />} />
                <Route path="create-token" element={<CreateToken />}>
                    <Route path="" element={<CreateTokenList />} />
                    <Route path="with-presale" element={<WithPresale />}>
                        <Route path="first-step" element={<WithPresaleFirstStep />} />
                        <Route path="second-step" element={<WithPresaleSecondStep />} />
                        <Route path="third-step" element={<WithPresaleThirdStep />} />
                    </Route>
                    <Route path="no-presale" element={<NoPresale />} />
                </Route>
                <Route path="create-regular-presale" element={<CreateRegularPresale />} />
                <Route path="my-portfolio" element={<MyPortfolio />}>
                    <Route path="tokens" element={<Tokens />} />
                    <Route path="my-investments" element={<MyInvestments />} />
                </Route>
                <Route path="locks" element={<Locks />} />
                <Route path="create-airdrop" element={<CreateAirdrop />} />
                <Route path="manage-presale" element={<ManagePresale />} />
                <Route path="apply-for-audit" element={<ContactUs />} />
                <Route path="doc" element={<ContactUs />} />
                <Route path="market-makers" element={<ContactUs />} />
                <Route path="advertising-orgs" element={<ContactUs />} />
                <Route path="kol-groups" element={<ContactUs />} />
                <Route path="contact-us" element={<ContactUs />} />
            </Route>
            <Route path="presale-detail/:id/:isRegular" element={<PresaleDetail/>} />
            <Route path="manage-position/:isRegular" element={<ManagePosition />} />
        </Route>
    </>
)
export const router = createBrowserRouter(element);