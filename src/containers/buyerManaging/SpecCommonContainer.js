import { useTranslation } from "react-i18next";
import AwsFileUpload from "src/components/input/AwsFileUpload";
import MultipleTextInput from "src/components/input/MultipleTextInput";
import SimpleInput from "src/components/input/SimpleInput";
import * as commonConfig from "src/config/common";
import * as stringUtils from "src/utils/stringUtils";

const SpecCommonContainer = props => {
  const { t } = useTranslation();
  const { defaultValues = {}, updateStatus } = props;
  return (
    <>
      <div className="flex flex-col gap-4 border-b py-6">
        <h4>
          {stringUtils.firstCharToUpperCase(t("managingPackagingCreate.notes"))}
        </h4>
        <MultipleTextInput
          name={commonConfig.specFormName.notes}
          placeholder="Notes"
          rows="5"
          defaultValue={defaultValues.notes ? defaultValues.notes : ""}
        />
      </div>
      <div className="flex flex-col gap-4 border-b py-6">
        <div className="flex items-center">
          <h4>
            {stringUtils.firstCharToUpperCase(
              t("managingPackagingCreate.documents")
            )}
          </h4>
          <span className="ml-2 text-sm text-slate-400">
            (Up to 10 attachments)
          </span>
        </div>
        <AwsFileUpload updateStatus={updateStatus} />
      </div>
      <div className="flex flex-col gap-4 border-b py-6">
        <h4>
          {stringUtils.firstCharToUpperCase(
            t("managingPackagingCreate.what do you pack?")
          )}
        </h4>
        <SimpleInput
          name={commonConfig.specFormName.contents}
          label="what do you pack"
          required={true}
          defaultValue={defaultValues.contents ? defaultValues.contents : ""}
        />
      </div>
      <div className="flex flex-col gap-4 border-b py-6">
        <h4>
          {stringUtils.firstCharToUpperCase(
            t("managingPackagingCreate.nickname")
          )}
        </h4>
        <SimpleInput
          name={commonConfig.specFormName.itemName}
          label="Nick name"
          required={true}
          defaultValue={defaultValues.itemName ? defaultValues.itemName : ""}
        />
      </div>
    </>
  );
};

export default SpecCommonContainer;
