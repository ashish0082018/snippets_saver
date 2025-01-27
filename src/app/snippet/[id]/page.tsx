import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

import React from "react";

import Deletepopup from "@/components/Deletepopup";

async function page({params}:{
    params: Promise<{ id: string }>
  }) {
const snippetid=(await params).id;
const snippet=await prisma.snippets.findUnique({
    where:{
        id:parseInt(snippetid)
    }
})
if(!snippet) return <> <h1>No data found</h1> </>




  return (
    <>
    <div className="container mx-auto my-6"> 
      <div className="flex justify-between ">
        <h2>{snippet?.title}</h2>
        <div className="flex gap-5">
       
         {/* <Button>delete</Button> */}
         <Deletepopup delid={snippet.id} />
        
         <Link href={`${snippet.id}/edit`}> <Button>edit</Button></Link>
        </div>
      </div>

      <div>
        <pre className="bg-gray-200 p-3 rounded-lg my-3">
            <code>{snippet.code}</code>
        </pre>
      </div>
      </div>
    </>
  );
}

export default page;

export const generateStaticParams=async ()=>{
  const snippets=await prisma.snippets.findMany();
// simply return the id of the snippets (array of object of id) when page loads ,means you pre fetch all the data before page load, or before you reach to that dynamic route
  return snippets.map((snippet)=>{
    return {id:snippet.id.toString()};
  })
}