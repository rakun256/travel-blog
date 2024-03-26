// blogService.js
const BlogService = {
    getPosts: () => {
      return [
        {
          id: 1,
          date: "February 24, 2024",
          title: "A new approach to understanding complex systems",
          subtitle: "Lorem ipsum dolor sit amet",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat justo ut felis lacinia, nec sollicitudin libero consequat. Duis efficitur felis auctor, consectetur tortor at, condimentum urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat justo ut felis lacinia, nec sollicitudin libero consequat. Duis efficitur felis auctor, consectetur tortor at, condimentum urna.",
          photoUrl: "https://source.unsplash.com/collection/582860/660x440",
        },
        {
          id: 2,
          date: "February 23, 2024",
          title: "Exciting News!",
          subtitle: "Pellentesque habitant morbi tristique senectus",
          content:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed consectetur velit a augue ultrices interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat justo ut felis lacinia, nec sollicitudin libero consequat. Duis efficitur felis auctor, consectetur tortor at, condimentum urna.",
          photoUrl: "https://source.unsplash.com/collection/582860/660x440",
        },
        // Add more posts as needed
        {
            id: 3,
            date: "February 26, 2024",
            title: "Eyvahlar olsun!",
            subtitle: "asdasd",
            content:
              "Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo Süratkargo ",
            photoUrl: "https://source.unsplash.com/collection/582860/660x440",
          },
      ];
    },
  };
  
  export default BlogService;
  