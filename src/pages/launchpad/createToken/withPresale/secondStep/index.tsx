import LockToken from "./LockToken";
import Preview from "./Preview";

const WithPresaleSecondStep: React.FC = () => {
  return (
    <div className="bg-lightColor py-10 px-5 rounded-lg flex flex-wrap">
      <LockToken />
      <Preview />
    </div>
  )
}
export default WithPresaleSecondStep;