"use client"
import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Snippets } from '@prisma/client'
import * as action from "@/actions"

function Editsnippet({snippet}:{snippet:Snippets}) {
    const [code,setcode]=useState(snippet.code)

    const newValues=(value:string="")=>{
        setcode(value)
    }
const saveSnippetAaction=action.saveSnippet.bind(null,snippet.id,code);

  return (
    <div className=' rounded-xl overflow-hidden'>

<div className='text-xl'> <u><b>{snippet?.title}  </b> </u>   </div>
<div className='flex flex-col gap-2'> <h2 className='text-xl'>Code Snippet</h2> </div>

<Editor  onChange={newValues}  height="60vh" defaultLanguage="javascript" defaultValue={code} theme="vs-dark" />
<form action={saveSnippetAaction}><Button type='submit' className='w-fit' >save</Button></form>
    </div>
  )
}

export default Editsnippet