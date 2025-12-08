"use client";

import { 
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell, 
  TableRow,
} from "@/components/ui/table"; ;

export function DataTable({ columns, data }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-hidden border">
      <Table> 

        <TableBody>

          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() ? "selected" : undefined}
              >
                
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="mb-4!  rounded-2xl p-5 bg-gray-200 text-[20px]">
                     
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext(),
                    )}
  
                  </TableCell>
                ))}
                 
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>


      </Table>
    </div>
  );
}
