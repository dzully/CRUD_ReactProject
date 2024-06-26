import { Divider } from "@shared/ui/divider";

type FormSectionProps = {
  descriptionNode?: React.ReactNode;
  formInputNode: React.ReactNode;
  socialAuthNode?: React.ReactNode;
  title?: string;
};

export const FormSection = ({
  descriptionNode,
  formInputNode,
  socialAuthNode,
  title = "Sign In",
}: FormSectionProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center shadow-lg">
      <div className="w-full max-w-md p-4 space-y-4 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="text-2xl font-bold text-center">{title}</h2>
          {descriptionNode}
        </div>
        {formInputNode}
        <Divider />
        {socialAuthNode}
      </div>
    </div>
  );
};
