import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "src/assets/logo.png";
import url from "src/config/url";

const AuthCommonTitle = props => {
  const router = useRouter();
  const { title, desc, backButtonOn = false, backEvent = null } = props;

  const goBackButtonClick = e => {
    e.preventDefault();
    if (backEvent) {
      backEvent();
    } else {
      router.back();
    }
  };

  return (
    <>
      {backButtonOn && (
        <button
          onClick={goBackButtonClick}
          className="-m-3 inline-flex p-3 text-gray-500"
        >
          <span className="material-symbols-outlined"> arrow_back </span>
        </button>
      )}
      <div className="flex flex-col py-10 md:py-6">
        <Link href={`${url.home}`}>
          <Image src={logo} alt="" className="mb-3 w-28 md:w-32" />
        </Link>
        <h1 className="mb-1 text-2xl font-extrabold">{title}</h1>
        {desc && <p className="text-sm text-gray-500">{desc}</p>}
      </div>
    </>
  );
};

export default AuthCommonTitle;
