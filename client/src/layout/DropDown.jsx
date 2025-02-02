import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/styles";

const DropDown = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();
  const submitHandle = (i) => {
    navigate(`/products?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  };
  const displayedCategories = categoriesData.filter(
    (category) => category.id !== 10 && category.id !== 11
  );
  return (
    <div className="pb-2 w-[270px] bg-[#fff]  absolute z-30 rounded-b-md shadow-sm">
      {displayedCategories.map((i, index) => (
        <div
          key={index}
          className={`${styles.noramlFlex} pl-`}
          onClick={() => submitHandle(i)}
        >
          <h3 className="my-1  w-full  font-medium text-sm transitions  py-1 pl-4 hover:bg-slate-100   cursor-pointer select-none">
            {i.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default DropDown;

// Combined categories data

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "../styles/styles";

// // Combined categories data
// const combinedCategoriesData = [
//   ...womenItems.map((item) => ({ ...item, type: "women" })),
//   ...menItems.map((item) => ({ ...item, type: "men" })),
//   ...weddingItems.map((item) => ({ ...item, type: "wedding" })),
//   ...shoesbagsItems.map((item) => ({ ...item, type: "shoesbags" })),
//   ...homeItems.map((item) => ({ ...item, type: "home" })),
//   ...hobbiesItems.map((item) => ({ ...item, type: "hobbies" })),
//   ...electronicsItems.map((item) => ({ ...item, type: "electronics" })),
//   ...kidsItems.map((item) => ({ ...item, type: "kids" })),
//   ...sportsItems.map((item) => ({ ...item, type: "sports" })),
//   ...beautyItems.map((item) => ({ ...item, type: "beauty" })),
//   ...computerItems.map((item) => ({ ...item, type: "computer" })),
//   ...phonesItems.map((item) => ({ ...item, type: "phones" })),
// ];

// // DropDown Component
// const DropDown = ({ categoriesData, setDropDown }) => {
//   const navigate = useNavigate();

//   const submitHandle = (item) => {
//     navigate(item.path);
//     setDropDown(false);
//     window.location.reload();
//   };

//   return (
//     <div className="pb-2 w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm">
//       {categoriesData &&
//         categoriesData.map((item, index) => (
//           <div
//             key={index}
//             className="pl-4 cursor-pointer hover:bg-slate-100"
//             onClick={() => submitHandle(item)}
//           >
//             <h3 className="my-1 font-medium text-sm">{item.label}</h3>
//           </div>
//         ))}
//     </div>
//   );
// };
// export default DropDown;
