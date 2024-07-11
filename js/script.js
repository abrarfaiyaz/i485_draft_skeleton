document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const pApplicant = document.getElementById('pApplicant').value;
    const pPhone = document.getElementById('pPhone').value;
    const pEmail = document.getElementById('pEmail').value;
    const pAddress = document.getElementById('pAddress').value;
    const pCity = document.getElementById('pCity').value;
    const pState = document.getElementById('pState').value;
    const pZip = document.getElementById('pZip').value;
    const Anum = document.getElementById('Anum').value;
    const priorityDate = document.getElementById('priorityDate').value;
    const ReceiptNumber = document.getElementById('ReceiptNumber').value;

    const dApplicant = document.getElementById('dApplicant').value;
    const dPhone = document.getElementById('dPhone').value;
    const dEmail = document.getElementById('dEmail').value;
    const dAddress = document.getElementById('dAddress').value;
    const dCity = document.getElementById('dCity').value;
    const dState = document.getElementById('dState').value;
    const dZip = document.getElementById('dZip').value;

    const USCISATTN = document.getElementById('USCISATTN').value;
    const USCISPOBOX = document.getElementById('USCISPOBOX').value;
    const USCISCITY = document.getElementById('USCISCITY').value;
    const USCISSTATE = document.getElementById('USCISSTATE').value;
    const USCISzip = document.getElementById('USCISzip').value;

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
% Details Regarding Primary Applicant
\\newcommand{\\pApplicant}{${pApplicant}}
\\newcommand{\\pPhone}{${pPhone}}
\\newcommand{\\pEmail}{${pEmail}}
\\newcommand{\\pAddress}{${pAddress}}
\\newcommand{\\pCity}{${pCity}}
\\newcommand{\\pState}{${pState}}
\\newcommand{\\pZip}{${pZip}}
\\newcommand{\\Anum}{${Anum}}
\\newcommand{\\priorityDate}{${priorityDate}}
\\newcommand{\\ReceiptNumber}{${ReceiptNumber}}

% Details Regarding Derivative Applicant
\\newcommand{\\dApplicant}{${dApplicant}}
\\newcommand{\\dPhone}{${dPhone}}
\\newcommand{\\dEmail}{${dEmail}}
\\newcommand{\\dAddress}{${dAddress}}
\\newcommand{\\dCity}{${dCity}}
\\newcommand{\\dState}{${dState}}
\\newcommand{\\dZip}{${dZip}}

% Details Regarding Recipient's Address
\\newcommand{\\USCISATTN}{${USCISATTN}}
\\newcommand{\\USCISPOBOX}{${USCISPOBOX}}
\\newcommand{\\USCISCITY}{${USCISCITY
