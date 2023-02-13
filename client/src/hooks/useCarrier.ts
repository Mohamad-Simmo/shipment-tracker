import { useQuery } from '@tanstack/react-query';
import { getCarriers } from '../api';

function useCarriers() {
  const { data, isLoading, isError, error } = useQuery(
    ['carriers'],
    getCarriers,
    {
      staleTime: Infinity,
    }
  );

  return { data, isLoading, isError, error };
}
export default useCarriers;
