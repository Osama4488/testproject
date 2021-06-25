import logo from "./logo.svg";
// import './App.css';
import "./App.scss";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState("custom logo design");
  const tabarr = [
    {
      title: "custom logo design",
      img: "https://lh3.googleusercontent.com/proxy/5TEe3HnLgr1dzw8iU62x6wBgO_6lk9rRVLaU52d11FYequVY4gqEO83_ximG484JZdiUJ-5VXzmmyszIKK9km7hvoZB8KpKdZpPpoiNdrRARiHbFrurLu-tF8CMtNQ5CyA",
    },
    {
      title: "web deisgn",
      img: "https://lh3.googleusercontent.com/proxy/5TEe3HnLgr1dzw8iU62x6wBgO_6lk9rRVLaU52d11FYequVY4gqEO83_ximG484JZdiUJ-5VXzmmyszIKK9km7hvoZB8KpKdZpPpoiNdrRARiHbFrurLu-tF8CMtNQ5CyA",
    },
    {
      title: "search engine",
      img: "https://lh3.googleusercontent.com/proxy/5TEe3HnLgr1dzw8iU62x6wBgO_6lk9rRVLaU52d11FYequVY4gqEO83_ximG484JZdiUJ-5VXzmmyszIKK9km7hvoZB8KpKdZpPpoiNdrRARiHbFrurLu-tF8CMtNQ5CyA",
    },
    {
      title: "video animation",
      img: "https://lh3.googleusercontent.com/proxy/5TEe3HnLgr1dzw8iU62x6wBgO_6lk9rRVLaU52d11FYequVY4gqEO83_ximG484JZdiUJ-5VXzmmyszIKK9km7hvoZB8KpKdZpPpoiNdrRARiHbFrurLu-tF8CMtNQ5CyA",
    },
    {
      title: "stationary design",
      img: "https://lh3.googleusercontent.com/proxy/5TEe3HnLgr1dzw8iU62x6wBgO_6lk9rRVLaU52d11FYequVY4gqEO83_ximG484JZdiUJ-5VXzmmyszIKK9km7hvoZB8KpKdZpPpoiNdrRARiHbFrurLu-tF8CMtNQ5CyA",
    },
  ];
  const arr = [
    {
      type: "a",
      heading: "custom logo design",
      description:
        "Our experienced designers help companies around the world to develop and become top figures in their competitive industries. We will provide you with a high-quality custom logo design and make your business stands out.",
      buttontext: "Learn More",
      // list: {
      //   <>
      //     <ul>
      // 				<li>

      // 					3D Animated Logo Design
      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 			</ul>

      //   </>
      // }
      img: "https://digitaloid.co/wp-content/uploads/2020/11/custom-logo-tab.png",
    },
    {
      type: "b",
      heading: "web deisgn",
      description:
        "Our experienced designers help companies around the world to develop and become top figures in their competitive industries. We will provide you with a high-quality custom logo design and make your business stands out.",
      buttontext: "Learn More",
      // list: {
      //   <>
      //     <ul>
      // 				<li>

      // 					3D Animated Logo Design
      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 			</ul>

      //   </>
      // }
      img: "https://lh3.googleusercontent.com/proxy/5TEe3HnLgr1dzw8iU62x6wBgO_6lk9rRVLaU52d11FYequVY4gqEO83_ximG484JZdiUJ-5VXzmmyszIKK9km7hvoZB8KpKdZpPpoiNdrRARiHbFrurLu-tF8CMtNQ5CyA",
    },
    {
      type: "c",
      heading: "search engine",
      description:
        "Our experienced designers help companies around the world to develop and become top figures in their competitive industries. We will provide you with a high-quality custom logo design and make your business stands out.",
      buttontext: "Learn More",
      // list: {
      //   <>
      //     <ul>
      // 				<li>

      // 					3D Animated Logo Design
      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 			</ul>

      //   </>
      // }
      img: "https://lh3.googleusercontent.com/proxy/5TEe3HnLgr1dzw8iU62x6wBgO_6lk9rRVLaU52d11FYequVY4gqEO83_ximG484JZdiUJ-5VXzmmyszIKK9km7hvoZB8KpKdZpPpoiNdrRARiHbFrurLu-tF8CMtNQ5CyA",
    },
    {
      type: "d",
      heading: "video animation",
      description:
        "Our experienced designers help companies around the world to develop and become top figures in their competitive industries. We will provide you with a high-quality custom logo design and make your business stands out.",
      buttontext: "Learn More",
      // list: {
      //   <>
      //     <ul>
      // 				<li>

      // 					3D Animated Logo Design
      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 			</ul>

      //   </>
      // }
      img: "https://lh3.googleusercontent.com/proxy/5TEe3HnLgr1dzw8iU62x6wBgO_6lk9rRVLaU52d11FYequVY4gqEO83_ximG484JZdiUJ-5VXzmmyszIKK9km7hvoZB8KpKdZpPpoiNdrRARiHbFrurLu-tF8CMtNQ5CyA",
    },
    {
      type: "e",
      heading: "stationary design",
      description:
        "Our experienced designers help companies around the world to develop and become top figures in their competitive industries. We will provide you with a high-quality custom logo design and make your business stands out.",
      buttontext: "Learn More",
      // list: {
      //   <>
      //     <ul>
      // 				<li>

      // 					3D Animated Logo Design
      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 					<li >

      // 					3D Animated Logo Design

      // 						</li>
      // 			</ul>

      //   </>
      // }
      img: "https://lh3.googleusercontent.com/proxy/5TEe3HnLgr1dzw8iU62x6wBgO_6lk9rRVLaU52d11FYequVY4gqEO83_ximG484JZdiUJ-5VXzmmyszIKK9km7hvoZB8KpKdZpPpoiNdrRARiHbFrurLu-tF8CMtNQ5CyA",
    },
  ];

  return (
    <section className="service">
      <div className="service__container">
        <h1>Our Services For Startups, SME & Entrepreneurs</h1>
        <p>
          Digitaloid is a full-service creative design, brand, web and digital
          agency that helps brands move forward. Over the years, our agency has
          helped brands and companies redefine their purpose and unleash their
          full potential. In addition, we provide our clients with customized
          marketing solutions according to their target market to expand their
          businesses.
        </p>

        <div className="tab">
          {tabarr.map(({ img, title }) => {
            console.log(title, "==");
            return (
              <div className="tab__wrapper" onClick={() => setState(title)}>
                <img src={img} width="35px" height="35px" />
                <p>{title}</p>
              </div>
            );
          })}
          {/* onClick={() => setState("osama")} */}
        </div>

        <div className="features__container">
          {arr.map(({ heading, description, buttontext, img }) => {
            if (state == heading) {
              return (
                <>
                  <div className="features__container__content">
                    <h2>{heading}</h2>
                    <p>{description}</p>
                    <button>{buttontext}</button>
                  </div>
                  <div className="features__container__image">
                    <img src={img} />
                  </div>
                </>
              );
            } else {
            }
          })}
          {/* <div className="features__container__content">
            <h2>Custom Logo Design</h2>
            <p>
              Our experienced designers help companies around the world to
              develop and become top figures in their competitive industries. We
              will provide you with a high-quality custom logo design and make
              your business stands out.
            </p>
            <button>Learn More</button>
          </div> */}
          {/* <div className="features__container__image">
            <img src="https://digitaloid.co/wp-content/uploads/2020/11/custom-logo-tab.png" />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default App;
