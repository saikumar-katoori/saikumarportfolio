import React from 'react';
import EducationCard from './EducationCard';
import '../styles/education-list.css';

const EXAMPLE = [
  { title: "Vasishta High School", degree: "High School", duration: "2021", scoreLabel: "CGPA", score: "10.0" , t1:"Recieved Best Student of the Year - 2017", t2:"Top 5% in Batch" },
  { title: "NVB Jr. College", degree: "Intermediate (MPC)", duration: "2021 – 2023", scoreLabel: "Percentage", score: "93.3%", t1:"Excelled in Academics and Competitive Exams", t2:"Top 10% in Batch" },
  { title: "Anurag University", degree: "B.Tech (AI)", duration: "2023 – 2027", scoreLabel: "CGPA", score: "9.08",t1:"Been into multiple clubs and projects", t2:"Top 5% in Batch", current: true }
];

export default function EducationList({items = EXAMPLE}){
  return (
    <section id="education" className="edu-list-section" aria-labelledby="education-list-heading">
      <div className="container">
        <h2 id="education-list-heading" className="hero-heading">Education</h2>
      </div>

      <div className="container">
        <div className="edu-grid">
          {items.map((it, i)=> (
            <EducationCard key={`${it.title}-${i}`} {...it} />
          ))}
        </div>
      </div>
    </section>
  )
}
