import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { links } from "@/app/utils/links"
import Link from "next/link"
import UserIcon from "./UserIcon"
import { Button } from "@/components/ui/button"
import { LuAlignLeft } from "react-icons/lu"
import SignOutLink from "./SignOutLink"



function LinksDropDown() {
    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-4 max-w-[100px]">
                    <LuAlignLeft className="w-6 h-6" />
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-52"
                align="start"
                sideOffset={10}
            >
                {links.map((link) => {
                    return (
                        <DropdownMenuItem key={link.label}>
                            <Link href={link.href}>
                                {link.label}
                            </Link>
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LinksDropDown
