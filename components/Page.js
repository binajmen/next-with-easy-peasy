import Link from 'next/link'

import AddCount from './AddCount'

const Page = ({ title, linkTo }) => (
    <div>
        <h1>{title}</h1>
        <AddCount />
        <nav>
            <Link href={linkTo}>
                <a>{linkTo === '/' ? '/index' : linkTo}</a>
            </Link>
        </nav>
    </div>
)

export default Page
