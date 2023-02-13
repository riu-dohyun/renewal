import Modal from "react-modal";

const customStyles = {
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(17, 24, 39, 0.9)",
  },
};

// Modal.setAppElement("#root");
// if (process.env.NODE_ENV !== "test") Modal.setAppElement("#app");

const ChoiceModal = props => {
  const {
    title,
    desc = null,
    isOpen,
    children = null,
    okFn,
    okText,
    cancelFn,
    cancelText,
    onRequestCloseFlag = () => {},
  } = props;
  return (
    <Modal
      closeTimeoutMS={0}
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onRequestCloseFlag}
      className="mx-auto flex min-h-full max-w-md items-center py-16"
      appElement={document.getElementById("root") || undefined}
    >
      <div className="w-full overflow-hidden rounded">
        <div className="bg-white p-3">
          <h3 className="mb-4 font-bold">{title}</h3>
          <div className="mb-4">
            {desc && <>{desc}</>}
            {children && <>{children}</>}
          </div>
          <div className="flex w-full">
            {cancelFn && (
              <button
                className="flex w-full justify-center bg-slate-500 p-3 text-white"
                onClick={cancelFn}
              >
                {cancelText}
              </button>
            )}
            {okFn && (
              <button
                className="flex w-full justify-center bg-primary-500 p-3 text-white"
                onClick={okFn}
              >
                {okText}
              </button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ChoiceModal;
