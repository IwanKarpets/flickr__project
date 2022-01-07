export const cutString=(str)=> str.length>30 ? `${str.slice(1, 30)}...`: str;

export const chunkArray = (arr, cnt) => arr.reduce((prev, cur, i, a) => !(i % cnt) ? prev.concat([a.slice(i, i + cnt)]) : prev, []);

 export const photoStaticURL = (farm, server, photoId, secret)=>{
    return `https://farm${farm}.staticflickr.com/${server}/${photoId}_${secret}_b.jpg`;
}