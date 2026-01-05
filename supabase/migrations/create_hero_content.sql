-- Create table for Hero Section Content
create table if not exists hero_content (
  id bigint primary key generated always as identity,
  title_en text not null,
  title_ar text not null,
  subtitle_en text not null,
  subtitle_ar text not null,
  image_url text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table hero_content enable row level security;

-- Create policies (modify as needed for your auth setup)
create policy "Public Read Access" on hero_content for select using (true);
create policy "Admin Update Access" on hero_content for update using (auth.role() = 'authenticated');
create policy "Admin Insert Access" on hero_content for insert with check (auth.role() = 'authenticated');

-- Seed initial data if empty (Row ID 1)
insert into hero_content (title_en, title_ar, subtitle_en, subtitle_ar, image_url)
select 
  'Command the Road', 
  'تحكم في الطريق', 
  'Kuala Lumpur’s most exclusive fleet. Delivered to your doorstep. Booked in seconds.', 
  'الأسطول الأكثر تميزاً في كوالالمبور. توصيل حتى باب منزلك. حجز في ثوانٍ.',
  '/hero.jpg'
where not exists (select 1 from hero_content);
