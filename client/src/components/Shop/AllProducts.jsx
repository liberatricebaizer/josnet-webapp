// import { Button } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import React, { useEffect } from "react";
// import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { getAllProductsShop } from "../../redux/actions/product";
// import { deleteProduct } from "../../redux/actions/product";
// import Loader from "../../layout/Loader";

// const AllProducts = () => {
//   const { products, isLoading } = useSelector((state) => state.products);
//   const { seller } = useSelector((state) => state.seller);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllProductsShop("677fa94f054fc961fa96e386"));
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteProduct(id));
//     window.location.reload();
//   };

//   const columns = [
//     { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
//     {
//       field: "name",
//       headerName: "Name",
//       minWidth: 180,
//       flex: 1.4,
//     },
//     {
//       field: "price",
//       headerName: "Price",
//       minWidth: 100,
//       flex: 0.6,
//     },
//     {
//       field: "Stock",
//       headerName: "Stock",
//       type: "number",
//       minWidth: 80,
//       flex: 0.5,
//     },

//     {
//       field: "sold",
//       headerName: "Sold out",
//       type: "number",
//       minWidth: 130,
//       flex: 0.6,
//     },
//     {
//       field: "Preview",
//       flex: 0.8,
//       minWidth: 100,
//       headerName: "",
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={`/product/${params.id}`}>
//               <Button>
//                 <AiOutlineEye size={20} />
//               </Button>
//             </Link>
//           </>
//         );
//       },
//     },
//     {
//       field: "Delete",
//       flex: 0.8,
//       minWidth: 120,
//       headerName: "",
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <>
//             <Button onClick={() => handleDelete(params.id)}>
//               <AiOutlineDelete size={20} />
//             </Button>
//           </>
//         );
//       },
//     },
//   ];

//   const row = [];

//   products &&
//     products.forEach((item) => {
//       row.push({
//         id: item?._id,
//         name: item?.name,
//         price: "US$ " + item?.discountPrice,
//         Stock: item?.stock,
//         sold: item?.sold_out,
//       });
//     });

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className="w-full mx-8 pt-1 mt-10 bg-white">
//           <DataGrid
//             rows={row}
//             columns={columns}
//             pageSize={10}
//             disableSelectionOnClick
//             autoHeight
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default AllProducts;

import { Button } from "@mui/material";
import { DataGrid, GridAddIcon } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineEye,
  AiOutlineTable,
  // AiOutlineGrid,
  // AiOutlineTable,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProductsShop, deleteProduct } from "../../redux/actions/product";
import Loader from "../../layout/Loader";

const AllProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // State to manage view type
  const [viewType, setViewType] = useState("grid"); // "grid" or "row"

  useEffect(() => {
    dispatch(getAllProductsShop("677fa94f054fc961fa96e386"));
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    window.location.reload();
  };

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },
    {
      field: "sold",
      headerName: "Sold out",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => (
        <Link to={`/product/${params.id}`}>
          <Button>
            <AiOutlineEye size={20} />
          </Button>
        </Link>
      ),
    },
    {
      field: "Delete",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => (
        <Button onClick={() => handleDelete(params.id)}>
          <AiOutlineDelete size={20} />
        </Button>
      ),
    },
  ];

  const rows = products.map((item) => ({
    id: item?._id,
    name: item?.name,
    price: "US$ " + item?.discountPrice,
    Stock: item?.stock,
    sold: item?.sold_out,
  }));

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          {/* Toggle Button */}
          <div className="flex justify-end mb-4">
            <Button onClick={() => setViewType("grid")} className="mr-2">
              <GridAddIcon /> Grid
            </Button>
            <Button onClick={() => setViewType("row")}>
              <AiOutlineTable /> Row
            </Button>
          </div>

          {/* Conditional Rendering */}
          {viewType === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rows.map((row) => (
                <div
                  key={row.id}
                  className="border gap-4 p-4 rounded shadow-md"
                >
                  <h4>{row.name}</h4>
                  <p>{row.price}</p>
                  <p>Stock: {row.Stock}</p>
                  <p>Sold: {row.sold}</p>
                  <Link to={`/product/${row.id}`}>
                    <Button variant="contained" color="primary">
                      <AiOutlineEye />
                    </Button>
                  </Link>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="ml-4"
                    onClick={() => handleDelete(row.id)}
                  >
                    <AiOutlineDelete />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              autoHeight
            />
          )}
        </div>
      )}
    </>
  );
};

export default AllProducts;
