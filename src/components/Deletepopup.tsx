import {
    AlertDialog,

    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import * as action from "@/actions"

  import React from 'react'
import { Button } from "./ui/button";
  
  function Deletepopup({delid}:{delid:number}) {
    const handledelete=action.handledelete.bind(null,delid);
    
    return (
      <div>
<AlertDialog>
  <AlertDialogTrigger>  <Button>Delete </Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure to delete?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your code snippets
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <form action={handledelete}>
      <Button>delete</Button> 
      {/* <AlertDialogAction>Continue</AlertDialogAction> */}
      </form>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>


      </div>
    )
  }
  
  export default Deletepopup