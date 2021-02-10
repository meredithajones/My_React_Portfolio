import React, { Component } from 'react';
import './App.css';
import PDFViewer from './components/PDFViewer/PDFViewer';
import PDFJSBackend from './backend/pdfjs';


class PDF extends Component {
  render() {
    return (
      <div className="PDF">
        <PDFViewer
        backend={PDFJSBackend}
        src='/myPDF.pdf'
      />
      </div>
    );
  }
}

export default PDF;