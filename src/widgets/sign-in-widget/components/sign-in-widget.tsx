import { FormSection } from "@entities/sign-in-entities/form-section";
import { MainSection } from "@entities/sign-in-entities/main-section";
import { withAuthentication } from "@features/shared-features/handle-authenticated";
import { FormAuth } from "@features/sign-in-features/form-auth";
import { NoAccount } from "@features/sign-in-features/no-account";
import { SocialAuth } from "@features/sign-in-features/social-auth";

export const SignInWidgetComponent = () => {
  return (
    <div>
      <MainSection />
      <FormSection
        descriptionNode={<NoAccount />}
        formInputNode={<FormAuth />}
        socialAuthNode={<SocialAuth />}
      />
    </div>
  );
};

export const SignInWidget = withAuthentication(SignInWidgetComponent);
