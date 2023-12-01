import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useAtom } from "jotai"
import { _newsStore } from "../App"

export default function ArticlePage({headlines}) {
    let {index} = useParams()
    const [newsStore, setNewsStore] = useAtom(_newsStore)

  return (
    <div>ArticlePage</div>
  )
}