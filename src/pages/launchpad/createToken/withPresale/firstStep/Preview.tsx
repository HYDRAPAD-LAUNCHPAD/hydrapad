// import PreviewBox from "@/components/common/PreviewBox";
import PreviewLink from "@/components/common/PreviewLink";
import PreviewText from "@/components/common/PreviewText";
import { FirstFormType } from ".";

interface PropsType {
  form: FirstFormType
}
const Preview: React.FC<PropsType> = ({ form }) => {
  return (
    <div className="w-full md:w-1/2 px-8">
      <h5 className="mb-5">PREVIEW</h5>
      {/* <PreviewBox name={form.name} symbol={form.symbol} /> */}
      <div className="bg-lighterColor mt-5 p-5 rounded-lg">
        <h6 className="text-[18px] mb-10">Token Information</h6>
        <PreviewText name="Name" value={<span>{form.name}</span>} />
        <PreviewText name="Symbol" value={<span>{form.symbol}</span>} />
        <PreviewText name="Decimals" value={<span>{form.decimals}</span>} />
        <PreviewText name="Max Supply" value={<span>{form.maxSupply}</span>} />
        <PreviewText name="Token Contact Address" value={<PreviewLink to="#" text="ESZrirvWmzfasUxR3Q7iaiX8R48JYurrMhrZ9DeSLuae" />} />
        <PreviewText border={false} name="Token Creator Address" value={<PreviewLink to="#" text="ESZrirvWmzfasUxR3Q7iaiX8R48JYurrMhrZ9DeSLuae" />} />
      </div>
    </div>
  )
}
export default Preview;