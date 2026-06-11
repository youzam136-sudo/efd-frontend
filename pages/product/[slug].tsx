function renderBlocks(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return "";

  return blocks
    .map((block) => {
      if (block.type === "paragraph") {
        const text = block.content?.map((c: any) => c.text || "").join("") || "";
        return `<p>${text}</p>`;
      }
      if (block.type === "heading") {
        const text = block.content?.map((c: any) => c.text || "").join("") || "";
        const level = block.props?.level || 2;
        return `<h${level}>${text}</h${level}>`;
      }
      if (block.type === "image") {
        const url = block.props?.url || "";
        const name = block.props?.name || "";
        if (!url) return "";
        const fullUrl = url.startsWith("http") ? url : `${process.env.NEXT_PUBLIC_API_URL}${url}`;
        return `<img src="${fullUrl}" alt="${name}" style="max-width:100%" />`;
      }
      if (block.type === "table") {
        const rows = block.content?.content?.rows || [];
        const tableRows = rows.map((row: any, i: number) => {
          const cells = row.cells.map((cell: any) => {
            const text = cell.content?.map((c: any) => c.text || "").join("") || "";
            return i === 0
              ? `<th style="border:1px solid #ddd;padding:8px;background:#f5f5f5">${text}</th>`
              : `<td style="border:1px solid #ddd;padding:8px">${text}</td>`;
          }).join("");
          return `<tr>${cells}</tr>`;
        }).join("");
        return `<table style="border-collapse:collapse;width:100%">${tableRows}</table>`;
      }
      return "";
    })
    .join("");
}