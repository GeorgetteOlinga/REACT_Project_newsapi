import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useAtom } from "jotai"
import { _newsStore } from "../App"

export default function ArticlePage({headlines}) {
    let {index} = useParams()
    const [newsStore, setNewsStore] = useAtom(_newsStore)
    const article = newsStore[index]
  return (
    <article id="article-page-article">
      <h1>{article?.title}</h1>
      <h2 dangerouslySetInnerHTML={{__html:`by ${article?.author ||'unknown'}`}}></h2>
      <img src={article?.urlToImage} alt="" />
      <p><strong>Description: </strong>{article?.description}</p>
      <p><strong>Preview: </strong>{article?.content}</p>
      <a href={article?.url} target="_blank" rel="noreferrer">Link to full article &#9658;</a>
    </article>
  )
}