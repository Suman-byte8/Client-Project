/**
 * Normalize booking "label" → "slug"
 * (e.g. "Restaurant Reservation" → "restaurant")
 */
export const labelToSlug = (label) => {
    switch ((label || "").toLowerCase()) {
      case "accommodation":
        return "accommodation";
      case "restaurant reservation":
      case "restaurant":
        return "restaurant";
      case "meeting & wedding":
      case "meeting":
        return "meeting";
      default:
        return null;
    }
  };
  
  /**
   * Normalize backend "slug" → UI "label"
   * (e.g. "restaurant" → "Restaurant Reservation")
   */
  export const slugToLabel = (slug) => {
    switch ((slug || "").toLowerCase()) {
      case "accommodation":
        return "Accommodation";
      case "restaurant":
        return "Restaurant Reservation";
      case "meeting":
        return "Meeting & Wedding";
      default:
        return "";
    }
  };