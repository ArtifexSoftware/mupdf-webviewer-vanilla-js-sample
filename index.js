import { initMuPDFWebViewer } from './node_modules/mupdf-webviewer/index.js';

let mupdf;

document.getElementById("js-button").innerHTML="Test Document Open API for remote URL";
document.getElementById("js-button").onclick = documentOpenAPI;

async function initWithBlobURL(url, filename = 'file.pdf') {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    initMuPDFWebViewerWithPDF(blobUrl, filename);
}

async function initMuPDFWebViewerWithPDF(url, filename) {
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


// init with a local PDF
initMuPDFWebViewerWithPDF('/sample.pdf', 'sample.pdf')

// or init with a remote PDF
// ensure CORS access control origin for the PDF file is permitted!
// initMuPDFWebViewerWithPDF('https://dijipiji.com/sample.pdf', 'sample.pdf')

// or init with PDF as blob URL
// initWithBlobURL('/sample.pdf', 'sample.pdf');