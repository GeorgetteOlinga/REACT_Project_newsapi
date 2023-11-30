const countries = [
    ['United States', 'us'],
    ['France', 'fr'],
    ['Germany', 'de'],
    ['Japan', 'jp'],
    ['China', 'cn'],
    ['Italy', 'it'],
]

const filters = [
    ['Author', 'author'],
    ['Keywords', 'keywords'],
]

export default function Filters({setCountry, setFilter}) {

    function changeFilter(type, query) {
        if (!type || !query) return
        switch (type) {
            case "keywords":
                setFilter(()=>{
                    return article => {
                        return article.title?.toLowerCase().includes(query.toLowerCase()) ||
                                article.description?.toLowerCase().includes(query.toLowerCase())
                    }
                })
                break
            case "author":
                setFilter(()=>{
                    return article => {
                        return article.author?.toLowerCase() == query.toLowerCase()
                    }
                })
                break
        }
    }

  return (
    <aside>
        <div>
            <h3>Select a country</h3>
            <select onChange={(e)=>{
                const [name, code] = countries[e.target.value]
                setCountry({name, code})
            }}>
                {countries.map(([name, code], i) => {
                    return (
                        <option value={i} key={name}>{name}</option>
                    )
                })}
            </select>
        </div>
        <div>
            <h3>Filters</h3>
            <form onSubmit={e=>{
                e.preventDefault()
            }}>
                {filters.map(([name, value]) => {
                    return (
                        <div className="field" key={name}>
                            {name}
                            <input type="radio" value={value} name="filter"/>
                        </div>
                    )
                })}
                <div className="field">
                    <input type="text" name="query"/>
                </div>
                <button
                    type="button"
                    onClick={(e)=>{
                        const type = e.target.parentElement.filter.value
                        const query = e.target.parentElement.query.value
                        changeFilter(type, query)
                    }}
                >
                    Filter
                </button>
                <button
                    type="button"
                    onClick={(e)=>{
                        setFilter(()=>()=>true)
                    }}
                >
                    Show all
                </button>
            </form>
        </div>
    </aside>
  )
}