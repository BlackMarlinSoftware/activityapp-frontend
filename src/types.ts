export interface Host {
  name: string;
}

export interface Category {
  name: string;
  parent_category?: Category;
}

export interface AgeRange {
  name: string;
}

export interface Amenity {
  name: string;
}

export interface Location {
  name: string;
  address: string | null;
  postcode: string | null;
  lat_long: string;
  outdoors: boolean;
  amenities: Amenity[];
}

export interface Accessibility {
  name: string;
  details: string;
}

export interface Media {
  url: string;
  caption: string | null;
}

export interface Activity {
  id: number;
  name: string;
  description: string;
  default_max_group_size: number;
  referral_url: string | null;
  referral_phone: string | null;
  referral_email: string | null;
  default_intensity: number;
  host: Host;
  category: Category;
  age_ranges: AgeRange[];
  location: Location;
  accessibility: Accessibility[];
  media: Media[];
}

export interface Data {
  activities: Activity[];
}
