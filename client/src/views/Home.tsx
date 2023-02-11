import Button from '../components/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="">
        <Link to="create">
          <Button className="bg-secondary">Create Shipment</Button>
        </Link>
      </div>
    </>
  );
}
export default Home;
