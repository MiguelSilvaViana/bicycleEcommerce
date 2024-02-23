import Link from 'next/link';
import { Input } from './ui/input';
import {
  RiYoutubeFill,
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
  RiPinterestFill,
} from 'react-icons/ri';
const Footer = () => {
  const socialsData = [
    { icon: <RiYoutubeFill />, link: 'www.youtube.com' },
    { icon: <RiFacebookFill />, link: 'www.facebook.com' },
    { icon: <RiInstagramFill />, link: 'www.instagram.com' },
    { icon: <RiTwitterFill />, link: 'www.twitter.com' },
    { icon: <RiPinterestFill />, link: 'www.pinterest.com' },
  ];
  return (
    <footer className='pt-12 text-center text-white xl:pt-24 bg-primary'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-8'>
          <div>
            <h2 className='mb-2 leading-tight capitalize'>
              Subscribe to our newsletter
            </h2>
            <p className='text-white/60'>
              Be the first to get the latest news about trends, promotions and
              much more!
            </p>
          </div>
          {/* form */}
          <form className='flex flex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5'>
            <Input placeholder='Your email address' />
            <button className='btn w-full xl:max-w-[150px] h-[60px] btn-accent'>
              Join
            </button>
          </form>
          {/* socials */}
          <div className='flex gap-8 mx-auto text-[20px] text-white/60 mb-20'>
            {socialsData.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  key={index}
                >
                  {item.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className='py-6 border-t border-white/5 text-white/60'>
        Copyright &copy; 2024 Bikezz. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
