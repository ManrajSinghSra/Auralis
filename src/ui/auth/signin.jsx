"use client"

import {redirect} from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { Alert, AlertTitle } from "@/components/ui/alert"
import { OctagonAlertIcon } from "lucide-react"  
export const SignInView=()=>{



       const [user,setUser]=useState({email:"john@gmail.com",password:"12345678"});
       const [isError,setError]=useState({value:false,text:""});
       const [loading,setLoading]=useState("Sign In");
 

  
       const handleSubmit=async(e)=>{
          e.preventDefault();
  
  
          const {data,error}=await authClient.signIn.email(
                  {
                  email:user.email,
                  name:user.name,
                  password:user.password
                  },
                  {
                      onRequest: (ctx) => {
                       setLoading("Loading...")
                      },
                      onSuccess: (ctx) => { 
                        setLoading("Sign In")
                        setError({...isError,value:false})
                        redirect("/")
                     },
                      onError: (ctx) => { 
                         setLoading("Sign In")
                         setError({...isError,value:true,text:ctx.error.message})
                       
                       },
                  }
                 )
            }

            // if(session){
            //   redirect("/dash")
            // }




    return(
     <>
       <Card className="w-100 p-10 flex flex-col items-center justify-between">
          <CardContent className="flex flex-col gap-6">


          <div className="h-[3rem] w-[20rem] flex justify-center items-center flex-col">
               <img src="./logo.svg" alt="logo"/>
               <h1 className="text-3xl">Auralis</h1>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              
              <div className="flex flex-col gap-4">
                 <Input placeholder="Email" name="email" value={user.email} onChange={(e)=>{
                  setUser({...user,email:e.target.value})
                 }}/> 
                 <Input placeholder="Password" type="password" name="password"  value={user.password} onChange={(e)=>{
                  setUser({...user,password:e.target.value})
                 }}/> 
              </div>

              <div>
                 <Button className="w-full" type="submit">{loading}</Button>
              </div>

          </form>

           <div>
                            {isError.value && 
                            <Alert className="bg-destructive/15">
                               <OctagonAlertIcon className="h-6 w-6 !text-destructive" />
                               <AlertTitle>{isError.text}</AlertTitle>
                            </Alert>
                            }
                         </div>

          <div className="flex  justify-between text-[#9396a2]">
              <p>Forgot Password?</p>
              <p>Sign Up</p>
          </div>

          <div>
              <h1 className="text-center text-[#9396a2]">or you can sign in with</h1>

               <div className="flex gap-10 justify-center mt-10 ">
                 <Button>Google</Button>
                 <Button>GitHub</Button>
               </div>
          </div>

          </CardContent>
          
        
        </Card> 
     </>)
}

