import React from "react";
import { useHistory } from "react-router-dom";
import MyButton from "./button/MyButton";

function ProductItem(props) {
  const router = useHistory();
  return (
    <div>
      {/* <div className="post">
        <div className="post__content">
          <strong>
            {props.post.id}.{props.post.title}
          </strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post_btns">
          <MyButton onClick={() => props.remove(props.post)}>delete</MyButton>
          <MyButton onClick={() => router.push(`/home/${props.post.id}`)}>
            open
          </MyButton>
        </div>
      </div> */}


      {/* realization of product item content */}

      <div className="product">
        <div className="post__content">
          <strong>
            {props.product.id}.{props.product.name}
          </strong>
          <div>{props.product.count}</div>
          <img src={props.product.url} alt='pic'/>
          <span>
            size: width{props.product.size.width} height
            {props.product.size.height}
          </span>
          <span>weight:{props.product.weight}</span>
        </div>
        <div className="post_btns">
          <MyButton onClick={() => props.remove(props.product)}>
            delete
          </MyButton>
          <MyButton onClick={() => router.push(`/home/${props.product.id}`)}>
            open
          </MyButton>
        </div>
        <div>
          {props.product.comments.map((com) => (
            <div key={com.id} style={{ marginTop: "15px" }}>
              <h5>
                {com.id} {props.product.id}
              </h5>
              <div>{com.description}</div>
              <h6>{com.date}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
