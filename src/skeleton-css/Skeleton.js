import "./skeleton.scss";

const Welcome = () => {
  return (
    <>
      <div class="grid">
        <div id="card-template">
          <div class="card">
            <div class="header">
              <img
                class="header-img skeleton"
                src="https://source.unsplash.com/100x100/?nature"
              />
              <div class="title" data-title>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam aspernatur fugiat itaque! Molestias modi facilis
                  harum incidunt iste omnis quod necessitatibus quibusdam
                </div>
              </div>
            </div>
            <div class="skeleton skeleton-text">
              <div class="skeleton skeleton-text"></div>
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Welcome;
// {
//   const grid = document.querySelector(".grid");
//   const cardTemplate = document.getElementById("card-template");
//     for (let i = 0; i < 10; i++) {
//       grid.append(cardTemplate.content.cloneNode(true));
//     }
//   console.log(cardTemplate, grid, "==");

//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((posts) => {
//       grid.innerHTML = "";
//       posts.forEach((post) => {
//         const div = cardTemplate.content.cloneNode(true);
//         div.querySelector("[data-title]").textContent = post.title;
//         div.querySelector("[data-body]").textContent = post.body;
//         grid.append(div);
//       });
//     });
// }
