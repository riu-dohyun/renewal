import { Dna } from "react-loader-spinner";
import { useSelector } from "react-redux";

const SpinnerContainer = () => {
  const { isPending } = useSelector(state => state.common);

  return (
    <>
      {isPending && (
        <div
          className={`fixed top-0 left-0 z-50  h-full w-full bg-gray-100/[0.3] transition-opacity duration-500 ease-out hover:ease-in`}
        >
          <div className="absolute inset-1/2 z-10">
            <Dna
              visible={true}
              height="150"
              width="150"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SpinnerContainer;
