import React from "react";
import axios from "axios";
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const api = axios.create({
   baseURL: `https://cdn.contentful.com/spaces/${spaceId}/environments/master/`,
   headers: {
      Authorization: `Bearer ${accessToken}`,
   },
});

export const getEntries = async (contentType) => {
   try {
      const response = await api.get(`entries?content_type=${contentType}`);
      return response.data.items;
   } catch (error) {
      console.error("Error fetching entries:", error);
      return [];
   }
};

const Crud = () => {
   return <div>Crud</div>;
};

export default Crud;
