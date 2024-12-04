import LockToken from "./LockToken";
import Preview from "./Preview";

const Locks: React.FC = () => {
  return (
    <div className="h-[calc(100vh-178px)] overflow-y-scroll pb-3">
      <div className="bg-lightColor py-10 px-5 rounded-lg flex flex-wrap">
        <LockToken />
        <Preview />
      </div>
    </div>
  )
}
export default Locks;