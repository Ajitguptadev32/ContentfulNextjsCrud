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
import Home from "./Home";
import ContentfulApi from "./ContentfulApi.js";
import ShowData from "./ShowData.js";
export default async function page() {
   return (
      <div>
         <ShowData />
      </div>
   );
}
