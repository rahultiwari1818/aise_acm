import React from "react";
import { createPortal } from "react-dom";

const DialogBox = ({
  isOpen,
  onClose,
  title = "Dialog Title",
  children,
  showFooter = true,
  cancelText = "Cancel",
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4">
        {/* Header */}
        <div className="border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6">{children}</div>

        {/* Footer */}
        {showFooter && (
          <div className="border-t px-6 py-3 flex justify-end gap-2">
            <button
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              {cancelText}
            </button>
            {/* <button
              onClick={() => {
                if (onConfirm) onConfirm();
                onClose();
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              {confirmText}
            </button> */}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default DialogBox;
