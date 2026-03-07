import LinkButton from "./LinkButton"

const links = [ 
   { label: "Portfolio", href: "https://lina98st.github.io/portfolio-under-construction/"},
      {  label: "GitHub", href: "https://github.com/lina98st?tab=overview&from=2026-03-01&to=2026-03-07" },
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

