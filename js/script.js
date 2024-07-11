document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const pApplicant = document.getElementById('pApplicant').value;
    const dApplicant = document.getElementById('dApplicant').value;
    const pPhone = document.getElementById('pPhone').value;
    const dPhone = document.getElementById('dPhone').value;
    const pEmail = document.getElementById('pEmail').value;
    const dEmail = document.getElementById('dEmail').value;
    const pAddress = document.getElementById('pAddress').value;
    const pCity = document.getElementById('pCity').value;
    const dAddress = document.getElementById('dAddress').value;
    const dCity = document.getElementById('dCity').value;
    const Anum = document.getElementById('Anum').value;
    const priorityDate = document.getElementById('priorityDate').value;
    const ReceiptNumber = document.getElementById('ReceiptNumber').value;
    const USCISaddress = document.getElementById('USCISaddress').value;

    const texFiles = [
        'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/dervative_applicant_list_of_doc.tex',
        'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/evidence_p_applicant.tex',
        'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/evidences_d_applicant.tex',
        'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/main.tex',
        'https://raw.githubusercontent.com/abrarfaiyaz/i485_draft_skeleton/main/files/principal_applicant_list_of_doc.tex'
    ];

    try {
        // Create the variables TeX file with user input
        const variablesTex = `
        \\newcommand{\\pApplicant}{${pApplicant}}
        \\newcommand{\\dApplicant}{${dApplicant}}
        \\newcommand{\\pPhone}{${pPhone}}
        \\newcommand{\\dPhone}{${dPhone}}
        \\newcommand{\\pEmail}{${pEmail}}
        \\newcommand{\\dEmail}{${dEmail}}
        \\newcommand{\\pAddress}{${pAddress}}
        \\newcommand{\\pCity}{${pCity}}
        \\newcommand{\\dAddress}{${dAddress}}
        \\newcommand{\\dCity}{${dCity}}
        \\newcommand{\\Anum}{${Anum}}
        \\newcommand{\\priorityDate}{${priorityDate}}
        \\newcommand{\\ReceiptNumber}{${ReceiptNumber}}
        \\newcommand{\\USCISaddress}{${USCISaddress}}
        `;

        // Upload the variables TeX file to File.io or another service
        const formData = new FormData();
        const blob = new Blob([variablesTex], { type: 'text/plain' });
        formData.append('file', blob, 'variables.tex');

        const response = await fetch('https://file.io', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to upload variables file.');
        }

        const data = await response.json();
        const variablesTexUrl = data.link;

        // Prepare the snip_uri and snip_name arrays for Overleaf
        const snipUris = [variablesTexUrl, ...texFiles];
        const snipNames = ['variables.tex', 'dervative_applicant_list_of_doc.tex', 'evidence_p_applicant.tex', 'evidences_d_applicant.tex', 'main.tex', 'principal_applicant_list_of_doc.tex'];

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
