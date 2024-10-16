"use client";

import {z} from "zod";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {apiPOST} from "@/lib/api";
import api from "@/config/api";
import {SUCCESS_200} from "@/lib/response";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Loader2} from "lucide-react";
import {useToast} from "@/hooks/use-toast";

const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email({message: "Must be a valid email"}),
});

export default function SubscriptionForm() {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: ""
        },
    });

    async function onSubmit(values) {
        console.log(values);

        setLoading(true);

        const response = await apiPOST(api.subscription.route, {
            name: values.name,
            email: values.email,
        });

        if (response.code === SUCCESS_200.code) {
            toast({ title: "Thank you for your subscription." });
            form.reset({
                name: "",
                email: "",
            });
        } else {
            toast({
                variant: "destructive",
                title: "Something went wrong",
                description: response.error.toString(),
            });
        }
        setLoading(false);
    }

    return <>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mx-8">
                <div className="flex flex-col gap-4 w-full">
                    <FormField control={form.control} name="name" render={({field}) => (
                        <FormItem className="w-full">
                            <FormLabel className="block mb-2 text-base font-medium text-black text-left">Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Max" className="w-full h-[60px] text-black text-[17px] pl-5 pr-[5px] py-0 rounded-lg border-2 border-solid border-black placeholder:text-black" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}/>
                    <FormField control={form.control} name="email" render={({field}) => (
                        <FormItem className="w-full">
                            <FormLabel className="block mb-2 text-base font-medium text-black text-left">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="max.mustermann@mail.com" className="w-full h-[60px] text-black text-[17px] pl-5 pr-[5px] py-0 rounded-lg border-2 border-solid border-black placeholder:text-black" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}/>
                </div>
                <div className="mt-8 flex justify-end">
                    <button type="submit" disabled={loading} aria-label="Subscribe" className="btn py-3 px-7.5 max-sm:px-6 text-base max-sm:text-sm inline-block font-medium font-Lufga leading-[1.2] border border-secondary rounded-xl duration-700 hover:bg-secondary hover:text-white relative overflow-hidden">
                        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin inline-block -mt-[4px]" /> : null} Subscribe
                    </button>
                </div>
            </form>
        </Form>
    </>;
}