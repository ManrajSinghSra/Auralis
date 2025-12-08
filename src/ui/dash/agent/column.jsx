import { CornerDownRightIcon} from "lucide-react";
import { GenerateAvatar } from "../../../../Avatar/avatar";
 


export const columns = [
  {

    accessorKey: "name",
    header: "Agent Name",
    cell: ({ row }) => {
      const name = row.getValue("name"); 
      return (<>
              <div className="flex items-center gap-3 ">
                <GenerateAvatar seed={name} variant="botttsNeutral" className="w-10 h-10" />
                <span className="font-medium">{name}</span>
              </div>
              <div>
                <CornerDownRightIcon />
                <span className="text-gray-600"> {row.original.instruction}</span>
              </div>

        </>
      );
    },
  } 
];
