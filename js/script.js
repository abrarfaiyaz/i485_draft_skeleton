// document.getElementById('uploadForm').addEventListener('submit', async function(event) {
//     event.preventDefault(); // Prevent the form from submitting the default way
    
//     const fileInput = document.getElementById('fileInput');
//     const file = fileInput.files[0];
    
//     if (!file) {
//         alert('Please select a file.');
//         return;
//     }

//     try {
//         // Upload the file to File.io
//         const formData = new FormData();
//         formData.append('file', file);

//         const response = await fetch('https://file.io', {
//             method: 'POST',
//             body: formData
//         });

//         if (!response.ok) {
//             throw new Error('Failed to upload file.');
//         }

//         const data = await response.json();
//         const fileUrl = data.link; // Get the URL of the uploaded file

//         // Create a form dynamically to open the file in Overleaf
//         const overleafForm = document.createElement('form');
//         overleafForm.action = 'https://www.overleaf.com/docs';
//         overleafForm.method = 'post';
//         overleafForm.target = '_blank';

//         const input = document.createElement('input');
//         input.type = 'hidden';
//         input.name = 'snip_uri';
//         input.value = fileUrl;

//         overleafForm.appendChild(input);
//         document.body.appendChild(overleafForm);

//         overleafForm.submit();
//         document.body.removeChild(overleafForm); // Clean up
//     } catch (error) {
//         alert(`An error occurred: ${error.message}`);
//     }
// });
document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const pdfFiles = document.getElementById('pdfFiles').files;
    const texFileUrl = window.location.origin + '/files/main.tex';

    if (pdfFiles.length === 0) {
        alert('Please select at least one PDF file.');
        return;
    }

    try {
        // Upload the PDF files to File.io
        const fileUrls = [];
        for (const file of pdfFiles) {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('https://file.io', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to upload file.');
            }

            const data = await response.json();
            fileUrls.push(data.link);
        }

        // Create a form dynamically to open the files in Overleaf
        const overleafForm = document.createElement('form');
        overleafForm.action = 'https://www.overleaf.com/docs';
        overleafForm.method = 'post';
        overleafForm.target = '_blank';

        // Add the TeX file URL to the form
        const texInput = document.createElement('input');
        texInput.type = 'hidden';
        texInput.name = 'snip_uri';
        texInput.value = texFileUrl;
        overleafForm.appendChild(texInput);

        // Add each PDF file URL to the form
        fileUrls.forEach((url, index) => {
            const pdfInput = document.createElement('input');
            pdfInput.type = 'hidden';
            pdfInput.name = `file${index + 1}`;
            pdfInput.value = url;
            overleafForm.appendChild(pdfInput);
        });

        document.body.appendChild(overleafForm);
        overleafForm.submit();
        document.body.removeChild(overleafForm); // Clean up
    } catch (error) {
        alert(`An error occurred: ${error.message}`);
    }
});

