import React from "react";
import BlogService from "../../Services/blogService"; // Servis import ediliyor
import ButtonCustom from "../Button/button";
import { Link } from "react-router-dom";
import './card.css'; // Stil dosyası

const Card = ({ post }) => {
  return (
    <div className="card card-blog fill-light">
      <div className="card-image">
        <img
          className="img"
          src={post.photoUrl}
          alt="."
        />
      </div>

      <div className="content">
        <h6 className="card-content-title">{post.title}</h6>
        <p className="card-content-description">{post.subtitle}</p>
        <Link className="button-link" to="/blog">
          <ButtonCustom title={"Read More"} />
        </Link>
      </div>
    </div>
  );
};

const Blog = () => {
  const posts = BlogService.getPosts();
  return (
    <div className="cards-container">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Blog;
