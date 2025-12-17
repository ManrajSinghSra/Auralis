"use client"

import { useRouter } from "next/navigation"
import { GenerateAvatar } from "../../../../Avatar/avatar"
import { StatusBadge } from "./Status"

export const columns = [
  {
    accessorKey: "meetingName",
    header: "Meeting",
    cell: ({ row }) => {
      const meetingName = row.getValue("meetingName")
      const agentName = row.original.agentName
      const status = row.original.status
      const meetId=row.original.meetId

      const router=useRouter();

      return (
        <div className="flex md:w-[50%] w-full justify-between">

          <div className="flex  gap-6" onClick={()=>router.push(`/meeting/${meetId}`)}>

            <GenerateAvatar seed={agentName} variant="botttsNeutral" className="h-9 w-9 shrink-0" />

            <div className="flex flex-col">
              <span className="font-medium text-sm leading-tight">
                {meetingName}
              </span>
              <span className="text-xs text-muted-foreground">
                with {agentName}
              </span>
            </div>
          </div>

          <div>
            <StatusBadge status={status} />
          </div>
        </div>
      )
    },
  }


]
