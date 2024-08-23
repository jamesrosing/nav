/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import Accordion from './Accordion';

const AccordionPage: React.FC = () => {
  return (
    <main className="flex flex-col px-8 pt-8 pb-16 bg-white max-w-[792px] max-md:px-5">
      <header className="flex gap-5 justify-between max-md:flex-wrap">
        <div className="flex flex-col max-md:max-w-full">
          <h1 className="text-3xl font-semibold tracking-tight leading-9 text-slate-900 max-md:max-w-full">
            Accordion
          </h1>
          <p className="mt-4 text-xl leading-7 text-slate-600 max-md:max-w-full">
            A vertically stacked set of interactive headings that each reveal an associated section of content.
          </p>
        </div>
        <a
          href="#"
          className="flex flex-col justify-center self-start text-sm font-medium leading-6 text-white rounded-md"
        >
          <span className="px-3.5 py-2 rounded-md bg-slate-900">View docs</span>
        </a>
      </header>
      <hr className="shrink-0 mt-8 h-px border border-solid bg-slate-200 border-slate-200 max-md:max-w-full" />
      <Accordion />
    </main>
  );
};

export default AccordionPage;