"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export const saveSnippet=async (id:number,code:string)=>{
await prisma.snippets.update({
    where:{
        id
    },
    data:{
        code
    }

})
revalidatePath(`/snippet/${id}`);     // on upadating the snippet you will update the cache of the route `/snippet/${id}`
redirect(`/snippet/${id}`)
}



export const handledelete=async (id:number)=>{
    await prisma.snippets.delete({
      where:{
        id
      }
    })
    revalidatePath("/")   // jab jab delete hoga tab tab update krna h home route
    redirect("/");
  }




  export const createSnippet = async (
    state: { messasge: string },
    formData: FormData
  ): Promise<{ messasge: string }> => {
    try {
      const title = formData.get("title");
      const code = formData.get("code");
  
      if (typeof title !== "string" || title.length < 4) {
        return { messasge: "Title is required and must be greater than 4 characters" };
      }
  
      if (typeof code !== "string" || code.length < 8) {
        return { messasge: "Code is required and must be greater than 8 characters" };
      }
  
      await prisma.snippets.create({
        data: {
          title,
          code,
        },
      });
     revalidatePath("/") //
    
      // return { messasge: "Snippet created successfully!" };
    } catch (error: unknown) {
      if(error instanceof Error){
        return {messasge: error.message}
      }
      else{
        return { messasge: "Oops! Something went wrong: " };
      }
     
    }
    redirect("/"); // Redirect after successful snippet creation.
  };
  

