import type React from "react"
import { Button } from "../basic/Button";

interface FooterActionProps {
}

export const FooterAction : React.FC<FooterActionProps> = ({}) => {
	return (
        <div className="flex flex-col gap-6 flex-grow items-end">
            <Button>Request Invite</Button>
            <p className="text-disabled text-sm">© Easybank. All Rights Reserved</p>
        </div>
	);
}