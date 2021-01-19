import Axios from "axios";
import React from "react";
import useSWR from "swr";


export default function index({ data }) {
  return (
    data.map((idx) => {
      return (
        <h1>{idx.title}</h1>

      )
    })

  )






}

export async function getStaticProps(context) {
  const res = await Axios.get('https://jsonplaceholder.typicode.com/posts')
  const data = res.data
  return {
    props: { data }, // will be passed to the page component as props
  }
}
