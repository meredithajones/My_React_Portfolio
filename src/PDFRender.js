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
        src='public/Assets/Resume/meredith_jones_resume .pdf'
      />
      </div>
    );
  }
}

export default PDF;