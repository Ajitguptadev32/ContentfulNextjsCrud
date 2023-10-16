"use client";
import React, { use, useEffect, useState } from "react";
import { createClient } from "contentful";
import axios from "axios"; // Import Axios
import Link from "next/link";
import { useRouter } from "next/router";

const page = (id) => {
   const userID = id.searchParams.id;
   const [data, setData] = useState([]);
   const [value, setValue] = useState("");
   const [descriptionValue, setDescriptionValue] = useState("");
   const [editedData, setEditedData] = useState({
      title: "",
      description: "",
   });
   console.log(data);
   const client = createClient({
      space: "szrrmdz31zy4",
      accessToken: "UQSi8GS9wx5qAF5EXUKFgS3qwAIkjOcPF9N-vTtnw4Q",
      environment: "master",
   });

   const entryId = async function Connect() {
      const client = contentful.createClient({
         accessToken: "CFPAT-_F_qhzWEDDDt_R1yphOF9le18Pwj_mVtniIpzQRA6kY",
      });
      const space = await client.getSpace("szrrmdz31zy4");
      const env = await space.getEnvironment("master");
      return env;
   };

   useEffect(() => {
      client
         .getEntry(userID)
         .then((entry) => {
            // Use the entry data as needed
            setData(entry);
         })
         .catch((error) => {
            console.error("Error fetching entry:", error);
         });
   }, [id]);

   async function UpdateCard(env, cardId) {
      let blog = await env.getEntry(cardId);
      console.log(blog);
      blog.fields.title["en-US"] = "Title is updated Title";
      await blog.update();
      blog = await env.getEntry(cardId);
      await blog.publish();
   }

   const handleSubmit = async () => {
      console.log("submit button ");
   };

   return (
      <div>
         <h1>Edit Entry</h1>
         {data && data.fields && (
            <form>
               <div>
                  <label>Title:</label>
                  <input
                     type="text"
                     value={value ? value : data.fields.title}
                     onChange={(e) => setValue(e.target.value)}
                  />
               </div>
               <div>
                  <label>Description:</label>
                  <input
                     type="text"
                     value={value ? value : data.fields.description}
                     onChange={(e) => setValue(e.target.value)}
                  />
               </div>
               <button type="submit" onClick={handleSubmit}>
                  Submit
               </button>
            </form>
         )}
         {!data && <p>Loading...</p>}
      </div>
   );
};

export default page;
