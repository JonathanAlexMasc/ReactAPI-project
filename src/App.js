import { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';

function App() {

  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    /*
      result is an array of objects(images)
     */
    console.log('Do a search with', term);

    setImages(result);
  };

  return (
    //images={image}, image is passed as a prop 
    //to ImageList
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
    </div>
  );
}

export default App;
