import CustomInput from "@/components/common/CustomInput";
import CustomSelect from "@/components/common/CustomSelect";
import GradientButton from "@/components/common/GradientButton";
import LabelText from "@/components/common/LabelText";
import { NoPresaleFormType } from ".";
import React from "react";

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
  form: NoPresaleFormType,
  setForm: (value: NoPresaleFormType) => void;
}

const TokenInfo: React.FC<PropsType> = ({ form, setForm }) => {

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
    <div className="w-full md:w-1/2 px-8 mb-10 md:mb-0">
      <h5>TOKEN INFORMATION</h5>
      <div className="mb-28 mt-5">
        <LabelText>Select Chain</LabelText>
        <CustomSelect onChange={(value) => handleSelectChange("chain", value || '')} options={chainOptions} label="Select chain to launch" />
      </div>
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
        <CustomInput name="maxSupply" onChange={handleInputChange} placeholder="Enter Max Supply" />
      </div>
      <GradientButton className="w-full rounded-lg mb-8">Create Token</GradientButton>
    </div>
  )
}
export default TokenInfo; 