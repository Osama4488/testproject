import "./index.scss";
import "antd/dist/antd.css";
import { Skeleton, Switch, List, Avatar, Button, Row } from "antd";
import { StarOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { useState } from "react";
const listData = [];

for (let i = 0; i < 3; i++) {
  listData.push({
    href: "https://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

export default function KK() {
  const [state, setstate] = useState(false);
  const ShowSkeleton = () => {
    setstate(!state);
    // setTimeout(() => {
    //   setstate(false);
    // }, 3000);
  };
  return (
    <section>
      <div className="article">
        <Skeleton loading={state} active={state} paragraph={{ rows: 2 }}>
          <div>
            <h4>Ant Design, a design language</h4>
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
            </p>
          </div>
        </Skeleton>
        <Button onClick={ShowSkeleton}>Show Skeleton</Button>
      </div>
    </section>
    // <div
    //   style={{
    //     display: "block",
    //     width: 700,
    //     padding: 30,
    //     height: 1000,
    //   }}
    // >
    //   <h4>ReactJS Ant-Design Skeleton Component</h4>
    //   Non Active State: <Skeleton avatar paragraph={{ rows: 2 }} /> <br />
    //   Active State: <Skeleton avatar active /> <br />
    // </div>
  );
}
// const SkeletonNew = () => {
//   return (
//     <section>
//       <div className="article">
//         <Skeleton active>
//           <div>
//             <h4>Ant Design, a design language</h4>
//             <p>
//               We supply a series of design principles, practical patterns and
//               high quality design resources (Sketch and Axure), to help people
//               create their product prototypes beautifully and efficiently.
//             </p>
//           </div>
//         </Skeleton>
//         <Button onClick={ShowSkeleton} disabled={state}>
//           Show Skeleton
//         </Button>
//       </div>
//     </section>
//     // <div
//     //   style={{
//     //     display: "block",
//     //     width: 700,
//     //     padding: 30,
//     //     height: 1000,
//     //   }}
//     // >
//     //   <h4>ReactJS Ant-Design Skeleton Component</h4>
//     //   Non Active State: <Skeleton avatar paragraph={{ rows: 2 }} /> <br />
//     //   Active State: <Skeleton avatar active /> <br />
//     // </div>
//   );
// };

//export default SkeletonNew;
