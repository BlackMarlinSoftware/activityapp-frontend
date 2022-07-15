# Database design

## Main tables

### `categories`

- `id` _number_
- `name` _string_
- `level` _number_

### `activities`

- `id` _number_
- `name` _string_
- `description` _string_
- `referral_url` _string_
- `referral_phone` _string_
- `referral_email` _string_
- `booking_required` _boolean_
- `max_group_size` _number_
- `physical_intensity_min` _number_
- `physical_intensity_max` _number_
- `age_min` _number_
- `age_max` _number_
- `host_id` _foreign key_
- `location_id` _foreign key_

### `sessions` (TODO)

- `id`
- `timestamp_start`
- `timestamp_end`
- `series_id`

### `series` (TODO)

- `id`
- `name`

### `hosts`

- `name` _string_
- `logo_url` _string_

### `locations`

- `id` _number_
- `name` _string_
- `address` _string_
- `postcode` _string_
- `lat` _string_
- `long` _string_
- `outdoors` _boolean_
- `directions` _string_

### `prerequisites`

- `id` _number_
- `name` _string_
- `description` _string_
- `activity_id` _foreign key_

### `media`

- `id` _number_
- `url` _string_
- `caption` _string_

### `amenities`

- `id` _number_
- `name` _string_

### `accessibility`

- `id` _number_
- `name` _string_

## Link tables

### `categories_x_parent_categories`

- `category_id` _foreign key_
- `parent_category_id` _foreign key_

### `activities_x_categories`

- `activity_id` _foreign key_
- `category_id` _foreign key_

### `activities_x_prerequisites`

- `activity_id` _foreign key_
- `prerequisite_id` _foreign key_

### `activities_x_media`

- `activity_id` _foreign key_
- `media_id` _foreign key_

### `activities_x_media`

- `activity_id` _foreign key_
- `media_id` _foreign key_

### `activities_x_accessibility`

- `activity_id` _foreign key_
- `accessibility_id` _foreign key_
- `details` _string_

### `locations_x_amenities`

- `location_id` _foreign key_
- `amenity_id` _foreign key_

### `activities_x_sessions`

- `activity_id`
- `session_id`

## Functions

```sql
CREATE FUNCTION locations_in_radius(location_lat numeric, location_long numeric, radius integer) RETURNS SETOF locations AS $$
  SELECT *
  FROM locations
  WHERE ST_DWithin(ST_MakePoint(location_long, location_lat)::geography, ST_MakePoint(long, lat)::geography, radius)
$$ LANGUAGE SQL STABLE;
```

Joe plan for location based searching:

Start with queries to find locations within a given radius with nested activities

Global Apollo variables `latitudeQuery`, `longitudeQuery`, `zoomQuery`

These should be set once on load by the component that calls the query, based on the URL as a default.

These variables should also be what's used for the initial MapBox positioning and Apollo `useQuery` calls post-server-side-render. (Also SSR `client.query`?)

Then use the MapBox event listeners for `map.on('zoomend', handleZoomEnd)` and `map.on('moveend', handleMoveEnd)`

These should each have their own handler function, which triggers two actions: Update the global Apollo variables (lat/long or zoom) and update the URL query params for the user to copy/paste if they wish.

When the global variables are updated, a final action is taken: calculate the necessary radius in metres based on the MapBox https://docs.mapbox.com/help/glossary/zoom-level/ reference table, given the current latitude, the current zoom level, and the size of the map window in pixels.

Finally, this radius is given to the Apollo `useQuery` as one of the variables for filtering locations/activities.
