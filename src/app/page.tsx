import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

import Link from "next/link";

// disable caching -> dono mai se koi bhi method ka use kr skte ho
/*export const dynamic="force-dynamic" // diabling the caching -> it makes this page dynamic (removes all the features of caching)
export const revalidate=0; */   

export default async function Home() {

const snippets=await prisma.snippets.findMany();


  return (
   <>
   <div className="container mx-auto">
    <h1 className="text-2xl font-semibold mb-5">Home</h1>
    <div className="flex justify-between"> 
    <Link href={'/snippet/new'}><Button>New</Button></Link>

    
    </div>
    <div>
    {snippets.map((elem)=>{
        return < >
        <div className="flex justify-between my-3 bg-gray-300 p-3 rounded-lg hover:bg-slate-400 transition"> 
        <h2>{elem.title} </h2>
        <div className="flex gap-3"> 
      <Link href={`snippet/${elem.id}`}>  <Button>view</Button></Link>
       
        </div>
        </div>


        </>
      })}
    </div>
   </div>
   </>
  );
}
