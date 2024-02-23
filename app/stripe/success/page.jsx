import Link from 'next/link';
const SuccessPage = () => {
  return (
    <section className='py-72'>
      <div className='container mx-auto'>
        <h3 className='mb-4 text-center'>
          Your payment was successful! Thank you!
        </h3>
        <Link href={'/'}>
          <button className='mx-auto btn btn-primary'>Back to homepage</button>
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
