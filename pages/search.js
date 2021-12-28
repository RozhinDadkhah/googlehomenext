import Head from "next/head"
import SecHeader from "../components/SecHeader"
import { API_KEY, CONTEXT_KEY } from '../keys'
import Response from '../Response'
import { useRouter } from "next/router"
import SearchResults from "../components/SearchResults"

function search({ results }) {

    const router = useRouter()

    console.log(results)
    return (
        <div>
            <Head>
                <title>{router.query.term} - Goggle search</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            {/* header */}
            <SecHeader />
            {/* search results */}
            <SearchResults results={results} />
        </div>
    )
}

export default search


export async function getServerSideProps(context) {
    const useDummyData = true
    const startIndex = context.query.start || "0"

    const data = useDummyData ? Response : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${startIndex}`
    ).then((response) => response.json());


    return {
        props: {
            results: data
        }
    }
}