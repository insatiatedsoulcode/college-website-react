// src/pages/AboutPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Keep the imported images
import img1 from '../assets/images/1.JPG';
import img2 from '../assets/images/CDKJ9333.JPG';
import img3 from '../assets/images/check.jpg';
import img4 from '../assets/images/CIKY9429.JPG';
import img5 from '../assets/images/2.JPG';
import img6 from '../assets/images/3.JPG';
import img7 from '../assets/images/4.JPG';
import img8 from '../assets/images/DHUF9053.JPG';
import img9 from '../assets/images/DXKP5903.JPG';
import img10 from '../assets/images/EBJV1548.JPG';

const slideshowImages = [
  { id: 1, src: img1, alt: 'Campus event' },
  { id: 2, src: img2, alt: 'CDKJ9333' },
  { id: 3, src: img3, alt: 'Check image' },
  { id: 4, src: img4, alt: 'CIKY9429' },
  { id: 5, src: img5, alt: 'Arts department card image' },
  { id: 6, src: img6, alt: 'Business department card image' },
  { id: 7, src: img7, alt: 'Computer Science department card image' },
  { id: 8, src: img8, alt: 'DHUF9053' },
  { id: 9, src: img9, alt: 'DXKP5903' },
  { id: 10, src: img10, alt: 'EBJV1548' },
];

function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    // Main page div - Note: the .container class is now applied *inside*
    <div>
      {/* Heading remains within the overall page flow */}
      {/* We apply container padding manually if needed, or rely on main .container padding */}
      <div className="container" style={{ paddingBottom: '0' }}> {/* Use container for heading padding */}
         <h2>Uday Pratap College</h2>
      </div>

      {/* Slideshow Container - Placed OUTSIDE the inner .container for full width */}
      <div className="about-slideshow-container">
        <img
            key={slideshowImages[currentImageIndex].id}
            src={slideshowImages[currentImageIndex].src}
            alt={slideshowImages[currentImageIndex].alt}
            className="about-slideshow-image"
        />
      </div>

      {/* Wrap the rest of the content in a container for padding */}
      <div className="container" style={{ paddingTop: '25px' }}> {/* Add padding above content */}
        <p style={{ fontStyle: 'italic', marginBottom: '20px' }}>
          Welcome to Uday Pratap College, where tradition meets innovation to shape future leaders.
        </p>

        <h3>Our Mission & Vision</h3>
        <p>
        Our Vision
        To be a beacon of transformative education, rooted in Indian ethos and global understanding,
        Nurturing generations of thought leaders, innovators, and compassionate citizens,
        Who will champion sustainable development, social justice, and national progress.
        We envision Uday Pratap College as a distinguished center of academic excellence,
        Renowned for its commitment to holistic student development and pioneering research,
        Especially in fields pertinent to our agrarian heritage and contemporary scientific advancements.

        Our aspiration is to cultivate an environment where knowledge is not merely acquired, but created,
        Where curiosity is ignited, critical thinking is honed, and creativity flourishes.
        We see a future where our alumni are catalysts for positive change,
        Leading with integrity, wisdom, and a profound sense of service to humanity.

        Uday Pratap College will be a vibrant hub of intellectual discourse,
        Fostering interdisciplinary collaboration and a culture of lifelong learning.
        We aim to be a model institution, seamlessly blending tradition with modernity,
        Preserving our rich cultural legacy while embracing innovation and future-oriented pedagogies.

        Our campus will be a sanctuary for diverse talents and perspectives,
        Promoting inclusivity, equity, and mutual respect among all stakeholders.
        We strive to be a globally recognized institution,
        Attracting scholars and students from across the nation and the world,
        Contributing significantly to the global pool of knowledge and human resource.

        We envision our graduates as well-rounded individuals,
        Possessing not only domain expertise but also strong ethical foundations,
        Effective communication skills, and a deep-seated commitment to societal well-being.
        They will be adaptable, resilient, and prepared to navigate the complexities of an ever-changing world.

        Our commitment extends to the local community of Varanasi and beyond,
        Aspiring to be an active partner in regional development,
        Through extension activities, knowledge sharing, and community-centric research.
        We see Uday Pratap College as a vital contributor to India's journey towards becoming a knowledge superpower,
        Steadfast in its dedication to excellence, service, and the pursuit of truth.

        To be an institution where heritage inspires progress,
        Where learning empowers, and where every individual is enabled to reach their fullest potential.
        We look towards a horizon where Uday Pratap College stands tall,
        As a symbol of educational eminence and societal impact,
        Illuminating minds and shaping a brighter future for all.
        This is our enduring vision, our guiding star.</p>
        <p>
        Our mission is to provide accessible, high-quality education across diverse disciplines,
        Including arts, sciences, commerce, agriculture, and emerging fields,
        Empowering students from all sections of society with knowledge, skills, and values.
        We are committed to fostering an intellectually stimulating and supportive learning environment,
        That encourages academic rigor, critical inquiry, and innovative thinking.

        To achieve our vision, we will:

        Deliver Academic Excellence:

        Implement dynamic and relevant curricula, benchmarked against global standards.

        Employ innovative teaching methodologies and cutting-edge educational technologies.

        Promote a culture of continuous faculty development and scholarly pursuit.

        Conduct fair and transparent assessment systems that evaluate true understanding.

        Offer a wide array of academic programs catering to diverse interests and career aspirations.

        Strengthen library resources, laboratories, and IT infrastructure.

        Encourage student participation in seminars, workshops, and conferences.

        Promote Holistic Development:

        Integrate co-curricular and extra-curricular activities for overall personality development.

        Nurture leadership qualities, teamwork, and communication skills.

        Instill ethical values, social responsibility, and civic awareness.

        Provide robust student support services, including mentoring and counseling.

        Encourage participation in sports, arts, and cultural activities.

        Foster a sense of discipline, dedication, and perseverance.

        Develop emotional intelligence and interpersonal skills.

        Advance Research and Innovation:

        Cultivate a vibrant research ecosystem that addresses societal needs and advances knowledge.

        Encourage faculty and students to undertake original research and publish scholarly work.

        Foster interdisciplinary research collaborations, both nationally and internationally.

        Promote innovation, entrepreneurship, and the application of knowledge.

        Seek funding and establish partnerships for research projects.

        Disseminate research findings for the benefit of academia and society.

        Support the development of research infrastructure and facilities.

        Ensure Inclusivity and Equity:

        Provide equal opportunities for all students, irrespective of background.

        Create a welcoming, safe, and inclusive campus environment.

        Implement policies and practices that promote diversity and combat discrimination.

        Offer financial aid and scholarships to deserving and underprivileged students.

        Address the specific needs of differently-abled students.

        Promote gender equality and empower women in education.

        Strengthen Community Engagement:

        Actively engage with the local community through extension programs and outreach activities.

        Apply academic knowledge to solve real-world problems in the region.

        Foster partnerships with local industries, government bodies, and NGOs.

        Promote awareness on issues of social relevance, such as environmental sustainability and public health.

        Contribute to the socio-economic development of Varanasi and surrounding areas.

        Encourage volunteerism and community service among students and staff.

        Cultivate National and Global Perspectives:

        Instill a sense of patriotism and dedication to national development.

        Promote an understanding of India's rich cultural heritage and diversity.

        Encourage awareness of global issues and international best practices.

        Facilitate student and faculty exchange programs with other institutions.

        Integrate global perspectives into the curriculum and campus life.

        Develop Employability and Entrepreneurial Skills:

        Equip students with the skills and knowledge required for successful careers.

        Offer career counseling, placement services, and industry-relevant training.

        Promote entrepreneurial spirit and provide support for student startups.

        Bridge the gap between academia and industry through internships and collaborations.

        Enhance soft skills, digital literacy, and vocational competencies.

        Uphold Institutional Integrity and Governance:

        Maintain the highest standards of transparency, accountability, and ethical conduct.

        Ensure efficient and effective institutional management and administration.

        Continuously evaluate and improve our programs and processes.

        Foster a culture of collaboration and shared governance among stakeholders.

        Preserve and enhance the rich legacy and autonomy of the college.</p>

        <hr style={{margin: '20px 0'}} />

        <h3>Our History</h3>
        <p>
          Founded in [Year], Your College Name has grown from humble beginnings into... Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <hr style={{margin: '20px 0'}} />

        <h3>Leadership</h3>
        <p>
          Our college is led by a dedicated team committed to student success and institutional growth. Learn more about our President, Deans, and Board of Trustees.
        </p>

        <hr style={{margin: '20px 0'}} />

        <h3>Accreditation</h3>
        <p>
          Your College Name is proudly accredited by [Name of Accrediting Body], ensuring our programs meet rigorous standards of quality.
        </p>
      </div> {/* End of inner container */}

    </div> // End of main page div
  );
}

export default AboutPage;
