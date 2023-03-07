import React, { useState } from 'react';
import FilterDropdown from './FilterDropdown';

const ParentComponent = () => {
  const [filteredResults, setFilteredResults] = useState([]);

  const handleFilter = (filterOptions) => {
    // Perform filtering logic here based on the selected filter options
    // For example, you could make an API call to retrieve filtered results and update the state with the results
    // For this example, we'll just set the state to a dummy array of filtered results
    setFilteredResults([
      { name: 'Result 1', location: 'New York', priceRange: '$100 - $500', fieldRange: 'Intermediate' },
      { name: 'Result 2', location: 'Chicago', priceRange: '$0 - $100', fieldRange: 'Beginner' },
      { name: 'Result 3', location: 'Los Angeles', priceRange: '$500 - $1000', fieldRange: 'Advanced' },
    ]);
  };

  return (
    <div>
      <FilterDropdown onFilter={handleFilter} />
      <ul>
        {filteredResults.map((result) => (
          <li key={result.name}>
            {result.name} - {result.location} - {result.priceRange} - {result.fieldRange}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParentComponent;
//   {/* <input type="text" id="gender" name="gender" required /> */}
//   <select id="gender" name="gender" required>
//   <option value="">Select gender</option>
//   <option value="male">Male</option>
//   <option value="female">Female</option>
//   <option value="other">Other</option>
// </select>
// </div>
// </div>
// <div className="mp-form-group">
// <div className="mp-input-group">
// <label htmlFor="nin">NIN</label>
// <input type="text" id="nin" name="nin" required />
// </div>
// <div className="mp-input-group">
// <label htmlFor="dob">Date of birth</label>
// <input type="date" id="dob" name="dob" required />
// </div>
// </div>
// <div className="mp-form-group">
// <div className="mp-input-group">
// <label htmlFor="address">Address</label> <br />
// <textarea id="address" name="address" placeholder="Enter Address" required></textarea>
// </div>
// </div>
// <button type="submit">Submit</button>
// </form>
// </div>
// </div>
// )
// }