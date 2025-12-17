import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function StatusFilter({filter}) {
  return (
    <Select value={filter}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
          <SelectItem value="a">Upcoming</SelectItem>
          <SelectItem value="a">Completed</SelectItem>
          <SelectItem value="a">Processing</SelectItem>
          <SelectItem value="a">Finished</SelectItem>
          <SelectItem value="a">Cancelled</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
