import { client } from '@/app/lib/sanity';
import Link from 'next/link';

// get data
const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories)] {
  _id,
    name,
    description,
    images,
    price,
    price_id,
    "slug": slug.current,
    "categories": categories[]-> {
    name}
}`;
  const data = await client.fetch(query);
  return data;
};

const PopularBikes = async () => {
  const bikes = await getData();

  return (
    <section className='py-24'>
      <div className='container mx-auto'>
        <h2 className='text-center'>Most Popular Bikes</h2>
        <p className='text-center mb-[30px]'>
          The world's Premium Brands In One Destination.
        </p>

        <div>Carousel</div>
        <Link href={'/our-bikes'}>
          <button className='mx-auto btn btn-accent'>See all bikes</button>
        </Link>
      </div>
    </section>
  );
};

export default PopularBikes;