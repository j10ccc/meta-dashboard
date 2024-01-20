import Button from "@/components/ui/Button";
import Form from "@/components/ui/form/Form";
import Input from "@/components/ui/form/Input";
import useEndpoints from "@/hooks/useEndpoints";
import { EndpointSchema } from "@/interfaces/Endpoint";

const FormSchema = EndpointSchema.omit({ id: true });

const EndpointAppendForm = () => {
  const create = useEndpoints(store => store.addEndpoint);

  function handleAppendEndpoint(data: Zod.infer<typeof FormSchema>) {
    const { success } = FormSchema.safeParse(data);
    if (success) create(data);
  }

  return (
    <Form<Zod.infer<typeof FormSchema>>
      className="w-full"
      onFinish={handleAppendEndpoint}
    >
      <Input label="Endpoint URL" name="url" placeholder="http://localhost:9090" />
      <Input label="Secret" name="secret" type="password" />
      <div className="flex justify-end">
        <Button type="submit" className="w-20">Create</Button>
      </div>
    </Form>
  );
};

export default EndpointAppendForm;