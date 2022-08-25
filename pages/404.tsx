import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding-top: 90px;
  flex-direction: column;
  text-align: center;
  gap: 25px;

  & a {
    color: ${(props) => props.theme.colors.mainBlue};
    font-weight: bold;
  }
`;

const NotFoundMessage = styled.h1`
  padding-top: 80px;
  text-align: center;
  font-weight: 600;
`;

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 - Página não encontrada.</title>
      </Head>
      <Container>
        <NotFoundMessage>Página não encontrada.</NotFoundMessage>
        <Link href="/" passHref>
          <a>Voltar ao início</a>
        </Link>
      </Container>
    </>
  );
};

export default NotFound;
