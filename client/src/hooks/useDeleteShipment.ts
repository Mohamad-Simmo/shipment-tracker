import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteShipment } from '../api';

function useDeleteShipment(id: string) {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isSuccess } = useMutation(
    () => deleteShipment(id),
    {
      onSuccess: () => queryClient.invalidateQueries(['shipments']),
    }
  );

  return { mutate, isLoading, isSuccess };
}
export default useDeleteShipment;
