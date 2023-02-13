import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { getShipments } from '../api';
import { Shipment } from '../types';

function useShipments(options?: UseQueryOptions<Shipment[]>) {
  const { data, isLoading, isError, error } = useQuery<Shipment[]>(
    ['shipments'],
    getShipments,
    {
      staleTime: Infinity,
      ...options,
    }
  );

  return { data, isLoading, isError, error };
}
export default useShipments;
