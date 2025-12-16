import LinkButton from "./LinkButton"

const links = [ 
   { label: "Portfolio", href: "https://lina98st.github.io/alina.dev/"},
      {  label: "GitHub", href: "https://github.com/lina98st" },
       {     label: "LinkedIn", href: "https://www.linkedin.com/in/alina-schmi/"},
         {    label: "Hashnode", href: "https://alinatech.hashnode.dev/"},
]


  export default function LinksList() {
  return (
    <div className="links">
{links.map(link =>  ( 
    <LinkButton
key={link.label}
label={link.label}
href={link.href}
/>
))}
    </div>
  )
}

