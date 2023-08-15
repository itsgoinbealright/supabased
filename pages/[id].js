import { supabase } from '../utils/supabase'
import YouTube from 'react-youtube';
import Head from 'next/head';

const VideoDetails = ({ videos }) => {
    console.log({ videos })
    return (
        <>
        <Head>
        <title>{videos.title}</title>
        </Head>
        <div>
            <h1>{videos.title}</h1>
            <YouTube videoId={videos.url} />
            <p>{videos.description}</p>
            <p>year released</p>
        </div>
    </>)
};

export const getStaticPaths = async () => {
    const { data: videos } = await supabase.from("videos").select("id")

    const paths = videos.map(({ id }) => ({
        params: {
            id: id.toString()
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { id } }) => {
    const { data: videos } = await supabase.from("videos").select("*").eq('id', id).single()

    return {
        props: {
            videos,
        }
    }
}
export default VideoDetails