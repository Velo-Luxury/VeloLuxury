-- Create journal_posts table
create table public.journal_posts (
  id uuid default gen_random_uuid() primary key,
  title_en text not null,
  title_ar text not null,
  content_en text not null,
  content_ar text not null,
  image_url text not null,
  slug text not null unique,
  published_date date default current_date,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for journal_posts
alter table public.journal_posts enable row level security;

-- Create services table
create table public.services (
  id uuid default gen_random_uuid() primary key,
  title_en text not null,
  title_ar text not null,
  description_en text not null,
  description_ar text not null,
  icon_name text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for services
alter table public.services enable row level security;

-- Create policies (assuming only authenticated service_role or admin users can modify, but for this demo app we might be using anon/public for now depending on how auth is set up. 
-- Based on existing code, there is an "isAdmin" check in the frontend, but Supabase usually requires policies for public access).

-- Allow read access to everyone
create policy "Enable read access for all users" on public.journal_posts for select using (true);
create policy "Enable read access for all users" on public.services for select using (true);

-- Allow all access to service_role (and authenticated users if you want admins to edit via FE)
-- Adjust this based on your actual Auth setup. If you use Supabase Auth, you might check for specific roles.
-- For simplicity in this step, we allow authenticated users to do everything (assuming only admins log in).
create policy "Enable all access for authenticated users" on public.journal_posts for all using (auth.role() = 'authenticated');
create policy "Enable all access for authenticated users" on public.services for all using (auth.role() = 'authenticated');
