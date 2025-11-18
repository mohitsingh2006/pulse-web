import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
    return(
       <div className="mt-3 d-flex gap-3 search-box">
            <div className="position-relative">
            <span className="input-group-text bg-white">
                <CiSearch size={20} />
            </span>
            <input
                type="text"
                className="form-control"
                placeholder="Search...."
            />
            </div>
        </div>
    )
}
export default SearchBox;