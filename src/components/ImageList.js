import ImageShow from './ImageShow'
import './ImageList.css'

//im assuming (image) is a random name for each element inside the array

//that element has been pulled from a database, so it has an id
//feature to it. this can be seen in insepct/network area

function ImageList({images}) {
  const renderedImages = images.map((image) => {
      return <ImageShow key={image.id} image={image} />;
    }
  );

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
