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

//api
import { IndexApi } from '@/constants/api'

type Props = {
  person?: object;
  status: number
}

const Person: NextPage<Props> = ({
  children,
  person,
  status
}) => {
  const { query } = useRouter();

  const { data, error, loading } = useRequest({
    url: `http://localhost:3000/api/index/${query.id}`,
    method: 'get',
  });

  useEffect(() => {
    console.log('Person data:', data)
    console.log('Person error:', error)
    console.log('Person loading:', loading)
  }, [data, error, loading])

  useEffect(() => {
    console.log('person,', person)
    console.log('status,', status)
  }, [person, status])

  return (
    <h1></h1>
  );
};

export default Person;

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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // getServerSideProps 不能与 getInitialProps 同时存在
  const response = await fetch(`http://localhost:3000/api/index/${params.id}`)
  const data = await response.json()

  console.log(`Show data fetched.: ${response}`);
  return {
    props: {
      person: data,
      status: response.status,
    }, // will be passed to the page component as props
  }
}

// Person.getInitialProps = async function () {
//   // 这是一个静态异步函数，可以添加到应用程序的任何页面中。使用此函数，我们就可以获取数据并作为 props 传递给我们的页面
//   // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   // const data = await res.json();
//   console.log(`getInitialProps`);

//   // const { data, error, loading } = useRequest({
//   //   url: 'http://localhost:3000/api/index',
//   //   method: 'post',
//   // });

//   const response = await fetch(`IndexApi/1`)
//   const data = await response.json()

//   console.log(`Show data fetched.: ${response}`);

//   return {
//     person: data,
//     status: response.status
//   };
// };