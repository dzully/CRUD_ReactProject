import { MainSection } from "@entities/sign-in-entities/main-section";
import { FormSection } from "@entities/sign-up-entities/form-section";
import { withAuthentication } from "@features/shared-features/handle-authenticated";
import { SocialAuth } from "@features/sign-in-features/social-auth";
import { FormAuth } from "@features/sign-up-features/form-auth";
import { RedirectSignIn } from "@features/sign-up-features/redirect-sign-in";

export const SignUpWidgetComponent = () => {
  return (
    <div>
      <MainSection />
      <FormSection
        formInputNode={<FormAuth />}
        socialAuthNode={<SocialAuth />}
        subtitleActionNode={<RedirectSignIn />}
      />
    </div>
  );
};

export const SignUpWidget = withAuthentication(SignUpWidgetComponent);
