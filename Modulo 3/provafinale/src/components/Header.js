
export default function Header({ setSearchQuery, searchQuery }) {

    function handleChange(e) {
        const query = e.target.value
        setSearchQuery(query)
    }

    return (
        <div className="header">

            <img
                className="header__logo"
                src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png" alt=""
                onClick={() => setSearchQuery("")}
            />

            <div className="header__search">
                <input className="header__searchInput" type="text" placeholder="Search a product or a category" value={searchQuery} onChange={(e) => handleChange(e)} />
            </div>

            <div className="header__nav">

                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>

            </div>
        </div>
    )
}
