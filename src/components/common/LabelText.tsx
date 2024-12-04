const LabelText: React.FC<{ children: string }> = ({ children }) => {
  return (
    <p className="text-[15px] mb-1">{children}</p>
  )
}
export default LabelText;