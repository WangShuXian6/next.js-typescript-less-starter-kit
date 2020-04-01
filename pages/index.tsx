//import * as React from 'react'
import Head from "next/head";
import css from "./index.module.less";
import React, { useEffect } from "react";
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { useRequest } from '@umijs/hooks';
import fetch from 'isomorphic-unfetch';

//component
import Home from "@/components/Home";
import Layout from "@/components/Layout";

//api
import { IndexApi } from '@/constants/api'

//
const colorImage=require('@/assets/color.jpg')

type Props = {
  title?: { id: string, name: number }[]
}

const Index: NextPage<Props> = ({
  children,
  title = []
}) => {
  const { query } = useRouter();

  const { data, error, loading } = useRequest({
    url: IndexApi,//'http://localhost:3000/api/index',
    method: 'get',
  });

  useEffect(() => {
    console.log("process.env.SERVER_URL::", process.env.SERVER_URL);
  }, []);

  useEffect(() => {
    console.log("title::", title);
  }, [title]);

  useEffect(() => {
    console.log('data:', data)
    console.log('error:', error)
    console.log('loading:', loading)
  }, [data, error, loading])

  return (
    <Layout>
      <Home />
      {title && title.map((v) => {
        return (
          <h1 key={v.id}>{v.name}</h1>
        )
      })}
      <img src={colorImage} alt="color"/>
    </Layout>
  );
};

export default Index;

// export const getStaticProps: GetStaticProps = async (context) => {
//   console.log('context params', context.params)
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [
//       { params: { id: '1' } },
//       { params: { id: '2' } }
//     ],
//     fallback: true  // See the "fallback" section below
//   };
// }

// export const getServerSideProps: GetServerSideProps = async context => {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

Index.getInitialProps = async function () {
  // 这是一个静态异步函数，可以添加到应用程序的任何页面中。使用此函数，我们就可以获取数据并作为 props 传递给我们的页面
  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  // const data = await res.json();
  console.log(`getInitialProps`);

  // const { data, error, loading } = useRequest({
  //   url: 'http://localhost:3000/api/index',
  //   method: 'post',
  // });

  const response = await fetch('http://localhost:3000/api/index')
  const data = await response.json()

  console.log(`Show data fetched.: ${response}`);

  return {
    title: data
  };
};