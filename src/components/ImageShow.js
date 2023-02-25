//ImageShow function is receiving props object
//it contains useful image property, which we want to use

//we need to use unique key prop

import './ImageList.css'

function ImageShow(props) {

  return <div>
    <img src={props.image.urls.thumb} alt={props.image.alt_description} className='img'></img>
  </div>;
}

export default ImageShow;
