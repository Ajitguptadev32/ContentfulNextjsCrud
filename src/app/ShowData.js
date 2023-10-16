"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
const axios = require("axios");
const contentful = require("contentful-management");
import Link from "next/link";
export const client = createClient({
   space: "szrrmdz31zy4",
   accessToken: "UQSi8GS9wx5qAF5EXUKFgS3qwAIkjOcPF9N-vTtnw4Q",
   cmaToken: "CFPAT-_HhWCWyhsDWe41F--Vpnf3jxJOaPU7Bb5E0oFuXBWX4",
   environment: "master",
});

const getEntries = () => {
   return client.getEntries({ content_type: "blogs" });
};

const ShowData = () => {
   const [entries, setEntries] = useState([]);

   useEffect(() => {
      const fetchEntries = async () => {
         try {
            const { items } = await getEntries();
            setEntries(items);
         } catch (error) {
            console.error("Error fetching entries:", error);
         }
      };

      fetchEntries();
   }, []);
   const CMAclient = contentful.createClient({
      accessToken: "CFPAT-_HhWCWyhsDWe41F--Vpnf3jxJOaPU7Bb5E0oFuXBWX4",
   });
   const handleDelete = async (id) => {
      console.log("Delete", id);
      CMAclient.getSpace("szrrmdz31zy4")
         .then((space) => space.getEntry({ id }))
         .then((entry) => entry.unpublish())
         .then((entry) => console.log(`Entry ${entry.sys.id} unpublished.`))
         .catch(console.error);
   };

   //    const handleDelete = async (id) => {
   //       client
   //          .getSpace("cmaToken")
   //          .then((space) => space.delete())
   //          .then(() => console.log("Space deleted."))
   //          .catch(console.error);
   //    };

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
               {entries.map((p) => (
                  <tr key={p.sys.id}>
                     <td>{p.fields.title}</td>
                     <td>{p.fields.description}</td>

                     <td>
                        <button>
                           <Link href={`/EditData?id=${p.sys.id}`}>Edit</Link>
                        </button>
                        /
                        <button onClick={(id) => handleDelete(p.sys.id)}>
                           Delete
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default ShowData;
