import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Categories from "../../components/Categories/Categories";
import Cover from "../../components/Cover/Cover";
import EditorCard from "../../components/TrendingCard/EditorCard.jsx";
import TrendingCard from "../../components/TrendingCard/TrendingCard.jsx";
import Skeletion from "../../components/Skeletion/Skeletion.jsx";
import apiRequest from "../../lib/apiRequest.js";
import "./homepage.scss";
import TrendingCardSkeletion from "../../components/trendingCardSkeletion/trendingCardSkeletion.jsx";
import EditorCardSkeletion from "../../components/trendingCardSkeletion/editorcardskeletion.jsx";

function HomePage() {
  const color = ["#EECAD5", "#F6EACB", "#F1D3CE", "#D1E9F6"];

  const [pagePost, setPagePost] = useState(null);
  const [page, setPage] = useState(1);
  const [topPost, setTopPost] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchInitialPosts = async () => {
      try {
        const [postRes, topRes, userRes] = await Promise.all([
          apiRequest.get("/post"),
          apiRequest.get("/post/topPost"),
          apiRequest.get("/user"),
        ]);

        setTimeout(() => {
          if (isMounted) {
            setPagePost(postRes.data.data);
            setTopPost(topRes.data.data);
            setUser(userRes.data.data);
          }
        }, 1000); // Simulate loading
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchInitialPosts();

    return () => {
      isMounted = false; // cleanup
    };
  }, []);

  const handlePreview = async (e) => {
    e.preventDefault();
    if (page === 1) return;

    try {
      const res = await apiRequest.get(`/post?page=${page - 1}`);
      setPage((prev) => prev - 1);
      setPagePost(res.data.data);
    } catch (err) {
      console.error("Previous page error:", err);
    }
  };

  const handleNext = async (e) => {
    e.preventDefault();
    try {
      const res = await apiRequest.get(`/post?page=${page + 1}`);
      if (res.data.data.length === 0) return;
      setPage((prev) => prev + 1);
      setPagePost(res.data.data);
    } catch (err) {
      console.error("Next page error:", err);
    }
  };

  return (
    <div className="home-container">
      <Cover />
      <Categories key={"0"} />

      <div className="post-container">
        <div className="left-container">
          <span>Post</span>
          {!pagePost ? (
            <>
            <Skeletion />
            <Skeletion />
            <Skeletion />
            </>
          ) : (
            <>
              {pagePost.map((item) => (
                <Card item={item} key={item.id} />
              ))}
              <div className="paging">
                <button onClick={handlePreview} disabled={page === 1}>
                  Previous
                </button>
                <span>{page}</span>
                <button onClick={handleNext} disabled={pagePost.length < 2}>
                  Next
                </button>
              </div>
            </>
          )}
        </div>

        <div className="right-container">
          <span>Trending</span>
          {!topPost || topPost.length === 0 ? (
            <TrendingCardSkeletion />
          ) : (
            <>
              {topPost.map((item, index) => (
                <TrendingCard
                  item={item}
                  key={item.id + "a"}
                  color={color[index % 4]}
                />
              ))}
            </>
          )}

          <Categories key={"1"} />

          <span>Top Editors</span>
          {user.length === 0 ? (
            <EditorCardSkeletion />
          ) : (
            user.map((item, index) => (
              <EditorCard
                item={item}
                key={item.id + "b"}
                color={color[index % 4]}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
