import Link from "next/link";

const SubMiddleTitle = props => {
  const { backUrl, title } = props;
  return (
    <div className="mb-3 flex flex-col bg-white shadow-sm lg:mb-8 lg:shadow-none">
      <div className="relative flex items-center bg-white p-3 lg:mb-0 lg:border-b lg:p-0 lg:pb-6">
        <Link href={`${backUrl}`} className="mr-4 flex lg:mr-6 lg:px-2">
          <span className="material-symbols-outlined text-2xl text-slate-500">
            arrow_back_ios_new
          </span>
        </Link>
        <h2 className="text-xl xl:text-2xl">{title}</h2>
      </div>
    </div>
  );
};

export default SubMiddleTitle;
