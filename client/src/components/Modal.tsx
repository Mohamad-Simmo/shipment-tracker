import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

function Backdrop({
  children,
  toggleShow,
}: {
  children: React.ReactNode;
  toggleShow: () => void;
}) {
  return createPortal(
    <div
      onClick={toggleShow}
      className="fixed inset-0 z-50 grid h-screen w-screen place-items-center bg-black bg-opacity-30"
    >
      {children}
    </div>,
    document.getElementById('backdrop')!
  );
}

function Modal({
  children,
  toggleShow,
}: {
  children: React.ReactNode;
  toggleShow: () => void;
}) {
  return (
    <Backdrop toggleShow={toggleShow}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[80vh] overflow-auto rounded-lg bg-light p-4"
      >
        <div className="flex justify-end">
          <button onClick={toggleShow}>
            <AiOutlineClose className="h-6 w-6" />
          </button>
        </div>
        {children}
      </div>
    </Backdrop>
  );
}
export default Modal;
