import React from "react";
// import css file
import RecentActivityStyle from "../../Style/RecentActivity.module.scss";
// import user image
import user1 from "../../../asset/Image/user1.png";
import user2 from "../../../asset/Image/user2.png";
import user3 from "../../../asset/Image/user3.png";
import user4 from "../../../asset/Image/user4.png";
const data = [
  {
    title: "Dollar Balance (Primary)",
    email: "valobasha@email.com",
    name: "Mrs Mohan",
    img: user1,
    dollar: "+ $ 1,750.00",
  },
  {
    title: "Dollar Balance (Primary)",
    email: "jsmith@email.com",
    name: "Jane Smith ",
    img: user2,
    dollar: "+ $ 1,750.00",
  },
  {
    title: "Dollar Balance (Primary)",
    email: "valobasha@email.com",
    name: "Jane Smith ",
    img: user3,
    dollar: "+ $ 1,750.00",
  },
  {
    title: "Dollar Balance (Primary)",
    email: "valobasha@email.com",
    name: "Jane Smith ",
    img: user4,
    dollar: "+ $ 1,750.00",
  },
];
const RecentActivity = () => {
  return (
    <div className={RecentActivityStyle.RecentActivityMain}>
      <h2 className={RecentActivityStyle.RecentActivityMain__title}>
        Recent Activity
      </h2>
      <div className={RecentActivityStyle.RecentActivityMain__content}>
        <div
          className={RecentActivityStyle.RecentActivityMain__content__header}
        >
          <div
            className={
              RecentActivityStyle.RecentActivityMain__content__header__btnGroup
            }
          >
            <button style={{ backgroundColor: "#fff" }}>Recent</button>
            <button>Pending</button>
          </div>
          <button
            className={
              RecentActivityStyle.RecentActivityMain__content__header__viewAll
            }
          >
            View All
          </button>
        </div>

        <div
          className={RecentActivityStyle.RecentActivityMain__content__inside}
        >
          <h4
            className={
              RecentActivityStyle.RecentActivityMain__content__inside__title
            }
          >
            Today, 15 January
          </h4>
          {data.map((info) => (
            <div
              className={
                RecentActivityStyle.RecentActivityMain__content__inside__userInfo
              }
            >
              <div
                className={
                  RecentActivityStyle.RecentActivityMain__content__inside__userInfo__profile
                }
              >
                <img src={info.img} alt="userimg" />
                <div>
                  <h6>{info.title}</h6>
                  <p>
                    To: {info.name} . {info.email}
                  </p>
                </div>
              </div>
              <div
                className={
                  RecentActivityStyle.RecentActivityMain__content__inside__userInfo__dollar
                }
              >
                <h4>{info.dollar}</h4>
                <button>Approved</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
