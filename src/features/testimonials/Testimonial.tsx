import React from "react";
import { Title } from "../../components/Title";
import "./testimonial.css";
export const Testimonial: React.FunctionComponent = () => {
  return (
    <>
      <div className="testimonial-container">
        <Title
          heading="Testimonials"
          subHeading="What other people say about us"
        />

        <div className="outerdiv">
          <div className="innerdiv">
            {/* Div 1 */}
            <div className="div1 eachdiv">
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg"
                    alt=""
                  />
                </div>
                <div className="detbox">
                  <p className="name">Daniel Clifford</p>
                  <p className="designation">Verified Graduate</p>
                </div>
              </div>
              <div className="review">
                <h4>
                  I received a job offer mid-course, and the subjects I learned
                  were current, if not more so, in the company I joined. I
                  honestly feel I got every penny’s worth.
                </h4>
                <p>
                  “ Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque numquam tenetur consectetur nam, praesentium sit
                  ullam blanditiis qui eos reprehenderit officia odio totam
                  ipsam debitis quisquam ea quod velit a inventore, soluta
                  eligendi tempore quasi. Quae ea, corporis deserunt consectetur
                  nesciunt excepturi nulla soluta ipsa ipsam quia aliquid
                  laboriosam nam ad tenetur, placeat eligendi rerum, recusandae
                  vero ex? Perspiciatis, veritatis! ”
                </p>
              </div>
            </div>
            {/* Div 2 */}
            <div className="div2 eachdiv">
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg"
                    alt=""
                  />
                </div>
                <div className="detbox">
                  <p className="name">Jonathan Walters</p>
                  <p className="designation">Verified Graduate</p>
                </div>
              </div>
              <div className="review">
                <h4>The team was very supportive and kept me motivated</h4>
                <p>
                  “ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque quasi reprehenderit optio repudiandae assumenda soluta
                  eius iure dolores cumque totam nkdsfspsf vlsdvk sdeksp! ”
                </p>
              </div>
            </div>
            {/* <!-- div3 --> */}
            <div className="div3 eachdiv">
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg"
                    alt=""
                  />
                </div>
                <div className="detbox">
                  <p className="name dark">Kira Whittle</p>
                  <p className="designation dark">Verified Graduate</p>
                </div>
              </div>
              <div className="review dark">
                <h4>Such a life-changing experience. Highly recommended!</h4>
                <p>
                  “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  voluptatum quos laborum blanditiis exercitationem.
                  Reprehenderit autem neque quis delectus repudiandae corrupti
                  praesentium laborum impedit odit, eos voluptate dolorem
                  deleniti ut facilis eum amet ipsum ab assumenda iure ea porro?
                  Eum, laborum tenetur! Eius inventore quis, quam nostrum,
                  aliquam illum quaerat dolores architecto eaque tempora laborum
                  omnis officiis nisi unde dolorem beatae dolor pariatur
                  corrupti vero, ab enim non nobis harum facilis! Dolorem magni
                  quo doloremque mollitia sint et odit accusantium. ”
                </p>
              </div>
            </div>
            {/* <!-- div4 --> */}
            <div className="div4 eachdiv">
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg"
                    alt=""
                  />
                </div>
                <div className="detbox">
                  <p className="name dark">Jeanette Harmon</p>
                  <p className="designation dark">Verified Graduate</p>
                </div>
              </div>
              <div className="review dark">
                <h4>An overall wonderful and rewarding experience</h4>
                <p>
                  “ Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cupiditate placeat, consequatur cum optio sint repellendus
                  culpa laborum doloremque! ”
                </p>
              </div>
            </div>
            {/* <!-- div5 --> */}
            <div className="div5 eachdiv">
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg"
                    alt=""
                  />
                </div>
                <div className="detbox">
                  <p className="name">Patrick Abrams</p>
                  <p className="designation">Verified Graduate</p>
                </div>
              </div>
              <div className="review">
                <h4>
                  Awesome teaching support from TAs who did the bootcamp
                  themselves. Getting guidance from them and learning from their
                  experiences was easy.
                </h4>
                <p>
                  “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  molestias consequuntur tempore possimus soluta harum nam
                  quidem unde in. Dolor quaerat natus delectus cum aperiam
                  consectetur dolorum aliquam adipisci debitis sequi
                  reprehenderit in, laboriosam alias animi asperiores nesciunt
                  ab, tempora dolorem facilis voluptatum quod odio! ”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
