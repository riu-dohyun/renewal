import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import * as commonActions from "src/store/common.store";
import * as stringUtils from "src/utils/stringUtils";
import SpecificationContainer from "./SpecificationContainer";

const EditSpecificationContainer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const specificationForm = useRef();
  const [submit, setSubmit] = useState(false);

  const backButtonEvent = () => {
    dispatch(commonActions.setEditSpecification(false));
  };

  const updateClick = e => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <form ref={specificationForm}>
      <div className="mb-6 flex items-center border-b pb-3">
        <h3>
          {stringUtils.firstCharToUpperCase(
            t("editSpecification.editSpecification")
          )}
        </h3>
      </div>
      <SpecificationContainer
        updateStatus={true}
        specificationForm={specificationForm}
        submit={submit}
      />
      <div className="sticky bottom-0 mt-auto flex justify-between bg-white py-3 shadow-[0_-10px_15px_-10px_rgba(0,0,0,0.1)]">
        <button
          onClick={backButtonEvent}
          className="rounded-full border bg-white py-1.5 px-3 text-sm font-semibold text-gray-500"
        >
          {stringUtils.firstCharToUpperCase(t("editSpecification.cancel"))}
        </button>
        <button
          type="submit"
          className="rounded-full bg-primary-500 py-1.5 px-3 text-sm font-semibold text-white"
          onClick={updateClick}
        >
          {stringUtils.firstCharToUpperCase(t("editSpecification.update"))}
        </button>
      </div>
    </form>
  );
};

export default EditSpecificationContainer;
