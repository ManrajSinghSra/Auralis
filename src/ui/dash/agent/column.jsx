import { CornerDownRightIcon } from "lucide-react";
import { GenerateAvatar } from "../../../../Avatar/avatar";
import { redirect } from "next/navigation";
 
export const columns = [
  {
    accessorKey: "name",
    header: "Agent Name",
    cell: ({ row }) => {
      const name = row.getValue("name"); 

      return (
        <div
          onClick={() => { redirect(`/agents/${row.getValue("name")}`) }}
          className="group cursor-pointer rounded-lg transition-colors hover:bg-muted"
        >
          {/* Top row */}
          <div className="flex items-center gap-3">
            <GenerateAvatar
              seed={name}
              variant="botttsNeutral"
              className="w-10 h-10 shrink-0"
            />
            <span className="font-medium text-sm group-hover:underline">
              {name}
            </span>
          </div>

          {/* Instruction */}
          <div className="mt-1.5 flex items-start gap-1.5 pl-11 text-xs text-muted-foreground">
            <CornerDownRightIcon className="h-3.5 w-3.5 mt-0.5 shrink-0" />
            <span className="line-clamp-2">
              {row.original.instruction}
            </span>
          </div>
        </div>
      );
    },
  },
];
