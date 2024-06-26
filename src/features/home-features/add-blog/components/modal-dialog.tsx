import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ChangeEvent } from "react";

type ModalDialogProps = {
  content: string;
  handleChange: (key: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  handleClose: (value: boolean) => () => void;
  handleCreate: () => void;
  loading: boolean;
  open: boolean;
  title: string;
};

export const ModalDialog = ({
  content,
  handleChange,
  handleClose,
  handleCreate,
  loading,
  open,
  title,
}: ModalDialogProps) => {
  return (
    <Dialog className="relative z-10" open={open} onClose={handleClose(false)}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="w-full mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    New Blog
                  </DialogTitle>
                  <div className="mt-2">
                    <label
                      htmlFor="title"
                      className="block text-sm font-semibold leading-5 text-gray-700"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      className="w-full text-sm font-semibold leading-6 text-gray-900 border border-gray-300 rounded-md p-2"
                      value={title}
                      onChange={handleChange("title")}
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="title"
                      className="block text-sm font-semibold leading-5 text-gray-700"
                    >
                      Content
                    </label>
                    <input
                      type="text"
                      className="w-full text-sm font-semibold leading-6 text-gray-900 border border-gray-300 rounded-md p-2"
                      value={content}
                      onChange={handleChange("content")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                disabled={loading}
                type="button"
                className={`inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-500"
                }`}
                onClick={handleCreate}
              >
                Create
              </button>
              <button
                disabled={loading}
                type="button"
                className={`mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleClose(false)}
                data-autofocus
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
