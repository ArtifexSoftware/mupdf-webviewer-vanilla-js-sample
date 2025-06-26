import { initMuPDFWebViewer } from '/node_modules/mupdf-webviewer/index.js';

try {
  const mupdf = await initMuPDFWebViewer(
    '#viewer',
    '/sample.pdf',
    {
      filename: 'sample.pdf',
      libraryPath: '/lib',
      licenseKey: 'YOUR_LICENSE_KEY',
    }
  )

} catch (error) {
  console.error('init error');
  console.error(error);
}