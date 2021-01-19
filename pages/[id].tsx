import Axios from "axios";
import { useRouter } from "next/router";
import React from "react";


export default function indexxxx({ data }) {
  const router = useRouter()

  return <h1>Hellp</h1>


}



export function getStaticPaths() {
  return {
    fallback: false,
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }]//kind of dynanmic paths build at BUILD TIME
  }
}

export async function getStaticProps(context) {
  // const res = await Axios.get('https://jsonplaceholder.typicode.com/posts')
  // const data = res.data
  const { params } = context
  return {
    props: {}, // will be passed to the page component as props
  }
}
