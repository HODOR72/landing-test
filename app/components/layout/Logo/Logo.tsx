import Image from 'next/image'

import { Logo } from '@/assets/images/svg'

const LogoWrapper = () => {
	return (
		<div>
			<Image src={Logo} width={169} height={33} alt="Logo" />
		</div>
	)
}
export default LogoWrapper
