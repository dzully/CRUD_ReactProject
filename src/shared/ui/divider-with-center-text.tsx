type DividerWithCenterTextProps = {
  text?: string;
};

export const DividerWithCenterText = ({
  text = "or sign up with",
}: DividerWithCenterTextProps) => {
  return (
    <div className="flex items-center">
      <div className="flex-1 h-0.5 bg-gray-300" />
      <div className="px-2 text-sm text-gray-500">{text}</div>
      <div className="flex-1 h-0.5 bg-gray-300" />
    </div>
  );
};
