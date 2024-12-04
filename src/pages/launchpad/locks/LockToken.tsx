import CustomInput from "@/components/common/CustomInput";
import CustomSelect from "@/components/common/CustomSelect";
import GradientButton from "@/components/common/GradientButton";
import LabelText from "@/components/common/LabelText";
import { Dispatch, SetStateAction } from "react";

const lockDurationOptions: { title: string, value: string }[] = [
  { title: "3 months", value: '3m' },
  { title: "6 months", value: '6m' },
  { title: "1 year", value: '1y' },
  { title: "1.5 years", value: "1.5y" },
  { title: "2 years", value: "2y" },
]

interface LockTokenProps {
  setEnabled: Dispatch<SetStateAction<boolean>>;
}

const LockToken: React.FC<LockTokenProps> = ({ setEnabled }) => {

  return (
    <div className="w-full md:w-1/2 mb-10 md:mb-0 px-8">
      <h5 className="mb-6">LOCK TOKEN</h5>
      <div className="mb-5">
        <LabelText>Token Contract Address</LabelText>
        <CustomInput placeholder="Enter Token contract address" />
      </div>
      <div className="mb-10 mt-5">
        <LabelText>Token Lock amount</LabelText>
        <CustomInput placeholder="Enter lock amount" type="number" min={0} />
        </div>
      <div className="mb-10 mt-5">
        <LabelText>Choose Lock Duration</LabelText>
        <CustomSelect options={lockDurationOptions} label="Select lock duration" />
      </div>
      <GradientButton className="w-full rounded-lg mb-4">Create Lock</GradientButton>
      <button className="px-5 py-2 w-full rounded-lg bg-borderColor mb-8" onClick={() => setEnabled(false)}>Back</button>
    </div>
  )
}
export default LockToken; 