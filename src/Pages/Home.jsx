import React, { useEffect, useState } from "react";
import { useFetching } from "../Hooks/useFetching";
import { getPageCount } from "../utils/pages";
import PostService from "../API/PostService";
import MyButton from "../Components/UI/button/MyButton";
import Loader from "../Components/UI/Loader/Loader";
import MyModal from "../Components/UI/MyModal/MyModal";
import Pagination from "../Components/UI/pagination/Pagination";
import { useProducts } from "../Hooks/useProducts";
import ProductList from "../Components/UI/ProductList";
import ProductFilter from "../Components/UI/ProductFilter";
import ProductForm from "../Components/UI/ProductForm";

function Home() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = useProducts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page]);

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  const ArrProducts=[
    {
    comments: [],
    id: 1629905688650,
    name: "tapki",
    size: {width: "150", height: "150"},
    url: "url",
    weight: "1500"
  },{
    comments: [],
    id: 1620,
    name: "tapki2",
    size: {width: "150", height: "150"},
    url: "url",
    weight: "1500"
  },{
    comments: [],
    id: 162950,
    name: "tapki3",
    size: {width: "150", height: "150"},
    url: "url",
    weight: "1500"
  }];
  return (
    <div className="App">
      <MyButton
        onClick={() => {
          setModal(true);
        }}
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        Create Product
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <ProductForm create={createPost} />
      </MyModal>
      <hr style={{ marginTop: "15 px",marginBottom:'15px' }} />
      <ProductFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>ERROR {postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <ProductList
          remove={removePost}
          posts={ArrProducts}      //sortedAndSearchedPosts
          title="List of posts 1"
        />
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}
export default Home;
