let ImagenComponent = () =>
  `<figure>
  <!-- <img 
    :src="attrsImages.src" 
    :alt="attrsImages.alt" 
    :width="attrsImages.width"
  > -->
<img v-bind="attrsImages">
</figure>`;

export { ImagenComponent };
