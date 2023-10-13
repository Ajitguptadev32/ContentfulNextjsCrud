"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import contentful from "contentful";
import { createClient } from "contentful";

// pages/api/deleteContent.js

// const deleteApi = async () => {
//    try {
//       const response = await axios.delete(
//          "https://cdn.contentful.com/spaces/szrrmdz31zy4/entries?access_token=UQSi8GS9wx5qAF5EXUKFgS3qwAIkjOcPF9N-vTtnw4Q&content_type=blogs"
//       );
//       const data = await response.data;
//       setData(data.items);
//    } catch (error) {
//       console.error("Error fetching Contentful data:", error);
//    }
// };

export default function ContentfulAPi() {
   const [data, setData] = useState([]);
   useEffect(() => {
      async function fetchData() {
         try {
            const response = await axios.get(
               "https://cdn.contentful.com/spaces/szrrmdz31zy4/entries?access_token=UQSi8GS9wx5qAF5EXUKFgS3qwAIkjOcPF9N-vTtnw4Q"
            );
            const data = await response.data;
            console.log(data);
            setData(data.items);
         } catch (error) {
            console.error("Error fetching Contentful data:", error);
         }
      }

      fetchData();
   }, []);

   const handleDelete = async (id) => {
      try {
         await axios.delete(
            `https://cdn.contentful.com/spaces/szrrmdz31zy4/entries/1mXXlSsYo46x6i6SSfmWy9
/access_token=UQSi8GS9wx5qAF5EXUKFgS3qwAIkjOcPF9N-vTtnw4Q`
         );
         console.log("Entry deleted:", id);
         // Now you can remove the entry from the state
         const updatedData = data.filter((item) => item.sys.id !== entryId);
         setData(updatedData);
      } catch (error) {
         console.error("Error deleting Contentful entry:", error);
      }
   };
   return (
      <div>
         <table>
            <thead>
               <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody>
               {data.map((p) => (
                  <tr key={p.sys.id}>
                     <td>{p.fields.title}</td>
                     <td>{p.fields.description}</td>

                     <td>
                        <button onClick={() => handleEdit(p.sys.id)}>
                           Edit
                        </button>{" "}
                        /
                        <button onClick={() => handleDelete(p.sys.id)}>
                           Delete
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
