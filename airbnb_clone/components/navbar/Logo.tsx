import Link from "next/link";
import { LuTent } from 'react-icons/lu'
import { Button } from '@/components/ui/button'

function Logo() {
    return (
        <Button size='icon' asChild>
            <Link href='/'>
                <LuTent className='w-6 h6' />
            </Link>
        </Button>
    )
}

export default Logo
