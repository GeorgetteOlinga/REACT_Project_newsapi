const KEY = "ab530159d0c64a2f822b63c95af99714"
const ROOT = "https://newsapi.org/v2"

/*
    Parts of a URL
        protocol    domain              path                parameters
           ⬇          ⬇                  ⬇                      ⬇
        https:// www.someapi.com / something/somethingelse  ?key=value&key=value

    URL parameters
        - always start with "?"
        - contain key-value pairs in this format
            key=value
          separated by "&"

        ?continent=europe&region=northern&country=sweden

        this i kind of like an object
            {
                continent: "europe",
                region: "northern",
                country: "sweden"
            }
*/

async function fetchNews(endpoint, params) {
    const res = await fetch(ROOT + endpoint + params + "&apikey=" + KEY)
    if (!res.ok) {
        console.log("fetchNews failed")
        console.log("failed response:", res)
        return res
    }
    const data = await res.json()
    return data
}

export {
    fetchNews
}