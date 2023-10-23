export default function NavBar({ categories, setSearchQuery }) {

    return (
        <div id="navbar2">
            <div id="containerCategories2">
                <button class="textAllCategories" onClick={() => setSearchQuery("")}>All</button>
                <div id="containerCategoriesAll">
                    {categories.map(category => <li onClick={() => setSearchQuery(category)}>
                        {category}
                    </li>)}
                </div>
            </div>
        </div>
    )
}
