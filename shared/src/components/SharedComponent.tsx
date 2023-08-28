import React from 'react'

interface ISharedComponentProps {
	text: string;
}

export const SharedComponent = (props: ISharedComponentProps) => {
	return <div>
		Shared Component: {props.text}
	</div>
}