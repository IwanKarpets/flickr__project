//This function using in Carousel component, to shortig title. If title more than 30 symbols
export const cutString = (str: string) => (str.length > 30 ? `${str.slice(1, 30)}...` : str);

//This function using for transformation array of photoset in nested array. It's neccesary for creating carousel. 
//This function received two arguments: array of photoset and count (quanuty elems nested array ) 
export const chunkArray = (arr: any[], count: number) => arr.reduce(
  (prev, cur, i, a) => (!(i % count) ? prev.concat([a.slice(i, i + count)]) : prev),
  [],
);

//This function using for creating path url  picture, next path we using in attr src. (Using in Carousel component)
export const photoStaticURL = (
  farm: string,
  server: string,
  photoId: string,
  secret: string,
) => `https://farm${farm}.staticflickr.com/${server}/${photoId}_${secret}_b.jpg`;
