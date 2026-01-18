"use client"
import dynamic from 'next/dynamic'
import { FallbackHeader } from "./header";

const Header = dynamic(() => import('./header'), { 
  ssr: false, 
  loading: () => <FallbackHeader/> 
})

export default function HeaderWrapper() {
  return <Header />
}