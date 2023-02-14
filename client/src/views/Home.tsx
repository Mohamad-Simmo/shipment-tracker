import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { uppercase } from '../lib/helpers';
import { RiDeleteBinLine, RiEditLine, RiEyeLine } from 'react-icons/ri';
import useToggle from '../hooks/useToggle';
import MoreInformationModal from '../components/MoreInformationModal';
import { useState } from 'react';
import useShipments from '../hooks/useShipments';
import DeleteShipmentModal from '../components/DeleteShipmentModal';

function Home() {
  const [showInfo, toggleInfo] = useToggle();
  const [showDelete, toggleDelete] = useToggle();
  const { data, isLoading, isError, error } = useShipments();
  const [shipmentId, setShipmentId] = useState('');
  const navigate = useNavigate();

  return (
    <>
      {showInfo && (
        <MoreInformationModal shipmentId={shipmentId} toggleShow={toggleInfo} />
      )}
      {showDelete && (
        <DeleteShipmentModal
          shipmentId={shipmentId}
          toggleShow={toggleDelete}
        />
      )}
      <Link to="create">
        <Button className="mb-3 bg-secondary">Create Shipment</Button>
      </Link>
      <div>
        {isLoading ? (
          'Loading...'
        ) : (
          <div className="overflow-x-auto overflow-y-hidden rounded-t-lg">
            <table className="w-full table-auto  rounded-t-lg text-left text-sm text-gray-500">
              <thead>
                <tr className="bg-gray-600">
                  <th className="p-4 text-light">Shipment ID</th>
                  <th className="p-4 text-light">Shipper</th>
                  <th className="p-4 text-light">Recipient</th>
                  <th className="p-4 text-light">Carrier</th>
                  <th className="p-4 text-light">Status</th>
                  <th className="p-4 text-light">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((shipment) => (
                  <tr key={shipment.id} className="border-b border-gray-300">
                    <td className="p-2">{shipment.id}</td>
                    <td className="p-2">
                      {shipment.waybill.shipper.contact.name}
                    </td>
                    <td className="p-2">
                      {shipment.waybill.recipient.contact.name}
                    </td>
                    <td className="p-2">{shipment.carrier.contact.name}</td>
                    <td className="p-2">
                      <div className='flex gap-1'>
                        <div
                          className={`h-4 w-4 rounded-full ${
                            shipment.status === 'pending'
                              ? 'bg-yellow-400'
                              : shipment.status === 'in transit'
                              ? 'bg-blue-400'
                              : shipment.status === 'delivered'
                              ? 'bg-green-400'
                              : shipment.status === 'exception'
                              ? 'bg-red-400'
                              : ''
                          }`}
                        ></div>
                        {uppercase(shipment.status)}
                      </div>
                    </td>
                    <td className="p-2 ">
                      <div className="flex gap-1">
                        <button
                          onClick={() => {
                            setShipmentId(shipment.id);
                            toggleInfo();
                          }}
                          className="rounded-lg bg-blue-500 p-1"
                        >
                          <RiEyeLine className="h-4 w-4 text-light" />
                        </button>
                        <button
                          className="rounded-lg bg-green-500 p-1"
                          onClick={() =>
                            navigate(`/shipments/update/${shipment.id}`)
                          }
                        >
                          <RiEditLine className="h-4 w-4 text-light" />
                        </button>
                        <button
                          onClick={() => {
                            setShipmentId(shipment.id);
                            toggleDelete();
                          }}
                          className="rounded-lg bg-red-500 p-1"
                        >
                          <RiDeleteBinLine className="h-4 w-4 text-light" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
export default Home;
