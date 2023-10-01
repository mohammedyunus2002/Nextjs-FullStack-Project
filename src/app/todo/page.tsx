import { middleware } from '../../middleware'

export const config = {
    matcher: '/todo',  
    middleware: middleware
    }

export default function todo() {
    return (
        <div>
            Assalamualaikum
        </div>
    )
}
