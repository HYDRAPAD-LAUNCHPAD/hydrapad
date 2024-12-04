import PreviewLink from "@/components/common/PreviewLink";
import PreviewText from "@/components/common/PreviewText";
import { RegularPresaleFormType } from ".";
import PreviewBox from "@/components/common/PreviewBox";

interface PropsType {
  form: RegularPresaleFormType
} 
const Preview: React.FC<PropsType> = ({ form }) => {
  return (
    <div className="w-full md:w-1/2 px-8">
      <h5 className="mb-5">PREVIEW</h5>
      <PreviewBox name={form.name} symbol={form.symbol} />
      <div className="bg-lighterColor mt-5 p-5 rounded-lg">
        <h6 className="text-[18px] mb-10">Token Information</h6>
        <PreviewText name="Name" value={<span>{form.name}</span>} />
        <PreviewText name="Symbol" value={<span>{form.symbol}</span>} />
        <PreviewText name="Decimals" value={<span>6</span>} />
        <PreviewText name="Presale Allocation" value={<span>XXXXXXX</span>} />
        <PreviewText name="Token Contact Address" value={<PreviewLink to="#" text={form.contractAddress} />} />
        <PreviewText border={false} name="Token Creator Address" value={<PreviewLink to="#" text={form.creatorAddress} />} />
        <PreviewText name="Max Supply" value={<span>XXXXXX</span>} />
        <PreviewText border={false} name="Locked amount" value={<span>XXXXXX</span>} />
        </div>
    </div>
  )
}
export default Preview;