//const fs = require('fs')
//
//export function pageSave(data) {
//    fs.writeFile('Output.html', data, (err) => {
//    // In case of a error throw err.
//    if (err) throw err;
//    })
//}


export function pageSave(data) {
    // Create a Blob with the content you want to save
    const blob = new Blob([data], { type: 'text/html' });

    // Create an anchor element to trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Output.html';

    // Append the link to the document and simulate a click
    document.body.appendChild(link);
    link.click();

    // Remove the link after the download
    document.body.removeChild(link);
}
