import React from 'react'
import BgTech from '../src/assets/logotech.png';
import Image from 'next/image';
import Link from 'next/link';
import {FaFacebookF} from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import {TbBrandGmail} from 'react-icons/tb';


export default function Hero() {
  return (
    <div className='flex items-center justify-center mb-12 bg-fixed custom-image pt-20'>
        {/* Overlay */}
        <div className='flex flex-col ml-10'>
            <h1>EM BREVE UM NOVO SITE</h1>
        <Image src={BgTech} alt='logo-tech' width={300} height={300}/>
        <div>
          <p>comercial@flockmarketing.com.br</p>
          <p>@flockmkt</p>
          <p>55 65 9 9223-5891</p>
        </div>
        </div>
    </div>
  )
}