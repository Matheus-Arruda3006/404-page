import React from 'react'
import BgTech from '../src/assets/logotech.png';
import Image from 'next/image';
import Link from 'next/link';
import {AiFillFacebook} from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import { TbBrandGmail } from 'react-icons/tb';
import { BsWhatsapp } from 'react-icons/bs';
import FundoRobo from '../img/fundorobo.jpg';


export default function Hero() {
  return (
    <div className='flex items-center justify-center mb-12 bg-fixed custom-image pt-20 page-bg'>
        {/* Overlay */}
        <div className='flex flex-col ml-10'>
            <h1>EM BREVE UM NOVO SITE</h1>
        <Image src={BgTech} alt='logo-tech' width={400} height={500} className='z-0'/>
        <div className='flex flex-col items-center'>
            <div>
                <Link href="https://web.facebook.com/flockmarketingeventos/?_rdc=10&_rdr" >
                  <div className='flex flex-start'>
                    <AiFillFacebook className='custom-icon1'/><a>Flock Marketing e Eventos</a>
                  </div>
                </Link>
            </div>
            <div>
                <Link href="https://www.instagram.com/flockmkt/">
                  <div className='flex flex-start'>
                    <FaInstagram className='custom-icon2'/><a target="_blank" rel="noopener noreferrer">@flockmkt</a>
                  </div>
                </Link>
            </div>
            <div>
                  <div className='flex flex-start'>
                    <TbBrandGmail className='custom-icon'/><p>comercial@flockmarketing.com.br</p>
                  </div>
          </div>
          <div>
            <Link href='https://api.whatsapp.com/send?phone=5565992347745&text=Ol%C3%A1%2C%20vi%20o%20seu%20site%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20os%20planos.'>
            <div className='flex flex-start custom-whatsapp'>
              <BsWhatsapp className='custom-icon3'/><a>(65) 99234-7745</a>
            </div>
            </Link>  
          </div>
        </div>
        </div>
    </div>
  )
}