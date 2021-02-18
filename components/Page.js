import Link from 'next/link'

import Counter from './Counter'
import Basket from './Basket'
import Items from './Items'

function Page({ title, linkTo }) {
    return (
        <div>
            <h1>{title}</h1>
            <Counter />
            <Basket />
            <Items />
            <nav>
                <Link href={linkTo}>
                    <a>{linkTo === '/' ? '/index' : linkTo}</a>
                </Link>
            </nav>
        </div>
    )
}

export default Page
