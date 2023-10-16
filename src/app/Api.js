//"use client";
import React from "react";
const contentful = require("contentful-management");
const createClient = require("contentful-management");

export const Api = async () => {
   async function Connect() {
      const client = contentful.createClient({
         accessToken: "CFPAT-_F_qhzWEDDDt_R1yphOF9le18Pwj_mVtniIpzQRA6kY",
      });
      const space = await client.getSpace("szrrmdz31zy4");
      const env = await space.getEnvironment("master");
      return env;
   }
   async function UpdateCard(env, cardId) {
      let blog = await env.getEntry(cardId);
      console.log(blog);
      blog.fields.title["en-US"] = "Title is updated Title";
      await blog.update();
      blog = await env.getEntry(cardId);
      await blog.publish();
   }
   let env = await Connect();
   await UpdateCard(env, "4Ee5atTSTnf3BEurRVhmgA");

   console.log(env);

   return <div>Api</div>;
};

export default Api;
