import React from 'react'
import './Programs.css'
import program_1 from '../../Assets/home4.jpg'
import program_2 from '../../Assets/home5.jpg'
import program_3 from '../../Assets/home6.jpg'

const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <div className="programinner">
        <img src={program_1} alt="" />
        <div className="caption">
          <p>Research Guidance / Mentoring</p>
        </div>
        </div>
        <p className='underimgtext'>Research Mentoring at all stages of your Research & Publications – Rewriting, Translating your ideas, copyediting, formatting or plagiarism check.</p>
      </div>
      <div className='program'>
        <div className="programinner">
        <img src={program_2} alt="" />
        <div className="caption">
          <p>Across the Industries / Subjects</p>
        </div>
        </div>
        <p className='underimgtext'>Our team of PhD Experts has capabilities and skills to handle wide range of subjects from Arts & Literature, Engineering to Life Science. Explore More.</p>
      </div>
      <div className='program'>
        <div className="programinner">
        <img src={program_3} alt="" />
        <div className="caption">
          <p>Statistics is Our Core</p>
        </div>
        </div>
        <p className='underimgtext'>Statistics is the core for any research & our statisticians are available at every stage of your research design (planning, collection, analysis & Interpretation).</p>
      </div>
      
    </div>
  )
}

export default Programs
