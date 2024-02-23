import Link from 'next/link';
const ErrorPage = () => {
  return (
    <section className='py-72'>
      <div className='container mx-auto'>
        <h3 className='mb-4 text-center'>
          Something went wrong! Please try again!
        </h3>
        <Link href={'/'}>
          <button className='mx-auto btn btn-accent'>Back to homepage</button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
