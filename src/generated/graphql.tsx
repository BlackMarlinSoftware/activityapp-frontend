import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: number;
  uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "activities" */
export type Activities = {
  __typename?: 'activities';
  /** An array relationship */
  activities_x_categories: Array<Activities_X_Categories>;
  /** An aggregate relationship */
  activities_x_categories_aggregate: Activities_X_Categories_Aggregate;
  /** An array relationship */
  activities_x_media: Array<Activities_X_Media>;
  /** An aggregate relationship */
  activities_x_media_aggregate: Activities_X_Media_Aggregate;
  /** An object relationship */
  activity_type: Activity_Types;
  age_max?: Maybe<Scalars['Int']>;
  age_min?: Maybe<Scalars['Int']>;
  booking_required: Scalars['Boolean'];
  description: Scalars['String'];
  /** An object relationship */
  experienceLevelByExperienceLevel?: Maybe<Experience_Levels>;
  experience_level?: Maybe<Experience_Levels_Enum>;
  group_size_max?: Maybe<Scalars['Int']>;
  group_size_min?: Maybe<Scalars['Int']>;
  /** An object relationship */
  host: Hosts;
  host_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  intensityLevelByIntensityLevel?: Maybe<Intensity_Levels>;
  intensity_level?: Maybe<Intensity_Levels_Enum>;
  /** An object relationship */
  location: Locations;
  location_id: Scalars['uuid'];
  name: Scalars['String'];
  referral_email?: Maybe<Scalars['String']>;
  referral_phone?: Maybe<Scalars['String']>;
  referral_url?: Maybe<Scalars['String']>;
  type: Activity_Types_Enum;
};


/** columns and relationships of "activities" */
export type ActivitiesActivities_X_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Activities_X_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_X_Categories_Order_By>>;
  where?: InputMaybe<Activities_X_Categories_Bool_Exp>;
};


/** columns and relationships of "activities" */
export type ActivitiesActivities_X_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_X_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_X_Categories_Order_By>>;
  where?: InputMaybe<Activities_X_Categories_Bool_Exp>;
};


/** columns and relationships of "activities" */
export type ActivitiesActivities_X_MediaArgs = {
  distinct_on?: InputMaybe<Array<Activities_X_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_X_Media_Order_By>>;
  where?: InputMaybe<Activities_X_Media_Bool_Exp>;
};


/** columns and relationships of "activities" */
export type ActivitiesActivities_X_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_X_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_X_Media_Order_By>>;
  where?: InputMaybe<Activities_X_Media_Bool_Exp>;
};

/** aggregated selection of "activities" */
export type Activities_Aggregate = {
  __typename?: 'activities_aggregate';
  aggregate?: Maybe<Activities_Aggregate_Fields>;
  nodes: Array<Activities>;
};

/** aggregate fields of "activities" */
export type Activities_Aggregate_Fields = {
  __typename?: 'activities_aggregate_fields';
  avg?: Maybe<Activities_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Activities_Max_Fields>;
  min?: Maybe<Activities_Min_Fields>;
  stddev?: Maybe<Activities_Stddev_Fields>;
  stddev_pop?: Maybe<Activities_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Activities_Stddev_Samp_Fields>;
  sum?: Maybe<Activities_Sum_Fields>;
  var_pop?: Maybe<Activities_Var_Pop_Fields>;
  var_samp?: Maybe<Activities_Var_Samp_Fields>;
  variance?: Maybe<Activities_Variance_Fields>;
};


/** aggregate fields of "activities" */
export type Activities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Activities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "activities" */
export type Activities_Aggregate_Order_By = {
  avg?: InputMaybe<Activities_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Activities_Max_Order_By>;
  min?: InputMaybe<Activities_Min_Order_By>;
  stddev?: InputMaybe<Activities_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Activities_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Activities_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Activities_Sum_Order_By>;
  var_pop?: InputMaybe<Activities_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Activities_Var_Samp_Order_By>;
  variance?: InputMaybe<Activities_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "activities" */
export type Activities_Arr_Rel_Insert_Input = {
  data: Array<Activities_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Activities_On_Conflict>;
};

/** aggregate avg on columns */
export type Activities_Avg_Fields = {
  __typename?: 'activities_avg_fields';
  age_max?: Maybe<Scalars['Float']>;
  age_min?: Maybe<Scalars['Float']>;
  group_size_max?: Maybe<Scalars['Float']>;
  group_size_min?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "activities" */
export type Activities_Avg_Order_By = {
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "activities". All fields are combined with a logical 'AND'. */
export type Activities_Bool_Exp = {
  _and?: InputMaybe<Array<Activities_Bool_Exp>>;
  _not?: InputMaybe<Activities_Bool_Exp>;
  _or?: InputMaybe<Array<Activities_Bool_Exp>>;
  activities_x_categories?: InputMaybe<Activities_X_Categories_Bool_Exp>;
  activities_x_media?: InputMaybe<Activities_X_Media_Bool_Exp>;
  activity_type?: InputMaybe<Activity_Types_Bool_Exp>;
  age_max?: InputMaybe<Int_Comparison_Exp>;
  age_min?: InputMaybe<Int_Comparison_Exp>;
  booking_required?: InputMaybe<Boolean_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  experienceLevelByExperienceLevel?: InputMaybe<Experience_Levels_Bool_Exp>;
  experience_level?: InputMaybe<Experience_Levels_Enum_Comparison_Exp>;
  group_size_max?: InputMaybe<Int_Comparison_Exp>;
  group_size_min?: InputMaybe<Int_Comparison_Exp>;
  host?: InputMaybe<Hosts_Bool_Exp>;
  host_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  intensityLevelByIntensityLevel?: InputMaybe<Intensity_Levels_Bool_Exp>;
  intensity_level?: InputMaybe<Intensity_Levels_Enum_Comparison_Exp>;
  location?: InputMaybe<Locations_Bool_Exp>;
  location_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  referral_email?: InputMaybe<String_Comparison_Exp>;
  referral_phone?: InputMaybe<String_Comparison_Exp>;
  referral_url?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Activity_Types_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "activities" */
export enum Activities_Constraint {
  /** unique or primary key constraint on columns "id" */
  ActivitiesPkey = 'activities_pkey'
}

/** input type for incrementing numeric columns in table "activities" */
export type Activities_Inc_Input = {
  age_max?: InputMaybe<Scalars['Int']>;
  age_min?: InputMaybe<Scalars['Int']>;
  group_size_max?: InputMaybe<Scalars['Int']>;
  group_size_min?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "activities" */
export type Activities_Insert_Input = {
  activities_x_categories?: InputMaybe<Activities_X_Categories_Arr_Rel_Insert_Input>;
  activities_x_media?: InputMaybe<Activities_X_Media_Arr_Rel_Insert_Input>;
  activity_type?: InputMaybe<Activity_Types_Obj_Rel_Insert_Input>;
  age_max?: InputMaybe<Scalars['Int']>;
  age_min?: InputMaybe<Scalars['Int']>;
  booking_required?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  experienceLevelByExperienceLevel?: InputMaybe<Experience_Levels_Obj_Rel_Insert_Input>;
  experience_level?: InputMaybe<Experience_Levels_Enum>;
  group_size_max?: InputMaybe<Scalars['Int']>;
  group_size_min?: InputMaybe<Scalars['Int']>;
  host?: InputMaybe<Hosts_Obj_Rel_Insert_Input>;
  host_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  intensityLevelByIntensityLevel?: InputMaybe<Intensity_Levels_Obj_Rel_Insert_Input>;
  intensity_level?: InputMaybe<Intensity_Levels_Enum>;
  location?: InputMaybe<Locations_Obj_Rel_Insert_Input>;
  location_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  referral_email?: InputMaybe<Scalars['String']>;
  referral_phone?: InputMaybe<Scalars['String']>;
  referral_url?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Activity_Types_Enum>;
};

/** aggregate max on columns */
export type Activities_Max_Fields = {
  __typename?: 'activities_max_fields';
  age_max?: Maybe<Scalars['Int']>;
  age_min?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  group_size_max?: Maybe<Scalars['Int']>;
  group_size_min?: Maybe<Scalars['Int']>;
  host_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  location_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  referral_email?: Maybe<Scalars['String']>;
  referral_phone?: Maybe<Scalars['String']>;
  referral_url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "activities" */
export type Activities_Max_Order_By = {
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
  host_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  referral_email?: InputMaybe<Order_By>;
  referral_phone?: InputMaybe<Order_By>;
  referral_url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Activities_Min_Fields = {
  __typename?: 'activities_min_fields';
  age_max?: Maybe<Scalars['Int']>;
  age_min?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  group_size_max?: Maybe<Scalars['Int']>;
  group_size_min?: Maybe<Scalars['Int']>;
  host_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  location_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  referral_email?: Maybe<Scalars['String']>;
  referral_phone?: Maybe<Scalars['String']>;
  referral_url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "activities" */
export type Activities_Min_Order_By = {
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
  host_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  referral_email?: InputMaybe<Order_By>;
  referral_phone?: InputMaybe<Order_By>;
  referral_url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "activities" */
export type Activities_Mutation_Response = {
  __typename?: 'activities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Activities>;
};

/** input type for inserting object relation for remote table "activities" */
export type Activities_Obj_Rel_Insert_Input = {
  data: Activities_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Activities_On_Conflict>;
};

/** on_conflict condition type for table "activities" */
export type Activities_On_Conflict = {
  constraint: Activities_Constraint;
  update_columns?: Array<Activities_Update_Column>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

/** Ordering options when selecting data from "activities". */
export type Activities_Order_By = {
  activities_x_categories_aggregate?: InputMaybe<Activities_X_Categories_Aggregate_Order_By>;
  activities_x_media_aggregate?: InputMaybe<Activities_X_Media_Aggregate_Order_By>;
  activity_type?: InputMaybe<Activity_Types_Order_By>;
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  booking_required?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  experienceLevelByExperienceLevel?: InputMaybe<Experience_Levels_Order_By>;
  experience_level?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
  host?: InputMaybe<Hosts_Order_By>;
  host_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  intensityLevelByIntensityLevel?: InputMaybe<Intensity_Levels_Order_By>;
  intensity_level?: InputMaybe<Order_By>;
  location?: InputMaybe<Locations_Order_By>;
  location_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  referral_email?: InputMaybe<Order_By>;
  referral_phone?: InputMaybe<Order_By>;
  referral_url?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: activities */
export type Activities_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "activities" */
export enum Activities_Select_Column {
  /** column name */
  AgeMax = 'age_max',
  /** column name */
  AgeMin = 'age_min',
  /** column name */
  BookingRequired = 'booking_required',
  /** column name */
  Description = 'description',
  /** column name */
  ExperienceLevel = 'experience_level',
  /** column name */
  GroupSizeMax = 'group_size_max',
  /** column name */
  GroupSizeMin = 'group_size_min',
  /** column name */
  HostId = 'host_id',
  /** column name */
  Id = 'id',
  /** column name */
  IntensityLevel = 'intensity_level',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  Name = 'name',
  /** column name */
  ReferralEmail = 'referral_email',
  /** column name */
  ReferralPhone = 'referral_phone',
  /** column name */
  ReferralUrl = 'referral_url',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "activities" */
export type Activities_Set_Input = {
  age_max?: InputMaybe<Scalars['Int']>;
  age_min?: InputMaybe<Scalars['Int']>;
  booking_required?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  experience_level?: InputMaybe<Experience_Levels_Enum>;
  group_size_max?: InputMaybe<Scalars['Int']>;
  group_size_min?: InputMaybe<Scalars['Int']>;
  host_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  intensity_level?: InputMaybe<Intensity_Levels_Enum>;
  location_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  referral_email?: InputMaybe<Scalars['String']>;
  referral_phone?: InputMaybe<Scalars['String']>;
  referral_url?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Activity_Types_Enum>;
};

/** aggregate stddev on columns */
export type Activities_Stddev_Fields = {
  __typename?: 'activities_stddev_fields';
  age_max?: Maybe<Scalars['Float']>;
  age_min?: Maybe<Scalars['Float']>;
  group_size_max?: Maybe<Scalars['Float']>;
  group_size_min?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "activities" */
export type Activities_Stddev_Order_By = {
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Activities_Stddev_Pop_Fields = {
  __typename?: 'activities_stddev_pop_fields';
  age_max?: Maybe<Scalars['Float']>;
  age_min?: Maybe<Scalars['Float']>;
  group_size_max?: Maybe<Scalars['Float']>;
  group_size_min?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "activities" */
export type Activities_Stddev_Pop_Order_By = {
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Activities_Stddev_Samp_Fields = {
  __typename?: 'activities_stddev_samp_fields';
  age_max?: Maybe<Scalars['Float']>;
  age_min?: Maybe<Scalars['Float']>;
  group_size_max?: Maybe<Scalars['Float']>;
  group_size_min?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "activities" */
export type Activities_Stddev_Samp_Order_By = {
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "activities" */
export type Activities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Activities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Activities_Stream_Cursor_Value_Input = {
  age_max?: InputMaybe<Scalars['Int']>;
  age_min?: InputMaybe<Scalars['Int']>;
  booking_required?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  experience_level?: InputMaybe<Experience_Levels_Enum>;
  group_size_max?: InputMaybe<Scalars['Int']>;
  group_size_min?: InputMaybe<Scalars['Int']>;
  host_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  intensity_level?: InputMaybe<Intensity_Levels_Enum>;
  location_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  referral_email?: InputMaybe<Scalars['String']>;
  referral_phone?: InputMaybe<Scalars['String']>;
  referral_url?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Activity_Types_Enum>;
};

/** aggregate sum on columns */
export type Activities_Sum_Fields = {
  __typename?: 'activities_sum_fields';
  age_max?: Maybe<Scalars['Int']>;
  age_min?: Maybe<Scalars['Int']>;
  group_size_max?: Maybe<Scalars['Int']>;
  group_size_min?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "activities" */
export type Activities_Sum_Order_By = {
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
};

/** update columns of table "activities" */
export enum Activities_Update_Column {
  /** column name */
  AgeMax = 'age_max',
  /** column name */
  AgeMin = 'age_min',
  /** column name */
  BookingRequired = 'booking_required',
  /** column name */
  Description = 'description',
  /** column name */
  ExperienceLevel = 'experience_level',
  /** column name */
  GroupSizeMax = 'group_size_max',
  /** column name */
  GroupSizeMin = 'group_size_min',
  /** column name */
  HostId = 'host_id',
  /** column name */
  Id = 'id',
  /** column name */
  IntensityLevel = 'intensity_level',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  Name = 'name',
  /** column name */
  ReferralEmail = 'referral_email',
  /** column name */
  ReferralPhone = 'referral_phone',
  /** column name */
  ReferralUrl = 'referral_url',
  /** column name */
  Type = 'type'
}

export type Activities_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Activities_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Activities_Set_Input>;
  where: Activities_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Activities_Var_Pop_Fields = {
  __typename?: 'activities_var_pop_fields';
  age_max?: Maybe<Scalars['Float']>;
  age_min?: Maybe<Scalars['Float']>;
  group_size_max?: Maybe<Scalars['Float']>;
  group_size_min?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "activities" */
export type Activities_Var_Pop_Order_By = {
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Activities_Var_Samp_Fields = {
  __typename?: 'activities_var_samp_fields';
  age_max?: Maybe<Scalars['Float']>;
  age_min?: Maybe<Scalars['Float']>;
  group_size_max?: Maybe<Scalars['Float']>;
  group_size_min?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "activities" */
export type Activities_Var_Samp_Order_By = {
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Activities_Variance_Fields = {
  __typename?: 'activities_variance_fields';
  age_max?: Maybe<Scalars['Float']>;
  age_min?: Maybe<Scalars['Float']>;
  group_size_max?: Maybe<Scalars['Float']>;
  group_size_min?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "activities" */
export type Activities_Variance_Order_By = {
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
};

/** columns and relationships of "activities_x_categories" */
export type Activities_X_Categories = {
  __typename?: 'activities_x_categories';
  /** An object relationship */
  activity: Activities;
  activity_id: Scalars['uuid'];
  /** An object relationship */
  category: Categories;
  category_id: Scalars['uuid'];
};

/** aggregated selection of "activities_x_categories" */
export type Activities_X_Categories_Aggregate = {
  __typename?: 'activities_x_categories_aggregate';
  aggregate?: Maybe<Activities_X_Categories_Aggregate_Fields>;
  nodes: Array<Activities_X_Categories>;
};

/** aggregate fields of "activities_x_categories" */
export type Activities_X_Categories_Aggregate_Fields = {
  __typename?: 'activities_x_categories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Activities_X_Categories_Max_Fields>;
  min?: Maybe<Activities_X_Categories_Min_Fields>;
};


/** aggregate fields of "activities_x_categories" */
export type Activities_X_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Activities_X_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "activities_x_categories" */
export type Activities_X_Categories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Activities_X_Categories_Max_Order_By>;
  min?: InputMaybe<Activities_X_Categories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "activities_x_categories" */
export type Activities_X_Categories_Arr_Rel_Insert_Input = {
  data: Array<Activities_X_Categories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Activities_X_Categories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "activities_x_categories". All fields are combined with a logical 'AND'. */
export type Activities_X_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Activities_X_Categories_Bool_Exp>>;
  _not?: InputMaybe<Activities_X_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Activities_X_Categories_Bool_Exp>>;
  activity?: InputMaybe<Activities_Bool_Exp>;
  activity_id?: InputMaybe<Uuid_Comparison_Exp>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "activities_x_categories" */
export enum Activities_X_Categories_Constraint {
  /** unique or primary key constraint on columns "activity_id", "category_id" */
  ActivitiesXCategoriesPkey = 'activities_x_categories_pkey'
}

/** input type for inserting data into table "activities_x_categories" */
export type Activities_X_Categories_Insert_Input = {
  activity?: InputMaybe<Activities_Obj_Rel_Insert_Input>;
  activity_id?: InputMaybe<Scalars['uuid']>;
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Activities_X_Categories_Max_Fields = {
  __typename?: 'activities_x_categories_max_fields';
  activity_id?: Maybe<Scalars['uuid']>;
  category_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "activities_x_categories" */
export type Activities_X_Categories_Max_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Activities_X_Categories_Min_Fields = {
  __typename?: 'activities_x_categories_min_fields';
  activity_id?: Maybe<Scalars['uuid']>;
  category_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "activities_x_categories" */
export type Activities_X_Categories_Min_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "activities_x_categories" */
export type Activities_X_Categories_Mutation_Response = {
  __typename?: 'activities_x_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Activities_X_Categories>;
};

/** on_conflict condition type for table "activities_x_categories" */
export type Activities_X_Categories_On_Conflict = {
  constraint: Activities_X_Categories_Constraint;
  update_columns?: Array<Activities_X_Categories_Update_Column>;
  where?: InputMaybe<Activities_X_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "activities_x_categories". */
export type Activities_X_Categories_Order_By = {
  activity?: InputMaybe<Activities_Order_By>;
  activity_id?: InputMaybe<Order_By>;
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: activities_x_categories */
export type Activities_X_Categories_Pk_Columns_Input = {
  activity_id: Scalars['uuid'];
  category_id: Scalars['uuid'];
};

/** select columns of table "activities_x_categories" */
export enum Activities_X_Categories_Select_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  CategoryId = 'category_id'
}

/** input type for updating data in table "activities_x_categories" */
export type Activities_X_Categories_Set_Input = {
  activity_id?: InputMaybe<Scalars['uuid']>;
  category_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "activities_x_categories" */
export type Activities_X_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Activities_X_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Activities_X_Categories_Stream_Cursor_Value_Input = {
  activity_id?: InputMaybe<Scalars['uuid']>;
  category_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "activities_x_categories" */
export enum Activities_X_Categories_Update_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  CategoryId = 'category_id'
}

export type Activities_X_Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Activities_X_Categories_Set_Input>;
  where: Activities_X_Categories_Bool_Exp;
};

/** columns and relationships of "activities_x_media" */
export type Activities_X_Media = {
  __typename?: 'activities_x_media';
  /** An object relationship */
  activity: Activities;
  activity_id: Scalars['uuid'];
  /** An object relationship */
  media: Media;
  media_id: Scalars['uuid'];
};

/** aggregated selection of "activities_x_media" */
export type Activities_X_Media_Aggregate = {
  __typename?: 'activities_x_media_aggregate';
  aggregate?: Maybe<Activities_X_Media_Aggregate_Fields>;
  nodes: Array<Activities_X_Media>;
};

/** aggregate fields of "activities_x_media" */
export type Activities_X_Media_Aggregate_Fields = {
  __typename?: 'activities_x_media_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Activities_X_Media_Max_Fields>;
  min?: Maybe<Activities_X_Media_Min_Fields>;
};


/** aggregate fields of "activities_x_media" */
export type Activities_X_Media_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Activities_X_Media_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "activities_x_media" */
export type Activities_X_Media_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Activities_X_Media_Max_Order_By>;
  min?: InputMaybe<Activities_X_Media_Min_Order_By>;
};

/** input type for inserting array relation for remote table "activities_x_media" */
export type Activities_X_Media_Arr_Rel_Insert_Input = {
  data: Array<Activities_X_Media_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Activities_X_Media_On_Conflict>;
};

/** Boolean expression to filter rows from the table "activities_x_media". All fields are combined with a logical 'AND'. */
export type Activities_X_Media_Bool_Exp = {
  _and?: InputMaybe<Array<Activities_X_Media_Bool_Exp>>;
  _not?: InputMaybe<Activities_X_Media_Bool_Exp>;
  _or?: InputMaybe<Array<Activities_X_Media_Bool_Exp>>;
  activity?: InputMaybe<Activities_Bool_Exp>;
  activity_id?: InputMaybe<Uuid_Comparison_Exp>;
  media?: InputMaybe<Media_Bool_Exp>;
  media_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "activities_x_media" */
export enum Activities_X_Media_Constraint {
  /** unique or primary key constraint on columns "activity_id", "media_id" */
  ActivitiesXMediaPkey = 'activities_x_media_pkey'
}

/** input type for inserting data into table "activities_x_media" */
export type Activities_X_Media_Insert_Input = {
  activity?: InputMaybe<Activities_Obj_Rel_Insert_Input>;
  activity_id?: InputMaybe<Scalars['uuid']>;
  media?: InputMaybe<Media_Obj_Rel_Insert_Input>;
  media_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Activities_X_Media_Max_Fields = {
  __typename?: 'activities_x_media_max_fields';
  activity_id?: Maybe<Scalars['uuid']>;
  media_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "activities_x_media" */
export type Activities_X_Media_Max_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  media_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Activities_X_Media_Min_Fields = {
  __typename?: 'activities_x_media_min_fields';
  activity_id?: Maybe<Scalars['uuid']>;
  media_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "activities_x_media" */
export type Activities_X_Media_Min_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  media_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "activities_x_media" */
export type Activities_X_Media_Mutation_Response = {
  __typename?: 'activities_x_media_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Activities_X_Media>;
};

/** on_conflict condition type for table "activities_x_media" */
export type Activities_X_Media_On_Conflict = {
  constraint: Activities_X_Media_Constraint;
  update_columns?: Array<Activities_X_Media_Update_Column>;
  where?: InputMaybe<Activities_X_Media_Bool_Exp>;
};

/** Ordering options when selecting data from "activities_x_media". */
export type Activities_X_Media_Order_By = {
  activity?: InputMaybe<Activities_Order_By>;
  activity_id?: InputMaybe<Order_By>;
  media?: InputMaybe<Media_Order_By>;
  media_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: activities_x_media */
export type Activities_X_Media_Pk_Columns_Input = {
  activity_id: Scalars['uuid'];
  media_id: Scalars['uuid'];
};

/** select columns of table "activities_x_media" */
export enum Activities_X_Media_Select_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  MediaId = 'media_id'
}

/** input type for updating data in table "activities_x_media" */
export type Activities_X_Media_Set_Input = {
  activity_id?: InputMaybe<Scalars['uuid']>;
  media_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "activities_x_media" */
export type Activities_X_Media_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Activities_X_Media_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Activities_X_Media_Stream_Cursor_Value_Input = {
  activity_id?: InputMaybe<Scalars['uuid']>;
  media_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "activities_x_media" */
export enum Activities_X_Media_Update_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  MediaId = 'media_id'
}

export type Activities_X_Media_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Activities_X_Media_Set_Input>;
  where: Activities_X_Media_Bool_Exp;
};

/** columns and relationships of "activity_types" */
export type Activity_Types = {
  __typename?: 'activity_types';
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregate relationship */
  activities_aggregate: Activities_Aggregate;
  activity_type: Scalars['String'];
};


/** columns and relationships of "activity_types" */
export type Activity_TypesActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};


/** columns and relationships of "activity_types" */
export type Activity_TypesActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

/** aggregated selection of "activity_types" */
export type Activity_Types_Aggregate = {
  __typename?: 'activity_types_aggregate';
  aggregate?: Maybe<Activity_Types_Aggregate_Fields>;
  nodes: Array<Activity_Types>;
};

/** aggregate fields of "activity_types" */
export type Activity_Types_Aggregate_Fields = {
  __typename?: 'activity_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Activity_Types_Max_Fields>;
  min?: Maybe<Activity_Types_Min_Fields>;
};


/** aggregate fields of "activity_types" */
export type Activity_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Activity_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "activity_types". All fields are combined with a logical 'AND'. */
export type Activity_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Activity_Types_Bool_Exp>>;
  _not?: InputMaybe<Activity_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Activity_Types_Bool_Exp>>;
  activities?: InputMaybe<Activities_Bool_Exp>;
  activity_type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "activity_types" */
export enum Activity_Types_Constraint {
  /** unique or primary key constraint on columns "activity_type" */
  ActivityTypesPkey = 'activity_types_pkey'
}

export enum Activity_Types_Enum {
  Class = 'CLASS',
  Other = 'OTHER',
  PrivateClass = 'PRIVATE_CLASS'
}

/** Boolean expression to compare columns of type "activity_types_enum". All fields are combined with logical 'AND'. */
export type Activity_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Activity_Types_Enum>;
  _in?: InputMaybe<Array<Activity_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Activity_Types_Enum>;
  _nin?: InputMaybe<Array<Activity_Types_Enum>>;
};

/** input type for inserting data into table "activity_types" */
export type Activity_Types_Insert_Input = {
  activities?: InputMaybe<Activities_Arr_Rel_Insert_Input>;
  activity_type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Activity_Types_Max_Fields = {
  __typename?: 'activity_types_max_fields';
  activity_type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Activity_Types_Min_Fields = {
  __typename?: 'activity_types_min_fields';
  activity_type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "activity_types" */
export type Activity_Types_Mutation_Response = {
  __typename?: 'activity_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Activity_Types>;
};

/** input type for inserting object relation for remote table "activity_types" */
export type Activity_Types_Obj_Rel_Insert_Input = {
  data: Activity_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Activity_Types_On_Conflict>;
};

/** on_conflict condition type for table "activity_types" */
export type Activity_Types_On_Conflict = {
  constraint: Activity_Types_Constraint;
  update_columns?: Array<Activity_Types_Update_Column>;
  where?: InputMaybe<Activity_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "activity_types". */
export type Activity_Types_Order_By = {
  activities_aggregate?: InputMaybe<Activities_Aggregate_Order_By>;
  activity_type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: activity_types */
export type Activity_Types_Pk_Columns_Input = {
  activity_type: Scalars['String'];
};

/** select columns of table "activity_types" */
export enum Activity_Types_Select_Column {
  /** column name */
  ActivityType = 'activity_type'
}

/** input type for updating data in table "activity_types" */
export type Activity_Types_Set_Input = {
  activity_type?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "activity_types" */
export type Activity_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Activity_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Activity_Types_Stream_Cursor_Value_Input = {
  activity_type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "activity_types" */
export enum Activity_Types_Update_Column {
  /** column name */
  ActivityType = 'activity_type'
}

export type Activity_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Activity_Types_Set_Input>;
  where: Activity_Types_Bool_Exp;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  /** An array relationship */
  activities_x_categories: Array<Activities_X_Categories>;
  /** An aggregate relationship */
  activities_x_categories_aggregate: Activities_X_Categories_Aggregate;
  /** An array relationship */
  categoriesXParentCategoriesByParentCategoryId: Array<Categories_X_Parent_Categories>;
  /** An aggregate relationship */
  categoriesXParentCategoriesByParentCategoryId_aggregate: Categories_X_Parent_Categories_Aggregate;
  /** An array relationship */
  categories_x_parent_categories: Array<Categories_X_Parent_Categories>;
  /** An aggregate relationship */
  categories_x_parent_categories_aggregate: Categories_X_Parent_Categories_Aggregate;
  id: Scalars['uuid'];
  level: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "categories" */
export type CategoriesActivities_X_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Activities_X_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_X_Categories_Order_By>>;
  where?: InputMaybe<Activities_X_Categories_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesActivities_X_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_X_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_X_Categories_Order_By>>;
  where?: InputMaybe<Activities_X_Categories_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesCategoriesXParentCategoriesByParentCategoryIdArgs = {
  distinct_on?: InputMaybe<Array<Categories_X_Parent_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_X_Parent_Categories_Order_By>>;
  where?: InputMaybe<Categories_X_Parent_Categories_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesCategoriesXParentCategoriesByParentCategoryId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_X_Parent_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_X_Parent_Categories_Order_By>>;
  where?: InputMaybe<Categories_X_Parent_Categories_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesCategories_X_Parent_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_X_Parent_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_X_Parent_Categories_Order_By>>;
  where?: InputMaybe<Categories_X_Parent_Categories_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesCategories_X_Parent_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_X_Parent_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_X_Parent_Categories_Order_By>>;
  where?: InputMaybe<Categories_X_Parent_Categories_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  avg?: Maybe<Categories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
  stddev?: Maybe<Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Categories_Sum_Fields>;
  var_pop?: Maybe<Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Categories_Var_Samp_Fields>;
  variance?: Maybe<Categories_Variance_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields';
  level?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  activities_x_categories?: InputMaybe<Activities_X_Categories_Bool_Exp>;
  categoriesXParentCategoriesByParentCategoryId?: InputMaybe<Categories_X_Parent_Categories_Bool_Exp>;
  categories_x_parent_categories?: InputMaybe<Categories_X_Parent_Categories_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  level?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "name" */
  CategoriesNameKey = 'categories_name_key',
  /** unique or primary key constraint on columns "id" */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  level?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  activities_x_categories?: InputMaybe<Activities_X_Categories_Arr_Rel_Insert_Input>;
  categoriesXParentCategoriesByParentCategoryId?: InputMaybe<Categories_X_Parent_Categories_Arr_Rel_Insert_Input>;
  categories_x_parent_categories?: InputMaybe<Categories_X_Parent_Categories_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  level?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  id?: Maybe<Scalars['uuid']>;
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  id?: Maybe<Scalars['uuid']>;
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  activities_x_categories_aggregate?: InputMaybe<Activities_X_Categories_Aggregate_Order_By>;
  categoriesXParentCategoriesByParentCategoryId_aggregate?: InputMaybe<Categories_X_Parent_Categories_Aggregate_Order_By>;
  categories_x_parent_categories_aggregate?: InputMaybe<Categories_X_Parent_Categories_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  level?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields';
  level?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields';
  level?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields';
  level?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  level?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields';
  level?: Maybe<Scalars['Int']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  Name = 'name'
}

export type Categories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Categories_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields';
  level?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields';
  level?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields';
  level?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "categories_x_parent_categories" */
export type Categories_X_Parent_Categories = {
  __typename?: 'categories_x_parent_categories';
  /** An object relationship */
  category: Categories;
  /** An object relationship */
  categoryByParentCategoryId: Categories;
  category_id: Scalars['uuid'];
  parent_category_id: Scalars['uuid'];
};

/** aggregated selection of "categories_x_parent_categories" */
export type Categories_X_Parent_Categories_Aggregate = {
  __typename?: 'categories_x_parent_categories_aggregate';
  aggregate?: Maybe<Categories_X_Parent_Categories_Aggregate_Fields>;
  nodes: Array<Categories_X_Parent_Categories>;
};

/** aggregate fields of "categories_x_parent_categories" */
export type Categories_X_Parent_Categories_Aggregate_Fields = {
  __typename?: 'categories_x_parent_categories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Categories_X_Parent_Categories_Max_Fields>;
  min?: Maybe<Categories_X_Parent_Categories_Min_Fields>;
};


/** aggregate fields of "categories_x_parent_categories" */
export type Categories_X_Parent_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_X_Parent_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "categories_x_parent_categories" */
export type Categories_X_Parent_Categories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Categories_X_Parent_Categories_Max_Order_By>;
  min?: InputMaybe<Categories_X_Parent_Categories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "categories_x_parent_categories" */
export type Categories_X_Parent_Categories_Arr_Rel_Insert_Input = {
  data: Array<Categories_X_Parent_Categories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_X_Parent_Categories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "categories_x_parent_categories". All fields are combined with a logical 'AND'. */
export type Categories_X_Parent_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_X_Parent_Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_X_Parent_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_X_Parent_Categories_Bool_Exp>>;
  category?: InputMaybe<Categories_Bool_Exp>;
  categoryByParentCategoryId?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Uuid_Comparison_Exp>;
  parent_category_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories_x_parent_categories" */
export enum Categories_X_Parent_Categories_Constraint {
  /** unique or primary key constraint on columns "category_id", "parent_category_id" */
  CategoriesXParentCategoriesPkey = 'categories_x_parent_categories_pkey'
}

/** input type for inserting data into table "categories_x_parent_categories" */
export type Categories_X_Parent_Categories_Insert_Input = {
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  categoryByParentCategoryId?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['uuid']>;
  parent_category_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Categories_X_Parent_Categories_Max_Fields = {
  __typename?: 'categories_x_parent_categories_max_fields';
  category_id?: Maybe<Scalars['uuid']>;
  parent_category_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "categories_x_parent_categories" */
export type Categories_X_Parent_Categories_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  parent_category_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Categories_X_Parent_Categories_Min_Fields = {
  __typename?: 'categories_x_parent_categories_min_fields';
  category_id?: Maybe<Scalars['uuid']>;
  parent_category_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "categories_x_parent_categories" */
export type Categories_X_Parent_Categories_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  parent_category_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "categories_x_parent_categories" */
export type Categories_X_Parent_Categories_Mutation_Response = {
  __typename?: 'categories_x_parent_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories_X_Parent_Categories>;
};

/** on_conflict condition type for table "categories_x_parent_categories" */
export type Categories_X_Parent_Categories_On_Conflict = {
  constraint: Categories_X_Parent_Categories_Constraint;
  update_columns?: Array<Categories_X_Parent_Categories_Update_Column>;
  where?: InputMaybe<Categories_X_Parent_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories_x_parent_categories". */
export type Categories_X_Parent_Categories_Order_By = {
  category?: InputMaybe<Categories_Order_By>;
  categoryByParentCategoryId?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  parent_category_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: categories_x_parent_categories */
export type Categories_X_Parent_Categories_Pk_Columns_Input = {
  category_id: Scalars['uuid'];
  parent_category_id: Scalars['uuid'];
};

/** select columns of table "categories_x_parent_categories" */
export enum Categories_X_Parent_Categories_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  ParentCategoryId = 'parent_category_id'
}

/** input type for updating data in table "categories_x_parent_categories" */
export type Categories_X_Parent_Categories_Set_Input = {
  category_id?: InputMaybe<Scalars['uuid']>;
  parent_category_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "categories_x_parent_categories" */
export type Categories_X_Parent_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_X_Parent_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_X_Parent_Categories_Stream_Cursor_Value_Input = {
  category_id?: InputMaybe<Scalars['uuid']>;
  parent_category_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "categories_x_parent_categories" */
export enum Categories_X_Parent_Categories_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  ParentCategoryId = 'parent_category_id'
}

export type Categories_X_Parent_Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_X_Parent_Categories_Set_Input>;
  where: Categories_X_Parent_Categories_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "experience_levels" */
export type Experience_Levels = {
  __typename?: 'experience_levels';
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregate relationship */
  activities_aggregate: Activities_Aggregate;
  experience_level: Scalars['String'];
};


/** columns and relationships of "experience_levels" */
export type Experience_LevelsActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};


/** columns and relationships of "experience_levels" */
export type Experience_LevelsActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

/** aggregated selection of "experience_levels" */
export type Experience_Levels_Aggregate = {
  __typename?: 'experience_levels_aggregate';
  aggregate?: Maybe<Experience_Levels_Aggregate_Fields>;
  nodes: Array<Experience_Levels>;
};

/** aggregate fields of "experience_levels" */
export type Experience_Levels_Aggregate_Fields = {
  __typename?: 'experience_levels_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Experience_Levels_Max_Fields>;
  min?: Maybe<Experience_Levels_Min_Fields>;
};


/** aggregate fields of "experience_levels" */
export type Experience_Levels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Experience_Levels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "experience_levels". All fields are combined with a logical 'AND'. */
export type Experience_Levels_Bool_Exp = {
  _and?: InputMaybe<Array<Experience_Levels_Bool_Exp>>;
  _not?: InputMaybe<Experience_Levels_Bool_Exp>;
  _or?: InputMaybe<Array<Experience_Levels_Bool_Exp>>;
  activities?: InputMaybe<Activities_Bool_Exp>;
  experience_level?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "experience_levels" */
export enum Experience_Levels_Constraint {
  /** unique or primary key constraint on columns "experience_level" */
  ExperienceLevelsPkey = 'experience_levels_pkey'
}

export enum Experience_Levels_Enum {
  Advanced = 'ADVANCED',
  Any = 'ANY',
  Beginner = 'BEGINNER',
  BeginnerToIntermediate = 'BEGINNER_TO_INTERMEDIATE',
  Intermediate = 'INTERMEDIATE',
  IntermediateToAdvanced = 'INTERMEDIATE_TO_ADVANCED'
}

/** Boolean expression to compare columns of type "experience_levels_enum". All fields are combined with logical 'AND'. */
export type Experience_Levels_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Experience_Levels_Enum>;
  _in?: InputMaybe<Array<Experience_Levels_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Experience_Levels_Enum>;
  _nin?: InputMaybe<Array<Experience_Levels_Enum>>;
};

/** input type for inserting data into table "experience_levels" */
export type Experience_Levels_Insert_Input = {
  activities?: InputMaybe<Activities_Arr_Rel_Insert_Input>;
  experience_level?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Experience_Levels_Max_Fields = {
  __typename?: 'experience_levels_max_fields';
  experience_level?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Experience_Levels_Min_Fields = {
  __typename?: 'experience_levels_min_fields';
  experience_level?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "experience_levels" */
export type Experience_Levels_Mutation_Response = {
  __typename?: 'experience_levels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Experience_Levels>;
};

/** input type for inserting object relation for remote table "experience_levels" */
export type Experience_Levels_Obj_Rel_Insert_Input = {
  data: Experience_Levels_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Experience_Levels_On_Conflict>;
};

/** on_conflict condition type for table "experience_levels" */
export type Experience_Levels_On_Conflict = {
  constraint: Experience_Levels_Constraint;
  update_columns?: Array<Experience_Levels_Update_Column>;
  where?: InputMaybe<Experience_Levels_Bool_Exp>;
};

/** Ordering options when selecting data from "experience_levels". */
export type Experience_Levels_Order_By = {
  activities_aggregate?: InputMaybe<Activities_Aggregate_Order_By>;
  experience_level?: InputMaybe<Order_By>;
};

/** primary key columns input for table: experience_levels */
export type Experience_Levels_Pk_Columns_Input = {
  experience_level: Scalars['String'];
};

/** select columns of table "experience_levels" */
export enum Experience_Levels_Select_Column {
  /** column name */
  ExperienceLevel = 'experience_level'
}

/** input type for updating data in table "experience_levels" */
export type Experience_Levels_Set_Input = {
  experience_level?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "experience_levels" */
export type Experience_Levels_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Experience_Levels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Experience_Levels_Stream_Cursor_Value_Input = {
  experience_level?: InputMaybe<Scalars['String']>;
};

/** update columns of table "experience_levels" */
export enum Experience_Levels_Update_Column {
  /** column name */
  ExperienceLevel = 'experience_level'
}

export type Experience_Levels_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Experience_Levels_Set_Input>;
  where: Experience_Levels_Bool_Exp;
};

/** columns and relationships of "hosts" */
export type Hosts = {
  __typename?: 'hosts';
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregate relationship */
  activities_aggregate: Activities_Aggregate;
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  logo_url?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};


/** columns and relationships of "hosts" */
export type HostsActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};


/** columns and relationships of "hosts" */
export type HostsActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

/** aggregated selection of "hosts" */
export type Hosts_Aggregate = {
  __typename?: 'hosts_aggregate';
  aggregate?: Maybe<Hosts_Aggregate_Fields>;
  nodes: Array<Hosts>;
};

/** aggregate fields of "hosts" */
export type Hosts_Aggregate_Fields = {
  __typename?: 'hosts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Hosts_Max_Fields>;
  min?: Maybe<Hosts_Min_Fields>;
};


/** aggregate fields of "hosts" */
export type Hosts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hosts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "hosts". All fields are combined with a logical 'AND'. */
export type Hosts_Bool_Exp = {
  _and?: InputMaybe<Array<Hosts_Bool_Exp>>;
  _not?: InputMaybe<Hosts_Bool_Exp>;
  _or?: InputMaybe<Array<Hosts_Bool_Exp>>;
  activities?: InputMaybe<Activities_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  logo_url?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "hosts" */
export enum Hosts_Constraint {
  /** unique or primary key constraint on columns "id" */
  HostsPkey = 'hosts_pkey'
}

/** input type for inserting data into table "hosts" */
export type Hosts_Insert_Input = {
  activities?: InputMaybe<Activities_Arr_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  logo_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Hosts_Max_Fields = {
  __typename?: 'hosts_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  logo_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Hosts_Min_Fields = {
  __typename?: 'hosts_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  logo_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "hosts" */
export type Hosts_Mutation_Response = {
  __typename?: 'hosts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Hosts>;
};

/** input type for inserting object relation for remote table "hosts" */
export type Hosts_Obj_Rel_Insert_Input = {
  data: Hosts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Hosts_On_Conflict>;
};

/** on_conflict condition type for table "hosts" */
export type Hosts_On_Conflict = {
  constraint: Hosts_Constraint;
  update_columns?: Array<Hosts_Update_Column>;
  where?: InputMaybe<Hosts_Bool_Exp>;
};

/** Ordering options when selecting data from "hosts". */
export type Hosts_Order_By = {
  activities_aggregate?: InputMaybe<Activities_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logo_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: hosts */
export type Hosts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "hosts" */
export enum Hosts_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  LogoUrl = 'logo_url',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "hosts" */
export type Hosts_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  logo_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "hosts" */
export type Hosts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Hosts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Hosts_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  logo_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "hosts" */
export enum Hosts_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  LogoUrl = 'logo_url',
  /** column name */
  Name = 'name'
}

export type Hosts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Hosts_Set_Input>;
  where: Hosts_Bool_Exp;
};

/** columns and relationships of "intensity_levels" */
export type Intensity_Levels = {
  __typename?: 'intensity_levels';
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregate relationship */
  activities_aggregate: Activities_Aggregate;
  intensity_level: Scalars['String'];
};


/** columns and relationships of "intensity_levels" */
export type Intensity_LevelsActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};


/** columns and relationships of "intensity_levels" */
export type Intensity_LevelsActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

/** aggregated selection of "intensity_levels" */
export type Intensity_Levels_Aggregate = {
  __typename?: 'intensity_levels_aggregate';
  aggregate?: Maybe<Intensity_Levels_Aggregate_Fields>;
  nodes: Array<Intensity_Levels>;
};

/** aggregate fields of "intensity_levels" */
export type Intensity_Levels_Aggregate_Fields = {
  __typename?: 'intensity_levels_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Intensity_Levels_Max_Fields>;
  min?: Maybe<Intensity_Levels_Min_Fields>;
};


/** aggregate fields of "intensity_levels" */
export type Intensity_Levels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Intensity_Levels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "intensity_levels". All fields are combined with a logical 'AND'. */
export type Intensity_Levels_Bool_Exp = {
  _and?: InputMaybe<Array<Intensity_Levels_Bool_Exp>>;
  _not?: InputMaybe<Intensity_Levels_Bool_Exp>;
  _or?: InputMaybe<Array<Intensity_Levels_Bool_Exp>>;
  activities?: InputMaybe<Activities_Bool_Exp>;
  intensity_level?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "intensity_levels" */
export enum Intensity_Levels_Constraint {
  /** unique or primary key constraint on columns "intensity_level" */
  IntensityLevelsPkey = 'intensity_levels_pkey'
}

export enum Intensity_Levels_Enum {
  Any = 'ANY',
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

/** Boolean expression to compare columns of type "intensity_levels_enum". All fields are combined with logical 'AND'. */
export type Intensity_Levels_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Intensity_Levels_Enum>;
  _in?: InputMaybe<Array<Intensity_Levels_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Intensity_Levels_Enum>;
  _nin?: InputMaybe<Array<Intensity_Levels_Enum>>;
};

/** input type for inserting data into table "intensity_levels" */
export type Intensity_Levels_Insert_Input = {
  activities?: InputMaybe<Activities_Arr_Rel_Insert_Input>;
  intensity_level?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Intensity_Levels_Max_Fields = {
  __typename?: 'intensity_levels_max_fields';
  intensity_level?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Intensity_Levels_Min_Fields = {
  __typename?: 'intensity_levels_min_fields';
  intensity_level?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "intensity_levels" */
export type Intensity_Levels_Mutation_Response = {
  __typename?: 'intensity_levels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Intensity_Levels>;
};

/** input type for inserting object relation for remote table "intensity_levels" */
export type Intensity_Levels_Obj_Rel_Insert_Input = {
  data: Intensity_Levels_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Intensity_Levels_On_Conflict>;
};

/** on_conflict condition type for table "intensity_levels" */
export type Intensity_Levels_On_Conflict = {
  constraint: Intensity_Levels_Constraint;
  update_columns?: Array<Intensity_Levels_Update_Column>;
  where?: InputMaybe<Intensity_Levels_Bool_Exp>;
};

/** Ordering options when selecting data from "intensity_levels". */
export type Intensity_Levels_Order_By = {
  activities_aggregate?: InputMaybe<Activities_Aggregate_Order_By>;
  intensity_level?: InputMaybe<Order_By>;
};

/** primary key columns input for table: intensity_levels */
export type Intensity_Levels_Pk_Columns_Input = {
  intensity_level: Scalars['String'];
};

/** select columns of table "intensity_levels" */
export enum Intensity_Levels_Select_Column {
  /** column name */
  IntensityLevel = 'intensity_level'
}

/** input type for updating data in table "intensity_levels" */
export type Intensity_Levels_Set_Input = {
  intensity_level?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "intensity_levels" */
export type Intensity_Levels_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Intensity_Levels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Intensity_Levels_Stream_Cursor_Value_Input = {
  intensity_level?: InputMaybe<Scalars['String']>;
};

/** update columns of table "intensity_levels" */
export enum Intensity_Levels_Update_Column {
  /** column name */
  IntensityLevel = 'intensity_level'
}

export type Intensity_Levels_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Intensity_Levels_Set_Input>;
  where: Intensity_Levels_Bool_Exp;
};

/** columns and relationships of "locations" */
export type Locations = {
  __typename?: 'locations';
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregate relationship */
  activities_aggregate: Activities_Aggregate;
  address?: Maybe<Scalars['String']>;
  directions?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  lat: Scalars['numeric'];
  long: Scalars['numeric'];
  name: Scalars['String'];
  outdoors: Scalars['Boolean'];
  postcode?: Maybe<Scalars['String']>;
};


/** columns and relationships of "locations" */
export type LocationsActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};


/** columns and relationships of "locations" */
export type LocationsActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

/** aggregated selection of "locations" */
export type Locations_Aggregate = {
  __typename?: 'locations_aggregate';
  aggregate?: Maybe<Locations_Aggregate_Fields>;
  nodes: Array<Locations>;
};

/** aggregate fields of "locations" */
export type Locations_Aggregate_Fields = {
  __typename?: 'locations_aggregate_fields';
  avg?: Maybe<Locations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Locations_Max_Fields>;
  min?: Maybe<Locations_Min_Fields>;
  stddev?: Maybe<Locations_Stddev_Fields>;
  stddev_pop?: Maybe<Locations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Locations_Stddev_Samp_Fields>;
  sum?: Maybe<Locations_Sum_Fields>;
  var_pop?: Maybe<Locations_Var_Pop_Fields>;
  var_samp?: Maybe<Locations_Var_Samp_Fields>;
  variance?: Maybe<Locations_Variance_Fields>;
};


/** aggregate fields of "locations" */
export type Locations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Locations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Locations_Avg_Fields = {
  __typename?: 'locations_avg_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "locations". All fields are combined with a logical 'AND'. */
export type Locations_Bool_Exp = {
  _and?: InputMaybe<Array<Locations_Bool_Exp>>;
  _not?: InputMaybe<Locations_Bool_Exp>;
  _or?: InputMaybe<Array<Locations_Bool_Exp>>;
  activities?: InputMaybe<Activities_Bool_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  directions?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lat?: InputMaybe<Numeric_Comparison_Exp>;
  long?: InputMaybe<Numeric_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  outdoors?: InputMaybe<Boolean_Comparison_Exp>;
  postcode?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "locations" */
export enum Locations_Constraint {
  /** unique or primary key constraint on columns "id" */
  LocationsPkey = 'locations_pkey'
}

export type Locations_In_Radius_Args = {
  location_lat?: InputMaybe<Scalars['numeric']>;
  location_long?: InputMaybe<Scalars['numeric']>;
  radius?: InputMaybe<Scalars['Int']>;
};

/** input type for incrementing numeric columns in table "locations" */
export type Locations_Inc_Input = {
  lat?: InputMaybe<Scalars['numeric']>;
  long?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "locations" */
export type Locations_Insert_Input = {
  activities?: InputMaybe<Activities_Arr_Rel_Insert_Input>;
  address?: InputMaybe<Scalars['String']>;
  directions?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lat?: InputMaybe<Scalars['numeric']>;
  long?: InputMaybe<Scalars['numeric']>;
  name?: InputMaybe<Scalars['String']>;
  outdoors?: InputMaybe<Scalars['Boolean']>;
  postcode?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Locations_Max_Fields = {
  __typename?: 'locations_max_fields';
  address?: Maybe<Scalars['String']>;
  directions?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lat?: Maybe<Scalars['numeric']>;
  long?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Locations_Min_Fields = {
  __typename?: 'locations_min_fields';
  address?: Maybe<Scalars['String']>;
  directions?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lat?: Maybe<Scalars['numeric']>;
  long?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "locations" */
export type Locations_Mutation_Response = {
  __typename?: 'locations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Locations>;
};

/** input type for inserting object relation for remote table "locations" */
export type Locations_Obj_Rel_Insert_Input = {
  data: Locations_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Locations_On_Conflict>;
};

/** on_conflict condition type for table "locations" */
export type Locations_On_Conflict = {
  constraint: Locations_Constraint;
  update_columns?: Array<Locations_Update_Column>;
  where?: InputMaybe<Locations_Bool_Exp>;
};

/** Ordering options when selecting data from "locations". */
export type Locations_Order_By = {
  activities_aggregate?: InputMaybe<Activities_Aggregate_Order_By>;
  address?: InputMaybe<Order_By>;
  directions?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  long?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  outdoors?: InputMaybe<Order_By>;
  postcode?: InputMaybe<Order_By>;
};

/** primary key columns input for table: locations */
export type Locations_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "locations" */
export enum Locations_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Directions = 'directions',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
  /** column name */
  Name = 'name',
  /** column name */
  Outdoors = 'outdoors',
  /** column name */
  Postcode = 'postcode'
}

/** input type for updating data in table "locations" */
export type Locations_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  directions?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lat?: InputMaybe<Scalars['numeric']>;
  long?: InputMaybe<Scalars['numeric']>;
  name?: InputMaybe<Scalars['String']>;
  outdoors?: InputMaybe<Scalars['Boolean']>;
  postcode?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Locations_Stddev_Fields = {
  __typename?: 'locations_stddev_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Locations_Stddev_Pop_Fields = {
  __typename?: 'locations_stddev_pop_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Locations_Stddev_Samp_Fields = {
  __typename?: 'locations_stddev_samp_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "locations" */
export type Locations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Locations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Locations_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  directions?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lat?: InputMaybe<Scalars['numeric']>;
  long?: InputMaybe<Scalars['numeric']>;
  name?: InputMaybe<Scalars['String']>;
  outdoors?: InputMaybe<Scalars['Boolean']>;
  postcode?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Locations_Sum_Fields = {
  __typename?: 'locations_sum_fields';
  lat?: Maybe<Scalars['numeric']>;
  long?: Maybe<Scalars['numeric']>;
};

/** update columns of table "locations" */
export enum Locations_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Directions = 'directions',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Long = 'long',
  /** column name */
  Name = 'name',
  /** column name */
  Outdoors = 'outdoors',
  /** column name */
  Postcode = 'postcode'
}

export type Locations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Locations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Locations_Set_Input>;
  where: Locations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Locations_Var_Pop_Fields = {
  __typename?: 'locations_var_pop_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Locations_Var_Samp_Fields = {
  __typename?: 'locations_var_samp_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Locations_Variance_Fields = {
  __typename?: 'locations_variance_fields';
  lat?: Maybe<Scalars['Float']>;
  long?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "media" */
export type Media = {
  __typename?: 'media';
  /** An array relationship */
  activities_x_media: Array<Activities_X_Media>;
  /** An aggregate relationship */
  activities_x_media_aggregate: Activities_X_Media_Aggregate;
  caption?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  path: Scalars['String'];
};


/** columns and relationships of "media" */
export type MediaActivities_X_MediaArgs = {
  distinct_on?: InputMaybe<Array<Activities_X_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_X_Media_Order_By>>;
  where?: InputMaybe<Activities_X_Media_Bool_Exp>;
};


/** columns and relationships of "media" */
export type MediaActivities_X_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_X_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_X_Media_Order_By>>;
  where?: InputMaybe<Activities_X_Media_Bool_Exp>;
};

/** aggregated selection of "media" */
export type Media_Aggregate = {
  __typename?: 'media_aggregate';
  aggregate?: Maybe<Media_Aggregate_Fields>;
  nodes: Array<Media>;
};

/** aggregate fields of "media" */
export type Media_Aggregate_Fields = {
  __typename?: 'media_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Media_Max_Fields>;
  min?: Maybe<Media_Min_Fields>;
};


/** aggregate fields of "media" */
export type Media_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Media_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "media". All fields are combined with a logical 'AND'. */
export type Media_Bool_Exp = {
  _and?: InputMaybe<Array<Media_Bool_Exp>>;
  _not?: InputMaybe<Media_Bool_Exp>;
  _or?: InputMaybe<Array<Media_Bool_Exp>>;
  activities_x_media?: InputMaybe<Activities_X_Media_Bool_Exp>;
  caption?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "media" */
export enum Media_Constraint {
  /** unique or primary key constraint on columns "path" */
  MediaPathKey = 'media_path_key',
  /** unique or primary key constraint on columns "id" */
  MediaPkey = 'media_pkey'
}

/** input type for inserting data into table "media" */
export type Media_Insert_Input = {
  activities_x_media?: InputMaybe<Activities_X_Media_Arr_Rel_Insert_Input>;
  caption?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  path?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Media_Max_Fields = {
  __typename?: 'media_max_fields';
  caption?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  path?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Media_Min_Fields = {
  __typename?: 'media_min_fields';
  caption?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  path?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "media" */
export type Media_Mutation_Response = {
  __typename?: 'media_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Media>;
};

/** input type for inserting object relation for remote table "media" */
export type Media_Obj_Rel_Insert_Input = {
  data: Media_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Media_On_Conflict>;
};

/** on_conflict condition type for table "media" */
export type Media_On_Conflict = {
  constraint: Media_Constraint;
  update_columns?: Array<Media_Update_Column>;
  where?: InputMaybe<Media_Bool_Exp>;
};

/** Ordering options when selecting data from "media". */
export type Media_Order_By = {
  activities_x_media_aggregate?: InputMaybe<Activities_X_Media_Aggregate_Order_By>;
  caption?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
};

/** primary key columns input for table: media */
export type Media_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "media" */
export enum Media_Select_Column {
  /** column name */
  Caption = 'caption',
  /** column name */
  Id = 'id',
  /** column name */
  Path = 'path'
}

/** input type for updating data in table "media" */
export type Media_Set_Input = {
  caption?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  path?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "media" */
export type Media_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Media_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Media_Stream_Cursor_Value_Input = {
  caption?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  path?: InputMaybe<Scalars['String']>;
};

/** update columns of table "media" */
export enum Media_Update_Column {
  /** column name */
  Caption = 'caption',
  /** column name */
  Id = 'id',
  /** column name */
  Path = 'path'
}

export type Media_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Media_Set_Input>;
  where: Media_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "activities" */
  delete_activities?: Maybe<Activities_Mutation_Response>;
  /** delete single row from the table: "activities" */
  delete_activities_by_pk?: Maybe<Activities>;
  /** delete data from the table: "activities_x_categories" */
  delete_activities_x_categories?: Maybe<Activities_X_Categories_Mutation_Response>;
  /** delete single row from the table: "activities_x_categories" */
  delete_activities_x_categories_by_pk?: Maybe<Activities_X_Categories>;
  /** delete data from the table: "activities_x_media" */
  delete_activities_x_media?: Maybe<Activities_X_Media_Mutation_Response>;
  /** delete single row from the table: "activities_x_media" */
  delete_activities_x_media_by_pk?: Maybe<Activities_X_Media>;
  /** delete data from the table: "activity_types" */
  delete_activity_types?: Maybe<Activity_Types_Mutation_Response>;
  /** delete single row from the table: "activity_types" */
  delete_activity_types_by_pk?: Maybe<Activity_Types>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "categories_x_parent_categories" */
  delete_categories_x_parent_categories?: Maybe<Categories_X_Parent_Categories_Mutation_Response>;
  /** delete single row from the table: "categories_x_parent_categories" */
  delete_categories_x_parent_categories_by_pk?: Maybe<Categories_X_Parent_Categories>;
  /** delete data from the table: "experience_levels" */
  delete_experience_levels?: Maybe<Experience_Levels_Mutation_Response>;
  /** delete single row from the table: "experience_levels" */
  delete_experience_levels_by_pk?: Maybe<Experience_Levels>;
  /** delete data from the table: "hosts" */
  delete_hosts?: Maybe<Hosts_Mutation_Response>;
  /** delete single row from the table: "hosts" */
  delete_hosts_by_pk?: Maybe<Hosts>;
  /** delete data from the table: "intensity_levels" */
  delete_intensity_levels?: Maybe<Intensity_Levels_Mutation_Response>;
  /** delete single row from the table: "intensity_levels" */
  delete_intensity_levels_by_pk?: Maybe<Intensity_Levels>;
  /** delete data from the table: "locations" */
  delete_locations?: Maybe<Locations_Mutation_Response>;
  /** delete single row from the table: "locations" */
  delete_locations_by_pk?: Maybe<Locations>;
  /** delete data from the table: "media" */
  delete_media?: Maybe<Media_Mutation_Response>;
  /** delete single row from the table: "media" */
  delete_media_by_pk?: Maybe<Media>;
  /** delete data from the table: "privileged_example__delete_me" */
  delete_privileged_example__delete_me?: Maybe<Privileged_Example__Delete_Me_Mutation_Response>;
  /** delete single row from the table: "privileged_example__delete_me" */
  delete_privileged_example__delete_me_by_pk?: Maybe<Privileged_Example__Delete_Me>;
  /** insert data into the table: "activities" */
  insert_activities?: Maybe<Activities_Mutation_Response>;
  /** insert a single row into the table: "activities" */
  insert_activities_one?: Maybe<Activities>;
  /** insert data into the table: "activities_x_categories" */
  insert_activities_x_categories?: Maybe<Activities_X_Categories_Mutation_Response>;
  /** insert a single row into the table: "activities_x_categories" */
  insert_activities_x_categories_one?: Maybe<Activities_X_Categories>;
  /** insert data into the table: "activities_x_media" */
  insert_activities_x_media?: Maybe<Activities_X_Media_Mutation_Response>;
  /** insert a single row into the table: "activities_x_media" */
  insert_activities_x_media_one?: Maybe<Activities_X_Media>;
  /** insert data into the table: "activity_types" */
  insert_activity_types?: Maybe<Activity_Types_Mutation_Response>;
  /** insert a single row into the table: "activity_types" */
  insert_activity_types_one?: Maybe<Activity_Types>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "categories_x_parent_categories" */
  insert_categories_x_parent_categories?: Maybe<Categories_X_Parent_Categories_Mutation_Response>;
  /** insert a single row into the table: "categories_x_parent_categories" */
  insert_categories_x_parent_categories_one?: Maybe<Categories_X_Parent_Categories>;
  /** insert data into the table: "experience_levels" */
  insert_experience_levels?: Maybe<Experience_Levels_Mutation_Response>;
  /** insert a single row into the table: "experience_levels" */
  insert_experience_levels_one?: Maybe<Experience_Levels>;
  /** insert data into the table: "hosts" */
  insert_hosts?: Maybe<Hosts_Mutation_Response>;
  /** insert a single row into the table: "hosts" */
  insert_hosts_one?: Maybe<Hosts>;
  /** insert data into the table: "intensity_levels" */
  insert_intensity_levels?: Maybe<Intensity_Levels_Mutation_Response>;
  /** insert a single row into the table: "intensity_levels" */
  insert_intensity_levels_one?: Maybe<Intensity_Levels>;
  /** insert data into the table: "locations" */
  insert_locations?: Maybe<Locations_Mutation_Response>;
  /** insert a single row into the table: "locations" */
  insert_locations_one?: Maybe<Locations>;
  /** insert data into the table: "media" */
  insert_media?: Maybe<Media_Mutation_Response>;
  /** insert a single row into the table: "media" */
  insert_media_one?: Maybe<Media>;
  /** insert data into the table: "privileged_example__delete_me" */
  insert_privileged_example__delete_me?: Maybe<Privileged_Example__Delete_Me_Mutation_Response>;
  /** insert a single row into the table: "privileged_example__delete_me" */
  insert_privileged_example__delete_me_one?: Maybe<Privileged_Example__Delete_Me>;
  /** update data of the table: "activities" */
  update_activities?: Maybe<Activities_Mutation_Response>;
  /** update single row of the table: "activities" */
  update_activities_by_pk?: Maybe<Activities>;
  /** update multiples rows of table: "activities" */
  update_activities_many?: Maybe<Array<Maybe<Activities_Mutation_Response>>>;
  /** update data of the table: "activities_x_categories" */
  update_activities_x_categories?: Maybe<Activities_X_Categories_Mutation_Response>;
  /** update single row of the table: "activities_x_categories" */
  update_activities_x_categories_by_pk?: Maybe<Activities_X_Categories>;
  /** update multiples rows of table: "activities_x_categories" */
  update_activities_x_categories_many?: Maybe<Array<Maybe<Activities_X_Categories_Mutation_Response>>>;
  /** update data of the table: "activities_x_media" */
  update_activities_x_media?: Maybe<Activities_X_Media_Mutation_Response>;
  /** update single row of the table: "activities_x_media" */
  update_activities_x_media_by_pk?: Maybe<Activities_X_Media>;
  /** update multiples rows of table: "activities_x_media" */
  update_activities_x_media_many?: Maybe<Array<Maybe<Activities_X_Media_Mutation_Response>>>;
  /** update data of the table: "activity_types" */
  update_activity_types?: Maybe<Activity_Types_Mutation_Response>;
  /** update single row of the table: "activity_types" */
  update_activity_types_by_pk?: Maybe<Activity_Types>;
  /** update multiples rows of table: "activity_types" */
  update_activity_types_many?: Maybe<Array<Maybe<Activity_Types_Mutation_Response>>>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
  /** update data of the table: "categories_x_parent_categories" */
  update_categories_x_parent_categories?: Maybe<Categories_X_Parent_Categories_Mutation_Response>;
  /** update single row of the table: "categories_x_parent_categories" */
  update_categories_x_parent_categories_by_pk?: Maybe<Categories_X_Parent_Categories>;
  /** update multiples rows of table: "categories_x_parent_categories" */
  update_categories_x_parent_categories_many?: Maybe<Array<Maybe<Categories_X_Parent_Categories_Mutation_Response>>>;
  /** update data of the table: "experience_levels" */
  update_experience_levels?: Maybe<Experience_Levels_Mutation_Response>;
  /** update single row of the table: "experience_levels" */
  update_experience_levels_by_pk?: Maybe<Experience_Levels>;
  /** update multiples rows of table: "experience_levels" */
  update_experience_levels_many?: Maybe<Array<Maybe<Experience_Levels_Mutation_Response>>>;
  /** update data of the table: "hosts" */
  update_hosts?: Maybe<Hosts_Mutation_Response>;
  /** update single row of the table: "hosts" */
  update_hosts_by_pk?: Maybe<Hosts>;
  /** update multiples rows of table: "hosts" */
  update_hosts_many?: Maybe<Array<Maybe<Hosts_Mutation_Response>>>;
  /** update data of the table: "intensity_levels" */
  update_intensity_levels?: Maybe<Intensity_Levels_Mutation_Response>;
  /** update single row of the table: "intensity_levels" */
  update_intensity_levels_by_pk?: Maybe<Intensity_Levels>;
  /** update multiples rows of table: "intensity_levels" */
  update_intensity_levels_many?: Maybe<Array<Maybe<Intensity_Levels_Mutation_Response>>>;
  /** update data of the table: "locations" */
  update_locations?: Maybe<Locations_Mutation_Response>;
  /** update single row of the table: "locations" */
  update_locations_by_pk?: Maybe<Locations>;
  /** update multiples rows of table: "locations" */
  update_locations_many?: Maybe<Array<Maybe<Locations_Mutation_Response>>>;
  /** update data of the table: "media" */
  update_media?: Maybe<Media_Mutation_Response>;
  /** update single row of the table: "media" */
  update_media_by_pk?: Maybe<Media>;
  /** update multiples rows of table: "media" */
  update_media_many?: Maybe<Array<Maybe<Media_Mutation_Response>>>;
  /** update data of the table: "privileged_example__delete_me" */
  update_privileged_example__delete_me?: Maybe<Privileged_Example__Delete_Me_Mutation_Response>;
  /** update single row of the table: "privileged_example__delete_me" */
  update_privileged_example__delete_me_by_pk?: Maybe<Privileged_Example__Delete_Me>;
  /** update multiples rows of table: "privileged_example__delete_me" */
  update_privileged_example__delete_me_many?: Maybe<Array<Maybe<Privileged_Example__Delete_Me_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ActivitiesArgs = {
  where: Activities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Activities_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Activities_X_CategoriesArgs = {
  where: Activities_X_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Activities_X_Categories_By_PkArgs = {
  activity_id: Scalars['uuid'];
  category_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Activities_X_MediaArgs = {
  where: Activities_X_Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Activities_X_Media_By_PkArgs = {
  activity_id: Scalars['uuid'];
  media_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Activity_TypesArgs = {
  where: Activity_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Activity_Types_By_PkArgs = {
  activity_type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Categories_X_Parent_CategoriesArgs = {
  where: Categories_X_Parent_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_X_Parent_Categories_By_PkArgs = {
  category_id: Scalars['uuid'];
  parent_category_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Experience_LevelsArgs = {
  where: Experience_Levels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Experience_Levels_By_PkArgs = {
  experience_level: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_HostsArgs = {
  where: Hosts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hosts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Intensity_LevelsArgs = {
  where: Intensity_Levels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Intensity_Levels_By_PkArgs = {
  intensity_level: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_LocationsArgs = {
  where: Locations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Locations_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_MediaArgs = {
  where: Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Media_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Privileged_Example__Delete_MeArgs = {
  where: Privileged_Example__Delete_Me_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Privileged_Example__Delete_Me_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_ActivitiesArgs = {
  objects: Array<Activities_Insert_Input>;
  on_conflict?: InputMaybe<Activities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activities_OneArgs = {
  object: Activities_Insert_Input;
  on_conflict?: InputMaybe<Activities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activities_X_CategoriesArgs = {
  objects: Array<Activities_X_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Activities_X_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activities_X_Categories_OneArgs = {
  object: Activities_X_Categories_Insert_Input;
  on_conflict?: InputMaybe<Activities_X_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activities_X_MediaArgs = {
  objects: Array<Activities_X_Media_Insert_Input>;
  on_conflict?: InputMaybe<Activities_X_Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activities_X_Media_OneArgs = {
  object: Activities_X_Media_Insert_Input;
  on_conflict?: InputMaybe<Activities_X_Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activity_TypesArgs = {
  objects: Array<Activity_Types_Insert_Input>;
  on_conflict?: InputMaybe<Activity_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activity_Types_OneArgs = {
  object: Activity_Types_Insert_Input;
  on_conflict?: InputMaybe<Activity_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_X_Parent_CategoriesArgs = {
  objects: Array<Categories_X_Parent_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_X_Parent_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_X_Parent_Categories_OneArgs = {
  object: Categories_X_Parent_Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_X_Parent_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experience_LevelsArgs = {
  objects: Array<Experience_Levels_Insert_Input>;
  on_conflict?: InputMaybe<Experience_Levels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experience_Levels_OneArgs = {
  object: Experience_Levels_Insert_Input;
  on_conflict?: InputMaybe<Experience_Levels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HostsArgs = {
  objects: Array<Hosts_Insert_Input>;
  on_conflict?: InputMaybe<Hosts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hosts_OneArgs = {
  object: Hosts_Insert_Input;
  on_conflict?: InputMaybe<Hosts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Intensity_LevelsArgs = {
  objects: Array<Intensity_Levels_Insert_Input>;
  on_conflict?: InputMaybe<Intensity_Levels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Intensity_Levels_OneArgs = {
  object: Intensity_Levels_Insert_Input;
  on_conflict?: InputMaybe<Intensity_Levels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LocationsArgs = {
  objects: Array<Locations_Insert_Input>;
  on_conflict?: InputMaybe<Locations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Locations_OneArgs = {
  object: Locations_Insert_Input;
  on_conflict?: InputMaybe<Locations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MediaArgs = {
  objects: Array<Media_Insert_Input>;
  on_conflict?: InputMaybe<Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Media_OneArgs = {
  object: Media_Insert_Input;
  on_conflict?: InputMaybe<Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Privileged_Example__Delete_MeArgs = {
  objects: Array<Privileged_Example__Delete_Me_Insert_Input>;
  on_conflict?: InputMaybe<Privileged_Example__Delete_Me_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Privileged_Example__Delete_Me_OneArgs = {
  object: Privileged_Example__Delete_Me_Insert_Input;
  on_conflict?: InputMaybe<Privileged_Example__Delete_Me_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ActivitiesArgs = {
  _inc?: InputMaybe<Activities_Inc_Input>;
  _set?: InputMaybe<Activities_Set_Input>;
  where: Activities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Activities_By_PkArgs = {
  _inc?: InputMaybe<Activities_Inc_Input>;
  _set?: InputMaybe<Activities_Set_Input>;
  pk_columns: Activities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Activities_ManyArgs = {
  updates: Array<Activities_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Activities_X_CategoriesArgs = {
  _set?: InputMaybe<Activities_X_Categories_Set_Input>;
  where: Activities_X_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Activities_X_Categories_By_PkArgs = {
  _set?: InputMaybe<Activities_X_Categories_Set_Input>;
  pk_columns: Activities_X_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Activities_X_Categories_ManyArgs = {
  updates: Array<Activities_X_Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Activities_X_MediaArgs = {
  _set?: InputMaybe<Activities_X_Media_Set_Input>;
  where: Activities_X_Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Activities_X_Media_By_PkArgs = {
  _set?: InputMaybe<Activities_X_Media_Set_Input>;
  pk_columns: Activities_X_Media_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Activities_X_Media_ManyArgs = {
  updates: Array<Activities_X_Media_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Activity_TypesArgs = {
  _set?: InputMaybe<Activity_Types_Set_Input>;
  where: Activity_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Activity_Types_By_PkArgs = {
  _set?: InputMaybe<Activity_Types_Set_Input>;
  pk_columns: Activity_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Activity_Types_ManyArgs = {
  updates: Array<Activity_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_X_Parent_CategoriesArgs = {
  _set?: InputMaybe<Categories_X_Parent_Categories_Set_Input>;
  where: Categories_X_Parent_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_X_Parent_Categories_By_PkArgs = {
  _set?: InputMaybe<Categories_X_Parent_Categories_Set_Input>;
  pk_columns: Categories_X_Parent_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_X_Parent_Categories_ManyArgs = {
  updates: Array<Categories_X_Parent_Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Experience_LevelsArgs = {
  _set?: InputMaybe<Experience_Levels_Set_Input>;
  where: Experience_Levels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Experience_Levels_By_PkArgs = {
  _set?: InputMaybe<Experience_Levels_Set_Input>;
  pk_columns: Experience_Levels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Experience_Levels_ManyArgs = {
  updates: Array<Experience_Levels_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_HostsArgs = {
  _set?: InputMaybe<Hosts_Set_Input>;
  where: Hosts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hosts_By_PkArgs = {
  _set?: InputMaybe<Hosts_Set_Input>;
  pk_columns: Hosts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Hosts_ManyArgs = {
  updates: Array<Hosts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Intensity_LevelsArgs = {
  _set?: InputMaybe<Intensity_Levels_Set_Input>;
  where: Intensity_Levels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Intensity_Levels_By_PkArgs = {
  _set?: InputMaybe<Intensity_Levels_Set_Input>;
  pk_columns: Intensity_Levels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Intensity_Levels_ManyArgs = {
  updates: Array<Intensity_Levels_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LocationsArgs = {
  _inc?: InputMaybe<Locations_Inc_Input>;
  _set?: InputMaybe<Locations_Set_Input>;
  where: Locations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Locations_By_PkArgs = {
  _inc?: InputMaybe<Locations_Inc_Input>;
  _set?: InputMaybe<Locations_Set_Input>;
  pk_columns: Locations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Locations_ManyArgs = {
  updates: Array<Locations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MediaArgs = {
  _set?: InputMaybe<Media_Set_Input>;
  where: Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Media_By_PkArgs = {
  _set?: InputMaybe<Media_Set_Input>;
  pk_columns: Media_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Media_ManyArgs = {
  updates: Array<Media_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Privileged_Example__Delete_MeArgs = {
  _inc?: InputMaybe<Privileged_Example__Delete_Me_Inc_Input>;
  _set?: InputMaybe<Privileged_Example__Delete_Me_Set_Input>;
  where: Privileged_Example__Delete_Me_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Privileged_Example__Delete_Me_By_PkArgs = {
  _inc?: InputMaybe<Privileged_Example__Delete_Me_Inc_Input>;
  _set?: InputMaybe<Privileged_Example__Delete_Me_Set_Input>;
  pk_columns: Privileged_Example__Delete_Me_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Privileged_Example__Delete_Me_ManyArgs = {
  updates: Array<Privileged_Example__Delete_Me_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** Just to demonstrate the new permissions and JWT system, this table needs admin perms */
export type Privileged_Example__Delete_Me = {
  __typename?: 'privileged_example__delete_me';
  id: Scalars['Int'];
  thing: Scalars['String'];
};

/** aggregated selection of "privileged_example__delete_me" */
export type Privileged_Example__Delete_Me_Aggregate = {
  __typename?: 'privileged_example__delete_me_aggregate';
  aggregate?: Maybe<Privileged_Example__Delete_Me_Aggregate_Fields>;
  nodes: Array<Privileged_Example__Delete_Me>;
};

/** aggregate fields of "privileged_example__delete_me" */
export type Privileged_Example__Delete_Me_Aggregate_Fields = {
  __typename?: 'privileged_example__delete_me_aggregate_fields';
  avg?: Maybe<Privileged_Example__Delete_Me_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Privileged_Example__Delete_Me_Max_Fields>;
  min?: Maybe<Privileged_Example__Delete_Me_Min_Fields>;
  stddev?: Maybe<Privileged_Example__Delete_Me_Stddev_Fields>;
  stddev_pop?: Maybe<Privileged_Example__Delete_Me_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Privileged_Example__Delete_Me_Stddev_Samp_Fields>;
  sum?: Maybe<Privileged_Example__Delete_Me_Sum_Fields>;
  var_pop?: Maybe<Privileged_Example__Delete_Me_Var_Pop_Fields>;
  var_samp?: Maybe<Privileged_Example__Delete_Me_Var_Samp_Fields>;
  variance?: Maybe<Privileged_Example__Delete_Me_Variance_Fields>;
};


/** aggregate fields of "privileged_example__delete_me" */
export type Privileged_Example__Delete_Me_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Privileged_Example__Delete_Me_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Privileged_Example__Delete_Me_Avg_Fields = {
  __typename?: 'privileged_example__delete_me_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "privileged_example__delete_me". All fields are combined with a logical 'AND'. */
export type Privileged_Example__Delete_Me_Bool_Exp = {
  _and?: InputMaybe<Array<Privileged_Example__Delete_Me_Bool_Exp>>;
  _not?: InputMaybe<Privileged_Example__Delete_Me_Bool_Exp>;
  _or?: InputMaybe<Array<Privileged_Example__Delete_Me_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  thing?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "privileged_example__delete_me" */
export enum Privileged_Example__Delete_Me_Constraint {
  /** unique or primary key constraint on columns "id" */
  PrivilegedExampleDeleteMePkey = 'privileged_example__delete_me_pkey'
}

/** input type for incrementing numeric columns in table "privileged_example__delete_me" */
export type Privileged_Example__Delete_Me_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "privileged_example__delete_me" */
export type Privileged_Example__Delete_Me_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  thing?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Privileged_Example__Delete_Me_Max_Fields = {
  __typename?: 'privileged_example__delete_me_max_fields';
  id?: Maybe<Scalars['Int']>;
  thing?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Privileged_Example__Delete_Me_Min_Fields = {
  __typename?: 'privileged_example__delete_me_min_fields';
  id?: Maybe<Scalars['Int']>;
  thing?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "privileged_example__delete_me" */
export type Privileged_Example__Delete_Me_Mutation_Response = {
  __typename?: 'privileged_example__delete_me_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Privileged_Example__Delete_Me>;
};

/** on_conflict condition type for table "privileged_example__delete_me" */
export type Privileged_Example__Delete_Me_On_Conflict = {
  constraint: Privileged_Example__Delete_Me_Constraint;
  update_columns?: Array<Privileged_Example__Delete_Me_Update_Column>;
  where?: InputMaybe<Privileged_Example__Delete_Me_Bool_Exp>;
};

/** Ordering options when selecting data from "privileged_example__delete_me". */
export type Privileged_Example__Delete_Me_Order_By = {
  id?: InputMaybe<Order_By>;
  thing?: InputMaybe<Order_By>;
};

/** primary key columns input for table: privileged_example__delete_me */
export type Privileged_Example__Delete_Me_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "privileged_example__delete_me" */
export enum Privileged_Example__Delete_Me_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Thing = 'thing'
}

/** input type for updating data in table "privileged_example__delete_me" */
export type Privileged_Example__Delete_Me_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  thing?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Privileged_Example__Delete_Me_Stddev_Fields = {
  __typename?: 'privileged_example__delete_me_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Privileged_Example__Delete_Me_Stddev_Pop_Fields = {
  __typename?: 'privileged_example__delete_me_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Privileged_Example__Delete_Me_Stddev_Samp_Fields = {
  __typename?: 'privileged_example__delete_me_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "privileged_example__delete_me" */
export type Privileged_Example__Delete_Me_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Privileged_Example__Delete_Me_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Privileged_Example__Delete_Me_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  thing?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Privileged_Example__Delete_Me_Sum_Fields = {
  __typename?: 'privileged_example__delete_me_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "privileged_example__delete_me" */
export enum Privileged_Example__Delete_Me_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Thing = 'thing'
}

export type Privileged_Example__Delete_Me_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Privileged_Example__Delete_Me_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Privileged_Example__Delete_Me_Set_Input>;
  where: Privileged_Example__Delete_Me_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Privileged_Example__Delete_Me_Var_Pop_Fields = {
  __typename?: 'privileged_example__delete_me_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Privileged_Example__Delete_Me_Var_Samp_Fields = {
  __typename?: 'privileged_example__delete_me_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Privileged_Example__Delete_Me_Variance_Fields = {
  __typename?: 'privileged_example__delete_me_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregate relationship */
  activities_aggregate: Activities_Aggregate;
  /** fetch data from the table: "activities" using primary key columns */
  activities_by_pk?: Maybe<Activities>;
  /** An array relationship */
  activities_x_categories: Array<Activities_X_Categories>;
  /** An aggregate relationship */
  activities_x_categories_aggregate: Activities_X_Categories_Aggregate;
  /** fetch data from the table: "activities_x_categories" using primary key columns */
  activities_x_categories_by_pk?: Maybe<Activities_X_Categories>;
  /** An array relationship */
  activities_x_media: Array<Activities_X_Media>;
  /** An aggregate relationship */
  activities_x_media_aggregate: Activities_X_Media_Aggregate;
  /** fetch data from the table: "activities_x_media" using primary key columns */
  activities_x_media_by_pk?: Maybe<Activities_X_Media>;
  /** fetch data from the table: "activity_types" */
  activity_types: Array<Activity_Types>;
  /** fetch aggregated fields from the table: "activity_types" */
  activity_types_aggregate: Activity_Types_Aggregate;
  /** fetch data from the table: "activity_types" using primary key columns */
  activity_types_by_pk?: Maybe<Activity_Types>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  categories_x_parent_categories: Array<Categories_X_Parent_Categories>;
  /** An aggregate relationship */
  categories_x_parent_categories_aggregate: Categories_X_Parent_Categories_Aggregate;
  /** fetch data from the table: "categories_x_parent_categories" using primary key columns */
  categories_x_parent_categories_by_pk?: Maybe<Categories_X_Parent_Categories>;
  /** fetch data from the table: "experience_levels" */
  experience_levels: Array<Experience_Levels>;
  /** fetch aggregated fields from the table: "experience_levels" */
  experience_levels_aggregate: Experience_Levels_Aggregate;
  /** fetch data from the table: "experience_levels" using primary key columns */
  experience_levels_by_pk?: Maybe<Experience_Levels>;
  /** fetch data from the table: "hosts" */
  hosts: Array<Hosts>;
  /** fetch aggregated fields from the table: "hosts" */
  hosts_aggregate: Hosts_Aggregate;
  /** fetch data from the table: "hosts" using primary key columns */
  hosts_by_pk?: Maybe<Hosts>;
  /** fetch data from the table: "intensity_levels" */
  intensity_levels: Array<Intensity_Levels>;
  /** fetch aggregated fields from the table: "intensity_levels" */
  intensity_levels_aggregate: Intensity_Levels_Aggregate;
  /** fetch data from the table: "intensity_levels" using primary key columns */
  intensity_levels_by_pk?: Maybe<Intensity_Levels>;
  /** fetch data from the table: "locations" */
  locations: Array<Locations>;
  /** fetch aggregated fields from the table: "locations" */
  locations_aggregate: Locations_Aggregate;
  /** fetch data from the table: "locations" using primary key columns */
  locations_by_pk?: Maybe<Locations>;
  /** execute function "locations_in_radius" which returns "locations" */
  locations_in_radius: Array<Locations>;
  /** execute function "locations_in_radius" and query aggregates on result of table type "locations" */
  locations_in_radius_aggregate: Locations_Aggregate;
  /** fetch data from the table: "media" */
  media: Array<Media>;
  /** fetch aggregated fields from the table: "media" */
  media_aggregate: Media_Aggregate;
  /** fetch data from the table: "media" using primary key columns */
  media_by_pk?: Maybe<Media>;
  /** fetch data from the table: "privileged_example__delete_me" */
  privileged_example__delete_me: Array<Privileged_Example__Delete_Me>;
  /** fetch aggregated fields from the table: "privileged_example__delete_me" */
  privileged_example__delete_me_aggregate: Privileged_Example__Delete_Me_Aggregate;
  /** fetch data from the table: "privileged_example__delete_me" using primary key columns */
  privileged_example__delete_me_by_pk?: Maybe<Privileged_Example__Delete_Me>;
};


export type Query_RootActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};


export type Query_RootActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};


export type Query_RootActivities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootActivities_X_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Activities_X_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_X_Categories_Order_By>>;
  where?: InputMaybe<Activities_X_Categories_Bool_Exp>;
};


export type Query_RootActivities_X_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_X_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_X_Categories_Order_By>>;
  where?: InputMaybe<Activities_X_Categories_Bool_Exp>;
};


export type Query_RootActivities_X_Categories_By_PkArgs = {
  activity_id: Scalars['uuid'];
  category_id: Scalars['uuid'];
};


export type Query_RootActivities_X_MediaArgs = {
  distinct_on?: InputMaybe<Array<Activities_X_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_X_Media_Order_By>>;
  where?: InputMaybe<Activities_X_Media_Bool_Exp>;
};


export type Query_RootActivities_X_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_X_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_X_Media_Order_By>>;
  where?: InputMaybe<Activities_X_Media_Bool_Exp>;
};


export type Query_RootActivities_X_Media_By_PkArgs = {
  activity_id: Scalars['uuid'];
  media_id: Scalars['uuid'];
};


export type Query_RootActivity_TypesArgs = {
  distinct_on?: InputMaybe<Array<Activity_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activity_Types_Order_By>>;
  where?: InputMaybe<Activity_Types_Bool_Exp>;
};


export type Query_RootActivity_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activity_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activity_Types_Order_By>>;
  where?: InputMaybe<Activity_Types_Bool_Exp>;
};


export type Query_RootActivity_Types_By_PkArgs = {
  activity_type: Scalars['String'];
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCategories_X_Parent_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_X_Parent_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_X_Parent_Categories_Order_By>>;
  where?: InputMaybe<Categories_X_Parent_Categories_Bool_Exp>;
};


export type Query_RootCategories_X_Parent_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_X_Parent_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_X_Parent_Categories_Order_By>>;
  where?: InputMaybe<Categories_X_Parent_Categories_Bool_Exp>;
};


export type Query_RootCategories_X_Parent_Categories_By_PkArgs = {
  category_id: Scalars['uuid'];
  parent_category_id: Scalars['uuid'];
};


export type Query_RootExperience_LevelsArgs = {
  distinct_on?: InputMaybe<Array<Experience_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Levels_Order_By>>;
  where?: InputMaybe<Experience_Levels_Bool_Exp>;
};


export type Query_RootExperience_Levels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experience_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Levels_Order_By>>;
  where?: InputMaybe<Experience_Levels_Bool_Exp>;
};


export type Query_RootExperience_Levels_By_PkArgs = {
  experience_level: Scalars['String'];
};


export type Query_RootHostsArgs = {
  distinct_on?: InputMaybe<Array<Hosts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hosts_Order_By>>;
  where?: InputMaybe<Hosts_Bool_Exp>;
};


export type Query_RootHosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hosts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hosts_Order_By>>;
  where?: InputMaybe<Hosts_Bool_Exp>;
};


export type Query_RootHosts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootIntensity_LevelsArgs = {
  distinct_on?: InputMaybe<Array<Intensity_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Intensity_Levels_Order_By>>;
  where?: InputMaybe<Intensity_Levels_Bool_Exp>;
};


export type Query_RootIntensity_Levels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Intensity_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Intensity_Levels_Order_By>>;
  where?: InputMaybe<Intensity_Levels_Bool_Exp>;
};


export type Query_RootIntensity_Levels_By_PkArgs = {
  intensity_level: Scalars['String'];
};


export type Query_RootLocationsArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Query_RootLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Query_RootLocations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootLocations_In_RadiusArgs = {
  args: Locations_In_Radius_Args;
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Query_RootLocations_In_Radius_AggregateArgs = {
  args: Locations_In_Radius_Args;
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Query_RootMediaArgs = {
  distinct_on?: InputMaybe<Array<Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Media_Order_By>>;
  where?: InputMaybe<Media_Bool_Exp>;
};


export type Query_RootMedia_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Media_Order_By>>;
  where?: InputMaybe<Media_Bool_Exp>;
};


export type Query_RootMedia_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPrivileged_Example__Delete_MeArgs = {
  distinct_on?: InputMaybe<Array<Privileged_Example__Delete_Me_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Privileged_Example__Delete_Me_Order_By>>;
  where?: InputMaybe<Privileged_Example__Delete_Me_Bool_Exp>;
};


export type Query_RootPrivileged_Example__Delete_Me_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Privileged_Example__Delete_Me_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Privileged_Example__Delete_Me_Order_By>>;
  where?: InputMaybe<Privileged_Example__Delete_Me_Bool_Exp>;
};


export type Query_RootPrivileged_Example__Delete_Me_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregate relationship */
  activities_aggregate: Activities_Aggregate;
  /** fetch data from the table: "activities" using primary key columns */
  activities_by_pk?: Maybe<Activities>;
  /** fetch data from the table in a streaming manner : "activities" */
  activities_stream: Array<Activities>;
  /** An array relationship */
  activities_x_categories: Array<Activities_X_Categories>;
  /** An aggregate relationship */
  activities_x_categories_aggregate: Activities_X_Categories_Aggregate;
  /** fetch data from the table: "activities_x_categories" using primary key columns */
  activities_x_categories_by_pk?: Maybe<Activities_X_Categories>;
  /** fetch data from the table in a streaming manner : "activities_x_categories" */
  activities_x_categories_stream: Array<Activities_X_Categories>;
  /** An array relationship */
  activities_x_media: Array<Activities_X_Media>;
  /** An aggregate relationship */
  activities_x_media_aggregate: Activities_X_Media_Aggregate;
  /** fetch data from the table: "activities_x_media" using primary key columns */
  activities_x_media_by_pk?: Maybe<Activities_X_Media>;
  /** fetch data from the table in a streaming manner : "activities_x_media" */
  activities_x_media_stream: Array<Activities_X_Media>;
  /** fetch data from the table: "activity_types" */
  activity_types: Array<Activity_Types>;
  /** fetch aggregated fields from the table: "activity_types" */
  activity_types_aggregate: Activity_Types_Aggregate;
  /** fetch data from the table: "activity_types" using primary key columns */
  activity_types_by_pk?: Maybe<Activity_Types>;
  /** fetch data from the table in a streaming manner : "activity_types" */
  activity_types_stream: Array<Activity_Types>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner : "categories" */
  categories_stream: Array<Categories>;
  /** An array relationship */
  categories_x_parent_categories: Array<Categories_X_Parent_Categories>;
  /** An aggregate relationship */
  categories_x_parent_categories_aggregate: Categories_X_Parent_Categories_Aggregate;
  /** fetch data from the table: "categories_x_parent_categories" using primary key columns */
  categories_x_parent_categories_by_pk?: Maybe<Categories_X_Parent_Categories>;
  /** fetch data from the table in a streaming manner : "categories_x_parent_categories" */
  categories_x_parent_categories_stream: Array<Categories_X_Parent_Categories>;
  /** fetch data from the table: "experience_levels" */
  experience_levels: Array<Experience_Levels>;
  /** fetch aggregated fields from the table: "experience_levels" */
  experience_levels_aggregate: Experience_Levels_Aggregate;
  /** fetch data from the table: "experience_levels" using primary key columns */
  experience_levels_by_pk?: Maybe<Experience_Levels>;
  /** fetch data from the table in a streaming manner : "experience_levels" */
  experience_levels_stream: Array<Experience_Levels>;
  /** fetch data from the table: "hosts" */
  hosts: Array<Hosts>;
  /** fetch aggregated fields from the table: "hosts" */
  hosts_aggregate: Hosts_Aggregate;
  /** fetch data from the table: "hosts" using primary key columns */
  hosts_by_pk?: Maybe<Hosts>;
  /** fetch data from the table in a streaming manner : "hosts" */
  hosts_stream: Array<Hosts>;
  /** fetch data from the table: "intensity_levels" */
  intensity_levels: Array<Intensity_Levels>;
  /** fetch aggregated fields from the table: "intensity_levels" */
  intensity_levels_aggregate: Intensity_Levels_Aggregate;
  /** fetch data from the table: "intensity_levels" using primary key columns */
  intensity_levels_by_pk?: Maybe<Intensity_Levels>;
  /** fetch data from the table in a streaming manner : "intensity_levels" */
  intensity_levels_stream: Array<Intensity_Levels>;
  /** fetch data from the table: "locations" */
  locations: Array<Locations>;
  /** fetch aggregated fields from the table: "locations" */
  locations_aggregate: Locations_Aggregate;
  /** fetch data from the table: "locations" using primary key columns */
  locations_by_pk?: Maybe<Locations>;
  /** execute function "locations_in_radius" which returns "locations" */
  locations_in_radius: Array<Locations>;
  /** execute function "locations_in_radius" and query aggregates on result of table type "locations" */
  locations_in_radius_aggregate: Locations_Aggregate;
  /** fetch data from the table in a streaming manner : "locations" */
  locations_stream: Array<Locations>;
  /** fetch data from the table: "media" */
  media: Array<Media>;
  /** fetch aggregated fields from the table: "media" */
  media_aggregate: Media_Aggregate;
  /** fetch data from the table: "media" using primary key columns */
  media_by_pk?: Maybe<Media>;
  /** fetch data from the table in a streaming manner : "media" */
  media_stream: Array<Media>;
  /** fetch data from the table: "privileged_example__delete_me" */
  privileged_example__delete_me: Array<Privileged_Example__Delete_Me>;
  /** fetch aggregated fields from the table: "privileged_example__delete_me" */
  privileged_example__delete_me_aggregate: Privileged_Example__Delete_Me_Aggregate;
  /** fetch data from the table: "privileged_example__delete_me" using primary key columns */
  privileged_example__delete_me_by_pk?: Maybe<Privileged_Example__Delete_Me>;
  /** fetch data from the table in a streaming manner : "privileged_example__delete_me" */
  privileged_example__delete_me_stream: Array<Privileged_Example__Delete_Me>;
};


export type Subscription_RootActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};


export type Subscription_RootActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};


export type Subscription_RootActivities_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootActivities_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Activities_Stream_Cursor_Input>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};


export type Subscription_RootActivities_X_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Activities_X_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_X_Categories_Order_By>>;
  where?: InputMaybe<Activities_X_Categories_Bool_Exp>;
};


export type Subscription_RootActivities_X_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_X_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_X_Categories_Order_By>>;
  where?: InputMaybe<Activities_X_Categories_Bool_Exp>;
};


export type Subscription_RootActivities_X_Categories_By_PkArgs = {
  activity_id: Scalars['uuid'];
  category_id: Scalars['uuid'];
};


export type Subscription_RootActivities_X_Categories_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Activities_X_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Activities_X_Categories_Bool_Exp>;
};


export type Subscription_RootActivities_X_MediaArgs = {
  distinct_on?: InputMaybe<Array<Activities_X_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_X_Media_Order_By>>;
  where?: InputMaybe<Activities_X_Media_Bool_Exp>;
};


export type Subscription_RootActivities_X_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_X_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_X_Media_Order_By>>;
  where?: InputMaybe<Activities_X_Media_Bool_Exp>;
};


export type Subscription_RootActivities_X_Media_By_PkArgs = {
  activity_id: Scalars['uuid'];
  media_id: Scalars['uuid'];
};


export type Subscription_RootActivities_X_Media_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Activities_X_Media_Stream_Cursor_Input>>;
  where?: InputMaybe<Activities_X_Media_Bool_Exp>;
};


export type Subscription_RootActivity_TypesArgs = {
  distinct_on?: InputMaybe<Array<Activity_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activity_Types_Order_By>>;
  where?: InputMaybe<Activity_Types_Bool_Exp>;
};


export type Subscription_RootActivity_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activity_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activity_Types_Order_By>>;
  where?: InputMaybe<Activity_Types_Bool_Exp>;
};


export type Subscription_RootActivity_Types_By_PkArgs = {
  activity_type: Scalars['String'];
};


export type Subscription_RootActivity_Types_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Activity_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Activity_Types_Bool_Exp>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_X_Parent_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_X_Parent_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_X_Parent_Categories_Order_By>>;
  where?: InputMaybe<Categories_X_Parent_Categories_Bool_Exp>;
};


export type Subscription_RootCategories_X_Parent_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_X_Parent_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_X_Parent_Categories_Order_By>>;
  where?: InputMaybe<Categories_X_Parent_Categories_Bool_Exp>;
};


export type Subscription_RootCategories_X_Parent_Categories_By_PkArgs = {
  category_id: Scalars['uuid'];
  parent_category_id: Scalars['uuid'];
};


export type Subscription_RootCategories_X_Parent_Categories_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Categories_X_Parent_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_X_Parent_Categories_Bool_Exp>;
};


export type Subscription_RootExperience_LevelsArgs = {
  distinct_on?: InputMaybe<Array<Experience_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Levels_Order_By>>;
  where?: InputMaybe<Experience_Levels_Bool_Exp>;
};


export type Subscription_RootExperience_Levels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experience_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Levels_Order_By>>;
  where?: InputMaybe<Experience_Levels_Bool_Exp>;
};


export type Subscription_RootExperience_Levels_By_PkArgs = {
  experience_level: Scalars['String'];
};


export type Subscription_RootExperience_Levels_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Experience_Levels_Stream_Cursor_Input>>;
  where?: InputMaybe<Experience_Levels_Bool_Exp>;
};


export type Subscription_RootHostsArgs = {
  distinct_on?: InputMaybe<Array<Hosts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hosts_Order_By>>;
  where?: InputMaybe<Hosts_Bool_Exp>;
};


export type Subscription_RootHosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hosts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hosts_Order_By>>;
  where?: InputMaybe<Hosts_Bool_Exp>;
};


export type Subscription_RootHosts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootHosts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Hosts_Stream_Cursor_Input>>;
  where?: InputMaybe<Hosts_Bool_Exp>;
};


export type Subscription_RootIntensity_LevelsArgs = {
  distinct_on?: InputMaybe<Array<Intensity_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Intensity_Levels_Order_By>>;
  where?: InputMaybe<Intensity_Levels_Bool_Exp>;
};


export type Subscription_RootIntensity_Levels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Intensity_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Intensity_Levels_Order_By>>;
  where?: InputMaybe<Intensity_Levels_Bool_Exp>;
};


export type Subscription_RootIntensity_Levels_By_PkArgs = {
  intensity_level: Scalars['String'];
};


export type Subscription_RootIntensity_Levels_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Intensity_Levels_Stream_Cursor_Input>>;
  where?: InputMaybe<Intensity_Levels_Bool_Exp>;
};


export type Subscription_RootLocationsArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Subscription_RootLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Subscription_RootLocations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootLocations_In_RadiusArgs = {
  args: Locations_In_Radius_Args;
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Subscription_RootLocations_In_Radius_AggregateArgs = {
  args: Locations_In_Radius_Args;
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Subscription_RootLocations_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Locations_Stream_Cursor_Input>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Subscription_RootMediaArgs = {
  distinct_on?: InputMaybe<Array<Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Media_Order_By>>;
  where?: InputMaybe<Media_Bool_Exp>;
};


export type Subscription_RootMedia_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Media_Order_By>>;
  where?: InputMaybe<Media_Bool_Exp>;
};


export type Subscription_RootMedia_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMedia_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Media_Stream_Cursor_Input>>;
  where?: InputMaybe<Media_Bool_Exp>;
};


export type Subscription_RootPrivileged_Example__Delete_MeArgs = {
  distinct_on?: InputMaybe<Array<Privileged_Example__Delete_Me_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Privileged_Example__Delete_Me_Order_By>>;
  where?: InputMaybe<Privileged_Example__Delete_Me_Bool_Exp>;
};


export type Subscription_RootPrivileged_Example__Delete_Me_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Privileged_Example__Delete_Me_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Privileged_Example__Delete_Me_Order_By>>;
  where?: InputMaybe<Privileged_Example__Delete_Me_Bool_Exp>;
};


export type Subscription_RootPrivileged_Example__Delete_Me_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPrivileged_Example__Delete_Me_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Privileged_Example__Delete_Me_Stream_Cursor_Input>>;
  where?: InputMaybe<Privileged_Example__Delete_Me_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type ActivityDetailsQueryVariables = Exact<{
  activityId: Scalars['uuid'];
}>;


export type ActivityDetailsQuery = { __typename?: 'query_root', activities_by_pk?: { __typename?: 'activities', id: string, name: string, type: Activity_Types_Enum, description: string, referral_url?: string | null, referral_phone?: string | null, referral_email?: string | null, booking_required: boolean, group_size_min?: number | null, group_size_max?: number | null, intensity_level?: Intensity_Levels_Enum | null, experience_level?: Experience_Levels_Enum | null, age_min?: number | null, age_max?: number | null, location: { __typename?: 'locations', id: string, address?: string | null, postcode?: string | null, lat: number, long: number, name: string, outdoors: boolean, directions?: string | null }, host: { __typename?: 'hosts', id: string, name: string, logo_url?: string | null, description?: string | null, activities_aggregate: { __typename?: 'activities_aggregate', aggregate?: { __typename?: 'activities_aggregate_fields', count: number } | null } }, activities_x_categories: Array<{ __typename?: 'activities_x_categories', category: { __typename?: 'categories', id: string, name: string, level: number } }>, activities_x_media: Array<{ __typename?: 'activities_x_media', media: { __typename?: 'media', id: string, path: string, caption?: string | null } }> } | null };

export type HostDataFragment = { __typename?: 'hosts', id: string, name: string, logo_url?: string | null, description?: string | null };

export type CategoryDataFragment = { __typename?: 'categories', id: string, name: string, level: number };

export type MediaDataFragment = { __typename?: 'media', id: string, path: string, caption?: string | null };

export type LocationDataFragment = { __typename?: 'locations', id: string, address?: string | null, postcode?: string | null, lat: number, long: number, name: string, outdoors: boolean, directions?: string | null };

export type ActivityDataFragment = { __typename?: 'activities', id: string, name: string, type: Activity_Types_Enum, description: string, referral_url?: string | null, referral_phone?: string | null, referral_email?: string | null, booking_required: boolean, group_size_min?: number | null, group_size_max?: number | null, intensity_level?: Intensity_Levels_Enum | null, experience_level?: Experience_Levels_Enum | null, age_min?: number | null, age_max?: number | null };

export type ActivityListingFragment = { __typename?: 'activities', id: string, name: string, type: Activity_Types_Enum, description: string, referral_url?: string | null, referral_phone?: string | null, referral_email?: string | null, booking_required: boolean, group_size_min?: number | null, group_size_max?: number | null, intensity_level?: Intensity_Levels_Enum | null, experience_level?: Experience_Levels_Enum | null, age_min?: number | null, age_max?: number | null, location: { __typename?: 'locations', id: string, address?: string | null, postcode?: string | null, lat: number, long: number, name: string, outdoors: boolean, directions?: string | null }, host: { __typename?: 'hosts', id: string, name: string, logo_url?: string | null, description?: string | null }, activities_x_categories: Array<{ __typename?: 'activities_x_categories', category: { __typename?: 'categories', id: string, name: string, level: number } }>, activities_x_media: Array<{ __typename?: 'activities_x_media', media: { __typename?: 'media', id: string, path: string, caption?: string | null } }> };

export type LocationsInViewportQueryVariables = Exact<{
  viewportLatitudeMin: Scalars['numeric'];
  viewportLatitudeMax: Scalars['numeric'];
  viewportLongitudeMin: Scalars['numeric'];
  viewportLongitudeMax: Scalars['numeric'];
}>;


export type LocationsInViewportQuery = { __typename?: 'query_root', locations: Array<{ __typename?: 'locations', id: string, address?: string | null, postcode?: string | null, lat: number, long: number, name: string, outdoors: boolean, directions?: string | null, activities: Array<{ __typename?: 'activities', id: string, name: string, type: Activity_Types_Enum, description: string, referral_url?: string | null, referral_phone?: string | null, referral_email?: string | null, booking_required: boolean, group_size_min?: number | null, group_size_max?: number | null, intensity_level?: Intensity_Levels_Enum | null, experience_level?: Experience_Levels_Enum | null, age_min?: number | null, age_max?: number | null, location: { __typename?: 'locations', id: string, address?: string | null, postcode?: string | null, lat: number, long: number, name: string, outdoors: boolean, directions?: string | null }, host: { __typename?: 'hosts', id: string, name: string, logo_url?: string | null, description?: string | null }, activities_x_categories: Array<{ __typename?: 'activities_x_categories', category: { __typename?: 'categories', id: string, name: string, level: number } }>, activities_x_media: Array<{ __typename?: 'activities_x_media', media: { __typename?: 'media', id: string, path: string, caption?: string | null } }> }> }> };

export const ActivityDataFragmentDoc = gql`
    fragment ActivityData on activities {
  id
  name
  type
  description
  referral_url
  referral_phone
  referral_email
  booking_required
  group_size_min
  group_size_max
  intensity_level
  experience_level
  age_min
  age_max
}
    `;
export const LocationDataFragmentDoc = gql`
    fragment LocationData on locations {
  id
  address
  postcode
  lat
  long
  name
  outdoors
  directions
}
    `;
export const HostDataFragmentDoc = gql`
    fragment HostData on hosts {
  id
  name
  logo_url
  description
}
    `;
export const CategoryDataFragmentDoc = gql`
    fragment CategoryData on categories {
  id
  name
  level
}
    `;
export const MediaDataFragmentDoc = gql`
    fragment MediaData on media {
  id
  path
  caption
}
    `;
export const ActivityListingFragmentDoc = gql`
    fragment ActivityListing on activities {
  ...ActivityData
  location {
    ...LocationData
  }
  host {
    ...HostData
  }
  activities_x_categories {
    category {
      ...CategoryData
    }
  }
  activities_x_media {
    media {
      ...MediaData
    }
  }
}
    ${ActivityDataFragmentDoc}
${LocationDataFragmentDoc}
${HostDataFragmentDoc}
${CategoryDataFragmentDoc}
${MediaDataFragmentDoc}`;
export const ActivityDetailsDocument = gql`
    query ActivityDetails($activityId: uuid!) {
  activities_by_pk(id: $activityId) {
    ...ActivityData
    location {
      ...LocationData
    }
    host {
      ...HostData
      activities_aggregate {
        aggregate {
          count
        }
      }
    }
    activities_x_categories {
      category {
        ...CategoryData
      }
    }
    activities_x_media {
      media {
        ...MediaData
      }
    }
  }
}
    ${ActivityDataFragmentDoc}
${LocationDataFragmentDoc}
${HostDataFragmentDoc}
${CategoryDataFragmentDoc}
${MediaDataFragmentDoc}`;

/**
 * __useActivityDetailsQuery__
 *
 * To run a query within a React component, call `useActivityDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityDetailsQuery({
 *   variables: {
 *      activityId: // value for 'activityId'
 *   },
 * });
 */
export function useActivityDetailsQuery(baseOptions: Apollo.QueryHookOptions<ActivityDetailsQuery, ActivityDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActivityDetailsQuery, ActivityDetailsQueryVariables>(ActivityDetailsDocument, options);
      }
export function useActivityDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivityDetailsQuery, ActivityDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActivityDetailsQuery, ActivityDetailsQueryVariables>(ActivityDetailsDocument, options);
        }
export type ActivityDetailsQueryHookResult = ReturnType<typeof useActivityDetailsQuery>;
export type ActivityDetailsLazyQueryHookResult = ReturnType<typeof useActivityDetailsLazyQuery>;
export type ActivityDetailsQueryResult = Apollo.QueryResult<ActivityDetailsQuery, ActivityDetailsQueryVariables>;
export const LocationsInViewportDocument = gql`
    query LocationsInViewport($viewportLatitudeMin: numeric!, $viewportLatitudeMax: numeric!, $viewportLongitudeMin: numeric!, $viewportLongitudeMax: numeric!) {
  locations(
    where: {lat: {_gte: $viewportLatitudeMin, _lte: $viewportLatitudeMax}, long: {_gte: $viewportLongitudeMin, _lte: $viewportLongitudeMax}}
  ) {
    ...LocationData
    activities {
      ...ActivityListing
    }
  }
}
    ${LocationDataFragmentDoc}
${ActivityListingFragmentDoc}`;

/**
 * __useLocationsInViewportQuery__
 *
 * To run a query within a React component, call `useLocationsInViewportQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocationsInViewportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocationsInViewportQuery({
 *   variables: {
 *      viewportLatitudeMin: // value for 'viewportLatitudeMin'
 *      viewportLatitudeMax: // value for 'viewportLatitudeMax'
 *      viewportLongitudeMin: // value for 'viewportLongitudeMin'
 *      viewportLongitudeMax: // value for 'viewportLongitudeMax'
 *   },
 * });
 */
export function useLocationsInViewportQuery(baseOptions: Apollo.QueryHookOptions<LocationsInViewportQuery, LocationsInViewportQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocationsInViewportQuery, LocationsInViewportQueryVariables>(LocationsInViewportDocument, options);
      }
export function useLocationsInViewportLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocationsInViewportQuery, LocationsInViewportQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocationsInViewportQuery, LocationsInViewportQueryVariables>(LocationsInViewportDocument, options);
        }
export type LocationsInViewportQueryHookResult = ReturnType<typeof useLocationsInViewportQuery>;
export type LocationsInViewportLazyQueryHookResult = ReturnType<typeof useLocationsInViewportLazyQuery>;
export type LocationsInViewportQueryResult = Apollo.QueryResult<LocationsInViewportQuery, LocationsInViewportQueryVariables>;