AFRAME.registerComponent("poster", {
    init: function() {
        this.placesContainer = this.el;
        this.createPoster()
    },

    createPoster: function(item){
        const thumbNailsRef = [
            {
              id: "chacha",
              title: "Chacha Chaudhary",
              url: "chacha.jpg",
            },
            
          ];
          let prevoiusXPosition = -60;

          for (var item of thumbNailsRef) {
            const posX = prevoiusXPosition + 25;
            const posY = 3;
            const posZ = -40;
            const position = { x: posX, y: posY, z: posZ };
            prevoiusXPosition = posX;
      
            // Border Element
              const borderEl = this.createBorder(position, item.id)
            // Thumbnail Element
              const thumbnails = this.createThumbnail(item)
              borderEl.appendChild(thumbnails)
              
            this.placesContainer.appendChild(borderEl);
          }
        },
    

    createBorder: function(position, id){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive:"plane",
            width: 22,
            height: 30,
        });
        entityEl.setAttribute("position", position)
        entityEl.setAttribute("material", {
          color:"white",
        });
        return entityEl
    },

    createThumbnail: function(item){
      const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 20,
            height: 28,
        });
        entityEl.setAttribute("position", {x: 0, y: 0.2, z: 0.1});
        entityEl.setAttribute("material", {
          src: item.url})
        return entityEl
    },

})