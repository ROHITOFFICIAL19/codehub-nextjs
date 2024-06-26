import React from 'react'
import Button from './Button'
import Link from 'next/link'
import NextButton from "./NextUIButton"
import { useRouter } from "next/navigation";
// import {NavbarBrand} from "@nextui-org/react";



const Navbar = () => {
    const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login"); // Redirect to the login page
  };

  return (
    <>
        <div className='flex items-center justify-between px-11 py-5  font-[-apple-system,BlinkMacSystemFont,"Segoe_UI","Noto_Sans",Helvetica,Arial,sans-serif,"Apple_Color_Emoji","Segoe_UI_Emoji"]'>
            <div className=''>
                <ul className='flex gap-7'>
                    <p className="font-bold text-inherit mx-8">{"</>HUB"}</p>
                    {/* <li>
                        
                        <Link href="/" className='text-[snow]'>Docs</Link>
                    </li>
                    <li>
                        <Link href="/" className='text-[snow]'>Products</Link>
                    </li>
                    <li>
                        <Link href="/" className='text-[snow]'>Pricing</Link>
                    </li> */}
                </ul>
            </div>
            <div className='flex '>
                {/* <Button 
                    innertext="Sign Up"
                    fontSize="text-[1vw]"
                    padding="pr-2 pl-2 pt-[.3vw] pb-1"
                    margin="m-3"
                    border="border-[.2vw] border-[solid] border-[snow]"
                    brRadius="rounded-[13px]"
                    bgColor="bg-transparent"
                    txtColor="text-[snow]"/>
                <Button 
                    innertext="Sign In"
                    fontSize="text-[1vw]"
                    padding="pr-2 pl-2 pt-1 pb-1"
                    margin="m-3"
                    border="border-[.3vw] border-[solid] border-[snow]"
                    brRadius="rounded-[13px]"
                    bgColor="bg-[snow]"
                    txtColor="text-[#00192A]"/> */}
                <a href="/login"><NextButton size="md" className="bg-white font-semibold text-black border-none m-5 shadow-lg" btnText="Login"/></a>
            </div>
        </div>
    </>
  )
}

export default Navbar