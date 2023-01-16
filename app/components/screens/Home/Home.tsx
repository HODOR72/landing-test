import Layout from '@/components/layout/Layout'

import Meta from '@/utils/Meta'

import {
	About,
	Contact,
	Effects,
	Gallery,
	Questions,
	Review,
	Steps,
	Technologies,
} from '../Home'

const Home = () => {
	return (
		<Meta>
			<Layout>
				<Effects />
				<About />
				<Technologies />
				<Steps />
				<Questions />
				<Review />
				<Gallery />
				<Contact />
			</Layout>
		</Meta>
	)
}
export default Home
