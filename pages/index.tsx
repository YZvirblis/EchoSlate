import { PostCard, PostWidget, Categories } from '@/Components'
import { getPosts } from '@/Services/Index'
import FeaturedPosts from '@/Sections/FeaturedPosts'
import Head from '@/Components/Head';

export default function Home({ posts }: any) {
  return (
    <div
      className={ `container mx-auto px-10 mb-8 ` }
    >
      <Head />
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          { posts.map((post: any, index: number) => (
            <PostCard post={ post.node } key={ post.node.slug } />
          )) }
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}
