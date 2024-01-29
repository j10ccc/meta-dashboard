import { useState } from "react";
import Button from "@/components/ui/Button";
import Form from "@/components/ui/form/Form";
import Input from "@/components/ui/form/Input";
import useEndpoints from "@/hooks/useEndpoints";
import { EndpointSchema } from "@/interfaces/Endpoint";
import { validateConnection } from "@/utils/endpoint";

const FormSchema = EndpointSchema.omit({ id: true });

const EndpointAppendForm = () => {
  const create = useEndpoints(store => store.addEndpoint);
  const [creating, setCreating] = useState(false);

  async function handleAppendEndpoint(data: Zod.infer<typeof FormSchema>) {
    const { success } = FormSchema.safeParse(data);
    if (success) {
      setCreating(true);
      const connected = await validateConnection(data);
      if (connected) create(data);
      setCreating(false);
    }
  }

  return (
    <Form<Zod.infer<typeof FormSchema>>
      className="w-full"
      onFinish={handleAppendEndpoint}
    >
      <Input label="Endpoint URL" name="url" placeholder="http://localhost:9090" />
      <Input label="Secret" name="secret" type="password" />
      <div className="flex justify-end">
        <Button loading={creating} disabled={creating} type="submit">Create</Button>
      </div>
    </Form>
  );
};

export default EndpointAppendForm;