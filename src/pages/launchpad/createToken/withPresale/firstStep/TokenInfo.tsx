import CustomInput from "@/components/common/CustomInput";
import CustomSelect from "@/components/common/CustomSelect";
import GradientButton from "@/components/common/GradientButton";
import LabelText from "@/components/common/LabelText";
import MoveButton from "@/components/common/MoveButton";
import { useNavigate } from "react-router";
import { FirstFormType } from ".";

const chainOptions: { title: string, value: string }[] = [
  { title: "A", value: "a" },
  { title: "B", value: "b" },
  { title: "C", value: "c" },
]
const decimalOptions: { title: string, value: string }[] = [
  { title: "6", value: "6" },
  { title: "18", value: "18" },
]
interface PropsType {
  form: FirstFormType,
  setForm: (value: FirstFormType) => void;
}

const TokenInfo:  React.FC<PropsType> = ({ form, setForm }) => {

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/create-token/with-presale/second-step")
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (key: string, value: string) => {
    setForm({
      ...form,
      [key]: value
    })
  }
  return (
    <div className="w-full md:w-1/2 mb-20 md:mb-0 px-8">
      <h5>TOKEN INFORMATION</h5>
      <div className="my-5">
        <LabelText>Select Chain</LabelText>
        <CustomSelect onChange={(value) => handleSelectChange("chain", value || '')} options={chainOptions} label="Select chain to launch" />
      </div>
      <GradientButton className="mb-8">Fair Launch Presale</GradientButton>
      <div className="mb-5">
        <LabelText>Token Name</LabelText>
        <CustomInput name="name" onChange={handleInputChange} placeholder="Enter Token name" />
      </div>
      <div className="mb-5">
        <LabelText>Symbol (Max 4)</LabelText>
        <CustomInput name="symbol" onChange={handleInputChange} placeholder="Enter Token symbol" />
      </div>
      <div className="mb-5">
        <LabelText>Decimals</LabelText>
        <CustomSelect options={decimalOptions} onChange={value => handleSelectChange("decimals", value || '')} />
      </div>
      <div className="mb-10">
        <LabelText>Max Supply</LabelText>
        <CustomInput  name="maxSupply" min={0} type="number" onChange={handleInputChange} placeholder="Enter Max Supply" />
      </div>
      <GradientButton className="w-full rounded-lg mb-8">Create Token</GradientButton>
      <div className="flex justify-between">
        <MoveButton disabled={true}>Back</MoveButton>
        <MoveButton onClick={handleNext}>Next</MoveButton>
      </div>
    </div>
  )
}
export default TokenInfo; 