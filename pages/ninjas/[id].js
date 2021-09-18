// for dynamic routing
import { useRouter } from "next/router"

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()

    const paths = data.map(ninja => {
        return {
            params: {id: ninja.id.toString()}
        }
    })

    return {
        paths, //will generate 10 pages bcz 10 ids are there in the data
        fallback: false //will show the 404 page if id not present is visited
    }
}

export const getStaticProps = async(context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/` + id)
    const data = await res.json()

    return {
        props: {ninja: data}
    }
}

// its runs 10 times bcz ninjas has 10 items and it auto accepts a context 
// object that gives us the ninja details i.e in this case params


const Details = ({ninja}) => {
    const router = useRouter()
    // console.log('useRouter', router)
    return (
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </div>
    )
}

export default Details


// the job of next is to build static pages and js bundle based on our components or data
