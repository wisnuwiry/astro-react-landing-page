import type React from "react"

interface CardProps {
	children: ChildNode
}

export const Card : React.FC<CardProps> = ({children}) => {
	return (
		<div className="card"></div>
	);
}