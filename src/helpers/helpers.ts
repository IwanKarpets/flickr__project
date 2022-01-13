export const cutString = (str: string) =>
  str.length > 30 ? `${str.slice(1, 30)}...` : str;

export const chunkArray = (arr: any[], cnt: number) =>
  arr.reduce(
    (prev, cur, i, a) =>
      !(i % cnt) ? prev.concat([a.slice(i, i + cnt)]) : prev,
    []
  );

export const photoStaticURL = (
  farm: string,
  server: string,
  photoId: string,
  secret: string
) => {
  return `https://farm${farm}.staticflickr.com/${server}/${photoId}_${secret}_b.jpg`;
};
