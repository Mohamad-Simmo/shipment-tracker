import Modal from './Modal';
import useShipmentById from '../hooks/useShipmentById';
import { formatDate, uppercase } from '../lib/helpers';
import { Route } from '../types';

function MoreInformationModal({
  toggleShow,
  shipmentId,
}: {
  toggleShow: () => void;
  shipmentId: string;
}) {
  const { data, isLoading } = useShipmentById(shipmentId);

  return (
    <Modal toggleShow={toggleShow}>
      {isLoading ? (
        'Loading...'
      ) : (
        <div className="h-[400px] w-[400px]">
          <div className="mb-2">
            <strong>Status: </strong> {data?.status}
          </div>

          <div className="mb-2">
            <strong>Shipping Date: </strong>{' '}
            {formatDate(new Date(data?.shipping_date || ''))}
          </div>

          <div className="mb-2">
            <strong>Delivery Date: </strong>{' '}
            {formatDate(new Date(data?.delivery_date || ''))}
          </div>

          {data?.description && (
            <div className="mb-2">
              <strong>Description: </strong> {data.description}
            </div>
          )}

          <div className="mb-2">
            <strong>Shipper: </strong> {data?.waybill.shipper.contact.name}
          </div>

          <div className="mb-2">
            <strong>Recipient: </strong> {data?.waybill.recipient.contact.name}
          </div>

          <div className="mb-2">
            <strong>Carrier: </strong> {data?.carrier.contact.name}
          </div>

          <div className="mb-2">
            <strong>Weight: </strong> {data?.weight} Kg
          </div>

          {data?.instructions && (
            <div className="mb-2">
              <strong>Instructions: </strong> {data.instructions}
            </div>
          )}

          {/* Display all route details except id */}
          {Object.keys(data!.waybill.route)
            .filter((label) => label !== 'id')
            .map(
              (label) =>
                data?.waybill.route[label.toLowerCase() as keyof Route] && (
                  <div key={label} className="mb-2">
                    <strong>{uppercase(label)}: </strong>
                    {data?.waybill.route[label.toLowerCase() as keyof Route]}
                  </div>
                ) 
            )}
        </div>
      )}
    </Modal>
  );
}
export default MoreInformationModal;
