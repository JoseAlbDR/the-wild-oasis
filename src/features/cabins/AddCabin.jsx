import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="add">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="add">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
