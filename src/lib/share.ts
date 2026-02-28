import html2canvas from "html2canvas";

export async function generateShareImage(
  element: HTMLElement
): Promise<Blob | null> {
  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: "#FFF8F0",
      useCORS: true,
      logging: false,
      imageTimeout: 15000,
      onclone: (doc) => {
        // Tailwind v4 generates lab() colors that html2canvas can't parse.
        const style = doc.createElement("style");
        style.textContent = `
          * {
            --tw-ring-color: rgba(107, 74, 59, 0.2) !important;
          }
          [class*="border-outline/"] {
            border-color: rgba(107, 74, 59, 0.2) !important;
          }
          [class*="bg-btn/"] {
            background-color: rgba(232, 212, 192, 0.6) !important;
          }
          [class*="border-outline/30"] {
            border-color: rgba(107, 74, 59, 0.3) !important;
          }
        `;
        doc.head.appendChild(style);
      },
    });
    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), "image/png");
    });
  } catch (e) {
    console.error("Failed to generate share image:", e);
    return null;
  }
}

export async function downloadShareImage(element: HTMLElement): Promise<void> {
  const blob = await generateShareImage(element);
  if (!blob) {
    alert("画像の生成に失敗しました");
    return;
  }

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "konpon-mikuji.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
