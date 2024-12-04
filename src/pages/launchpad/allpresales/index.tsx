import { useState } from "react";
import Toolbar from "./toolbar";
import Steps from "./Steps";
import NFTList from "./list";

const AllPresales: React.FC = () => {
  const [style, setStyle] = useState<string>("apps");
  const [tab, setTab] = useState<string>("all_presales");
  const [step, setStep] = useState<string>("Live");

  return (
    <div className="relative">
      <Toolbar style={style} setStyle={setStyle} tab={tab} setTab={setTab} />
      <Steps step={step} setStep={setStep} />
      <NFTList step={step} />
    </div>
  )
}
export default AllPresales;