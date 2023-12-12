import Layout from '../components/layout';
import Head from 'next/head';
import { get_all_ids, get_item_data} from '../lib/data';

export async function getStaticPaths() {
  const paths = await get_all_ids();
//   console.log("HERE: "+ paths);
  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const item_data = await get_item_data(params.id);

    return {
        props: {
            item_data
        },
    };
}


export default function person_page({ item_data,}) {
    return (
        

        <Layout>
            <Head>
                <title>{item_data.details.product_name}</title>
            </Head>
            <h1 className='text-center'>{item_data.post_title}</h1>
            <hr/>
            <h3>Product Name: {item_data.details.product_name}</h3>
            <br/>
            <h3>Product Cos: {item_data.details.product_cost}</h3>
            <br/>
            <hr/>
            <h3>Product Number: {item_data.details.product_number}</h3>
        </Layout>
    );
  }
  

