export default function json2html(data) {
  // Get all unique keys from data to define table headers
  const columns = Array.from(new Set(data.flatMap(Object.keys)));

  // Start building the HTML table
  let html = `<table data-user="varshith.pyla@gmail.com">`;
  
  // Add the header row
  html += "<thead><tr>" + columns.map(col => `<th>${col}</th>`).join('') + "</tr></thead>";
  
  // Add the body rows
  html += "<tbody>";
  data.forEach(row => {
    html += "<tr>" + columns.map(col => `<td>${row[col] || ""}</td>`).join('') + "</tr>";
  });
  html += "</tbody></table>";

  return html;
}
