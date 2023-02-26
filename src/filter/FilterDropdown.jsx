// import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const FilterDropdownWrapper = () => {
  const [locations, setLocations] = useState([]);
  const [priceRanges, setPriceRanges] = useState([]);
  const [fieldRanges, setFieldRanges] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLocationChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setLocations([...locations, value]);
    } else {
      setLocations(locations.filter((location) => location !== value));
    }
  };

  const handlePriceRangeChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setPriceRanges([...priceRanges, value]);
    } else {
      setPriceRanges(priceRanges.filter((range) => range !== value));
    }
  };

  const handleFieldRangeChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFieldRanges([...fieldRanges, value]);
    } else {
      setFieldRanges(fieldRanges.filter((range) => range !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ locations, priceRanges, fieldRanges });
    // Add your logic to handle the filter here
  };

  const handleFilterClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='filter-cont'>
      <button className='filter-btn' onClick={handleFilterClick}>Filter</button>
      {/* <FontAwesomeIcon icon={faArrowDown} /> */}
      {isDropdownOpen && (
        <div className='flt-loc-cont'>
          <form onSubmit={handleSubmit}>
            <div className='flt-location'>
              <div className='label'>
                <label>
                  Location
                </label>
              </div>
                
                <input
                  type="checkbox"
                  value="F.C.T Abuja"
                  onChange={handleLocationChange}
                />
                F.C.T Abuja
                <br />
                <input
                  type="checkbox"
                  value="Abia"
                  onChange={handleLocationChange}
                />
                Abia
                <br />
                <input
                  type="checkbox"
                  value="Adamawa"
                  onChange={handleLocationChange}
                />
                Adamawa
                <br />
                <input
                  type="checkbox"
                  value="Akwa-ibom"
                  onChange={handleLocationChange}
                />
                Akwa-ibom
                <br />
                <input
                  type="checkbox"
                  value="Anambra"
                  onChange={handleLocationChange}
                />
                Anambra
                <br />
                <input
                  type="checkbox"
                  value="Bauchi"
                  onChange={handleLocationChange}
                />
                Bauchi
                <br />
                <input
                  type="checkbox"
                  value="Bayelsa"
                  onChange={handleLocationChange}
                />
                Bayelsa
                <br />
                <input
                  type="checkbox"
                  value="Benue"
                  onChange={handleLocationChange}
                />
                Benue
                <br />
                <input
                  type="checkbox"
                  value="Bornu"
                  onChange={handleLocationChange}
                />
                Bornu
              
            </div>
            
            <div className='flt1-location'>
              <div className='label'>
                <label>
                  Services
                </label>
              </div>
                
                <input
                  type="checkbox"
                  value="HMO"
                  onChange={handlePriceRangeChange}
                />
                HMO
                <br />
                <input
                  type="checkbox"
                  value="PPO"
                  onChange={handlePriceRangeChange}
                />
                PPO
                <br />
                <input
                  type="checkbox"
                  value="POS"
                  onChange={handlePriceRangeChange}
                />
                POS
                <br />
                <input
                  type="checkbox"
                  value="EPO"
                  onChange={handlePriceRangeChange}
                />
                EPO
                <br />
                <input
                  type="checkbox"
                  value="indemnity"
                  onChange={handlePriceRangeChange}
                />
                indemnity
              
            </div>
            
            <div className='flt2-location'>
              <div className='label'>
                <label>
                  Price Range
                </label>
              </div>
                
                <input
                  type="checkbox"
                  value="5000 - 50,000"
                  onChange={handleFieldRangeChange}
                />
                5000 - 50,000
                <br />
                <input
                  type="checkbox"
                  value="51,000 - 150,000"
                  onChange={handleFieldRangeChange}
                />
                51,000 - 150,000
                <br />
                <input
                  type="checkbox"
                  value="151,000 - 250,000"
                  onChange={handleFieldRangeChange}
                />
                151,000 - 250,000
                <br />
                <input
                  type="checkbox"
                  value="250,000 Above"
                  onChange={handleFieldRangeChange}
                />
                250,000 Above
              
            </div>
            <br />
            {/* <button type="submit">Filter</button> */}
          </form>
        </div>
      )}
    </div>
  );
};

export default FilterDropdownWrapper;
