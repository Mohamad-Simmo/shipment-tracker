import { SubmitHandler, useForm } from 'react-hook-form';
import { RiShipLine } from 'react-icons/ri';
import { SlPlane } from 'react-icons/sl';
import { HiOutlineTruck } from 'react-icons/hi';
import Button from '../components/Button';
import Input from '../components/Input';
import useCustomers from '../hooks/useCustomers';
import { ShipmentInputs } from '../types';
import Select from '../components/Select';
import Radio from '../components/Radio';

function Section({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="flex min-w-[200px] flex-1 flex-col gap-2">
      {title && <h3 className="text-lg text-gray-600">{title}</h3>}
      {children}
    </div>
  );
}

function CreateShipment() {
  const { data, isLoading } = useCustomers();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ShipmentInputs>({
    defaultValues: {
      method: 'air',
    },
  });

  const onSubmit: SubmitHandler<ShipmentInputs> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2 className="text-2xl font-semibold text-gray-700">Waybill</h2>
        <hr className="my-4 h-px border-0 bg-gray-400" />

        <div className="flex flex-wrap gap-6">
          <Section title="Shipping Information">
            <Select
              register={register}
              options={{ required: true }}
              name="Shipper"
              label="shipper_id"
              data={data}
            />
            <Select
              register={register}
              options={{
                required: true,
                validate: (value) => value !== watch('shipper_id'),
              }}
              errors={errors.recipient_id}
              name="Recipient"
              label="recipient_id"
              data={data}
            />
          </Section>

          <Section title="Route">
            <Input
              register={register}
              options={{ required: true }}
              placeholder="123 Main St, Anytown USA"
              showLabel
              label="origin"
              errors={errors.origin}
            />
            <Input register={register} showLabel type="text" label="stops" />
            <Input
              options={{ required: true }}
              register={register}
              placeholder="123 Main St, Anytown USA"
              showLabel
              label="destination"
              errors={errors.destination}
            />
          </Section>

          <Section title="Method">
            <Radio
              className="flex-1"
              icon={<SlPlane className="h-6 w-6" />}
              register={register}
              name="method"
              label="air"
            />
            <Radio
              className="flex-1"
              icon={<RiShipLine className="h-6 w-6" />}
              register={register}
              name="method"
              label="sea"
            />
            <Radio
              className="flex-1"
              icon={<HiOutlineTruck className="h-6 w-6" />}
              register={register}
              name="method"
              label="land"
            />
          </Section>
        </div>
      </div>

      <section>
        <h2 className="mt-4 text-2xl text-gray-700">Details</h2>
        <hr className="my-4 h-px border-0 bg-gray-400" />

        <div className="flex flex-wrap gap-6">
          <Section>
            <Input
              showLabel
              register={register}
              options={{
                required: true,
                valueAsNumber: true,
              }}
              placeholder="Enter cargo weight"
              type="text"
              name="Weight (kg)"
              label="weight"
              errors={errors.weight}
            />
            <Input
              showLabel
              register={register}
              type="text"
              label="instructions"
            />
            <Input
              showLabel
              register={register}
              type="text"
              label="description"
            />
          </Section>
          <Section>
            <Input
              showLabel
              register={register}
              options={{ required: true }}
              type="datetime-local"
              label="shipping_date"
              errors={errors.shipping_date}
            />
            <Input
              showLabel
              register={register}
              options={{
                required: true,
                validate: (value) => value > watch('shipping_date'),
              }}
              type="datetime-local"
              label="delivery_date"
              errors={errors.delivery_date}
            />
          </Section>
        </div>
      </section>

      <Button className="mt-6 w-32 bg-secondary" type="submit">
        Create
      </Button>
    </form>
  );
}
export default CreateShipment;
