'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function addNote(formData: FormData) {
    const supabase = await createClient()
    const title = formData.get('title') as string

    if (!title) return

    const { error } = await supabase
        .from('notes')
        .insert({ title })

    if (error) {
        console.error('Error adding note:', error)
        return
    }

    revalidatePath('/')
}
