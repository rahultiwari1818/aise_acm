
export default function WhoCanAttend() {
    const TOTAL_SEATS = import.meta.env.VITE_TOTAL_SEATS;

  return (
    <div className="my-6 p-4 border rounded-lg shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-3">Who Can Attend</h2>
      <p className="mb-3">
        <span className="font-black pr-2">
Workshop is open to industry professionals, faculties and postgraduate students/research scholars, 
       from all Institutes and universities.  
        </span>
         Preference will be 
        given to the applicants having interest towards Software Engineering (SE), SE for AI, and SE Research.
      </p>
      <p className="mb-3 font-bold">
        Total number of seats is limited to {TOTAL_SEATS}. The participants will be selected based on their 
        academic/research credentials and on a first-come-first-serve basis.
      </p>
      <p className="mb-3">
        if the selected participants need accomodation in the university hostels (boys and girls seperately).
        please fill out your details in the accomodation page.
      </p>
    </div>
  )
}
