import Link from "next/link";
const Links = () => {
    const Links = [
        {
            title: "HomePage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contant",
            path: "/content"
        },
        {
            title: "Blog",
            path: "/blog"
        },
    ];
    
    return(
        <div>
            {Links.map((link => (
                <Link href={link.path} key={link.title}>{link.title}</Link>
            )))}
        </div>
    )
}

export default Links