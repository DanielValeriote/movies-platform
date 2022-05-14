import { SpinnerCircular } from 'spinners-react';

type Props = {
	color?: string
}

function Loading({color}: Props) {
	return (
		<div className='loadingContainer' style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
			<SpinnerCircular color={color || '#1b1c1e'} />
		</div>
	)
}

export default Loading