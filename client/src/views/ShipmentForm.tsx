import { SubmitHandler, useForm } from 'react-hook-form';
import { RiShipLine } from 'react-icons/ri';
import { SlPlane } from 'react-icons/sl';
import { HiOutlineTruck } from 'react-icons/hi';
import { MdOutlinePendingActions } from 'react-icons/md';
import { AiOutlineFileDone } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';
import Button from '../components/Button';
import Input from '../components/Input';
import useCustomers from '../hooks/useCustomers';
import { Shipment, ShipmentInputs } from '../types';
import Select from '../components/Select';
import Radio from '../components/Radio';
import useCarriers from '../hooks/useCarrier';
import useCreateShipment from '../hooks/useCreateShipment';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useShipmentById from '../hooks/useShipmentById';

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

function ShipmentForm() {
  const { mutate } = useCreateShipment();
  const { data: customers, isLoading: customersLoading } = useCustomers();
  const { data: carriers, isLoading: carriersLoading } = useCarriers();
  const { id } = useParams();
  const { data: shipment, isLoading: shipmentLoading } = useShipmentById(id);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ShipmentInputs>({
    defaultValues: {
      method: 'air',
      status: 'pending',
    },
  });

  // If new shipment set default values
  useEffect(() => {
    if (customers && carriers && !id) {
      setValue('carrier_id', carriers[0].id);
      setValue('shipper_id', customers[0].id);
      setValue('recipient_id', customers[1].id);
    }
  }, [carriers, customers, setValue, id]);

  // if update set old values
  useEffect(() => {
    if (!shipment) return;

    const shipmentProperties = [
      'carrier_id',
      'status',
      'weight',
      'shipping_date',
      'delivery_date',
      'exception',
      'instructions',
      'description',
    ];

    shipmentProperties.forEach((key) => {
      const value = shipment[key as keyof Shipment];
      if (
        typeof value === 'string' ||
        typeof value === 'number' ||
        value instanceof Date
      ) {
        setValue(key as keyof ShipmentInputs, value);
      }
    });

    Object.entries(shipment.waybill.route)
      .filter(([key]) => key !== 'id')
      .forEach(([key, value]) => {
        setValue(key as keyof ShipmentInputs, value);
      });

    setValue('shipper_id', shipment.waybill.shipper_id);
    setValue('recipient_id', shipment.waybill.recipient_id);
  }, [setValue, shipment]);

  const onSubmit: SubmitHandler<ShipmentInputs> = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: () => navigate('/shipments'),
    });
  };

  if (shipmentLoading || carriersLoading || customersLoading)
    return <p>Loading...</p>;

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      {/* Update fields */}
      {id && (
        <>
          <input
            {...register('shipment_id')}
            type="hidden"
            value={shipment?.id}
          />
          <input
            {...register('route_id')}
            type="hidden"
            value={shipment?.waybill.route_id}
          />
          <input
            {...register('waybill_id')}
            type="hidden"
            value={shipment?.waybill_id}
          />
        </>
      )}

      <div>
        <h2 className="text-2xl font-semibold text-gray-700">Waybill</h2>
        <hr className="my-4 h-px border-0 bg-gray-400" />

        <div className="flex flex-wrap gap-6">
          <Section title="Shipping Information">
            <Select
              register={register}
              options={{ required: true, valueAsNumber: true }}
              name="Shipper"
              label="shipper_id"
              data={customers}
            />
            <Select
              register={register}
              options={{
                required: true,
                valueAsNumber: true,
                validate: (value) => value !== watch('shipper_id'),
              }}
              errors={errors.recipient_id}
              name="Recipient"
              label="recipient_id"
              data={customers}
            />

            <Select
              register={register}
              options={{
                required: true,
                valueAsNumber: true,
              }}
              errors={errors.carrier_id}
              name="Carrier"
              label="carrier_id"
              data={carriers}
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
              activeColor="peer-checked:border-primary peer-checked:bg-primary peer-checked:ring-primary"
            />
            <Radio
              className="flex-1"
              icon={<RiShipLine className="h-6 w-6" />}
              register={register}
              name="method"
              label="sea"
              activeColor="peer-checked:border-primary peer-checked:bg-primary peer-checked:ring-primary"
            />
            <Radio
              className="flex-1"
              icon={<HiOutlineTruck className="h-6 w-6" />}
              register={register}
              name="method"
              label="land"
              activeColor="peer-checked:border-primary peer-checked:bg-primary peer-checked:ring-primary"
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

          <Section title="Status">
            <Radio
              className="flex-1"
              icon={<MdOutlinePendingActions className="h-6 w-6" />}
              register={register}
              name="status"
              label="pending"
              activeColor="peer-checked:border-yellow-500 peer-checked:bg-yellow-500 peer-checked:ring-yellow-500"
            />
            <Radio
              className="flex-1"
              icon={<HiOutlineTruck className="h-6 w-6" />}
              register={register}
              name="status"
              label="in transit"
              activeColor="peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:ring-blue-500"
            />
            <Radio
              className="flex-1"
              icon={<AiOutlineFileDone className="h-6 w-6" />}
              register={register}
              name="status"
              label="delivered"
              activeColor="peer-checked:border-green-500 peer-checked:bg-green-500 peer-checked:ring-green-500"
            />

            <Radio
              className="flex-1"
              icon={<BiErrorCircle className="h-6 w-6" />}
              register={register}
              name="status"
              label="exception"
              activeColor="peer-checked:border-red-500 peer-checked:bg-red-500 peer-checked:ring-red-500"
            />

            {watch('status') === 'exception' && (
              <Input
                showLabel
                register={register}
                type="text"
                label="exception"
                errors={errors.exception}
              />
            )}
          </Section>
        </div>
      </section>

      <Button className="mt-6 w-32 bg-secondary" type="submit">
        Submit
      </Button>
    </form>
  );
}
export default ShipmentForm;
