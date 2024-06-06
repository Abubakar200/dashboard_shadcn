import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

type Props = {
    text: string
    href: string
}
const BackButton = ({
href,
text
}: Props) => {
    return ( 
        <Link href={href} className="text-gray-500 hover:underline flex items-center gap-1 font-bold mb-5">
            <ArrowLeftCircle size={18}/> {text}
        </Link>
     );
}
 
export default BackButton;