import Link from 'next/link'

import Counter from './Counter'
import Shop from './Shop'
import Inventory from './Inventory'

function Page({ title, linkTo }) {
    return (
        <div>
            <h1>{title}</h1>
            <Counter />
            <Shop />
            <Inventory />
            <Link href={linkTo}>
                <a>{linkTo === '/' ? '/index' : linkTo}</a>
            </Link>
        </div>
    )
}

export default Page
