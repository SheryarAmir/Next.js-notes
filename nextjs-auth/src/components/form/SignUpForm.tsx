"use client";
import Link from "next/link";
import GoogleSignInButton from "@/components/GoogleSignInButton"
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  Username: z.string().min(1, "Username is required").max(30),
  Email: z.string().email("Invalid email address"),
  Password: z.string().min(6, "Password must be at least 6 characters long"),
  ConfirmPassword: z
    .string()
    .min(6, "Password confirmation must be at least 6 characters long"),
})
.refine((data) => data.Password === data.ConfirmPassword, {
  path: ["ConfirmPassword"],
  message: "Passwords do not match",
});


const SignUpForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Username: "",
      Email: "",
      Password: "",
      ConfirmPassword:""
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-3">

        <FormField
            control={form.control}
            name="Username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Jhondoe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter valid Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter you password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ConfirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Re-Enter your password</FormLabel>
                <FormControl>
                  <Input type="Re-Enter your password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button className="mt-6 w-full" type="submit">
          Sign in
        </Button>
      </form>

      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
      <GoogleSignInButton>Sign up With Google</GoogleSignInButton>
      <p className="text-center text-sm text-gray-600 mt-2">
        If you don't have an account, please&nbsp;
        <Link className="text-blue-500 hover:underline" href="/sign-in">
          Sign In
        </Link>
      </p>
    </Form>
  );
};

export default SignUpForm;
