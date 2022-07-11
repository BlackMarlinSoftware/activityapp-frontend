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
