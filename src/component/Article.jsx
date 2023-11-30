/*
{
  "source": {
    "id": "reuters",
    "name": "Reuters"
  },
  "author": "Andrew Silver",
  "title": "China's respiratory illness surge not as high as pre-pandemic - WHO official - Reuters",
  "description": "The spike in respiratory illnesses that China is currently suffering is not as high as before the COVID-19 pandemic, a World Health Organisation official said, reiterating that no new or unusual pathogens had been found in the recent cases.",
  "url": "https://www.reuters.com/world/china/chinas-respiratory-illness-surge-not-high-pre-pandemic-who-official-2023-11-27/",
  "urlToImage": "https://www.reuters.com/resizer/DcLX87_dBLUFVfpCpTaoQMgYiYM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/O7UWNWGTAFPU3M2L4XGSZ3V74U.jpg",
  "publishedAt": "2023-11-27T10:27:00Z",
  "content": "SHANGHAI, Nov 27 (Reuters) - The spike in respiratory illnesses that China is currently suffering is not as high as before the COVID-19 pandemic, a World Health Organisation official said, reiteratin… [+2401 chars]"
}

npm i react-router-dom

*/
import { Link } from "react-router-dom"

export default function Article({article, index}) {
  let href = "/article/" + index
  return (
    <Link to={href}>
      <article className="headline">
          <h3>{article.title}</h3>
          <h4>by {article.author || "Unknown"} | {article.publishedAt}</h4>
          <p>{article.description}</p>
      </article>
    </Link>
  )
}