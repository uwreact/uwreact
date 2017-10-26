<template>
  <div class="page">
    <div class="hero" id="home">
      <el-row>
        <el-col :sm="24" :md="12">
          <img class="hero-logo" src="~/assets/home/hero/heroLogo.jpg"/>
        </el-col>
        <el-col :sm="24" :md="12">
          <div class="hero-text">
            <p class="hero-header">
              ROBOT IN 3 DAYS <span class="hero-yellow-text">AT</span>
            <p class="hero-header-small">
              THE UNIVERSITY OF WATERLOO
            </p>
            </p>
            <div class="hero-yellow-line"></div>
            <p class="hero-date">January 6 - 9, 2018</p>
            <p class="hero-applications">Applications open October 28, 2017</p>
          </div>
        </el-col>
      </el-row>
      <div class="hero-bottom">
        <div></div>
      </div>
    </div>

    <div class="body about" id="about">
      <div class="body-text">
        <el-row>
          <el-col :sm="{span: 22, offset: 1}" :md="{span: 16, offset: 4}">
            <p class="body-header">
              Canada's largest Ri3D team
            </p>
            <p>
              With 60 students at the University of Waterloo, we inspire FIRST Robotics Competition teams around the
              world by building a robot in 3 days.
              For 72 hours, we investigate the FIRST challenge, prepare a design, manufacture a chassis, wire
              electromechanical systems, and program an entire FRC robot - 40 days before bag and tag.
            </p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :sm="{span: 22, offset: 1}" :md="{span: 14, offset: 5}">
            <div class="about-gray-line"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="{span: 22, offset: 1}" :sm="{span: 4, offset: 5}">
            <img class="about-image" src="~/assets/home/about/aboutEngage.jpg"/>
          </el-col>
          <el-col :xs="{span: 22, offset: 1}" :sm="{span: 9, offset: 1}">
            <p class="about-buzz-header">
              ENGAGE
            </p>
            <p class="about-buzz-desc">
              For many University of Waterloo students, FIRST Robotics was a lifestyle. Entering university, many of us
              desired a way to stay engaged in the FIRST challenge. Through alumni groups and volunteering at local
              events, FIRST alumni are able to continue their passion for robotics throughout their university careers.
              However, for the same intense experience as the real FIRST Robotics Competition, students are out of luck.
              With Robot in 3 Days, alumni have the opportunity to experience FIRST all over again.
            </p>
          </el-col>
        </el-row>
        <br/>
        <br/>
        <br/>
        <el-row>
          <el-col :xs="{span: 22, offset: 1}" :sm="{span: 4, offset: 5}">
            <img class="about-image" src="~/assets/home/about/aboutEducate.jpg"/>
          </el-col>
          <el-col :xs="{span: 22, offset: 1}" :sm="{span: 9, offset: 1}">
            <p class="about-buzz-header">
              EDUCATE
            </p>
            <p class="about-buzz-desc">
              Across the world, FIRST Robotics Competition teams look towards Robot in 3 Days builds to spawn ideas,
              survey designs, and review their own plans. We build towards this initiative by live streaming both teams
              throughout the 72 hour challenge, and focusing not only on the mechanical design process, but all aspects
              of the FIRST build. Through programming webcasts detailing vision solutions, design sprints, and detailed
              sensor breakdowns, we provide FRC students with a plethora of resources as they enter build season.
            </p>
          </el-col>
        </el-row>
        <br/>
        <br/>
        <br/>
        <el-row>
          <el-col :xs="{span: 22, offset: 1}" :sm="{span: 4, offset: 5}">
            <img class="about-image" src="~/assets/home/about/aboutInspire.jpg"/>
          </el-col>
          <el-col :xs="{span: 22, offset: 1}" :sm="{span: 9, offset: 1}">
            <p class="about-buzz-header">
              INSPIRE
            </p>
            <p class="about-buzz-desc">
              The mission of FIRST is to inspire young people to be science and technology leaders and innovators. In higher
              education, students have the resources they need to think and create the inventions that will shape our future.
              We help inspire students on campus to take the skills they learn through Robot in 3 Days and apply them in undiscovered
              fields of science and technology. While pursuing this goal, we help motivate FIRST Robotics Competition teams around
              the world by live streaming a full design process detailing the concepts they will need to succeed.
            </p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :sm="{span: 22, offset: 1}" :md="{span: 14, offset: 5}">
            <div class="about-gray-line"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :sm="{span: 22, offset: 1}" :md="{span: 16, offset: 4}">
            We are recruiting for our 2018 build teams! FIRST Alumni or not, as a University of Waterloo student, you can
            join the Robot in 3 Days team and experience the one of the most exciting engineering design challenges in the
            world. There are 60 positions available, and all students are welcome!
            <br/>
            <br/>
            <el-collapse class="accordion-header" accordion>
              <el-collapse-item class="accordion-header" name="1">
                <template slot="title">
                  <p class="accordion-header">
                    Questions and Answers for Applicants
                  </p>
                </template>

                <el-collapse class="accordion-question" accordion>
                  <el-collapse-item class="accordion-question" name="2">
                    <template slot="title">
                      <p class="accordion-question">
                        What is the FIRST Robotics Competition?
                      </p>
                    </template>
                    <p class="accordion-answer">
                      The FIRST Robotics Competition is an important part of the high school careers of many University
                      of Waterloo students. FIRST defines it as:
                      <br/>
                      <br/>
                      <i>
                        "<b>Combining the excitement of sport with the rigors of science and technology.</b> We call
                        FIRST Robotics Competition the ultimate Sport for the Mind. High-school student participants
                        call it 'the hardest fun you’ll ever have.'
                      </i><br/>
                      <br/>
                      <i>Under strict rules, limited resources, and an intense six-week time limit, teams of students
                        are challenged to raise funds, design a team "brand," hone teamwork skills, and build and
                        program industrial-size robots to play a difficult field game against like-minded competitors.
                        It’s as close to real-world engineering as a student can get.
                        "</i>
                      <br/>
                      <br/>
                      Read more at <a href="https://www.firstinspires.org/">firstinspires.org</a>
                    </p>
                  </el-collapse-item>

                  <el-collapse-item class="accordion-question" name="3">
                    <template slot="title">
                      <p class="accordion-question">
                        What is Robot in 3 Days?
                      </p>
                    </template>
                    <p class="accordion-answer">
                      Robot in 3 Days brings the excitement of the FIRST Robotics Competition back to FIRST Alumni. By
                      shortening the build season from 6 weeks to 3 days, Robot in 3 Days brings an intense twist to
                      the same FIRST challenge many students know and love.
                    </p>
                  </el-collapse-item>

                  <el-collapse-item class="accordion-question" name="4">
                    <template slot="title">
                      <p class="accordion-question">
                        How is Ri3D running at the UW?
                      </p>
                    </template>
                    <p class="accordion-answer">
                      Robot in 3 Days will be recruiting its build teams throughout the month of November. Prior to the build
                      season, regular meetings will help bring the team up to speed with goals following kickoff. From January
                      6 to 9, the build teams will be in the Sedra Student Design Centre for 72 hours straight completing the
                      Robot in 3 Days challenge. Food will be provided throughout the event to all build team members. Following
                      the build season, the team will meet sparsely to prepare for next years challenge.
                    </p>
                  </el-collapse-item>

                  <el-collapse-item class="accordion-question" name="5">
                    <template slot="title">
                      <p class="accordion-question">
                        Who can apply to join UWRi3D?
                      </p>
                    </template>
                    <p class="accordion-answer">
                      Any undergraduate or graduate students currently enrolled at the University of Waterloo are welcome
                      to apply to join the Robot in 3 Days team, regardless of faculty.
                    </p>
                  </el-collapse-item>

                  <el-collapse-item class="accordion-question" name="6">
                    <template slot="title">
                      <p class="accordion-question">
                        I'm not an alumnus! I don't have experience! Can I still apply?
                      </p>
                    </template>
                    <p class="accordion-answer">
                      Of course! In fact, a limited number of positions are being made available specifically for students
                      who are not FIRST alumni and/or do not have any previous technical experience. We are serious about
                      our objectives - we are here to inspire science and technology leaders and innovators, and are always
                      on the look out for enthusiastic individuals.
                    </p>
                  </el-collapse-item>

                  <el-collapse-item class="accordion-question" name="7">
                    <template slot="title">
                      <p class="accordion-question">
                        I'm not on campus during the winter term! Can I still apply?
                      </p>
                    </template>
                    <p class="accordion-answer">
                      Yes, but you <b>must</b>
                      be on campus for an absolute minimum of the 3 build days from January 6 - 8.
                      If you are on a work term, you must push back your co-op start dates so that you can attend on these
                      days.
                    </p>
                  </el-collapse-item>

                  <el-collapse-item class="accordion-question" name="8">
                    <template slot="title">
                      <p class="accordion-question">
                        I have a question that isn't answered here!
                      </p>
                    </template>
                    <p class="accordion-answer">
                      We're happy to help with any inquiries you may have! Feel free to email us at
                      <a href="mailto:hello@uwri3d.com">hello@uwri3d.com</a>, and we will add your
                      question to this list.
                    </p>
                  </el-collapse-item>
                </el-collapse>
              </el-collapse-item>
            </el-collapse>
          </el-col>
        </el-row>
      </div>
      <div class="about-bottom">
        <div></div>
      </div>
    </div>

    <div class="body" id="teams">
      <div class="body-text">
        <el-row>
          <el-col :sm="{span: 22, offset: 1}" :md="{span: 16, offset: 4}">
            <p class="body-header">
              Our teams
            </p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :sm="{span: 22, offset: 1}" :md="{span: 16, offset: 4}">
            <p>
              Thanks to our sponsors, we have the privilege of hosting <b>two</b>
              Robot in 3 Days teams at the University
              of Waterloo in 2018. More details about the build teams will be released throughout the application process
              as the selections are made.
            </p>
          </el-col>
        </el-row>
        <br/>
        <br/>
        <el-row>
          <el-col :sm="{span: 22, offset: 1}" :md="{span: 7, offset: 4}">
            <p class="about-buzz-header">
              TEAM 1
            </p>
            <div class="hero-yellow-line"></div>
            <p class="hero-date">30 Students</p>
            <p class="hero-applications">Currently recruiting</p>
          </el-col>
          <el-col :sm="{span: 22, offset: 1}" :md="{span: 7, offset: 2}">
            <p class="about-buzz-header team-2-header">
              TEAM 2
            </p>
            <div class="hero-yellow-line"></div>
            <p class="hero-date">30 Students</p>
            <p class="hero-applications">Currently recruiting</p>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="body" id="sponsors">
      <div class="body-text">
        <el-row>
          <el-col :sm="{span: 22, offset: 1}" :md="{span: 16, offset: 4}">
            <p class="body-header">
              Our sponsors
            </p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :sm="{span: 22, offset: 1}" :md="{span: 16, offset: 4}">
            <p>
              Our sponsors are helping us engage students across campus in becoming science and technology leaders
              and innovators. To reach our sponsorship team, email us at
              <a href="mailto:sponsor@uwri3d.com">sponsor@uwri3d.com</a>.
            </p>
          </el-col>
        </el-row>
        <br/>
        <el-row>
          <el-col :sm="{span: 22, offset: 1}" :md="{span: 7, offset: 4}">
            <img class="sponsor-image" src="~/assets/logos/sponsors/logoFacultyOfEngineering.png"/>
          </el-col>
          <el-col :sm="{span: 22, offset: 1}" :md="{span: 7, offset: 2}">
            <img class="sponsor-image" src="~/assets/logos/sponsors/logoFirstCanada.png"/>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="body" id="contact">
      <div class="body-text">
        <el-row>
          <el-col :sm="{span: 22, offset: 1}" :md="{span: 16, offset: 4}">
            <p class="body-header">
              Contact us
            </p>
            <p>
              We're happy to help with any inquiries you may have! Feel free to email us at
              <a href="mailto:hello@uwri3d.com">hello@uwri3d.com</a>.
            </p>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="footer">
      <el-row>
        <el-col :sm="{span: 22, offset: 1}" :md="{span: 16, offset: 4}">
          <div class="footer-row">
            <a href="https://github.com/uwri3d"><i class="footer-icon fa fa-github fa-lg"></i></a>
            <a href="fb.me/uwri3d"><i class="footer-icon fa fa-facebook fa-lg"></i></a>
            <a><i class="footer-icon fa fa-twitter fa-lg"></i></a>
            <a><i class="footer-icon fa fa-instagram fa-lg"></i></a>
            <a><i class="footer-icon fa fa-youtube-play fa-lg"></i></a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'home',
  }
</script>

<style scoped>
  .page {
    position: absolute;
    top: 60px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    overflow: auto;
  }

  .hero {
    width: 100%;
    background-color: #444444;
  }

  .hero-logo {
    width: 90%;
  }

  .hero-text {
    margin-top: 72px;
    margin-bottom: 16px;
    padding: 20px;
    color: #ffffff;
  }

  .hero-header {
    font-weight: 700;
    font-size: 41px;
    line-height: 34px;
  }

  .hero-header-small {
    font-weight: 700;
    font-size: 26px;
    line-height: 22px;
  }

  .hero-yellow-text {
    color: #e4b429;
  }

  .hero-yellow-line {
    background-color: #e4b429;
    width: 72px;
    height: 8px;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .hero-date {
    font-size: 24px;
    font-weight: 300;
  }

  .hero-applications {
    font-size: 16px;
    font-weight: 300;
  }

  .hero-bottom {
    width: 100%;
    height: 0;
    padding-left: 50%;
    padding-top: 10%;
    overflow: hidden;
  }

  .hero-bottom div {
    content: "";
    display: block;
    width: 0;
    height: 0;
    margin-left: -10000px;
    margin-top: -2000px;

    border-left: 10000px solid transparent;
    border-right: 10000px solid transparent;
    border-top: 2000px solid #444444;
    background-color: #d5d5d3;
  }

  .about {
    background-color: #d5d5d3;
  }

  .body {
    width: 100%;
  }

  .body-text {
    padding: 20px;
    font-weight: 400;
    font-size: 15px;
  }

  .body-header {
    font-weight: 500;
    font-size: 36px;
    line-height: 36px;
    margin-top: 36px;
    margin-bottom: 18px;
  }

  .about-gray-line {
    background-color: #444444;
    width: 100%;
    height: 8px;
    margin-top: 72px;
    margin-bottom: 72px;
  }

  .about-buzz-header {
    font-weight: 700;
    font-size: 41px;
  }

  .about-buzz-desc {
    text-align: justify;
  }

  .about-image {
    width: 100%;
  }

  .accordion-header {
    border-color: #444444;
    background-color: #d5d5d3;
    font-weight: 500;
    font-size: 16px;
  }

  .accordion-question {
    border-color: #d5d5d3;
    background-color: #ffffff;
    padding-left: 4px;
    font-weight: 500;
    font-size: 16px;
  }

  .accordion-answer {
    padding-left: 16px;
    font-weight: 400;
    font-size: 15px;
  }

  .about-bottom {
    width: 100%;
    height: 0;
    padding-left: 50%;
    padding-top: 10%;
    overflow: hidden;
  }

  .about-bottom div {
    content: "";
    display: block;
    width: 0;
    height: 0;
    margin-left: -10000px;
    margin-top: -2000px;

    border-left: 10000px solid transparent;
    border-right: 10000px solid transparent;
    border-top: 2000px solid #d5d5d3;
    background-color: #ffffff;
  }

  .sponsor-image {
    padding: 2%;
    width: 100%;
  }

  @media all and (max-width: 568px) {
    .accordion-header {
      font-size: 13px;
    }

    .accordion-question {
      font-size: 10px;
    }

    .accordion-answer {
      font-size: 10px;
    }
  }

  @media all and (max-width: 768px) {
    .about-image {
      width: 200px;
    }
  }

  @media all and (max-width: 996px) {
    .team-2-header {
      margin-top: 48px;
    }

    .hero-text {
      margin-top: 16px;
    }
  }

  .footer {
    width: 100%;
    height: 60px;
    margin-top: 72px;
    color: #ffffff;
    background-color: #e4b429;
  }

  .footer a {
    color: #ffffff;
    text-decoration: none;
  }

  .footer-row {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-icon {
    padding-left: 16px;
    padding-right: 16px;
  }
</style>
