import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createShipment } from '../api';
import { ShipmentInputs } from '../types';

const useCreateShipment = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: (data: ShipmentInputs) => createShipment(data),
    onSuccess: () => queryClient.invalidateQueries(['shipments']),
  });

  return { mutate, isLoading, isError, error };
};

export default useCreateShipment;
