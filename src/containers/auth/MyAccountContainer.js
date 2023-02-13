import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import DeleteAccount from "src/components/button/DeleteAccount";
import AccountAccessPasswordForm from "src/components/forms/AccountAccessPasswordForm";
import AccountInfoForm from "src/components/forms/AccountInfoForm";
import AccountPasswordChangeForm from "src/components/forms/AccountPasswordChangeForm";
import * as userActions from "src/store/user.store";
import * as stringUtils from "src/utils/stringUtils";

const MyAccountContainer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { uid, email, fullName, companyName, country } = useSelector(
    state => state.user
  );
  const { myAccountAccessCheck } = useSelector(state => state.noPersistCommon);

  useEffect(() => {
    dispatch(userActions.getInfoTrigger({ uid, email }));
  }, []);

  return (
    <>
      <div className="mx-auto max-w-2xl">
        <div className="mb-4">
          <h2 className="text-xl">
            {stringUtils.firstCharToUpperCase(t("myAccount.myAccount"))}
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {!myAccountAccessCheck ? (
            <AccountAccessPasswordForm />
          ) : (
            <>
              <AccountInfoForm
                uid={uid}
                email={email}
                fullName={fullName}
                companyName={companyName}
                country={country}
              />
              <AccountPasswordChangeForm uid={uid} />
              <DeleteAccount uid={uid} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MyAccountContainer;
