import { DividerWithCenterText } from "@shared/ui/divider-with-center-text";

type FormSectionProps = {
  footerNode?: React.ReactNode;
  formInputNode: React.ReactNode;
  socialAuthNode?: React.ReactNode;
  subtitle?: string;
  subtitleActionNode: React.ReactNode;
  title?: string;
};

export const FormSection = ({
  footerNode,
  formInputNode,
  socialAuthNode,
  subtitle = "Already have an account? ",
  subtitleActionNode,
  title = "Create an account",
}: FormSectionProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center shadow-lg">
      <div className="w-full max-w-md p-4 space-y-4 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center flex-col items-center">
          <h2 className="text-2xl font-bold text-center">{title}</h2>
          <span className="text-gray-500">
            {subtitle}
            {subtitleActionNode}
          </span>
        </div>
        {formInputNode}
        <DividerWithCenterText />
        {socialAuthNode}
        {footerNode}
      </div>
    </div>
  );
};
