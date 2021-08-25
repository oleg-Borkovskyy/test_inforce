import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ProductItem from "./ProductItem";

function ProductList({posts,title,remove}) {

  if(!posts.length){
      return (<h1 style={{textAlign:'center'}}>You haven't posts'......</h1>);
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => 
          <CSSTransition
          key={post.id}
          timeout={500}
          classNames="post"
          >
            <ProductItem remove={remove} number={index+1} product={post} />
          </CSSTransition>
        )}

      </TransitionGroup>
    </div>
  );
}

export default ProductList;