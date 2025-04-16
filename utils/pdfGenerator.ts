import jsPDF from "jspdf";

export const generatePDF = (report: any) => {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text(`Отчёт: ${report.brandModel}`, 10, 20);
  doc.setFontSize(12);

  const lines = [
    `Подборщик: ${report.expert}`,
    `VIN: ${report.vin || ''}`,
    `Год: ${report.year || ''}`,
    `Пробег: ${report.mileage || ''} км`,
    `Кузов: ${report.bodyType || ''}`,
    `Цвет: ${report.color || ''}`,
    `Состояние кузова: ${report.bodyCondition || ''}`,
    `Салон: ${report.interiorCondition || ''}`,
    `Рекомендации: ${report.recommendations || ''}`
  ];

  lines.forEach((line, i) => {
    doc.text(line, 10, 30 + i * 8);
  });

  doc.save(`report_${report.brandModel?.replace(/\\s+/g, "_") || "auto"}.pdf`);
};
import jsPDF from "jspdf";

export const generatePDF = (report: any) => {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text(`Отчёт: ${report.brandModel}`, 10, 20);
  doc.setFontSize(12);

  const lines = [
    `Подборщик: ${report.expert}`,
    `VIN: ${report.vin || ''}`,
    `Год: ${report.year || ''}`,
    `Пробег: ${report.mileage || ''} км`,
    `Кузов: ${report.bodyType || ''}`,
    `Цвет: ${report.color || ''}`,
    `Состояние кузова: ${report.bodyCondition || ''}`,
    `Салон: ${report.interiorCondition || ''}`,
    `Рекомендации: ${report.recommendations || ''}`
  ];

  lines.forEach((line, i) => {
    doc.text(line, 10, 30 + i * 8);
  });

  doc.save(`report_${report.brandModel?.replace(/\\s+/g, "_") || "auto"}.pdf`);
};
