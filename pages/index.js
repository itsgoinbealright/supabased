import { supabase } from '../utils/supabase';
import Intro from './components/intro_animation/intro'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// LAZY LOAD FOR OPTIMIZATION
// GITHUB UPLOAD, GET IT OFF THIS UNIT FACK
//INTRO SCROLLER
//BUTTONS FOR SORT_BY (ERA, BRAND, STYLE) => (acsending, descending etc)
//DONATION?
//LINK UP SELLERS?

export default function Videos({ videos }) {
  return (
    <>
    <Head>
      <title>CRIDFLIX</title>
    </Head>

    <section>
    <div>
        <Intro className="z-10"/>
      </div>
    </section>
    
   <section className="bg-slate-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 z-0">
        {videos.map((video) => (
          <div className="container mt-20 mx-auto px-2">
            <div className="card bg-white	m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
              <Link key={video.id} href={`${video.id}`}>
                {/* <a className='p-4 m-4 rounded shadow text-xl flex'>{videos.title}</a> */}
                <div>

                  {/* break below into components  //  video card */}

                  <div className="-mt-12">
                    <Image
                      key={video.id}
                      className="-mt-1"
                      src={video.videoCover}
                      objectFit="scale-down"
                      alt={video.title}
                      layout="responsive"
                      height="60"
                      width="100"
                    />
                  </div>
                  <div className="m-3">
                    <h3 className="text-base ">{video.title}</h3>
                    <h4 className="text-xs mb-2">{video.company}</h4>
                    <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">{video.description}</p>
                    <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">1993</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
        </section>
        </>
  )
}



export async function getStaticProps() {
  const { data: videos } = await supabase.from('videos').select('*')

  return {
    props: {
      videos,
    }
  }
}
