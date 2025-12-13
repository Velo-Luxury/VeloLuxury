
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xgrgdwkxqygkimilcsuk.supabase.co';
const supabaseServiceRole = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhncmdkd2t4cXlna2ltaWxjc3VrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzYzNDIzMCwiZXhwIjoyMDc5MjEwMjMwfQ._f8pmpun0lqU6htN9PhW6h-fNMY3lfJUZTGBZAw0eMk';

const supabase = createClient(supabaseUrl, supabaseServiceRole);

async function debugSchema() {
    console.log('Fetching one car to check columns...');

    const { data, error } = await supabase.from('cars').select('*').limit(1);

    if (error) {
        console.error('Error fetching cars:', error);
        return;
    }

    if (data && data.length > 0) {
        const car = data[0];
        console.log('Keys found on car object:', Object.keys(car));
        console.log('--- Detail check ---');
        console.log('isVisible:', car.isVisible);
        console.log('isvisible:', car.isvisible);
        console.log('is_visible:', car.is_visible); // checking snake_case too
        console.log('isFeatured:', car.isFeatured);
        console.log('isfeatured:', car.isfeatured);
    } else {
        console.log('No cars found to check.');
    }

    console.log('Attempting a test update...');
    // Try to update the first car found
    if (data && data.length > 0) {
        const id = data[0].id;
        const updatePayload = { isVisible: true, isFeatured: false };
        console.log('Sending payload:', updatePayload);

        const { error: updateError } = await supabase.from('cars').update(updatePayload).eq('id', id);
        if (updateError) {
            console.error("Update FAILED:", updateError);
        } else {
            console.log("Update SUCCESSFUL with isVisible/isFeatured");
        }

        // Try lowercase payload if first failed?
        const updatePayloadLower = { isvisible: true, isfeatured: false };
        console.log('Sending LOWERCASE payload:', updatePayloadLower);
        const { error: updateErrorLower } = await supabase.from('cars').update(updatePayloadLower).eq('id', id);
        if (updateErrorLower) {
            console.error("Update Lowercase FAILED:", updateErrorLower);
        } else {
            console.log("Update Lowercase SUCCESSFUL");
        }
    }
}

debugSchema();
