import Modal from './Modal';
import useShipmentById from '../hooks/useShipmentById';

function MoreInformationModal({
  toggleShow,
  shipmentId,
}: {
  toggleShow: () => void;
  shipmentId: string;
}) {
  const { data } = useShipmentById(shipmentId);

  console.log(JSON.stringify(data));

  return <Modal toggleShow={toggleShow}>{shipmentId}</Modal>;
}
export default MoreInformationModal;
