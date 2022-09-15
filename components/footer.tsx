import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Footer: React.FC = () => {
  return (
    <div>
      <footer className='min-h-full flex gap-8 items-center justify-center bg-black text-white p-10'>
        <Image src="/logo2.png" width={20} height={20} alt="logo" />
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </footer>
    </div>
  )
}

export default Footer;
