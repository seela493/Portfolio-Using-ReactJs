import React from 'react'

const handleDownload = () => {
  try {
    const cvUrl = "/Shila-Pradhan.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", "Shila-Pradhan.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Download failed:", error);
    alert("Download failed. Please check all errors.");
  }
};


const CvButton = () => {
  return (
    <div>
      <button onClick={handleDownload} className="cv-button">
                Download CV
              </button>
    </div>
  )
}

export default CvButton
