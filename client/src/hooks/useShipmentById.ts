import { useQuery } from '@tanstack/react-query';
import { getShipmentById } from '../api';

function useShipmentById(id: string | undefined) {
  const { data, isLoading, isError, error } = useQuery(['shipments', id], () =>
    getShipmentById(id!)
  );

  return { data, isLoading, isError, error };
}
export default useShipmentById;
