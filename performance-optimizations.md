# Map & List Performance Optimizations

This plan outlines the specific changes to improve the performance of rendering a vast number of locations on the map and side panel, without breaking the search capabilities.

## Proposed Changes

### 1. Map Rendering Optimizations

#### [MODIFY] [SacredMap.tsx](file:///c:/Repos/baltic-gods/src/components/SacredMap.tsx)
-   **Add Clustering:** Wrapping the `visibleLocations.map` inside Google Maps `<MarkerClustererF>` component. This dynamically groups proximal markers together based on zoom level. We will use the default cluster styles.
-   **Memoization:** Structure the `MarkerF` creation / properties so it performs minimally on selection state changes. 

### 2. Sidebar List Optimizations

#### Dependencies
- Install `@tanstack/react-virtual` for highly efficient DOM virtualization of the sidebar list.

#### [MODIFY] [page.tsx](file:///c:/Repos/baltic-gods/src/app/map/page.tsx)
-   **List Virtualization:** Add `useVirtualizer` to the `visibleLocations` mapping. Ensure the list container has a fixed or dynamic height (`overflow-y-auto`) and only the absolutely positioned visible rows are rendered to the DOM at any given time.
-   **Search Preservation:** Since the virtualizer works off the `visibleLocations` array which is pre-filtered by the search query, **search will function exactly as it currently does** and will feel much snappier since it no longer mounts 1000 items to the DOM.

#### [MODIFY] [LeyIndexCard.tsx](file:///c:/Repos/baltic-gods/src/components/LeyIndexCard.tsx)
-   **React.memo:** Wrap the `LeyIndexCard` export with `React.memo` to ensure cards aren't re-rendered unnecessarily.

---

## Verification Plan

### Automated Tests
-   **`src/__tests__/map.test.tsx`:** 
    -   Update test interactions to handle the virtualized container structure and ensure the search still correctly yields valid elements.
-   **`src/__tests__/sacred-map.test.tsx`:** 
    -   Update test to ensure the map successfully renders with the new clusterer component context.

### Manual Verification
-   Run `npm run dev` and navigate to the map page.
-   Type into the search bar and verify that UI input lag is eliminated.
-   Scroll through the side panel to visually confirm virtualization is working cleanly.
-   Zoom in and out on the map to verify cluster icons appear and break apart properly.
