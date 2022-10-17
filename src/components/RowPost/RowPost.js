import axios from '../../axios';
import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube';

import './RowPost.css';


import {API_KEY, imageUrl} from '../../constants/constants'
function RowPost(props) {
  const[movies,setMovies] = useState([])
  const [urlid,setUrlId] =useState('')
  useEffect(()=>{
axios.get(props.url).then((response)=>{
  console.log(response.data)
  setMovies(response.data.results)
}).catch(err=>{
 // alert('network error')
})
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
    
      autoplay: 1,
    },
  };
  const handleMovie =(id)=>{
console.log(id);
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
  console.log(response.data);
  if(response.data.results.length!=0)
  {
    setUrlId(response.data.results[0])
  }
  else{
    console.log('array empty');
  }
})
  }

  return (  
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map(obj=>
        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}  
      
      </div>
    { urlid && <YouTube videoId={urlid.key} opts={opts} />}
    </div>
  )
}

export default RowPost
