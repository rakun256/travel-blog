import React from "react";
import BlogService from "../../Services/blogService"; // Servis import ediliyor
import ButtonCustom from "../Button/button";
import { Link } from "react-router-dom";
import './blogCard.css'; // Stil dosyası

const BlogCards = ({ post }) => {
  return (
    <div className="blog-card-main-container">
        
        <div className="blog-card-container">
    <div className="blog-card-image">
      <img
        className="blog-img"
        src={post.photoUrl}
        alt="."
      />
    </div>

    <div className="blog-card-content">
      <h6 className="blog-card-content-title">{post.title}</h6>
      <p className="blog-card-content-description">{post.subtitle}</p>
       <Link className="button-link" to="/blog">
        <ButtonCustom title={"Read More"} />
      </Link> 
    </div>
  </div>
  <p>{post.content}</p>
  </div>
    
  );
};

const BlogCard = () => {
    const posts = BlogService.getPosts();
    return (
      <div className="blog-cards-container">
        {posts.map((post) => (
          <BlogCards key={post.id} post={post} />
        ))}
      </div>
    );
  };
  
  export default BlogCard;



