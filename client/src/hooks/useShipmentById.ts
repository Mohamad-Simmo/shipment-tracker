import { useQuery } from '@tanstack/react-query';
import { getShipmentById } from '../api';

function useShipmentById(id: string) {
  const { data } = useQuery(['shipments', id], () => getShipmentById(id));

  return { data };
}
export default useShipmentById;
