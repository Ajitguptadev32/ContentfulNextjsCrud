"use Client";
import Image from "next/image";
import { createClient } from "contentful";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import Crud from "./Crud.js";
import { CardHeader, CardMedia, Container, Grid } from "@mui/material";
import { BlogPost } from "./services/blog.type.js";

async function getBlogs() {
   const client = require("contentful").createClient({
      space: process.env.SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
   });
   const response = await client.getEntries({ content_type: "blogs" });
   return response.items;
}

export default async function Home() {
   const data = await getBlogs();
   console.log(data);
   return (
      <Container
         sx={{ margin: "2rem", backgroundColor: "gray", padding: "3rem" }}
      >
         <Typography variant="h2" gutterBottom>
            Contentful CMS
         </Typography>
         <Grid container spacing={1}>
            {data.map((item: any) => (
               <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ width: "350px", height: "400px" }}>
                     <CardMedia
                        component="img"
                        height="194"
                        image="/static/images/cards/paella.jpg"
                        alt="Paella dish"
                     />
                     <CardContent>
                        <div>
                           <Typography variant="h5" color="text.primary">
                              {item.fields.title}
                           </Typography>
                        </div>
                        <Typography sx={{ mb: 1.5 }} color="text.dark">
                           {item.fields.description}
                        </Typography>
                     </CardContent>
                  </Card>
               </Grid>
            ))}
         </Grid>
      </Container>
   );
}
