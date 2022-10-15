<template>
  <div class="home">
   <h1 class="headline center">Lyric Blog</h1>
   <div class="sections">
     <div class="group">
       <div
       v-for="article in articles.data"
       v-bind:key="article.id"
       class="section">
         <div class="entry">
           <NuxtLink :to="{ path: article.attributes.slug, query: {id: article.id} }">
             <h3>
               {{article.attributes.title }}
               <span class="subtitle"> {{article.attributes.date}} </span>
             </h3>
           </NuxtLink>
 
           <p> {{article.attributes.description}} </p>
         </div>
       </div>
 
     </div>
   </div>
 
  </div>
  
 </template>
 
 <script>
 import { allArticles } from '~/graphql/queries'
 
 export default {
  name: 'IndexPage', 
  data() {
     return {
       articles: []
     }
   },
   apollo: {
     articles: {
       prefetch: true,
       query: allArticles
     }
   }
 }
 </script>
 
 <style>
 
 .center {
   text-align: center;
 }
 
 .headline {
   text-transform: uppercase;
   margin: 4rem auto;
   font-size: 4rem;
 }
 
 img {
   display: block;
   margin: 0 auto;
   width: 150px;
 }
 
 h2 {
   color: #35495e;
   text-transform: capitalize;
   margin-bottom: 2rem;
 }
 
 h3 {
   color: #42b883;
   margin-bottom: 0;
   cursor: pointer;
 }
 
 h3 > .subtitle {
   color: grey;
   font-size: 0.98rem;
   float: right;
   font-weight: normal;
 }
 
 p {
   margin-top: 0.4rem;
 }
 
 .sections {
   max-width: 40vw;
   margin: 0 auto;
   margin-top: 4rem;
 }
 
 .section {
   margin-bottom: 3rem;
 }
 
 .group {
   margin-bottom: 4rem;
 }
 
 </style>