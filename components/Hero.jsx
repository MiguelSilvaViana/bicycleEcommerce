import Image from 'next/image';
import Link from 'next/link';
const Hero = () => {
  return (
    <section className='py-48 md:py-0 md:h-[820px] relative overflow-hidden bg-primary/5'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          {/* text */}
          <div className='w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-start'>
            <h1 className='mb-6 text-center xl:text-left'>
              Where <span>Joyful</span> Cycling Begins
            </h1>
            <p className='mb-10 text-lg max-w-[508px] mx-auto text-center xl:text-left xl:mx-0'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis, laboriosam harum? Dignissimos nulla, omnis ut debitis
              alias iure quidem nesciunt sapiente ex inventore neque dolorem?
              Corporis vel quaerat soluta ab.
            </p>
            {/*  btn group */}
            <div className='flex items-center gap-4 mx-auto xl:mx-0'>
              <Link
                href={'/our-bikes'}
                className='mx-auto md:mx-0'
              >
                <button className='btn btn-primary'>Shop now</button>
              </Link>
              <Link
                href={'/our-bikes'}
                className='mx-auto md:mx-0'
              >
                <button className='btn btn-accent'>Our bikes</button>
              </Link>
            </div>
          </div>
          {/* img */}
          <div className='hidden xl:flex'>
            <Image
              src={'/bike.png'}
              width={765}
              height={480}
              alt=''
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
