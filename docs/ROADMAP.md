# PhenoChange website roadmap

This file records planned improvements rather than changes already completed.

## Current release

**Version 5.1**

The current site contains the principal public-facing content, the nine-site metadata catalogue, an interactive network map, active-camera information, publications, protocols, people and partner institutions.

## Near-term priorities

### 1. Improve camera expansion on the network map
Replace the separate camera diagram below the map with an in-map schematic expansion:
- selecting a site keeps the site centroid visible;
- active cameras appear as small circles around the centroid;
- thin lines connect each camera to the site centroid;
- camera labels remain readable;
- selecting another site removes the previous expansion.

This is the highest-priority map improvement.

### 2. Add camera photographs to site expansions
When suitable images have been assembled:
- associate photographs with individual camera IDs;
- allow camera nodes to reveal a representative camera view;
- optimise images for web delivery.

### 3. Data-access documentation
When approved:
- publish the PhenoChange Data Sharing Agreement;
- clarify the procedure for requesting data;
- provide any agreed network citation and acknowledgement text.

### 4. Methods publication
When the accepted Methods in Ecology and Evolution paper is published:
- add the full citation and DOI to `publications.md`;
- update `protocols.md` with a direct article link;
- revise the protocol note accordingly.

## Medium-term priorities

### Partner sites
The current map intentionally shows only the nine core PhenoChange sites. Add partner sites once the network is ready to distinguish core and partner locations clearly.

### Analysis pipelines
Add documented workflows for:
- image quality control;
- region-of-interest delineation;
- colour-index extraction;
- phenological transition estimation;
- downstream statistical analysis;
- integration with Earth Observation products.

### Site and camera imagery
Develop a curated image library for individual sites and cameras without turning the website into a general photo gallery.

### Metadata maintenance
Keep `assets/data/phenochange_site_metadata.csv` and `assets/data/phenochange_active_cameras.csv` as the authoritative data sources for the Data page and map. Recalculate site centroids when active-camera status changes.

## Longer-term possibilities

- Search/filter controls for a larger site network.
- Downloadable derived data products once data-sharing arrangements permit them.
- More detailed site pages if the amount of site-specific information grows substantially.
- Automated generation of map/site content from structured metadata.
- Additional accessibility and performance optimisation as the site grows.

## Design principle

Prefer incremental improvements to major redesigns. The current visual identity, typography, colour palette and page structure should remain stable unless a clear scientific, usability or accessibility need justifies a change.
