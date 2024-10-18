export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=CNtezYzs6C2IC3rvzwALiAZ5hTXxHf1W&q=${ category }&limit=2`;
    const resp = await fetch(url);
    const {data} = await resp.json(); // Verifica el contenido de la respuesta

    // console.log(data);

    const gifs = data.map( img => ({
        id: img.id,
        title:img.title,
        url: img.images.downsized_medium.url
    }));

    // console.log(gifs);
    return gifs;
}