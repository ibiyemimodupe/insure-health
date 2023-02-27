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
      <button className='filter-btn' onClick={handleFilterClick}>
  Filter 
  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.4837 13.0684C24.4844 13.256 24.443 13.4413 24.3626 13.6108C24.2822 13.7802 24.1648 13.9295 24.0192 14.0477L16.486 20.1119C16.2614 20.2966 15.9796 20.3975 15.6888 20.3975C15.398 20.3975 15.1162 20.2966 14.8915 20.1119L7.35835 13.8343C7.10195 13.6212 6.94071 13.3149 6.9101 12.9829C6.87949 12.6509 6.98202 12.3204 7.19513 12.064C7.40824 11.8076 7.71448 11.6463 8.04647 11.6157C8.37847 11.5851 8.70902 11.6877 8.96542 11.9008L15.695 17.513L22.4247 12.0891C22.609 11.9356 22.8334 11.838 23.0714 11.8081C23.3093 11.7781 23.5509 11.8169 23.7675 11.9199C23.9842 12.0229 24.1667 12.1859 24.2936 12.3894C24.4206 12.5929 24.4865 12.8286 24.4837 13.0684Z" fill="#121212"/>
  </svg>
</button>

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
