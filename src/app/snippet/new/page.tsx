/* eslint-disable */
"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import React, { useActionState } from 'react'
import * as actions from "@/actions"
//CREATE the data

function page() {
    
const [formStateData,xyz]=useActionState(actions.createSnippet,{messasge:""})
   
    

  return (
    <div className='container mx-auto mt-3'>
        <form action={xyz}>
            <label>Title</label> <Input type='text' name='title' id='title'></Input>
            <label > Code</label>
            <code>
                <Textarea className='h-56 border-2 shadow-lg border-black ' name='code' id='code'></Textarea>
            </code>
         {formStateData.messasge && <div className='p-2 bg-red-300 border-2 border-red-600'>{formStateData.messasge}</div> }   
            <Button className='mt-5'>New</Button>
        </form>

    </div>
  )
}

export default page