# Changelog

Major changes to the PhenoChange website are recorded here.

## Version 5.1 — August 2026

### Data and network map
- Added an interactive Leaflet map to the Data page showing the nine core PhenoChange sites.
- Site coordinates are calculated from the mean latitude and longitude of cameras with `Status = ON`.
- Added hover information for site name, country and number of active cameras.
- Added a schematic active-camera display when a site is selected.
- Added NASA Blue Marble Next Generation as the global map background and Natural Earth country boundaries.
- Added `assets/data/phenochange_active_cameras.csv` as the camera-level source used by the map.
- Updated `assets/data/phenochange_site_metadata.csv` as the authoritative site-level metadata source.
- Added elevation, mean annual temperature (MAT) and mean annual precipitation (MAP) to the site metadata table.
- MAT and MAP are derived from WorldClim v2.1 BIO1 and BIO12 (1970–2000 climatology; 2.5 arc-minute resolution).
- Elevation is derived from field camera metadata; Kilwa uses a site mean elevation of 140 m.
- Restored the three Data-page summary cards: Camera observations, Derived time series and Additional data.
- Added links from the Additional data card to SEOSAW and RedeC2.

### Content and visual updates
- Expanded use of field, landscape and team photography across Home, About and Protocols.
- Updated the homepage hero and monitoring imagery with Fazenda Água Limpa photographs.
- Added the Ongava dry/wet seasonal comparison montage.
- Standardised People-page portrait filenames to `.jpg`.
- Added and updated partner institutions and logos.
- Added the current PhenoChange publications.
- Added the field-camera protocol PDF and notice of the accepted Methods in Ecology and Evolution paper.
- Updated wording across the site to describe PhenoChange as a network for monitoring the phenology of forests and savannas.

### Architecture and maintenance
- Moved People, Partner Institutions and Publications content into page-level Markdown rather than separate YAML data files.
- Added `_layouts/page.html`.
- Added `assets/js/site_table.js` for the sortable metadata table.
- Added `assets/js/network_map.js` for the interactive network map.
- Updated `_config.yml`, navigation and footer content.
- Removed obsolete `_data/people.yml`, `_data/institutions.yml` and `_data/publications.yml`.
- Updated documentation to reflect the Version 5.1 structure.

### Known limitation
- The selected site's active-camera schematic currently appears below the map. A future version may instead expand the camera nodes directly around the selected site marker on the map.

## Version 5.0 — August 2026

- Reworked the website into a simpler Markdown-centred Jekyll structure.
- Revised Home, About, People, Partner Institutions, Publications, Data, Protocols and Contact pages.
- Added standardised people cards and institution cards.
- Added downloadable site metadata CSV.
- Added sortable site metadata table.
- Added downloadable field-camera protocol.
- Updated site-wide terminology, navigation, footer and funding information.
- Added project documentation for future maintenance.

## Earlier versions

Versions 1–4 established the initial visual identity, page structure, institutional information and core PhenoChange website content. Version 4.0 provided the three-card Data-page design later restored in Version 5.1.
