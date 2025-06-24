"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "./ui/button"
import FormField from "./FormField"; // or correct path


import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"


import { z } from "zod"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"
import { useRouter } from "next/navigation";


 
const AuthFormSchema = ({ type }: { type: FormType }) => {

    return z.object({
      name: type === "sign-up"?z.string().min(3):z.string().optional(),
      email :z.string().email(),
      password: z.string().min(3 ),
      

    })
}

 const AuthForm = ({ type }: { type: FormType }) => {
    const router = useRouter();
    const formSchema =  AuthFormSchema({type});

    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
       name: "",
       email: "",  
       password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    
    try{
        if(type === "sign-up"){
            toast.success("Sign up success")
            router.push("/sign-in") 
        }
        else{
            toast.success("Sign in success")
            router.push("/")
        }  

    }catch(error){
      console.log(error)
      toast.error(`there was an error: ${error}`)
    }
  }

  const isSignIn = type === "sign-in";


   return (
     <div className="card-border lg:min-w-[566px]">
        <div className="flex flex-col gap-6 card py-14 px-10">
            <div className="flex flex-row gap-2 justify-center">
                <Image src="/logo.svg" alt="logo" height={32} width={38} />
                <h2 className="text-primary-100">PrepWise</h2>

               

            </div>
            <h3 className="text-center text-primary-100 mt-5">Practice job interview with ai </h3>

        
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
            {!isSignIn && (
                <FormField control={form.control} 
                name="name" 
                label="Name" 
                placeholder="Enter your name" />

            )}
            {!isSignIn && <FormField control={form.control} 
                name ="email" 
                label="email" 
                placeholder="your email " />}
            {!isSignIn && <FormField control={form.control} 
                name="password"
                label="pasword" 
                placeholder="Enter your password" />}
            {isSignIn &&<FormField control={form.control} 
                name ="email" 
                label="email" 
                placeholder="your email " />}
            { isSignIn &&<FormField control={form.control} 
                name="password"
                label="pasword" 
                placeholder="Enter your password" />}

            
             
        <Button className="btn" type="submit">{isSignIn ? "Sign In" : " create an account"}</Button>
      </form>
    </Form>
    <p className="text-center text-primary-100 mt-5">
        {isSignIn ? "No accoutn yet ?" : "Already have an account ?"}
        <Link href ={!isSignIn ? "/sign-in" : "/sign-up"} className="font-bold text-user-primary ml-1">
        {!isSignIn ? "Sign In" : "Sign Up"}
        </Link>
        
    </p>
    </div>
    </div>
   )
 }
 
 export default AuthForm