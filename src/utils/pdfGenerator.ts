import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import config from '../config.json';

export const generatePDF = async () => {
  try {
    // Create a temporary container for PDF content
    const pdfContainer = document.createElement('div');
    pdfContainer.style.position = 'absolute';
    pdfContainer.style.left = '-9999px';
    pdfContainer.style.top = '0';
    pdfContainer.style.width = '210mm'; // A4 width
    pdfContainer.style.backgroundColor = 'white';
    pdfContainer.style.color = 'black';
    pdfContainer.style.fontFamily = 'Arial, sans-serif';
    pdfContainer.style.padding = '20mm';
    pdfContainer.style.boxSizing = 'border-box';

    // Generate PDF content
    pdfContainer.innerHTML = generatePDFContent();
    document.body.appendChild(pdfContainer);

    // Convert to canvas
    const canvas = await html2canvas(pdfContainer, {
      scale: 2,
      useCORS: true,
      backgroundColor: 'white',
      width: 794, // A4 width in pixels at 96 DPI
      height: 1123 // A4 height in pixels at 96 DPI
    });

    // Remove temporary container
    document.body.removeChild(pdfContainer);

    // Create PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');
    
    // Calculate dimensions to fit A4
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    // Add image to PDF
    if (imgHeight <= pdfHeight) {
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    } else {
      // If content is too tall, scale it down
      const scaledHeight = pdfHeight;
      const scaledWidth = (canvas.width * pdfHeight) / canvas.height;
      pdf.addImage(imgData, 'PNG', (pdfWidth - scaledWidth) / 2, 0, scaledWidth, scaledHeight);
    }

    // Download the PDF
    pdf.save(`${config.personalInfo.fullName.replace(/\s+/g, '_')}_CV.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Sorry, there was an error generating the PDF. Please try again.');
  }
};

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
    <div style="max-width: 100%; margin: 0 auto; line-height: 1.6;">
      <!-- Header -->
      <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #059669; padding-bottom: 20px;">
        <h1 style="margin: 0; font-size: 28px; color: #1f2937; font-weight: bold;">${personalInfo.fullName}</h1>
        <h2 style="margin: 10px 0 0 0; font-size: 18px; color: #059669; font-weight: normal;">${personalInfo.title}</h2>
        <div style="margin-top: 15px; font-size: 14px; color: #4b5563;">
          <a href="${contact.linkedinUrl}" style="color: #059669; text-decoration: none;">LinkedIn: ${contact.linkedinUrl}</a>
          ${contact.youtubeUrl ? ` | <a href="${contact.youtubeUrl}" style="color: #059669; text-decoration: none;">YouTube: ${contact.youtubeUrl}</a>` : ''}
        </div>
      </div>

      <!-- About Me -->
      <div style="margin-bottom: 30px;">
        <h3 style="color: #1f2937; font-size: 20px; margin-bottom: 15px; border-bottom: 1px solid #d1d5db; padding-bottom: 5px;">About Me</h3>
        <div style="color: #4b5563; font-size: 14px;">
          ${personalInfo.bio.split('\n\n').map(paragraph => `<p style="margin: 0 0 12px 0;">${paragraph}</p>`).join('')}
        </div>
      </div>

      <!-- Work Experience -->
      <div style="margin-bottom: 30px;">
        <h3 style="color: #1f2937; font-size: 20px; margin-bottom: 15px; border-bottom: 1px solid #d1d5db; padding-bottom: 5px;">Work Experience</h3>
        ${workExperience.map(job => `
          <div style="margin-bottom: 25px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
              <div>
                <h4 style="margin: 0; font-size: 16px; color: #1f2937; font-weight: bold;">${job.jobTitle}</h4>
                <p style="margin: 5px 0 0 0; color: #059669; font-weight: 600; font-size: 14px;">${job.company}</p>
              </div>
              <div style="color: #6b7280; font-size: 12px; text-align: right;">
                ${formatDate(job.startDate, false)} - ${formatDate(job.endDate, job.currentlyWorking)}
              </div>
            </div>
            <ul style="margin: 10px 0 0 20px; padding: 0; color: #4b5563; font-size: 13px;">
              ${job.responsibilities.map(resp => `<li style="margin-bottom: 5px;">${resp}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <!-- Technical Talks -->
      <div style="margin-bottom: 30px;">
        <h3 style="color: #1f2937; font-size: 20px; margin-bottom: 15px; border-bottom: 1px solid #d1d5db; padding-bottom: 5px;">Technical Talks</h3>
        ${talks.map(talk => `
          <div style="margin-bottom: 20px;">
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
      <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #d1d5db; font-size: 12px; color: #6b7280;">
        <p style="margin: 0;">This CV was generated from ${personalInfo.fullName}'s personal website</p>
      </div>
    </div>
  `;
};