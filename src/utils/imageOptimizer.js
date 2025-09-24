export const optimizeImage = (imageSrc, options = {}) => {
  const {
    quality = 80,
    maxWidth = 1200,
  } = options;

  // For imported images, return the source directly
  return {
    src: imageSrc,
    quality: quality,
    maxWidth: maxWidth
  };
};