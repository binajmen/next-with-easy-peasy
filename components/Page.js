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
            <Link href="/">
                <a>/index</a>
            </Link>
            {" – "}
            <Link href="/ssr">
                <a>/ssr</a>
            </Link>
            {" – "}
            <Link href="/ssr">
                <a>/ssr (again)</a>
            </Link>
        </div>
    )
}

export default Page
