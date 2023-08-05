import { HiPencil } from "react-icons/hi2";

import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function EditCabin({ cabin }) {
  return (
    <>
      <Modal.Open opens="edit">
        <button>
          <HiPencil />
        </button>
      </Modal.Open>
      <Modal.Window name="edit">
        <CreateCabinForm cabinToEdit={cabin} />
      </Modal.Window>
    </>
  );
}

export default EditCabin;
