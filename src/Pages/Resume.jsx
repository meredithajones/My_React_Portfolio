import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Wrapper from '../Components/Wrapper/wrapper';

function MyResume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Wrapper>
    <div>
      <Document
        file="public/Assets/Resume/meredith_jones_resume .pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={numPages} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
</Wrapper>
  );
}

export default MyResume;