import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Video Editor</h4>
                <h5>Bondi Pathshala [Dhaka]</h5>
              </div>
              <h3>Feb 2025 - Jan 2026</h3>
            </div>
            <p>
              Led innovative art projects, including murals and digital designs, mentoring students to elevate creative expression and boosting studio engagement by 25%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Chief Production Officer</h4>
                <h5>Noted Start-up [Dhaka]</h5>
              </div>
              <h3>2022 - Present</h3>
            </div>
            <p>
              Lead photography and videography production, directing shoots and post-production for digital and print media. Manage creative teams, utilizing mirrorless cameras, drones, and editing tools to Optimize budgets and workflows, boosting client engagement by 20%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Assistant Director of Marketing and Designing</h4>
                <h5>BUAPS [Dhaka]</h5>
              </div>
              <h3>Mar 2024 - Dec 2024</h3>
            </div>
            <p>
              Led photography initiatives for university club events, creating visuals for exhibitions and promotional campaigns. Guided members in event and mobile photography, building a digital image archive that boosted club visibility by 30%. Developed marketing materials to align with BUAPS’s artistic vision.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Photographer, Freelance</h4>
                <h5>Self-employed</h5>
              </div>
              <h3>Apr 2016 - Present</h3>
            </div>
            <p>
              Captured professional portraits, events, and commercial imagery using DSLR cameras, completing 100+ shoots with editing in Photoshop and Lightroom. Adapted to trends like computational photography, delivering high-quality visuals for diverse clients with 95% satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
