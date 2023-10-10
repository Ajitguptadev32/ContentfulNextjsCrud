import React from "react";
import axios from "axios";

async function fetchApi() {
   const cmaToken = "CFPAT-C1Wp2Xw6RNSxpSVwkD_5vi5k0JZKM0Uvlx_smVWMjJA";
   const apiUrl = "https://api.contentful.com/spaces/szrrmdz31zy4/environments"; // Replace with your Contentful API URL

   const requestData = {
      name: "My new environment name",
   };

   try {
      const response = await axios.post(apiUrl, requestData, {
         headers: {
            Authorization: `Bearer ${cmaToken}`,
            "Content-Type": "application/vnd.contentful.management.v1+json",
         },
      });

      console.log("Environment created successfully:", response.data);
   } catch (error) {
      console.error("Error creating environment:", error.message);
   }
}
export default async function Crud() {
   return <div>Crud</div>;
}
