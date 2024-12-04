import { useState } from "react";
import Preview from "./Preview";
import TokenInfo from "./TokenInfo";

export interface ThirdFormProps {
  name: string;
  symbol: string;
  decimals: number;
  maxSupply: string;
  image: string;
  dex: string;
}

const initialForm: ThirdFormProps = {
  name: "",
  symbol: "",
  decimals: 6,
  maxSupply: "",
  image: "",
  dex: ""
}

const WithPresaleThirdStep: React.FC = () => {
  const [form, setForm] = useState<ThirdFormProps>({ ...initialForm })
  return (
    <div className="bg-lightColor py-10 px-5 rounded-lg flex flex-wrap">
      <TokenInfo setForm={setForm} form={form} />
      <Preview form={form} />
    </div>
  )
}
export default WithPresaleThirdStep;