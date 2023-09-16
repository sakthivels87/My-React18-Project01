import noImage from "../assets/no-image-placeholder.webp";
const getCroppedImage = (url: string) => {
  if (!url) return noImage;
  const croppedPath = "crop/600/400/";
  const targetContent = "media/";
  const mediaIndex = url.indexOf(targetContent) + targetContent.length;
  const imgPath =
    url.slice(0, mediaIndex) + croppedPath + url.slice(mediaIndex);

  return imgPath;
};

export default getCroppedImage;
