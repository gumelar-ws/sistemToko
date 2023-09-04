// import React from 'react';

// export default function DeskripsiDetaileProduct({ selectedProduct, selectedChildIndex, selectedVariant, handleCountDecrease, handleCountIncrease, setSelectedChildIndex, handleAddToCart, count }) {
//   return (
//     <div>
//       <div className="product-details">
//         <h2>{selectedProduct.childs[selectedChildIndex].name}</h2>
//         <p className="fw-bold">
//           {selectedProduct.currency} {selectedProduct.childs[selectedChildIndex].price}
//         </p>
//         <p>Stock: {selectedProduct.childs[selectedChildIndex].stock}</p>

//         <div>
//           <p className="fw-bold mt-3">Size</p>
//           {selectedProduct.childs && (
//             <select className="mb-3 ps-1 pe-1" style={{ width: '200px' }} value={selectedChildIndex} onChange={(e) => setSelectedChildIndex(e.target.value)}>
//               <option disabled>Choose Size</option>

//               {selectedProduct.childs.map((child, index) => (
//                 <option key={child.id} value={index}>
//                   {child.plain_varian[0].value}
//                 </option>
//               ))}
//             </select>
//           )}
//         </div>

//         <div className="row ">
//           <div className="col">
//             {' '}
//             {selectedVariant && (
//               <div>
//                 <div className="me-5  w-100 d-flex h-auto ">
//                   <ul className="pagination pagination-md">
//                     <li className="page-item ">
//                       <span className="page-link text-dark rounded-0 " style={{ cursor: 'pointer' }} onClick={handleCountDecrease}>
//                         -
//                       </span>
//                     </li>
//                     <li className="page-item">
//                       <span className="page-link text-dark rounded-0 ">{count}</span>
//                     </li>
//                     <li className="page-item me-5 ">
//                       <span className="page-link text-dark rounded-0 " style={{ cursor: 'pointer' }} onClick={handleCountIncrease} disabled={count >= selectedVariant.stock}>
//                         +
//                       </span>
//                     </li>
//                     <li className="page-item">
//                       <span className="page-link btn btn-secondary bg-secondary text-white rounded-0 " style={{ cursor: 'pointer' }} onClick={handleAddToCart} disabled={count === 0}>
//                         Add to Cart
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//         <div>
//           <div className="d-flex mb-0">
//             <p className="me-3  p-0  border-bottom border-2 border-dark">DESCRIPTION</p>
//             <div>SIZE GUID</div>
//           </div>
//           {selectedProduct.childs[selectedChildIndex] && <p className=" "> {selectedProduct.childs[selectedChildIndex].description}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }
