import { redirect } from 'next/navigation';
export default function Home() {
    redirect("/index.html")
    return <div className="pl-6">Redirecting to legacy... <br/><br/> Please Wait</div>
}
