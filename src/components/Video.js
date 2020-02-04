import React from 'react';
import {withRouter} from 'react-router-dom';

function video(props){
   return (<div style={{marginTop:'30px'}}>
   	<h1></h1>
   {props.videos.mytitle.map(video=>{
   	{ return  props.match.params.video_id==video.id ?   
	  (<iframe width="560" height="315" src={video.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
      : console.log('dfdf') }
    })}
   </div>)
}  

export default video