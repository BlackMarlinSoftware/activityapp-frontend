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
  age_max?: Maybe<Scalars['Int']>;
  age_min?: Maybe<Scalars['Int']>;
  booking_required: Scalars['Boolean'];
  description: Scalars['String'];
  group_size_max?: Maybe<Scalars['Int']>;
  group_size_min?: Maybe<Scalars['Int']>;
  /** An object relationship */
  host: Hosts;
  host_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  location: Locations;
  location_id: Scalars['uuid'];
  name: Scalars['String'];
  physical_intensity_max?: Maybe<Scalars['Int']>;
  physical_intensity_min?: Maybe<Scalars['Int']>;
  referral_email?: Maybe<Scalars['String']>;
  referral_phone?: Maybe<Scalars['String']>;
  referral_url?: Maybe<Scalars['String']>;
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
  physical_intensity_max?: Maybe<Scalars['Float']>;
  physical_intensity_min?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "activities" */
export type Activities_Avg_Order_By = {
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
  physical_intensity_max?: InputMaybe<Order_By>;
  physical_intensity_min?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "activities". All fields are combined with a logical 'AND'. */
export type Activities_Bool_Exp = {
  _and?: InputMaybe<Array<Activities_Bool_Exp>>;
  _not?: InputMaybe<Activities_Bool_Exp>;
  _or?: InputMaybe<Array<Activities_Bool_Exp>>;
  activities_x_categories?: InputMaybe<Activities_X_Categories_Bool_Exp>;
  activities_x_media?: InputMaybe<Activities_X_Media_Bool_Exp>;
  age_max?: InputMaybe<Int_Comparison_Exp>;
  age_min?: InputMaybe<Int_Comparison_Exp>;
  booking_required?: InputMaybe<Boolean_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  group_size_max?: InputMaybe<Int_Comparison_Exp>;
  group_size_min?: InputMaybe<Int_Comparison_Exp>;
  host?: InputMaybe<Hosts_Bool_Exp>;
  host_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  location?: InputMaybe<Locations_Bool_Exp>;
  location_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  physical_intensity_max?: InputMaybe<Int_Comparison_Exp>;
  physical_intensity_min?: InputMaybe<Int_Comparison_Exp>;
  referral_email?: InputMaybe<String_Comparison_Exp>;
  referral_phone?: InputMaybe<String_Comparison_Exp>;
  referral_url?: InputMaybe<String_Comparison_Exp>;
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
  physical_intensity_max?: InputMaybe<Scalars['Int']>;
  physical_intensity_min?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "activities" */
export type Activities_Insert_Input = {
  activities_x_categories?: InputMaybe<Activities_X_Categories_Arr_Rel_Insert_Input>;
  activities_x_media?: InputMaybe<Activities_X_Media_Arr_Rel_Insert_Input>;
  age_max?: InputMaybe<Scalars['Int']>;
  age_min?: InputMaybe<Scalars['Int']>;
  booking_required?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  group_size_max?: InputMaybe<Scalars['Int']>;
  group_size_min?: InputMaybe<Scalars['Int']>;
  host?: InputMaybe<Hosts_Obj_Rel_Insert_Input>;
  host_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  location?: InputMaybe<Locations_Obj_Rel_Insert_Input>;
  location_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  physical_intensity_max?: InputMaybe<Scalars['Int']>;
  physical_intensity_min?: InputMaybe<Scalars['Int']>;
  referral_email?: InputMaybe<Scalars['String']>;
  referral_phone?: InputMaybe<Scalars['String']>;
  referral_url?: InputMaybe<Scalars['String']>;
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
  physical_intensity_max?: Maybe<Scalars['Int']>;
  physical_intensity_min?: Maybe<Scalars['Int']>;
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
  physical_intensity_max?: InputMaybe<Order_By>;
  physical_intensity_min?: InputMaybe<Order_By>;
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
  physical_intensity_max?: Maybe<Scalars['Int']>;
  physical_intensity_min?: Maybe<Scalars['Int']>;
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
  physical_intensity_max?: InputMaybe<Order_By>;
  physical_intensity_min?: InputMaybe<Order_By>;
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
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  booking_required?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
  host?: InputMaybe<Hosts_Order_By>;
  host_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Locations_Order_By>;
  location_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  physical_intensity_max?: InputMaybe<Order_By>;
  physical_intensity_min?: InputMaybe<Order_By>;
  referral_email?: InputMaybe<Order_By>;
  referral_phone?: InputMaybe<Order_By>;
  referral_url?: InputMaybe<Order_By>;
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
  GroupSizeMax = 'group_size_max',
  /** column name */
  GroupSizeMin = 'group_size_min',
  /** column name */
  HostId = 'host_id',
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  Name = 'name',
  /** column name */
  PhysicalIntensityMax = 'physical_intensity_max',
  /** column name */
  PhysicalIntensityMin = 'physical_intensity_min',
  /** column name */
  ReferralEmail = 'referral_email',
  /** column name */
  ReferralPhone = 'referral_phone',
  /** column name */
  ReferralUrl = 'referral_url'
}

/** input type for updating data in table "activities" */
export type Activities_Set_Input = {
  age_max?: InputMaybe<Scalars['Int']>;
  age_min?: InputMaybe<Scalars['Int']>;
  booking_required?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  group_size_max?: InputMaybe<Scalars['Int']>;
  group_size_min?: InputMaybe<Scalars['Int']>;
  host_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  location_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  physical_intensity_max?: InputMaybe<Scalars['Int']>;
  physical_intensity_min?: InputMaybe<Scalars['Int']>;
  referral_email?: InputMaybe<Scalars['String']>;
  referral_phone?: InputMaybe<Scalars['String']>;
  referral_url?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Activities_Stddev_Fields = {
  __typename?: 'activities_stddev_fields';
  age_max?: Maybe<Scalars['Float']>;
  age_min?: Maybe<Scalars['Float']>;
  group_size_max?: Maybe<Scalars['Float']>;
  group_size_min?: Maybe<Scalars['Float']>;
  physical_intensity_max?: Maybe<Scalars['Float']>;
  physical_intensity_min?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "activities" */
export type Activities_Stddev_Order_By = {
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
  physical_intensity_max?: InputMaybe<Order_By>;
  physical_intensity_min?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Activities_Stddev_Pop_Fields = {
  __typename?: 'activities_stddev_pop_fields';
  age_max?: Maybe<Scalars['Float']>;
  age_min?: Maybe<Scalars['Float']>;
  group_size_max?: Maybe<Scalars['Float']>;
  group_size_min?: Maybe<Scalars['Float']>;
  physical_intensity_max?: Maybe<Scalars['Float']>;
  physical_intensity_min?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "activities" */
export type Activities_Stddev_Pop_Order_By = {
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
  physical_intensity_max?: InputMaybe<Order_By>;
  physical_intensity_min?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Activities_Stddev_Samp_Fields = {
  __typename?: 'activities_stddev_samp_fields';
  age_max?: Maybe<Scalars['Float']>;
  age_min?: Maybe<Scalars['Float']>;
  group_size_max?: Maybe<Scalars['Float']>;
  group_size_min?: Maybe<Scalars['Float']>;
  physical_intensity_max?: Maybe<Scalars['Float']>;
  physical_intensity_min?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "activities" */
export type Activities_Stddev_Samp_Order_By = {
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
  physical_intensity_max?: InputMaybe<Order_By>;
  physical_intensity_min?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Activities_Sum_Fields = {
  __typename?: 'activities_sum_fields';
  age_max?: Maybe<Scalars['Int']>;
  age_min?: Maybe<Scalars['Int']>;
  group_size_max?: Maybe<Scalars['Int']>;
  group_size_min?: Maybe<Scalars['Int']>;
  physical_intensity_max?: Maybe<Scalars['Int']>;
  physical_intensity_min?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "activities" */
export type Activities_Sum_Order_By = {
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
  physical_intensity_max?: InputMaybe<Order_By>;
  physical_intensity_min?: InputMaybe<Order_By>;
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
  GroupSizeMax = 'group_size_max',
  /** column name */
  GroupSizeMin = 'group_size_min',
  /** column name */
  HostId = 'host_id',
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  Name = 'name',
  /** column name */
  PhysicalIntensityMax = 'physical_intensity_max',
  /** column name */
  PhysicalIntensityMin = 'physical_intensity_min',
  /** column name */
  ReferralEmail = 'referral_email',
  /** column name */
  ReferralPhone = 'referral_phone',
  /** column name */
  ReferralUrl = 'referral_url'
}

/** aggregate var_pop on columns */
export type Activities_Var_Pop_Fields = {
  __typename?: 'activities_var_pop_fields';
  age_max?: Maybe<Scalars['Float']>;
  age_min?: Maybe<Scalars['Float']>;
  group_size_max?: Maybe<Scalars['Float']>;
  group_size_min?: Maybe<Scalars['Float']>;
  physical_intensity_max?: Maybe<Scalars['Float']>;
  physical_intensity_min?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "activities" */
export type Activities_Var_Pop_Order_By = {
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
  physical_intensity_max?: InputMaybe<Order_By>;
  physical_intensity_min?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Activities_Var_Samp_Fields = {
  __typename?: 'activities_var_samp_fields';
  age_max?: Maybe<Scalars['Float']>;
  age_min?: Maybe<Scalars['Float']>;
  group_size_max?: Maybe<Scalars['Float']>;
  group_size_min?: Maybe<Scalars['Float']>;
  physical_intensity_max?: Maybe<Scalars['Float']>;
  physical_intensity_min?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "activities" */
export type Activities_Var_Samp_Order_By = {
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
  physical_intensity_max?: InputMaybe<Order_By>;
  physical_intensity_min?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Activities_Variance_Fields = {
  __typename?: 'activities_variance_fields';
  age_max?: Maybe<Scalars['Float']>;
  age_min?: Maybe<Scalars['Float']>;
  group_size_max?: Maybe<Scalars['Float']>;
  group_size_min?: Maybe<Scalars['Float']>;
  physical_intensity_max?: Maybe<Scalars['Float']>;
  physical_intensity_min?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "activities" */
export type Activities_Variance_Order_By = {
  age_max?: InputMaybe<Order_By>;
  age_min?: InputMaybe<Order_By>;
  group_size_max?: InputMaybe<Order_By>;
  group_size_min?: InputMaybe<Order_By>;
  physical_intensity_max?: InputMaybe<Order_By>;
  physical_intensity_min?: InputMaybe<Order_By>;
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

/** update columns of table "activities_x_categories" */
export enum Activities_X_Categories_Update_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  CategoryId = 'category_id'
}

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

/** update columns of table "activities_x_media" */
export enum Activities_X_Media_Update_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  MediaId = 'media_id'
}

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

/** update columns of table "categories_x_parent_categories" */
export enum Categories_X_Parent_Categories_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  ParentCategoryId = 'parent_category_id'
}

/** columns and relationships of "hosts" */
export type Hosts = {
  __typename?: 'hosts';
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregate relationship */
  activities_aggregate: Activities_Aggregate;
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
  id?: InputMaybe<Scalars['uuid']>;
  logo_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Hosts_Max_Fields = {
  __typename?: 'hosts_max_fields';
  id?: Maybe<Scalars['uuid']>;
  logo_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Hosts_Min_Fields = {
  __typename?: 'hosts_min_fields';
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
  Id = 'id',
  /** column name */
  LogoUrl = 'logo_url',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "hosts" */
export type Hosts_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  logo_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "hosts" */
export enum Hosts_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LogoUrl = 'logo_url',
  /** column name */
  Name = 'name'
}

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

/** update columns of table "media" */
export enum Media_Update_Column {
  /** column name */
  Caption = 'caption',
  /** column name */
  Id = 'id',
  /** column name */
  Path = 'path'
}

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
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "categories_x_parent_categories" */
  delete_categories_x_parent_categories?: Maybe<Categories_X_Parent_Categories_Mutation_Response>;
  /** delete single row from the table: "categories_x_parent_categories" */
  delete_categories_x_parent_categories_by_pk?: Maybe<Categories_X_Parent_Categories>;
  /** delete data from the table: "hosts" */
  delete_hosts?: Maybe<Hosts_Mutation_Response>;
  /** delete single row from the table: "hosts" */
  delete_hosts_by_pk?: Maybe<Hosts>;
  /** delete data from the table: "locations" */
  delete_locations?: Maybe<Locations_Mutation_Response>;
  /** delete single row from the table: "locations" */
  delete_locations_by_pk?: Maybe<Locations>;
  /** delete data from the table: "media" */
  delete_media?: Maybe<Media_Mutation_Response>;
  /** delete single row from the table: "media" */
  delete_media_by_pk?: Maybe<Media>;
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
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "categories_x_parent_categories" */
  insert_categories_x_parent_categories?: Maybe<Categories_X_Parent_Categories_Mutation_Response>;
  /** insert a single row into the table: "categories_x_parent_categories" */
  insert_categories_x_parent_categories_one?: Maybe<Categories_X_Parent_Categories>;
  /** insert data into the table: "hosts" */
  insert_hosts?: Maybe<Hosts_Mutation_Response>;
  /** insert a single row into the table: "hosts" */
  insert_hosts_one?: Maybe<Hosts>;
  /** insert data into the table: "locations" */
  insert_locations?: Maybe<Locations_Mutation_Response>;
  /** insert a single row into the table: "locations" */
  insert_locations_one?: Maybe<Locations>;
  /** insert data into the table: "media" */
  insert_media?: Maybe<Media_Mutation_Response>;
  /** insert a single row into the table: "media" */
  insert_media_one?: Maybe<Media>;
  /** update data of the table: "activities" */
  update_activities?: Maybe<Activities_Mutation_Response>;
  /** update single row of the table: "activities" */
  update_activities_by_pk?: Maybe<Activities>;
  /** update data of the table: "activities_x_categories" */
  update_activities_x_categories?: Maybe<Activities_X_Categories_Mutation_Response>;
  /** update single row of the table: "activities_x_categories" */
  update_activities_x_categories_by_pk?: Maybe<Activities_X_Categories>;
  /** update data of the table: "activities_x_media" */
  update_activities_x_media?: Maybe<Activities_X_Media_Mutation_Response>;
  /** update single row of the table: "activities_x_media" */
  update_activities_x_media_by_pk?: Maybe<Activities_X_Media>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update data of the table: "categories_x_parent_categories" */
  update_categories_x_parent_categories?: Maybe<Categories_X_Parent_Categories_Mutation_Response>;
  /** update single row of the table: "categories_x_parent_categories" */
  update_categories_x_parent_categories_by_pk?: Maybe<Categories_X_Parent_Categories>;
  /** update data of the table: "hosts" */
  update_hosts?: Maybe<Hosts_Mutation_Response>;
  /** update single row of the table: "hosts" */
  update_hosts_by_pk?: Maybe<Hosts>;
  /** update data of the table: "locations" */
  update_locations?: Maybe<Locations_Mutation_Response>;
  /** update single row of the table: "locations" */
  update_locations_by_pk?: Maybe<Locations>;
  /** update data of the table: "media" */
  update_media?: Maybe<Media_Mutation_Response>;
  /** update single row of the table: "media" */
  update_media_by_pk?: Maybe<Media>;
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
export type Mutation_RootDelete_HostsArgs = {
  where: Hosts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hosts_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Mutation_RootUpdate_MediaArgs = {
  _set?: InputMaybe<Media_Set_Input>;
  where: Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Media_By_PkArgs = {
  _set?: InputMaybe<Media_Set_Input>;
  pk_columns: Media_Pk_Columns_Input;
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
  /** fetch data from the table: "hosts" */
  hosts: Array<Hosts>;
  /** fetch aggregated fields from the table: "hosts" */
  hosts_aggregate: Hosts_Aggregate;
  /** fetch data from the table: "hosts" using primary key columns */
  hosts_by_pk?: Maybe<Hosts>;
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

export type Subscription_Root = {
  __typename?: 'subscription_root';
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
  /** fetch data from the table: "hosts" */
  hosts: Array<Hosts>;
  /** fetch aggregated fields from the table: "hosts" */
  hosts_aggregate: Hosts_Aggregate;
  /** fetch data from the table: "hosts" using primary key columns */
  hosts_by_pk?: Maybe<Hosts>;
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

export type HostDataFragment = { __typename?: 'hosts', id: string, name: string, logo_url?: string | null };

export type CategoryDataFragment = { __typename?: 'categories', id: string, name: string, level: number };

export type MediaDataFragment = { __typename?: 'media', id: string, path: string, caption?: string | null };

export type LocationDataFragment = { __typename?: 'locations', id: string, address?: string | null, postcode?: string | null, lat: number, long: number, name: string, outdoors: boolean, directions?: string | null };

export type ActivityDataFragment = { __typename?: 'activities', id: string, name: string, description: string, referral_url?: string | null, referral_phone?: string | null, referral_email?: string | null, booking_required: boolean, group_size_min?: number | null, group_size_max?: number | null, physical_intensity_min?: number | null, physical_intensity_max?: number | null, age_min?: number | null, age_max?: number | null, location: { __typename?: 'locations', id: string, address?: string | null, postcode?: string | null, lat: number, long: number, name: string, outdoors: boolean, directions?: string | null }, host: { __typename?: 'hosts', id: string, name: string, logo_url?: string | null }, activities_x_categories: Array<{ __typename?: 'activities_x_categories', category: { __typename?: 'categories', id: string, name: string, level: number } }>, activities_x_media: Array<{ __typename?: 'activities_x_media', media: { __typename?: 'media', id: string, path: string, caption?: string | null } }> };

export type LocationsInRadiusQueryVariables = Exact<{
  latitude?: InputMaybe<Scalars['numeric']>;
  longitude?: InputMaybe<Scalars['numeric']>;
  radius?: InputMaybe<Scalars['Int']>;
}>;


export type LocationsInRadiusQuery = { __typename?: 'query_root', locations_in_radius: Array<{ __typename?: 'locations', id: string, address?: string | null, postcode?: string | null, lat: number, long: number, name: string, outdoors: boolean, directions?: string | null, activities: Array<{ __typename?: 'activities', id: string, name: string, description: string, referral_url?: string | null, referral_phone?: string | null, referral_email?: string | null, booking_required: boolean, group_size_min?: number | null, group_size_max?: number | null, physical_intensity_min?: number | null, physical_intensity_max?: number | null, age_min?: number | null, age_max?: number | null, location: { __typename?: 'locations', id: string, address?: string | null, postcode?: string | null, lat: number, long: number, name: string, outdoors: boolean, directions?: string | null }, host: { __typename?: 'hosts', id: string, name: string, logo_url?: string | null }, activities_x_categories: Array<{ __typename?: 'activities_x_categories', category: { __typename?: 'categories', id: string, name: string, level: number } }>, activities_x_media: Array<{ __typename?: 'activities_x_media', media: { __typename?: 'media', id: string, path: string, caption?: string | null } }> }> }> };

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
export const ActivityDataFragmentDoc = gql`
    fragment ActivityData on activities {
  id
  name
  description
  referral_url
  referral_phone
  referral_email
  booking_required
  group_size_min
  group_size_max
  physical_intensity_min
  physical_intensity_max
  age_min
  age_max
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
    ${LocationDataFragmentDoc}
${HostDataFragmentDoc}
${CategoryDataFragmentDoc}
${MediaDataFragmentDoc}`;
export const LocationsInRadiusDocument = gql`
    query LocationsInRadius($latitude: numeric, $longitude: numeric, $radius: Int) {
  locations_in_radius(
    args: {location_lat: $latitude, location_long: $longitude, radius: $radius}
  ) {
    ...LocationData
    activities {
      ...ActivityData
    }
  }
}
    ${LocationDataFragmentDoc}
${ActivityDataFragmentDoc}`;

/**
 * __useLocationsInRadiusQuery__
 *
 * To run a query within a React component, call `useLocationsInRadiusQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocationsInRadiusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocationsInRadiusQuery({
 *   variables: {
 *      latitude: // value for 'latitude'
 *      longitude: // value for 'longitude'
 *      radius: // value for 'radius'
 *   },
 * });
 */
export function useLocationsInRadiusQuery(baseOptions?: Apollo.QueryHookOptions<LocationsInRadiusQuery, LocationsInRadiusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocationsInRadiusQuery, LocationsInRadiusQueryVariables>(LocationsInRadiusDocument, options);
      }
export function useLocationsInRadiusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocationsInRadiusQuery, LocationsInRadiusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocationsInRadiusQuery, LocationsInRadiusQueryVariables>(LocationsInRadiusDocument, options);
        }
export type LocationsInRadiusQueryHookResult = ReturnType<typeof useLocationsInRadiusQuery>;
export type LocationsInRadiusLazyQueryHookResult = ReturnType<typeof useLocationsInRadiusLazyQuery>;
export type LocationsInRadiusQueryResult = Apollo.QueryResult<LocationsInRadiusQuery, LocationsInRadiusQueryVariables>;