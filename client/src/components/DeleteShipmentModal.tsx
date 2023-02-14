import useDeleteShipment from '../hooks/useDeleteShipment';
import useShipmentById from '../hooks/useShipmentById';
import Button from './Button';
import Modal from './Modal';

function DeleteShipmentModal({
  toggleShow,
  shipmentId,
}: {
  toggleShow: () => void;
  shipmentId: string;
}) {
  const { mutate, isLoading, isSuccess } = useDeleteShipment(shipmentId);

  const handleDelete = () => {
    mutate();
    toggleShow();
  };

  return (
    <Modal toggleShow={toggleShow}>
      {isLoading ? (
        'Deleting...'
      ) : (
        <>
          <h3 className="mb-7 text-xl font-semibold">Delete Shipment?</h3>
          <Button onClick={toggleShow} className="mr-3 ml-24 bg-gray-500">
            Cancel
          </Button>
          <Button onClick={handleDelete} className="bg-red-500">
            Confirm
          </Button>
        </>
      )}
    </Modal>
  );
}
export default DeleteShipmentModal;
