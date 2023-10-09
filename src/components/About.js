// // import React from 'react'

// // const About = () => { 
// //     return (
// //         <div>
// //             This is About page
// //         </div>
// //     )
// // }

// // export default About
// import React from 'react'
// import { Link } from 'react-router-dom'
// const About = () => {
//     return (
//         <div class="container mt-5">
//             <h1 class="text-center">Newborn Vaccination Schedule</h1>
//             <p>Ensuring your newborn receives the recommended vaccinations is crucial for their health and well-being. Below is a schedule of vaccinations for newborns:</p>

//             <h5>1. Hepatitis B Vaccine</h5>
//             <p>Given at birth. Hepatitis B vaccine is available for all age groups. The hepatitis B vaccine is recommended for all infants, all children or adolescents younger than 19 years of age who have not been vaccinated, all adults age 19 through 59 years, and adults age 60 years or older with risk factors for hepatitis B infection. Adults who are 60 years or older without known risk factors for hepatitis B may also receive hepatitis B vaccine.</p>

//             <h5>2. DTaP Vaccine (Diphtheria, Tetanus, and Pertussis)</h5>
//             <p>Given at 2 months, 4 months, 6 months, 15-18 months, and 4-6 years. DTaP may be given as a stand-alone vaccine, or as part of a combination vaccine (a type of vaccine that combines more than one vaccine together into one shot).DTaP is only for children younger than 7 years old. Different vaccines against tetanus, diphtheria, and pertussis (Tdap and Td) are available for older children, adolescents, and adults.</p>

//             <h5>3. Hib Vaccine (Haemophilus Influenzae type b)</h5>
//             <p>Given at 2 months, 4 months, 6 months, and 12-15 months . Vaccines are available that can help prevent Haemophilus influenzae type b or Hib disease. These vaccines do not provide protection against other types of Haemophilus influenzae disease. Haemophilus influenzae disease is any type of infection caused by Haemophilus influenzae bacteria.</p>

//             <h5>4. Polio Vaccine</h5>
//             <p>Given at 2 months, 4 months, 6-18 months, and 4-6 years . Polio, or poliomyelitis, is a disabling and potentially deadly disease. It is caused by the poliovirus. The virus spreads from person to person and can infect a person’s spinal cord, causing paralysis (can’t move parts of the body).

//                 There is no cure for polio, but it can be prevented with safe and effective vaccination. Inactivated polio vaccine (IPV) is the only polio vaccine that has been given in the United States since 2000. It is given by shot in the arm or leg, depending on the person’s age. Oral polio vaccine (OPV) is used in other countries.</p>

//             <h5>5. PCV13 Vaccine (Pneumococcal Conjugate)</h5>
//             <p>Given at 2 months, 4 months, 6 months, and 12-15 months. Prevenar 13 Vaccine is used to prevent pneumonia, meningitis, blood and, ear infections. The vaccine helps the body make its own antibodies which protects you against these diseases. It only protects against disease caused by the thirteen strains of Streptococcus pneumoniae bacteria included in the vaccine.</p>

//             <h5>6. RV Vaccine (Rotavirus)</h5>
//             <p>Given at 2 months, 4 months, and 6 months .Rotavirus spreads easily among infants and young children. The virus can cause severe watery diarrhea, vomiting, fever, and abdominal pain. Children who get rotavirus disease can become dehydrated and may need to be hospitalized.

//                 CDC recommends that infants get rotavirus vaccine to protect against rotavirus disease. Two rotavirus vaccines are currently licensed for infants in the United States. Starting at 2 months old, infants should get two or three doses depending on the brand of rotavirus vaccine.</p>

//             <h5>7. MMR Vaccine (Measles, Mumps, and Rubella)</h5>
//             <p>Given at 12-15 months and 4-6 years. CDC recommends that people get MMR vaccine to protect against measles, mumps, and rubella. Children should get two doses of MMR vaccine, starting with the first dose at 12 to 15 months of age, and the second dose at 4 through 6 years of age. Teens and adults should also be up to date on their MMR vaccination. Two MMR vaccines are available for use in the United States, M-M-R II and PRIORIX.  M-M-R II and PRIORIX are fully interchangeable for all indications for which MMR vaccination is recommended. </p>

//             <h5>8. Varicella Vaccine (Chickenpox)</h5>
//             <p>Given at 12-15 months and 4-6 years. Chickenpox is a very contagious disease caused by the varicella-zoster virus (VZV). It causes a blister-like rash, itching, tiredness, and fever. Chickenpox used to be very common in the United States. Each year, chickenpox caused about 4 million cases, about 10,600 hospitalizations and 100 to 150 deaths.

//                 Two doses of the vaccine are about 90% effective at preventing chickenpox. When you get vaccinated, you protect yourself and others in your community. This is especially important for people who cannot get vaccinated, such as those with weakened immune systems or pregnant women.</p>

//             <h5>9. Hepatitis A Vaccine</h5>
//             <p>Given at 12-23 months (2 doses). Hepatitis A is a liver disease caused by the hepatitis A virus (HAV). Hepatitis A can affect anyone. Vaccines are available for long-term prevention of HAV infection in persons 1 year of age and older. Good personal hygiene and proper sanitation can also help prevent the spread of hepatitis A.</p>

//             <p>Please consult your pediatrician for the exact schedule and any additional vaccines that may be recommended for your child.</p>
//             <Link to="/wel">
//                 <button className='btn btn-secondary'>back</button>
//             </Link>
//         </div>

//     )
// }

// export default About
import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './about.css'; // Import the CSS file

const About = () => {
    const vaccines = [
        {
            name: "Hepatitis B Vaccine",
            schedule: "Given at birth.",
            description: "Hepatitis B vaccine is available for all age groups. The hepatitis B vaccine is recommended for all infants, all children or adolescents younger than 19 years of age who have not been vaccinated, all adults age 19 through 59 years, and adults age 60 years or older with risk factors for hepatitis B infection. Adults who are 60 years or older without known risk factors for hepatitis B may also receive hepatitis B vaccine.",
        },
        {
            name: "DTaP Vaccine (Diphtheria, Tetanus, and Pertussis)",
            schedule: "Given at 2 months, 4 months, 6 months, 15-18 months, and 4-6 years.",
            description: "DTaP may be given as a stand-alone vaccine, or as part of a combination vaccine (a type of vaccine that combines more than one vaccine together into one shot).DTaP is only for children younger than 7 years old. Different vaccines against tetanus, diphtheria, and pertussis (Tdap and Td) are available for older children, adolescents, and adults.",
        },
        {
            name: "Hib Vaccine (Haemophilus Influenzae type b)",
            schedule: "Given at 2 months, 4 months, 6 months, and 12-15 months.",
            description: "Vaccines are available that can help prevent Haemophilus influenzae type b or Hib disease. These vaccines do not provide protection against other types of Haemophilus influenzae disease. Haemophilus influenzae disease is any type of infection caused by Haemophilus influenzae bacteria.",
        },
        {
            name: "Polio Vaccine",
            schedule: "Given at 2 months, 4 months, 6 months, and 12-15 months.",
            description: " Polio, or poliomyelitis, is a disabling and potentially deadly disease. It is caused by the poliovirus. The virus spreads from person to person and can infect a person’s spinal cord, causing paralysis (can’t move parts of the body).There is no cure for polio, but it can be prevented with safe and effective vaccination. Inactivated polio vaccine (IPV) is the only polio vaccine that has been given in the United States since 2000. It is given by shot in the arm or leg, depending on the person’s age. Oral polio vaccine (OPV) is used in other countries.",
        },
        {
            name: "PCV13 Vaccine (Pneumococcal Conjugate)",
            schedule: "Given at 2 months, 4 months, 6 months, and 12-15 months.",
            description: "Prevenar 13 Vaccine is used to prevent pneumonia, meningitis, blood and, ear infections. The vaccine helps the body make its own antibodies which protects you against these diseases. It only protects against disease caused by the thirteen strains of Streptococcus pneumoniae bacteria included in the vaccine.",
        },
        {
            name: "RV Vaccine (Rotavirus)",
            schedule: "Given at 2 months, 4 months, 6 months.",
            description: "Rotavirus spreads easily among infants and young children. The virus can cause severe watery diarrhea, vomiting, fever, and abdominal pain. Children who get rotavirus disease can become dehydrated and may need to be hospitalized. CDC recommends that infants get rotavirus vaccine to protect against rotavirus disease. Two rotavirus vaccines are currently licensed for infants in the United States. Starting at 2 months old, infants should get two or three doses depending on the brand of rotavirus vaccine.",
        },
        {
            name: "MMR Vaccine (Measles, Mumps, and Rubella)",
            schedule: "Given at 12-15 months and 4-6 years.",
            description: " CDC recommends that people get MMR vaccine to protect against measles, mumps, and rubella. Children should get two doses of MMR vaccine, starting with the first dose at 12 to 15 months of age, and the second dose at 4 through 6 years of age. Teens and adults should also be up to date on their MMR vaccination. Two MMR vaccines are available for use in the United States, M-M-R II and PRIORIX.  M-M-R II and PRIORIX are fully interchangeable for all indications for which MMR vaccination is recommended.",
        },
        {
            name: "Varicella Vaccine (Chickenpox)",
            schedule: "Given at 2 months, 4 months, 6 months, and 12-15 months.",
            description: "Given at 12-15 months and 4-6 years. Chickenpox is a very contagious disease caused by the varicella-zoster virus (VZV). It causes a blister-like rash, itching, tiredness, and fever. Chickenpox used to be very common in the United States. Each year, chickenpox caused about 4 million cases, about 10,600 hospitalizations and 100 to 150 deaths.Two doses of the vaccine are about 90% effective at preventing chickenpox. When you get vaccinated, you protect yourself and others in your community. This is especially important for people who cannot get vaccinated, such as those with weakened immune systems or pregnant women. ",
        },
        {
            name: "Hepatitis A Vaccine",
            schedule: "Given at 2 months, 4 months, 6 months, and 12-15 months.",
            description: "Given at 12-23 months (2 doses). Hepatitis A is a liver disease caused by the hepatitis A virus (HAV). Hepatitis A can affect anyone. Vaccines are available for long-term prevention of HAV infection in persons 1 year of age and older. Good personal hygiene and proper sanitation can also help prevent the spread of hepatitis A.",
        },
        // Add more vaccine objects here for the rest of the vaccines
    ];

    return (
        <div className="container mt-5 about">
            <br/>
            <h1 className="text-center">Newborn Vaccination Schedule</h1>
            <p className='custom'>Ensuring your newborn receives the recommended vaccinations is crucial for their health and well-being</p>

            {vaccines.map((vaccine, index) => (
                <Card key={index} className="mb-3">
                    <Card.Body className='custom'>
                        <Card.Title>{vaccine.name}</Card.Title>
                        <Card.Text>
                            <strong>Schedule:</strong> {vaccine.schedule}<br />
                            <strong>Description:</strong>{vaccine.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}

            <p>Please consult your pediatrician for the exact schedule and any additional vaccines that may be recommended for your child.</p>
            <Link to="/wel">
                <button className="btn btn-light justify-content-end">Back</button>
            </Link>
            <br/>
            <div></div>
        </div>
    );
}

export default About;
