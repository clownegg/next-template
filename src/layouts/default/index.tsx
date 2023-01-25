import React from 'react';
import Header from '@/components/common/header';

type Props = {
  title: string;
  children: React.ReactNode;
};

const DefaultLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Header title={title} />
      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
