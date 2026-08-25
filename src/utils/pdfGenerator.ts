import jsPDF from 'jspdf';
import config from '../config.json';

const generatePDFContent = (): string => {
  const { personalInfo, workExperience, talks, contact } = config;

  const formatDate = (dateString: string | null, isCurrent: boolean) => {
    if (isCurrent) return 'Present';
    if (!dateString) return 'Present';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  return `
    <div style="width: 100%; max-width: 100%; margin: 0 auto; line-height: 1.6; font-family: Arial, sans-serif; color: #1f2937;">
      <!-- Header -->
      <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #059669; padding-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
        <h1 style="margin: 0; font-size: 28px; color: #1f2937; font-weight: bold;">${personalInfo.fullName}</h1>
        <h2 style="margin: 10px 0 0 0; font-size: 18px; color: #059669; font-weight: normal;">${personalInfo.title}</h2>
        <div style="margin-top: 15px; font-size: 14px; color: #4b5563;">
          <a href="${contact.linkedinUrl}" style="color: #059669; text-decoration: none;">LinkedIn: ${contact.linkedinUrl}</a>
          ${contact.youtubeUrl ? ` | <a href="${contact.youtubeUrl}" style="color: #059669; text-decoration: none;">YouTube: ${contact.youtubeUrl}</a>` : ''}
        </div>
      </div>

      <!-- About Me -->
      <div style="margin-bottom: 30px; page-break-inside: avoid; break-inside: avoid;">
        <h3 style="color: #1f2937; font-size: 20px; margin-bottom: 15px; border-bottom: 1px solid #d1d5db; padding-bottom: 5px;">About Me</h3>
        <div style="color: #4b5563; font-size: 14px;">
          ${personalInfo.bio.split('\n\n').map(paragraph => `<p style="margin: 0 0 12px 0;">${paragraph}</p>`).join('')}
        </div>
      </div>

      <!-- Work Experience -->
      <div style="margin-bottom: 30px;">
        <h3 style="color: #1f2937; font-size: 20px; margin-bottom: 15px; border-bottom: 1px solid #d1d5db; padding-bottom: 5px; page-break-after: avoid; break-after: avoid;">Work Experience</h3>
        ${workExperience.map(job => `
          <div style="margin-bottom: 25px; page-break-inside: avoid; break-inside: avoid;">
            <!-- Reemplazado Flexbox por Table para compatibilidad -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px;">
              <tr>
                <td style="vertical-align: top; text-align: left;">
                  <h4 style="margin: 0; font-size: 16px; color: #1f2937; font-weight: bold;">${job.jobTitle}</h4>
                  <p style="margin: 5px 0 0 0; color: #059669; font-weight: 600; font-size: 14px;">${job.company}</p>
                </td>
                <td style="vertical-align: top; text-align: right; color: #6b7280; font-size: 12px; white-space: nowrap;">
                  ${formatDate(job.startDate, false)} - ${formatDate(job.endDate, job.currentlyWorking)}
                </td>
              </tr>
            </table>
            <ul style="margin: 5px 0 0 20px; padding: 0; color: #4b5563; font-size: 13px;">
              ${job.responsibilities.map(resp => `<li style="margin-bottom: 5px;">${resp}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <!-- Technical Talks -->
      <div style="margin-bottom: 30px;">
        <h3 style="color: #1f2937; font-size: 20px; margin-bottom: 15px; border-bottom: 1px solid #d1d5db; padding-bottom: 5px; page-break-after: avoid; break-after: avoid;">Technical Talks</h3>
        ${talks.map(talk => `
          <div style="margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid;">
            <h4 style="margin: 0 0 8px 0; font-size: 15px; color: #1f2937; font-weight: bold;">${talk.title}</h4>
            <p style="margin: 0 0 8px 0; color: #4b5563; font-size: 13px;">${talk.description}</p>
            <div style="font-size: 12px; color: #059669;">
              <a href="${talk.slidesLink}" style="color: #059669; text-decoration: none;">Slides: ${talk.slidesLink}</a>
              ${talk.youtubeLink ? ` | <a href="${talk.youtubeLink}" style="color: #059669; text-decoration: none;">Video: ${talk.youtubeLink}</a>` : ''}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Footer -->
      <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #d1d5db; font-size: 12px; color: #6b7280; page-break-inside: avoid; break-inside: avoid;">
        <p style="margin: 0;">This CV was generated from ${personalInfo.fullName}'s personal website</p>
      </div>
    </div>
  `;
};

export const generatePDF = async () => {
  try {
    const pdfContainer = document.createElement('div');
    pdfContainer.style.position = 'fixed';
    pdfContainer.style.left = '0';
    pdfContainer.style.top = '0';
    pdfContainer.style.zIndex = '-9999';
    pdfContainer.style.opacity = '0';
    pdfContainer.style.width = '210mm';
    pdfContainer.style.padding = '15mm';
    pdfContainer.style.boxSizing = 'border-box';
    pdfContainer.style.backgroundColor = 'white';

    pdfContainer.innerHTML = generatePDFContent();
    document.body.appendChild(pdfContainer);

    const pdf = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
    });

    await pdf.html(pdfContainer, {
      callback: (doc) => {
        doc.save(`${config.personalInfo.fullName.replace(/\s+/g, '_')}_CV.pdf`);
        document.body.removeChild(pdfContainer);
      },
      x: 0,
      y: 0,
      width: 210,
      windowWidth: 794,
      autoPaging: 'slice',
      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: 'white',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Sorry, there was an error generating the PDF. Please try again.');
  }
};