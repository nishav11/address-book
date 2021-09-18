import styles from "../../styles/Jobs.module.css"
import Link from "next/link";

export const getStaticProps = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: {ninjas: data}
    }

}

// since in next.js the components are prerendered by the time they reach the browser
// hence, we use getStaticProps to fetch the data before they are rendered so that 
// the rendered component have data before they are rendered on the browser.


const Ninjas = ({ninjas}) => {
    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map(ninja => (
                <Link href={`/ninjas/` + ninja.id} key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default Ninjas


// next generates an html page for all it's dynamic routes i.e in ninja one page for each ninja based on id
// so need to tell next what all details, routes and pages we need to create during build time based on our data
// to do that we use getStaticPaths to generated static routes during build time
