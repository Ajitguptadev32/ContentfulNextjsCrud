"use client";
import React, { useState } from "react";
import axios from "axios";

const InsertData = () => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();

      // Create an object with the data to be sent
      const postData = { title, description };

      try {
         const response = await axios.post("/api/post", postData);

         // Handle the response as needed (e.g., display a success message)
         console.log("Post request successful:", response.data);
      } catch (error) {
         // Handle errors (e.g., display an error message)
         console.error("Error making post request:", error);
      }
   };

   return (
      <div>
         <h1>Submit a Post Request</h1>
         <form onSubmit={handleSubmit}>
            <div>
               <label>Title:</label>
               <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               />
            </div>
            <div>
               <label>Description:</label>
               <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
               />
            </div>
            <button type="submit">Submit</button>
         </form>
      </div>
   );
};

export default InsertData;
