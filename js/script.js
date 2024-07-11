document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    
    const texFiles = [
        'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/dervative_applicant_list_of_doc.tex',
        'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/evidence_p_applicant.tex',
        'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/evidences_d_applicant.tex',
        'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/main.tex',
        'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/principal_applicant_list_of_doc.tex'
    ];

    try {
        // Create a template TeX file with name and address
        const templateTex = `
        \\documentclass{article}
        \\begin{document}
        \\section*{Name and Address}
        Name: ${name} \\\\
        Address: ${address}
        \\end{document}
        `;

        // Upload the template TeX file to File.io or another service
        const formData = new FormData();
        const blob = new Blob([templateTex], { type: 'text/plain' });
        formData.append('file', blob, 'name_address.tex');

        const response = await fetch('https://file.io', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to upload template file.');
        }

        const data = await response.json();
        const templateTexUrl = data.link;

        // Prepare the snip_uri and snip_name arrays for Overleaf
        const snipUris = [templateTexUrl, ...texFiles];
        const snipNames = ['name_address.tex', 'dervative_applicant_list_of_doc.tex', 'evidence_p_applicant.tex', 'evidences_d_applicant.tex', 'main.tex', 'principal_applicant_list_of_doc.tex'];

        // Construct the URL for opening in Overleaf
        const overleafUrl = 'https://www.overleaf.com/docs?' +
                            snipUris.map(uri => `snip_uri[]=${encodeURIComponent(uri)}`).join('&') +
                            '&' +
                            snipNames.map(name => `snip_name[]=${encodeURIComponent(name)}`).join('&');

        // Open Overleaf in a new tab/window
        window.open(overleafUrl, '_blank');
    } catch (error) {
        alert(`An error occurred: ${error.message}`);
    }
});
