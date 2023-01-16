import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface IMeta {
	children: React.ReactNode
}

const Meta: FC<IMeta> = ({ children }) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp="headline">WEBTRONICS</title>
				<link rel="canonical" href={currentUrl} />
				<meta property="og:locale" content="en" />
				<meta property="og:title" content="WEBTRONICS" />
				<meta property="og:url" content={currentUrl} />
				<meta property="og:site_name" content="WEBTRONICS" />
			</Head>
			{children}
		</>
	)
}
export default Meta
