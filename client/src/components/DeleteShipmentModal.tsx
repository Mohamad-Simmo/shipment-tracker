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
  const { data } = useShipmentById(shipmentId);

  return (
    <Modal toggleShow={toggleShow}>
      <h3 className="text-xl font-semibold mb-7">Delete Shipment?</h3>
      <Button className="bg-gray-500 mr-3 ml-24">Cancel</Button>
      <Button className="bg-red-500">Confirm</Button>
    </Modal>
  );
}
export default DeleteShipmentModal;
