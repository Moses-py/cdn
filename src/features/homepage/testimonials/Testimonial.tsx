import React from "react";
import { Title } from "../../../components/title/Title";

import "./testimonial.css";

export const Testimonial: React.FunctionComponent = () => {
  return (
    <>
      <div className="testimonial-container">
        <Title
          heading="Testimonials"
          subHeading="What other people say about us"
        />
        <div className="testimonial-items">
          <figure className="snip1157">
            <blockquote>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              minima eligendi optio asperiores incidunt. Explicabo earum
              perspiciatis numquam beatae inventore minus in, quia doloribus
              aut.
              <div className="arrow"></div>
            </blockquote>
            <img src="\assets\robert.png" alt="sq-sample3" />
            <div className="author">
              <h5>
                Anthony Stevens <span>CEO, Caret Stores</span>
              </h5>
            </div>
          </figure>
          <figure className="snip1157 hover">
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              iste consequuntur dolor quae exercitationem obcaecati unde eos
              fuga necessitatibus eius laudantium placeat recusandae, labore
              doloremque?.
              <div className="arrow"></div>
            </blockquote>
            <img src="\assets\andrew.png" alt="sq-sample27" />
            <div className="author">
              <h5>
                Daniel Radcliffe<span> Frontend Engineer, Google Inc.</span>
              </h5>
            </div>
          </figure>
          <figure className="snip1157">
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              omnis quasi accusantium, fuga officiis quam, libero cupiditate
              ipsa doloribus exercitationem at laborum nobis odit asperiores.
              <div className="arrow"></div>
            </blockquote>
            <img src="\assets\shirley.png" alt="sq-sample17" />
            <div className="author">
              <h5>
                Angela Yu<span> Product Manager, Twitter co.</span>
              </h5>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
};
