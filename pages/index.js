import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import { get_sorted_list} from '../lib/data';

// define a getStaticProps() function - this name is defined by next.js
export async function getStaticProps() {
  const all_data = await get_sorted_list();

  return {
    props: { all_data }
  };
}

export default function Home( {all_data}) {
    return (
      <Layout home>
        <Head>
            <title>Homepage</title>
        </Head>
  
        <h1 className='display-4'>This is a page</h1>

        <h3>This is a list of Posts</h3>

        <div className='list-group'>
          {all_data.map(
              ({id, name}) => (
                <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action list-group-item-info">
                  {name}
                </Link>
              )
            )
          }
        </div>
      </Layout>
    );
  }