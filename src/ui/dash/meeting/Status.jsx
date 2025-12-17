"use client"

const statusStyles = {
  upcoming: "bg-blue-50 text-blue-700 border-blue-200",
  active: "bg-green-50 text-green-700 border-green-200",
  completed: "bg-gray-50 text-gray-700 border-gray-200",
  cancelled: "bg-red-50 text-red-700 border-red-200",
  processing: "bg-yellow-50 text-yellow-700 border-yellow-200",
}

export const StatusBadge = ({ status }) => {
  return (
    <span
      className={`inline-flex items-center justify-center text-[11px] font-medium px-2.5 py-1 rounded-full border capitalize ${statusStyles[status]}`}
    >
      {status}
    </span>
  )
}
