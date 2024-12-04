import { useState } from "react";
import Preview from "./Preview";
import TokenInfo from "./TokenInfo";

export interface FirstFormType {
  name: string;
  symbol: string;
  decimals: number;
  maxSupply: string
}

const initialForm: FirstFormType = {
  name: "",
  symbol: "",
  decimals: 6,
  maxSupply: ""
}
const WithPresaleFirstStep: React.FC = () => {
  const [form, setForm] = useState<FirstFormType>({ ...initialForm })
  
  return (
    <div className="bg-lightColor flex-wrap py-10 px-5 rounded-lg flex">
      <TokenInfo form={form} setForm={setForm} />
      <Preview form={form} />
    </div>
  )
}
export default WithPresaleFirstStep;