import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { final, initial, transition } from "@/lib/premotion";

const formSchema = z.object({
  name: z.string().min(2, "").max(50),
  phone: z.number().min(10),
  email: z.string().email(),
  comment: z.string(),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: undefined,
      email: "",
      comment: "",
    },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    console.log("✅ se hizo click");
  }
  return (
    <div>
      <Form {...form}>
        <motion.form
          initial={initial()}
          whileInView={final()}
          transition={transition(0.1, 0.8)}
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-8 grid-cols-2"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex flex-col justify-start items-start">
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="111-222-3333" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-full">
                <FormLabel>Correo Electrónico</FormLabel>
                <FormControl>
                  <Input placeholder="alias@gmail.com..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem className="col-span-full">
                <FormLabel>Comentario</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Ingresa el contenido del mensaje..."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="col-span-full text-center">
            <Button className="px-12">Enviar</Button>
          </div>
        </motion.form>
      </Form>
    </div>
  );
};
