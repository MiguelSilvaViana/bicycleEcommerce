import { client } from '@/app/lib/sanity';

const getData = async () => {
  const query = `*[_type == 'product'] {
  _id, // ID do produto
  name, // Nome do produto
  description, // Descrição do produto
  images, // Imagens do produto
  price, // Preço do produto
  price_id, // ID do preço do produto
  "slug": slug.current, // Slug do produto
  "categories": categories[]->{ // Categorias do produto
    name // Nome da categoria
  }
 }`;
  const data = await client.fetch(query);
  return data;
};
const OurBikes = async () => {
  const bikes = await getData();
  console.log(bikes);
  return <div>OurBikes</div>;
};

export default OurBikes;
