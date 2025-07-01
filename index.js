import { initMuPDFWebViewer } from './node_modules/mupdf-webviewer/index.js';

async function openRemotePDF(url, filename = 'file.pdf') {
  const response = await fetch(url);
  const blob = await response.blob();
  const blobUrl = URL.createObjectURL(blob);
  openPDF(blobUrl, filename);
}

async function openPDF(url, filename) {
    try {
        const mupdf = await initMuPDFWebViewer(
            '#viewer',
            url,
            {
                filename: filename,
                libraryPath: 'lib',
                licenseKey: 'YOUR_LICENSE_KEY', // if your project is in a sub-folder from root then you need to target this e.g. '/webviewer/lib'
            }
        )
    } catch (error) {
        console.error('init error');
        console.error(error);
    }
}



// open a local PDF
openPDF('/sample.pdf', 'sample.pdf')

// or open a remote PDF
// ensure CORS access control origin for the PDF file is permitted
// openRemotePDF('https://dijipiji.com/sample.pdf', 'sample.pdf');