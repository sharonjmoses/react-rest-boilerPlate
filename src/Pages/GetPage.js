import React, {useState} from "react";

// import Request from 'axios-react';
// import { Images } from '../Styles/forimg';
import PhotoContainer from '../Components/PhotoContainer';
const GetPage = () => {

    const [search, setSearch] =useState('');
    
    const [ data, setData]=useState([]);
   
    const [ nextP, setNext]=useState('');

    const onChange = (event) => {
        
        setSearch(event.target.value);
      };

      async function  nextPage(){
    
        const response = await fetch(nextP,
        {'Authorization': process.env.REACT_APP_TOKEN})
        const rawData = await response.json()
        if(rawData){
    
            setData(rawData.photos)
        }
        if(rawData.next_page){
            setNext(rawData.next_page)
        }
      
    }


      async function  onSubmit(e){
        e.preventDefault();
        const response = await fetch(`https://api.pexels.com/v1/search?query=${search}`,
        {'Authorization': process.env.REACT_APP_TOKEN})
        const rawData = await response.json()
        if(rawData){
            console.log(rawData)
            setData(rawData.photos)
        }
        if(rawData.next_page){
            setNext(rawData.next_page)
        }
      
    }

    console.log(data)

  return (
      <>
    <form id="mySearch" onSubmit = {onSubmit}>
          <input
                        type="text"
                        id="sn"
                        placeholder="Enter Value To Search"
                        name="search"
                        value={search}
                        onChange={onChange}
                        required
                      />

    <button>Submit</button>

     
    </form>
    <div>
    {(data.length > 0) ? (
      
           
        data.map((obj, index)=>(
        <div key={obj.id}>
            <h1>{obj.photographer}</h1>
            <PhotoContainer url={obj.src}/>
        </div>
    ))
           
    ):(
        <div>No Data</div>
    )}
    {
        (nextP) ? (<button onClick={nextPage}>NextPage</button>): null
    }

    </div>
        
    {/* <Request
    config={{
      method: 'get',
      headers: {'Authorization': '563492ad6f91700001000001f08395d1fb9c42cf93cda644f9f05767'},
      url: 'https://api.pexels.com/v1/search?query=mustang',
    }}
  >
    {({ loading, response, error, refetch, networkStatus }) => (
      <div>
          {console.log(response)}
          {networkStatus && <span>{networkStatus}</span>}
          {loading && <span>Loading...</span>}
          {error && <span>{error.response.data}</span>}
          {response &&
          response.data.photos.map((obj, index)=>{
              <h3 key={index}>{obj.id}</h3>
          })
          }
          <button onClick={refetch}>Refetch!</button>
      </div>
    )}
  </Request> */}
    
     </>
  );
};

export default GetPage;
