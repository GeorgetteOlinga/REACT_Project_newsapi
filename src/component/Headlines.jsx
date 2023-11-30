import Article from "./Article"
import { useEffect } from "react"

export default function Headlines({headlines, country, filter}) {
    useEffect(()=>{
        // console.log(`Headlines were updated: `, headlines)
    },[headlines])

  return (
    <section id="headlines">
        <h2>Top headlines from {country.name}</h2>
        {headlines.map((article, i) => {
            let key = `${i}-${article.title}`
            return (
                <Article article={article} index={i} key={key} />
            )
        })}
    </section>
  )
}