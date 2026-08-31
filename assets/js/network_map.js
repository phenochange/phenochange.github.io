document.addEventListener('DOMContentLoaded', () => {
  const mapEl = document.getElementById('phenochange-map');
  const diagramEl = document.getElementById('camera-diagram');

  if (!mapEl || typeof L === 'undefined') return;

  const siteCsv = mapEl.dataset.siteCsv;
  const cameraCsv = mapEl.dataset.cameraCsv;

  const map = L.map('phenochange-map', {
    crs: L.CRS.EPSG4326,
    minZoom: 1,
    maxZoom: 8,
    worldCopyJump: false,
    attributionControl: false
  });

  // Keep PhenoChange site markers above country boundaries and other overlays.
  map.createPane('siteMarkers');
  map.getPane('siteMarkers').style.zIndex = 650;

  const worldBounds = [[-90, -180], [90, 180]];

  const nasaImage =
    'https://assets.science.nasa.gov/content/dam/science/esd/eo/images/bmng/bmng-topography-bathymetry/march/world.topo.bathy.200403.3x5400x2700.jpg';

  L.imageOverlay(
    nasaImage,
    worldBounds,
    {
      opacity: 0.72,
      interactive: false
    }
  ).addTo(map);

  map.fitBounds(
    [[-62, -175], [82, 175]],
    { padding: [4, 4] }
  );

  // Thin country boundaries. These are decorative only.
  fetch(
    'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson'
  )
    .then(r =>
      r.ok ? r.json() : Promise.reject(r.status)
    )
    .then(data =>
      L.geoJSON(data, {
        interactive: false,
        style: {
          color: '#f2efe7',
          weight: 0.65,
          opacity: 0.78,
          fillOpacity: 0
        }
      }).addTo(map)
    )
    .catch(() => {});

  function parseCSV(text) {
    const rows = [];
    let row = [];
    let field = '';
    let quoted = false;

    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      const n = text[i + 1];

      if (c === '"' && quoted && n === '"') {
        field += '"';
        i++;
      } else if (c === '"') {
        quoted = !quoted;
      } else if (c === ',' && !quoted) {
        row.push(field);
        field = '';
      } else if (
        (c === '\n' || c === '\r') &&
        !quoted
      ) {
        if (c === '\r' && n === '\n') {
          i++;
        }

        row.push(field);
        field = '';

        if (
          row.some(v => v.trim() !== '')
        ) {
          rows.push(row);
        }

        row = [];
      } else {
        field += c;
      }
    }

    if (field || row.length) {
      row.push(field);

      if (
        row.some(v => v.trim() !== '')
      ) {
        rows.push(row);
      }
    }

    if (!rows.length) return [];

    const headers = rows[0];

    return rows.slice(1).map(r =>
      Object.fromEntries(
        headers.map(
          (h, i) => [h, r[i] || '']
        )
      )
    );
  }

  function esc(s) {
    return String(s).replace(
      /[&<>"']/g,
      c => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }[c])
    );
  }

  function renderCameraDiagram(
    site,
    cameras
  ) {
    if (!diagramEl) return;

    const n = cameras.length;

    const width = 900;
    const height = Math.max(
      460,
      380 + Math.ceil(n / 10) * 35
    );

    const cx = width / 2;
    const cy = height / 2;

    const radius = Math.min(
      width * 0.35,
      height * 0.34
    );

    const labelRadius =
      radius + 34;

    let lines = '';
    let nodes = '';

    cameras.forEach(
      (cam, i) => {
        const angle =
          (-Math.PI / 2) +
          (2 * Math.PI * i / n);

        const x =
          cx +
          radius *
          Math.cos(angle);

        const y =
          cy +
          radius *
          Math.sin(angle);

        const lx =
          cx +
          labelRadius *
          Math.cos(angle);

        const ly =
          cy +
          labelRadius *
          Math.sin(angle);

        const anchor =
          Math.cos(angle) > 0.18
            ? 'start'
            : (
                Math.cos(angle) < -0.18
                  ? 'end'
                  : 'middle'
              );

        const dx =
          anchor === 'start'
            ? 10
            : (
                anchor === 'end'
                  ? -10
                  : 0
              );

        lines +=
          `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" />`;

        nodes +=
          `<circle cx="${x}" cy="${y}" r="8" />`;

        nodes +=
          `<text
             x="${lx + dx}"
             y="${ly}"
             text-anchor="${anchor}"
             dominant-baseline="middle"
           >${esc(cam.CameraName || cam.CameraID)}</text>`;
      }
    );

    diagramEl.innerHTML = `
      <div class="camera-diagram-heading">
        <div>
          <span class="map-kicker">Active cameras</span>
          <h3>${esc(site.Site)}</h3>
        </div>
        <p>
          ${n} camera${n === 1 ? '' : 's'} currently ON
        </p>
      </div>

      <svg
        class="camera-network-svg"
        viewBox="0 0 ${width} ${height}"
        role="img"
        aria-label="Schematic arrangement of active cameras at ${esc(site.Site)}"
      >
        <g class="camera-lines">
          ${lines}
        </g>

        <circle
          class="site-centre"
          cx="${cx}"
          cy="${cy}"
          r="30"
        />

        <text
          class="site-centre-label"
          x="${cx}"
          y="${cy}"
          text-anchor="middle"
          dominant-baseline="middle"
        >
          SITE
        </text>

        <g class="camera-nodes">
          ${nodes}
        </g>
      </svg>

      <p class="camera-diagram-note">
        Camera positions are shown schematically for clarity;
        the diagram does not represent geographic spacing or orientation.
      </p>
    `;

    diagramEl.hidden = false;

    diagramEl.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }

  function highlightTable(
    siteName
  ) {
    document
      .querySelectorAll(
        '#site-metadata-table tbody tr'
      )
      .forEach(tr => {
        tr.classList.toggle(
          'map-selected-row',
          tr.dataset.site === siteName
        );
      });
  }

  Promise.all([
    fetch(
      siteCsv,
      { cache: 'no-store' }
    ).then(r => r.text()),

    fetch(
      cameraCsv,
      { cache: 'no-store' }
    ).then(r => r.text())
  ])
    .then(
      ([siteText, cameraText]) => {
        const sites =
          parseCSV(siteText);

        const cameras =
          parseCSV(cameraText);

        const markers =
          new window.Map();

        sites.forEach(site => {
          const lat =
            Number(site.Latitude);

          const lon =
            Number(site.Longitude);

          if (
            !Number.isFinite(lat) ||
            !Number.isFinite(lon)
          ) {
            return;
          }

          const siteCameras =
            cameras.filter(
              c => c.Site === site.Site
            );

          const marker =
            L.circleMarker(
              [lat, lon],
              {
                pane: 'siteMarkers',
                radius: 7.5,
                color: '#ffffff',
                weight: 1.8,
                fillColor: '#e87924',
                fillOpacity: 0.96
              }
            ).addTo(map);

          marker.bindTooltip(
            `<strong>${esc(site.Site)}</strong><br>` +
            `${esc(site.Country)}<br>` +
            `${siteCameras.length} active cameras`,
            {
              direction: 'top',
              sticky: true
            }
          );

          marker.on(
            'click',
            () => {
              renderCameraDiagram(
                site,
                siteCameras
              );

              highlightTable(
                site.Site
              );
            }
          );

          markers.set(
            site.Site,
            marker
          );
        });

        window.PhenoChangeMap = {
          selectSite(siteName) {
            const marker =
              markers.get(
                siteName
              );

            const site =
              sites.find(
                s =>
                  s.Site === siteName
              );

            if (
              !marker ||
              !site
            ) {
              return;
            }

            const siteCameras =
              cameras.filter(
                c =>
                  c.Site ===
                  siteName
              );

            map.panTo(
              marker.getLatLng()
            );

            marker.openTooltip();

            renderCameraDiagram(
              site,
              siteCameras
            );

            highlightTable(
              siteName
            );
          }
        };
      }
    )
    .catch(err => {
      console.error(
        'Unable to load PhenoChange map data:',
        err
      );

      mapEl.innerHTML =
        '<p class="map-error">' +
        'The network map could not be loaded. ' +
        'Site metadata remain available in the table below.' +
        '</p>';
    });
});
