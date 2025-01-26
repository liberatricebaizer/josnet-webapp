// import React, { useState, useEffect } from "react";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { createProduct } from "../../redux/actions/product";
// import { categoriesData } from "../../static/data";
// import { toast } from "react-toastify";
// import { Spinner } from "react-bootstrap";

// const CreateProduct = () => {
//   const { seller } = useSelector((state) => state.seller);
//   const { error, success } = useSelector((state) => state.products);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [images, setImages] = useState([]);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [tags, setTags] = useState("");
//   const [originalPrice, setOriginalPrice] = useState(0);
//   const [discountPrice, setDiscountPrice] = useState(0);
//   const [stock, setStock] = useState(0);
//   const [loading, setLoading] = useState(false);

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages([]);

//     files.forEach((file) => {
//       const reader = new FileReader();
//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setImages((old) => [...old, reader.result]);
//         }
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !name ||
//       !description ||
//       !category ||
//       !tags ||
//       originalPrice <= 0 ||
//       discountPrice < 0 || // Allow discountPrice to be zero
//       stock < 0 // Allow stock to be zero
//     ) {
//       toast.error("Please fill in all the fields correctly");
//       return;
//     }

//     // Log the input values to the console
//     console.log({
//       name,
//       description,
//       category,
//       tags,
//       originalPrice,
//       discountPrice,
//       stock,
//       images,
//     });

//     setLoading(true);

//     const newForm = new FormData();
//     images.forEach((image) => {
//       newForm.append("images", image);
//     });
//     newForm.append("name", name);
//     newForm.append("description", description);
//     newForm.append("category", category);
//     newForm.append("tags", tags);
//     newForm.append("originalPrice", originalPrice);
//     newForm.append("discountPrice", discountPrice);
//     newForm.append("stock", stock);

//     // Check if seller is defined and has an _id
//     if (seller && seller._id) {
//       newForm.append("shopId", seller._id);
//     } else {
//       console.error("Seller is undefined or does not have an _id");
//       toast.error("Seller information is missing.");
//       setLoading(false);
//       return; // Exit the function early
//     }

//     console.log("FormData being sent:", newForm); // Log the FormData

//     try {
//       await dispatch(createProduct({ data: newForm, shopId: seller._id }));
//     } catch (error) {
//       console.error("Error creating product:", error); // Log the error
//       toast.error("Network error, please try again.");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       setLoading(false);
//     }
//     if (success) {
//       toast.success("Product created successfully!");
//       // Clear the form fields after successful submission
//       setImages([]);
//       setName("");
//       setDescription("");
//       setCategory("");
//       setTags("");
//       setOriginalPrice(0);
//       setDiscountPrice(0);
//       setStock(0);
//       navigate("/dashboard");
//       setLoading(false);
//     }
//   }, [dispatch, error, success]);

//   return (
//     <div className="w-[90%] 800px:w-[50%] bg-white shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
//       <h5 className="text-[30px] font-Poppins text-center">Create Product</h5>
//       <form onSubmit={handleSubmit}>
//         <br />
//         <div>
//           <label className="pb-2">
//             Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={name}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your product name..."
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Description <span className="text-red-500">*</span>
//           </label>
//           <textarea
//             cols="30"
//             required
//             rows="8"
//             name="description"
//             value={description}
//             className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Enter your product description..."
//           ></textarea>
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Category <span className="text-red-500">*</span>
//           </label>
//           <select
//             className="w-full mt-2 border h-[35px] rounded-[5px]"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="">Choose a category</option>
//             {categoriesData &&
//               categoriesData.map((i) => (
//                 <option value={i.title} key={i.title}>
//                   {i.title}
//                 </option>
//               ))}
//           </select>
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">Tags</label>
//           <input
//             type="text"
//             name="tags"
//             value={tags}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setTags(e.target.value)}
//             placeholder="Enter your product tags..."
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Original Price <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="number"
//             name="originalPrice"
//             value={originalPrice}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setOriginalPrice(Number(e.target.value))}
//             placeholder="Enter your product price..."
//             min="0"
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Price (With Discount) <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="number"
//             name="discountPrice"
//             value={discountPrice}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setDiscountPrice(Number(e.target.value))}
//             placeholder="Enter your product price with discount..."
//             min="0"
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Product Stock <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="number"
//             name="stock"
//             value={stock}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setStock(Number(e.target.value))}
//             placeholder="Enter your product stock..."
//             min="0"
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Upload Images <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="file"
//             id="upload"
//             className="hidden"
//             multiple
//             onChange={handleImageChange}
//           />
//           <div className="w-full flex items-center flex-wrap">
//             <label htmlFor="upload">
//               <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
//             </label>
//             {images.map((i) => (
//               <img
//                 src={i}
//                 key={i}
//                 alt=""
//                 className="h-[120px] w-[120px] object-cover m-2"
//               />
//             ))}
//           </div>
//           <br />
//           <div>
//             <button
//               type="submit"
//               className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               disabled={loading}
//             >
//               {loading ? <Spinner animation="border" size="sm" /> : "Create"}
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateProduct;

// import React, { useState, useEffect } from "react";
// import { FaUpload } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { createProduct } from "../../redux/actions/product";
// // import { loadSeller } from "../../redux/actions/sellers";

// import { categoriesData } from "../../static/data";
// import { toast } from "react-toastify";

// const CreateProduct = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { seller, isLoading } = useSelector((state) => state.seller);
//   const { error, success } = useSelector((state) => state.products);

//   const [data, setData] = useState({
//     name: "",
//     category: "",
//     tags: "",
//     image: "",
//     originalPrice: "",
//     discountPrice: "",
//     stock: "",
//     description: "",
//   });

//   const uploadImage = async (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setData((prev) => ({
//         ...prev,
//         image: reader.result,
//       }));
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Load seller data when the component mounts
//   // useEffect(() => {
//   //   dispatch(loadSeller());
//   // }, [dispatch]);

//   // Log seller data to check its structure
//   useEffect(() => {
//     if (seller) {
//       console.log("Seller data:", seller);
//     } else {
//       console.log("Seller data is not loaded yet.");
//     }
//   }, [seller]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const {
//       name,
//       image,
//       category,
//       tags,
//       originalPrice,
//       discountPrice,
//       stock,
//       description,
//     } = data;

//     if (
//       name &&
//       image &&
//       category &&
//       tags &&
//       originalPrice &&
//       stock &&
//       description
//     ) {
//       if (!seller || !seller.seller || !seller.seller._id) {
//         toast.error("Seller information is not available.");
//         return;
//       }

//       const newForm = new FormData();
//       newForm.append("name", name);
//       newForm.append("category", category);
//       newForm.append("tags", tags);
//       newForm.append("images", image);
//       newForm.append("originalPrice", originalPrice);
//       newForm.append("discountPrice", discountPrice);
//       newForm.append("stock", stock);
//       newForm.append("description", description);
//       newForm.append("shopId", seller._id);

//       await dispatch(createProduct(newForm));
//     } else {
//       toast.error("Please fill in all required fields.");
//     }
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//     }
//     if (success) {
//       toast.success("Product created successfully!");
//       setData({
//         name: "",
//         category: "",
//         tags: "",
//         image: "",
//         originalPrice: "",
//         discountPrice: "",
//         stock: "",
//         description: "",
//       });
//       navigate("/dashboard");
//     }
//   }, [error, success, navigate]);

//   if (isLoading) {
//     return <div>Loading...</div>; // Show a loading indicator
//   }

//   if (error) {
//     return <div>Error: {error}</div>; // Show error message
//   }
//   return (
//     <div className="p-4">
//       <form
//         className="bg-slate-100 m-auto w-full max-w-md shadow flex flex-col p-3"
//         onSubmit={handleSubmit}
//       >
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           name="name"
//           className="bg-slate-200 p-1 my-1"
//           onChange={handleChange}
//           value={data.name}
//         />

//         <label htmlFor="category">Category</label>
//         <select
//           className="bg-slate-200 p-1 my-1"
//           name="category"
//           onChange={handleChange}
//           value={data.category}
//         >
//           <option value="">Select Category</option>
//           {categoriesData.map((cat) => (
//             <option key={cat.title} value={cat.title}>
//               {cat.title}
//             </option>
//           ))}
//         </select>
//         <div>
//           <label className="pb-2">Tags</label>{" "}
//           <input
//             type="text"
//             name="tags"
//             value={data.tags}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={handleChange}
//             placeholder="Enter your product tags..."
//           />
//         </div>
//         <label htmlFor="image">
//           Image
//           <div className="h-36 my-3 flex items-center justify-center rounded w-full bg-slate-200">
//             {data.image ? (
//               <img src={data.image} alt="product" className="h-full" />
//             ) : (
//               <span className="text-5xl">
//                 <FaUpload />
//               </span>
//             )}
//             <input
//               type="file"
//               accept="image/*"
//               id="image"
//               onChange={uploadImage}
//               className="hidden"
//             />
//           </div>
//         </label>

//         <label htmlFor="originalPrice">Original Price</label>
//         <input
//           type="text"
//           name="originalPrice"
//           className="bg-slate-200 p-1 my-1"
//           onChange={handleChange}
//           value={data.originalPrice}
//         />

//         <label htmlFor="discountPrice">Discount Price</label>
//         <input
//           type="text"
//           name="discountPrice"
//           className="bg-slate-200 p-1 my-1"
//           onChange={handleChange}
//           value={data.discountPrice}
//         />
//         <div>
//           <label className="pb-2">
//             {" "}
//             Product Stock <span className="text-red-500">*</span>
//           </label>{" "}
//           <input
//             type="number"
//             name="stock"
//             value={data.stock}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={handleChange}
//             placeholder="Enter your product stock..."
//             min="0"
//           />
//         </div>

//         <label htmlFor="description">Description</label>
//         <textarea
//           rows={3}
//           className="bg-slate-200 my-1 resize-none"
//           name="description"
//           onChange={handleChange}
//           value={data.description}
//         ></textarea>

//         <button className="bg-orange-500 hover:bg-red text-white text-lg font-medium drop-shadow my-2">
//           Save Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateProduct;

import React, { useState, useEffect } from "react";
import { FaUpload } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../redux/actions/product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { categoriesData } from "../../static/data";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { seller } = useSelector((state) => state.seller);
  const { error, success, isLoading } = useSelector((state) => state.products);

  const [data, setData] = useState({
    name: "",
    category: "",
    tags: "",
    image: "",
    originalPrice: "",
    discountPrice: "",
    stock: "",
    description: "",
  });

  const [imagePreview, setImagePreview] = useState("");
  useEffect(() => {
    if (seller) {
      console.log("Seller data:", seller);
    } else {
      console.log("Seller data is not loaded yet.");
    }
  }, [seller]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    if (success) {
      toast.success("Product created successfully!");
      setData({
        name: "",
        category: "",
        tags: "",
        image: "",
        originalPrice: "",
        discountPrice: "",
        stock: "",
        description: "",
      });
      setImagePreview("");
      navigate("/products");
    }
  }, [error, success, navigate]);

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setData((prev) => ({
        ...prev,
        image: reader.result,
      }));
      setImagePreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      name,
      image,
      category,
      tags,
      originalPrice,
      discountPrice,
      stock,
      description,
    } = data;

    if (
      !name ||
      !image ||
      !category ||
      !tags ||
      !originalPrice ||
      !discountPrice ||
      !stock ||
      !description
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    dispatch(
      createProduct(
        name,
        description,
        category,
        tags,
        originalPrice,
        discountPrice,
        stock,
        seller._id, // Assuming seller has _id
        image
      )
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Create a New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Product Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label className="block text-gray-700">Category</label>
          <select
            name="category"
            value={data.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="">Select category</option>
            {categoriesData.map((category) => (
              <option key={category.id} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700">Tags</label>
          <input
            type="text"
            name="tags"
            value={data.tags}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter tags (comma separated)"
          />
        </div>

        <div>
          <label className="block text-gray-700">Original Price</label>
          <input
            type="number"
            name="originalPrice"
            value={data.originalPrice}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter original price"
          />
        </div>

        <div>
          <label className="block text-gray-700">Discount Price</label>
          <input
            type="number"
            name="discountPrice"
            value={data.discountPrice}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter discount price"
          />
        </div>

        <div>
          <label className="block text-gray-700">Stock</label>
          <input
            type="number"
            name="stock"
            value={data.stock}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter stock quantity"
          />
        </div>

        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter product description"
            rows="4"
          />
        </div>

        <div>
          <label className="block text-gray-700">Upload Image</label>
          <input type="file" onChange={uploadImage} className="w-full" />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-4 h-32 w-32 object-cover rounded-lg"
            />
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full p-2 rounded-lg text-white ${
            isLoading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isLoading ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
