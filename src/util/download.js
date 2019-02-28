import download from 'downloadjs';

export default function(content, fileName, mimeType) {

  return download(
    'data:' + mimeType + ';charset=UTF-8,' + encodeURIComponent(content),
    fileName,
    mimeType
  );
}