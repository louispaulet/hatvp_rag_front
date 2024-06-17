import React, { useState, useMemo, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';

const filterNames = (names, query) => {
  if (!query) {
    return names;
  }
  return names.filter((name) => name.toLowerCase().includes(query.toLowerCase()));
};

const NameList = () => {
  const [names, setNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch the names from the JSON file
    fetch('/dataset_names.json')
      .then(response => response.json())
      .then(data => {
        // Convert the data object to an array of names
        const namesArray = Object.values(data);
        setNames(namesArray);
      })
      .catch(error => {
        console.error('Error fetching the names:', error);
      });
  }, []);

  const filteredNames = useMemo(() => filterNames(names, searchTerm), [names, searchTerm]);

  const Row = ({ index, style }) => (
    <div style={style}>
      {filteredNames[index]}
    </div>
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search names..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', width: '300px' }}
      />
      <List
        height={400}
        itemCount={filteredNames.length}
        itemSize={35}
        width={300}
      >
        {Row}
      </List>
    </div>
  );
};

export default NameList;