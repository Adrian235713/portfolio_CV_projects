import React from 'react'

function information() {
    return (
            <div className="information">
                <h1>ABOUT ME</h1>
                <h3></h3>
                <p>HTML5 - intermediate, CSS - intermediate, SASS - intermediate, JS-intermediate,  React - Pre-Intermediate, Git - Pre-Intermediate</p>
                <h3></h3>
                <p>Currently focusing on acquiring skills needed for the role of JavaScript programmer
                Studying computer science at - WIT Warsaw school of Information Technology under the auspices of the Polish Academy of Sciences (PAN)
                Hobbies: Fantasy books, board games, RPG, Anime.</p>
                <h3> </h3>
                <p>adrianponiatowski24610@gmail.com</p>
                <h1>EXPERIENCE</h1>
                {listExperiance[0]}
                {listExperiance[1]}
                {listExperiance[2]}
                {listExperiance[3]}
                <h1>EDUCATION</h1>
                {listEducation[0]}
                {listEducation[1]}
                {listEducation[2]}
                {listEducation[3]}
                {listEducation[4]}
                <h1>Other</h1>
                {listOrther[0]}
                {listOrther[1]}
                {listOrther[2]}
                <h1></h1>
                <p>I consent to the processing of personal data contained in this document for 
                    the purposes of the recruitment process in accordance with the Act of May 10, 2018 on the 
                    protection of personal data (Journal of Laws of 2018, item 1000) and in accordance with the
                     Regulation of the European Parliament and of the Council (EU) 2016 / 679 of 27 April 2016 on the protection 
                    of individuals with regard to the processing of personal data and on the free 
                    movement of such data, and repealing Directive 95/46 / EC (GDPR).
                </p>
            </div>
    )
}

export default information


// ----------------EXPERIENCE
const EXPERIENCE_0 = <div>
    <h3>2019 –2021</h3>
    <h2>Primary school computer science Teacher</h2>
    <p>Launching an IT interest group in Python. Teaching remote.</p>
</div>

const EXPERIENCE_1 = <div>
    <h3>2019 –2020</h3>
    <h2>Biology Teacher. General secondary school</h2>
    <p>Teaching biology classes at the advanced level.</p>
</div>

const EXPERIENCE_2 = <div>
    <h3>2018 –2019</h3>
    <h2>Medical helpline employee</h2>
    <p>Working with demanding patients of various ages and health conditions.
    Providing medical information about the procedures performed.
    Writing reports and directing them to appropriate departments.</p>
</div>

const EXPERIENCE_3 = <div>
    <h3>2017 –2018</h3>
    <h2>Molecular biology laboratory technician</h2>
    <p>Analyses in the field of molecular biology (PCR, electrophoresis, isolation of plasmid and genomic DNA).
    Performing behavioral tests on mice.
    Making DNA isolation and quality assessment of the obtained material with the use of nanodrop and electrophoresis.
    Modified Sanger sequencing on ABI Prism equipment.
    Read the length of the amplified fragments on the Beckman Coulter Genetic Analyzer.
    Optimization of DNA isolation and amplification protocols.
    Taking mictostellitarian loci length readings from chromatograms.</p>
</div>

const listExperiance = [EXPERIENCE_0,EXPERIENCE_1,EXPERIENCE_2,EXPERIENCE_3];

// ----------------EDUCATION
const EDUCATION_0 = <div>
    <h3>2019 - present</h3>
    <p>Informatics - WIT Warsaw school of Information Technology under the auspices of the Polish Academy of Sciences (PAN)</p>
</div>

const EDUCATION_1 = <div>
    <h3>2020 – 2020</h3>
    <p>IJavaScript Developer - Coders Lab (Bootcamp)</p>
</div>

const EDUCATION_2 = <div>
    <h3>2018 – 2019</h3>
    <p>Postgraduate pedagogical studies - Warsaw University of Life Sciences WULS – SGGW</p>
</div>

const EDUCATION_3 = <div>
    <h3>2012 - 2017</h3>
    <p>Biology - Warsaw University of Life Sciences WULS – SGGW</p>
</div>

const EDUCATION_4 = <div>
    <h3>2011 - change of the field of study</h3>
    <p>Molecular design and bioinformatics - Faculty of Physics, University of Warsaw</p>
</div>

const listEducation = [EDUCATION_0,EDUCATION_1,EDUCATION_2,EDUCATION_3,EDUCATION_4];

// ----------------ORTHER

const ORTHER_0= <div>
    <p>Certificate - of the Polish Society of Science on Laboratory Animals – PolLASA</p>
</div>

const ORTHER_1= <div>
    <a href="https://drive.google.com/drive/folders/1HLXQ-PfYlSPTxDNGRAD7V0Kbh-18C1Tz" target="blank">E-learning / classes prepared by me</a>
</div>

const ORTHER_2= <div>
    <a href="https://www.youtube.com/channel/UCUper3XH7HJJ9ZebinDj13Q/playlists" target="blank">Prepared channels for my students (on YouTube)</a>
</div>

const listOrther = [ORTHER_0,ORTHER_1,ORTHER_2];