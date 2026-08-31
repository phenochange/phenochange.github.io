document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("site-metadata-table");
  if (!container) return;
  const csvUrl = container.dataset.csvUrl || "../assets/data/phenochange_site_metadata.csv";

  function parseCSV(text) {
    const rows = []; let row = [], field = "", inQuotes = false;
    for (let i = 0; i < text.length; i++) {
      const char = text[i], next = text[i + 1];
      if (char === '"' && inQuotes && next === '"') { field += '"'; i++; }
      else if (char === '"') inQuotes = !inQuotes;
      else if (char === "," && !inQuotes) { row.push(field); field = ""; }
      else if ((char === "\n" || char === "\r") && !inQuotes) {
        if (char === "\r" && next === "\n") i++;
        row.push(field); field = "";
        if (row.some(value => value.trim() !== "")) rows.push(row);
        row = [];
      } else field += char;
    }
    if (field.length > 0 || row.length > 0) { row.push(field); if (row.some(value => value.trim() !== "")) rows.push(row); }
    return rows;
  }

  function isNumericColumn(values) {
    const nonEmpty = values.filter(v => v.trim() !== "");
    return nonEmpty.length > 0 && nonEmpty.every(v => !Number.isNaN(Number(v)));
  }

  function renderTable(rows) {
    if (rows.length < 2) { container.innerHTML = "<p>No site metadata are currently available.</p>"; return; }
    const headers = rows[0], data = rows.slice(1); let sortColumn = -1, sortDirection = 1;
    const wrapper = document.createElement("div"); wrapper.className = "table-responsive";
    const table = document.createElement("table"); table.className = "sortable-table";
    const thead = document.createElement("thead"), headerRow = document.createElement("tr");

    headers.forEach((header, index) => {
      const th = document.createElement("th"); th.scope = "col";
      const button = document.createElement("button"); button.type = "button"; button.className = "sort-button"; button.textContent = header; button.setAttribute("aria-label", `Sort by ${header}`);
      const indicator = document.createElement("span"); indicator.className = "sort-indicator"; indicator.setAttribute("aria-hidden", "true"); button.appendChild(indicator);
      button.addEventListener("click", () => {
        if (sortColumn === index) sortDirection *= -1; else { sortColumn = index; sortDirection = 1; }
        headerRow.querySelectorAll(".sort-indicator").forEach(el => el.textContent = ""); indicator.textContent = sortDirection === 1 ? " ▲" : " ▼";
        const numeric = isNumericColumn(data.map(row => row[index] || ""));
        data.sort((a, b) => {
          const av = (a[index] || "").trim(), bv = (b[index] || "").trim();
          if (av === "" && bv === "") return 0; if (av === "") return 1; if (bv === "") return -1;
          if (numeric) return (Number(av) - Number(bv)) * sortDirection;
          return av.localeCompare(bv, undefined, {numeric: true, sensitivity: "base"}) * sortDirection;
        }); renderBody();
      });
      th.appendChild(button); headerRow.appendChild(th);
    });
    thead.appendChild(headerRow); table.appendChild(thead); const tbody = document.createElement("tbody"); table.appendChild(tbody);

    function renderBody() {
      tbody.innerHTML = "";
      data.forEach(row => {
        const tr = document.createElement("tr"); tr.dataset.site = row[0] || "";
        headers.forEach((_, index) => {
          const td = document.createElement("td"), value = row[index] || "";
          if (index >= 3) td.classList.add("numeric-cell");
          if (index === 0 && value) {
            const a = document.createElement("button"); a.type = "button"; a.className = "site-table-link"; a.textContent = value;
            a.addEventListener("click", () => window.PhenoChangeMap?.selectSite(value)); td.appendChild(a);
          } else td.textContent = value || "—";
          tr.appendChild(td);
        }); tbody.appendChild(tr);
      });
    }
    renderBody(); wrapper.appendChild(table); container.innerHTML = ""; container.appendChild(wrapper);
  }

  fetch(csvUrl, { cache: "no-store" }).then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.text(); }).then(text => renderTable(parseCSV(text))).catch(error => {
    console.error("Unable to load PhenoChange site metadata:", error);
    container.innerHTML = "<p>Site metadata could not be loaded. Please use the CSV download link above.</p>";
  });
});
