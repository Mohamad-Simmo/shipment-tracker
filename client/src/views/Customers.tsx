import { AxiosError } from 'axios';
import ErrorMessage from '../components/ErrorMessage';
import useCustomers from '../hooks/useCustomers';

function Customers() {
  const { data, isLoading, isError, error } = useCustomers();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <ErrorMessage message={(error as AxiosError)?.message} />;

  return (
    <div className="overflow-x-auto overflow-y-hidden rounded-t-lg">
    <table className="w-full table-auto  text-left text-sm text-gray-500">
      <thead>
        <tr className="bg-gray-600">
          <th className="p-3 text-light">Name</th>
          <th className="p-3 text-light">Email</th>
          <th className="p-3 text-light">Phone</th>
          <th className="p-3 text-light">Address</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(({ id, contact }) => (
          <tr className="border-b-2 border-gray-400" key={id}>
            <td className="p-2"> {contact.name} </td>
            <td className="p-2">{contact.email}</td>
            <td className="p-2">{contact.phone}</td>
            <td className="p-2">{contact.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
export default Customers;
