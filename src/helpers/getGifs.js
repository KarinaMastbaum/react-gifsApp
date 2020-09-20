
   
   
export const getGifs = async ( category ) => {

        // El encodeURI sirve para quitarle los espacios 
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=20&api_key=RVmHY5a9q3sWhtcQzM3gpqZmPV8J6eiC`;
        
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
            
    return gifs;

}
            