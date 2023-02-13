import { useEffect, useState } from "react";

const EditPackagingItem = props => {
  const { title, info } = props;
  const [arrayInfo, setArrayInfo] = useState(null);

  useEffect(() => {
    if (Array.isArray(info)) {
      setArrayInfo(info.join(", "));
    } else {
      setArrayInfo(info);
    }
  }, []);

  if (!arrayInfo) {
    return <></>;
  }

  return (
    <>
      <dt className="text-right text-sm text-slate-500">{title}</dt>
      <dd className="rounded border py-2 px-4 text-sm font-semibold">
        {arrayInfo}
      </dd>
    </>
  );
};

export default EditPackagingItem;
