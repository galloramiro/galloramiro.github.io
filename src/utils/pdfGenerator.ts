export const generatePDF = async () => {
  try {
    const pdfContainer = document.createElement('div');
    pdfContainer.style.position = 'absolute';
    pdfContainer.style.left = '-9999px';
    pdfContainer.style.top = '0';
    pdfContainer.style.width = '210mm'; // Ancho fijo A4
    pdfContainer.style.backgroundColor = 'white';
    pdfContainer.style.color = 'black';
    pdfContainer.style.fontFamily = 'Arial, sans-serif';
    pdfContainer.style.padding = '20mm';
    pdfContainer.style.boxSizing = 'border-box';

    pdfContainer.innerHTML = generatePDFContent();
    document.body.appendChild(pdfContainer);

    // Captura el elemento dinámicamente sin 'width' o 'height' fijos
    const canvas = await html2canvas(pdfContainer, {
      scale: 2,
      useCORS: true,
      backgroundColor: 'white',
      windowWidth: pdfContainer.scrollWidth
    });

    document.body.removeChild(pdfContainer);

    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    // Calcula la altura proporcional según el ancho de la página A4
    const totalImgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = totalImgHeight;
    let position = 0;

    // Renderizar primera página
    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, totalImgHeight);
    heightLeft -= pdfHeight;

    // Agregar páginas adicionales si el contenido excede la altura de una página
    while (heightLeft > 0) {
      position -= pdfHeight; // Desplaza la posición de la imagen hacia arriba
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, totalImgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save(`${config.personalInfo.fullName.replace(/\s+/g, '_')}_CV.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Sorry, there was an error generating the PDF. Please try again.');
  }
};