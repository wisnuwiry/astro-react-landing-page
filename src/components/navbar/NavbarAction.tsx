import type React from "react"
import { Button } from "../basic/Button";

interface NavbarActionProps {
}

export const NavbarAction : React.FC<NavbarActionProps> = ({}) => {
	return (
        <Button>
            Request Invite
        </Button>
	);
}