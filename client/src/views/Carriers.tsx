import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getCarriers } from '../api';
import ErrorMessage from '../components/ErrorMessage';

function Carriers() {
  const { data, isLoading, isError, error } = useQuery(
    ['carriers'],
    getCarriers
  );

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <ErrorMessage message={(error as AxiosError)?.message} />;

  return (
    <table className="w-full table-auto text-left text-sm text-gray-500">
      <thead>
        <tr className="rounded-lg bg-dark">
          <th></th>
          <th className="p-3 text-light">Name</th>
          <th className="p-3 text-light">Email</th>
          <th className="p-3 text-light">Phone</th>
          <th className="p-3 text-light">Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, logo, contact }) => (
          <tr className="border-b-2 border-gray-400" key={id}>
            <td className="p-2">
              <img src={logo} className="h-24 rounded-lg " alt="logo" />
            </td>
            <td className="p-2"> {contact.name} </td>
            <td className="p-2">{contact.email}</td>
            <td className="p-2">{contact.phone}</td>
            <td className="p-2">{contact.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Carriers;
