import { HiTrash } from "react-icons/hi2";

import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

function DeleteCabin({ name, onConfirm, isDeleting }) {
  return (
    <>
      <Modal.Open opens="delete">
        <button>
          <HiTrash />
        </button>
      </Modal.Open>
      <Modal.Window name="delete">
        <ConfirmDelete
          resourceName={name}
          onConfirm={onConfirm}
          disabled={isDeleting}
        />
      </Modal.Window>
    </>
  );
}

export default DeleteCabin;
