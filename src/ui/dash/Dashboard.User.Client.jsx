"use client";

import { FiLogOut } from "react-icons/fi";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronUp } from "lucide-react";
import { GenerateAvatar } from "../../../Avatar/avatar";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const DashboardUserClient = ({ session }) => {
  const router = useRouter();

  return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className="border border-foreground w-full p-7 flex">
                    <GenerateAvatar seed={session.user.name} variant="botttsNeutral" />
                    <h1>{session.user.name}</h1>
                    <ChevronUp className="ml-auto" />
                    </SidebarMenuButton>
                </DropdownMenuTrigger>

                <DropdownMenuContent side="top" className="w-55">
                    <div className="flex gap-4 p-2">
                        <GenerateAvatar seed={session.user.name} variant="botttsNeutral" />
                        <div>
                            <h1>{session.user.name}</h1>
                            <h1 className="text-gray-500">
                            @{session.user.email?.substring(0, 10)}
                            </h1>
                        </div>
                    </div>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                        onClick={() =>
                            authClient.signOut({
                            fetchOptions: {
                                onSuccess: () => {
                                router.replace("/signin");
                                router.refresh();
                                },
                            },
                            })}>
                    <FiLogOut />
                    <span>Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
  );
};

export default DashboardUserClient;
