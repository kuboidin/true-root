const user = {
    name: 'True_Root_Subscription',
    definition: `create table public."True_Root_Subscription" (
    id bigint generated by default as identity not null,
    created_at timestamp with time zone not null default now(),
    name character varying null,
    active boolean not null default true,
    deactivated_on timestamp without time zone null,
    frequency character varying not null default 'weekly'::character varying,
    email character varying not null,
    interest jsonb null,
    constraint True_Root_Subscription_pkey primary key (id),
    constraint True_Root_Subscription_user_id_fkey foreign key (user_id) references "User" (id) on update cascade on delete cascade
  ) tablespace pg_default;`
};

export default user;
