import { createClient } from '@/utils/supabase/server'
import { addNote } from './actions'

export default async function Home() {
  const supabase = await createClient()

  // Fetch notes from Supabase
  const { data: notes, error } = await supabase
    .from('notes')
    .select('*')
    .order('id', { ascending: false })

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden md:max-w-2xl p-8 border border-slate-100">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Supabase Notes</h1>
          <p className="mt-2 text-slate-500">A simple Next.js + Supabase demo</p>
        </div>

        <form action={addNote} className="mb-12">
          <div className="flex gap-4">
            <input
              type="text"
              name="title"
              placeholder="Write a new note..."
              required
              className="block w-full rounded-xl border-0 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all"
            />
            <button
              type="submit"
              className="inline-flex items-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
            >
              Add
            </button>
          </div>
        </form>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4 px-2">Recent Notes</h2>
          {error && (
            <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm border border-red-100">
              Error fetching notes: {error.message}
            </div>
          )}

          {!notes || notes.length === 0 ? (
            <p className="text-center py-10 text-slate-400 italic">No notes yet. Add one above!</p>
          ) : (
            <ul className="divide-y divide-slate-100">
              {notes.map((note: any) => (
                <li key={note.id} className="py-4 px-2 hover:bg-slate-50 transition-colors rounded-lg group">
                  <span className="text-slate-700 group-hover:text-slate-900">{note.title}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-12 text-center text-slate-400 text-sm">
        <p>Built with Next.js & Supabase</p>
      </div>
    </div>
  )
}
