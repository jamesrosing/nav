/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface SeparatorProps {
  title: string;
  description: string;
}

const Separator: React.FC<SeparatorProps> = ({ title, description }) => {
  return (
    <main className="flex flex-col items-center px-8 pt-8 pb-16 bg-white max-w-[792px] max-md:px-5">
      <Header title={title} description={description} />
      <hr className="shrink-0 self-stretch mt-8 h-px border border-solid bg-slate-200 border-slate-200 max-md:max-w-full" />
      <Footer />
    </main>
  );
};

export default Separator;