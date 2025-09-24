# TODO: Remove Custom Tokens and Use UserContext

## Files Updated:
- [x] Client/src/context/UserContext.jsx - Removed custom token state, added getToken function
- [x] Client/src/components/Home Page/Curated Offers/Offers.jsx - Updated to use getToken from context
- [x] Client/src/components/Reservation/RestaurantReservationForm.jsx - Updated to use getToken from context
- [x] Client/src/components/Home Page/Distinctive/Distinctive.jsx - Updated to use getToken from context
- [x] Client/src/components/Home Page/Carousel/Carousel.jsx - Updated to use getToken from context
- [x] Client/src/pages/Facilities.jsx - Moved API function to services/facilitiesApi.js and updated to use getToken from context

## Files to Update:
- [ ] Client/src/services/offers.js - fetchCuratedOffers function
- [ ] Client/src/services/distinctive.js - Functions using token
- [ ] Client/src/services/aboutApi.js - Functions using token
- [ ] Client/src/services/galleryApi.js - Functions using token
- [ ] Client/src/components/Home Page/Carousel/Api/HeroBanner.js - Functions using token
- [ ] Client/src/components/Reservation/api/meetingReservationApi.js - Functions using token
- [ ] Client/src/components/Reservation/api/accommodationApi.js - Functions using token
- [ ] Client/src/components/Reservation/api/restaurantReservationApi.js - fetchRestaurantReservationDetails function

## Components/Pages to Update (where these API functions are called):
- Find and update all components that call these API functions to use context instead of passing token parameter

## Notes:
- Replace `const token = import.meta.env.VITE_TEMP_TOKEN;` with `const { getToken } = useContext(UserContext);` and `const token = getToken();`
- Update API function calls to not pass token parameter if the function is modified to use context internally
- Ensure all components import and use UserContext where needed
