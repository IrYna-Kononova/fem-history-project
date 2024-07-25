import './Filters.css';

const Filters = ({ searchTerm, setSearchTerm, filters, setFilters}) => {
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (e) => {
        const { name, value} = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

  return (
    <div className='filters-container'>
        <input 
        type="text" 
        placeholder='search...'
        value={searchTerm}
        onChange={handleSearchChange}
        className='search-input'
        />

        <div className='filter-selects'>
            <select name="era" value={filters.era} onChange={handleFilterChange} className='filter-select'>
                <option value="">All Eras</option>
                <option value="First Wave">First Wave</option>
                <option value="Second Wave">Second Wave</option>
                <option value="Third Wave">Third Wave</option>
                <option value="Fourth Wave">Fourth Wave</option>
            </select>
            <select name="region" value={filters.region} onChange={handleFilterChange} className='filter-select'>
                <option value="">All Regions</option>
                <option value="USA">USA</option>
                <option value="New Zealand">New Zealand</option>
                <option value="France">France</option>
                <option value="Global">Global</option>
                <option value="Ukraine">Ukraine</option>
                <option value="Germany">Germany</option>
            </select>
            <select name="type" value={filters.type} onChange={handleFilterChange} className='filter-select'>
                <option value="">All Types</option>
                <option value="Convention">Convention</option>
                <option value="Legislation">Legislation</option>
                <option value="Publication">Publication</option>
                <option value="Medical">Medical</option>
                <option value="Literature">Literature</option>
                <option value="Legal">Legal</option>
                <option value="Movement">Movement</option>
                <option value="Policy">Policy</option>
            </select>

        </div>
    </div>
  );
};


export default Filters;