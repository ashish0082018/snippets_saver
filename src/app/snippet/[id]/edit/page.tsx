import Editsnippet from '@/components/Editsnippet';

import { prisma } from '@/lib/prisma';
import React from 'react'


//UPDATE 

async function page({params}:{params :Promise<{id:string}>}) {
const snippetid=(await params).id;
const snippet =await prisma.snippets.findUnique({
    where:{
        id:parseInt(snippetid)
    }
})
if(!snippet) return ;

  return (
    <>
  
      
        <Editsnippet snippet={snippet} />
      
      
        

    </>

  )
}

export default page