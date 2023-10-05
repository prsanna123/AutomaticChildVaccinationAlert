// import React from 'react'

// const About = () => { 
//     return (
//         <div>
//             This is About page
//         </div>
//     )
// }

// export default About
import React from 'react'
import { Link } from 'react-router-dom'
const About = () => { 
    return (
        <div class="container mt-5">
        <h1 class="text-center">Newborn Vaccination Schedule</h1>
        <p>Ensuring your newborn receives the recommended vaccinations is crucial for their health and well-being. Below is a schedule of vaccinations for newborns:</p>

        <h2>1. Hepatitis B Vaccine</h2>
        <p>Given at birth</p>

        <h2>2. DTaP Vaccine (Diphtheria, Tetanus, and Pertussis)</h2>
        <p>Given at 2 months, 4 months, 6 months, 15-18 months, and 4-6 years</p>

        <h2>3. Hib Vaccine (Haemophilus Influenzae type b)</h2>
        <p>Given at 2 months, 4 months, 6 months, and 12-15 months</p>

        <h2>4. Polio Vaccine</h2>
        <p>Given at 2 months, 4 months, 6-18 months, and 4-6 years</p>

        <h2>5. PCV13 Vaccine (Pneumococcal Conjugate)</h2>
        <p>Given at 2 months, 4 months, 6 months, and 12-15 months</p>

        <h2>6. RV Vaccine (Rotavirus)</h2>
        <p>Given at 2 months, 4 months, and 6 months</p>

        <h2>7. MMR Vaccine (Measles, Mumps, and Rubella)</h2>
        <p>Given at 12-15 months and 4-6 years</p>

        <h2>8. Varicella Vaccine (Chickenpox)</h2>
        <p>Given at 12-15 months and 4-6 years</p>

        <h2>9. Hepatitis A Vaccine</h2>
        <p>Given at 12-23 months (2 doses)</p>

        <p>Please consult your pediatrician for the exact schedule and any additional vaccines that may be recommended for your child.</p>
        <Link to="/wel">
<button className='btn btn-secondary'>back</button>
</Link>
    </div>

    )
}

export default About
