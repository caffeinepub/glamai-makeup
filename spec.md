# Specification

## Summary
**Goal:** Add a real-time search bar to the Header that filters the product grid on the Home page as the user types.

**Planned changes:**
- Add a search input field in the Header component, positioned near the hamburger menu button
- Lift search state so the Header search input controls the ProductGrid filter on the Home page
- Filter the product grid in real-time as the user types, matching partial and case-insensitive product names (Foundation, Lip Gloss, Eyeliner)
- Display a friendly "No products found" message when the search query matches no products
- Restore all product cards when the search input is cleared
- Style the search bar to match the existing dark/light mode theme and be responsive on mobile and desktop

**User-visible outcome:** Users can type in the header search bar to instantly filter the product grid, seeing only matching products or a "No products found" message if nothing matches.
