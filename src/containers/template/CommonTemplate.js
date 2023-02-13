import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import * as containers from "src/containers";
import * as commonUtils from "src/utils/commonUtils";
// import * as commonConfig from "src/config/common";

const CommonTemplate = props => {
  const { pathname } = useRouter();
  const { uid } = useSelector(state => state.user);
  const {
    Header,
    Footer,
    children,
    notPadding = false,
    isContent = false,
  } = props;

  // const checkMain = pathname === "/";
  const isLogin = uid !== -1;

  const isFooter = commonUtils.showFooter(pathname);
  const isLnb = commonUtils.hideLnb(pathname);

  return (
    <div className={`${isFooter ? "bg-white" : "h-full"}`}>
      {Header && (
        <header className="fixed z-20 flex h-14 w-full items-center border-b bg-white px-2 md:h-16 xl:px-6">
          {Header}
        </header>
      )}
      <div className="h-full pt-14 md:pt-16">
        {children && isLnb && !isContent ? (
          <div className="flex h-full flex-col xl:ml-64">
            {notPadding ? (
              <>{children}</>
            ) : (
              <>
                <div className="p-4 lg:p-6 xl:p-8">{children}</div>
              </>
            )}
          </div>
        ) : isLnb ? (
          <div className="flex min-h-full xl:ml-64 2xl:p-10">
            <div className="mx-auto flex w-full max-w-[1280px] flex-col lg:bg-white lg:p-6 2xl:rounded-lg 2xl:border 2xl:p-10">
              {children}
            </div>
          </div>
        ) : (
          // 메인 && 개인정보 처리방침 등
          <>{children}</>
        )}
        {isLogin && isLnb && <containers.LnbContainer />}
      </div>
      {Footer && isFooter && <div>{Footer}</div>}
    </div>
  );
};

export default CommonTemplate;
