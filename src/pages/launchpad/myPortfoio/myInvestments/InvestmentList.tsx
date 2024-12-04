import { presaleData } from "@/components/utils/constants";
import InvestmentCard from "./InvestmentCard";
import { PresaleCardType } from "../../managePresale/PresaleCard";

const InvestmentList: React.FC<{ step: string }> = ({ step }) => {
  return (
    <div className="overflow-y-scroll h-[calc(100vh-318.55px)]">
      {
        presaleData.filter((item: PresaleCardType) => item.step === step).map((item: PresaleCardType, index: number) => (
          <div key={index} className="w-full">
            <InvestmentCard {...item} />
          </div>

        ))
      }
    </div>
  )
}
export default InvestmentList;