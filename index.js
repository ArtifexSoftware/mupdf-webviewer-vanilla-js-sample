import { initMuPDFWebViewer } from './node_modules/mupdf-webviewer/index.js';

let mupdf;

document.getElementById("js-button").innerHTML="Test Document Open API for remote URL";
document.getElementById("js-button").onclick = documentOpenAPI;


async function openRemotePDF(url, filename = 'file.pdf') {
  const response = await fetch(url);
  const blob = await response.blob();
  const blobUrl = URL.createObjectURL(blob);
  openPDF(blobUrl, filename);
}

async function openPDF(url, filename) {
    try {
        mupdf = await initMuPDFWebViewer(
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

function documentOpenAPI() {
    mupdf.document.open({url:'https://dijipiji.com/hello-world.pdf', filename:'hello-world.pdf'});
}


// open a local PDF
openPDF('/sample.pdf', 'sample.pdf')

// or open a remote PDF
// ensure CORS access control origin for the PDF file is permitted
// openRemotePDF('https://dijipiji.com/sample.pdf', 'sample.pdf');