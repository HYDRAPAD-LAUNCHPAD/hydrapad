import CustomInput from "@/components/common/CustomInput";
import CustomSelect from "@/components/common/CustomSelect";
import GradientButton from "@/components/common/GradientButton";
import LabelText from "@/components/common/LabelText";
import MoveButton from "@/components/common/MoveButton";
import { useNavigate } from "react-router";

const lockAmountOptions: { title: string, value: string }[] = [
  { title: "10%", value: '10%' },
  { title: "15%", value: '15%' },
  { title: "20%", value: '20%' },
]
const lockDurationOptions: { title: string, value: string }[] = [
  { title: "3 months", value: '3m' },
  { title: "6 months", value: '6m' },
  { title: "1 year", value: '1y' },
  { title: "1.5 years", value: "1.5y" },
  { title: "2 years", value: "2y" },
]

const LockToken: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/create-token/with-presale/third-step");
  }

  const handleBack = () => {
    navigate('/create-token/with-presale/first-step');
  }
  return (
    <div className="w-full md:w-1/2 mb-20 md:mb-0 px-8">
      <h5 className="mb-6">LOCK TOKEN</h5>
      <div className="mb-5">
        <LabelText>Token Contract Address</LabelText>
        <CustomInput placeholder="Enter Token contract address" />
      </div>
      <div className="mb-10 mt-5">
        <LabelText>Token Lock amount</LabelText>
        <CustomSelect options={lockAmountOptions} label="Select lock amount" />
      </div>
      <div className="mb-10 mt-5">
        <LabelText>Choose Lock Duration</LabelText>
        <CustomSelect options={lockDurationOptions} label="Select lock duration" />
      </div>
      <GradientButton className="w-full rounded-lg mb-8">Create Lock</GradientButton>
      <div className="flex justify-between">
        <MoveButton onClick={handleBack}>Back</MoveButton>
        <MoveButton onClick={handleNext}>Next</MoveButton>
      </div>
    </div>
  )
}
export default LockToken; 