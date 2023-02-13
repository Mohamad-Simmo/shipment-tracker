import { useQuery } from '@tanstack/react-query';
import { getCustomers } from '../api';

function useCustomers() {
  const { data, isLoading, isError, error } = useQuery(
    ['customers'],
    getCustomers
  );

  return { data, isLoading, isError, error };
}
export default useCustomers;
