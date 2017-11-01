<template>
  <div class="page">
    <div v-if="signedIn">

      <el-row>
        <el-col :sm="{span: 22, offset: 1}" :md="{span: 16, offset: 4}">
          Welcome,
          <p>
            With 60 students at the University of Waterloo, we inspire FIRST Robotics Competition teams around the
            world by building a robot in 3 days.
            For 72 hours, we investigate the FIRST challenge, prepare a design, manufacture a chassis, wire
            electromechanical systems, and program an entire FRC robot - 40 days before bag and tag.
          </p>
        </el-col>
      </el-row>

      <el-row>
        <el-col :sm="{span: 22, offset: 1}" :md="{span: 16, offset: 4}">
          <el-card class="box-card">
            <el-tabs :tab-position='"left"'>
              <el-tab-pane label="General">
                <el-form
                  ref="general"
                  :model="buildTeamApplication.general"
                  :label-position="'top'"
                  size="mini">
                  <el-form-item label="I acknowledge.">
                    <el-switch v-model="buildTeamApplication.general.acknowledgeCommitment"></el-switch>
                  </el-form-item>
                  <el-form-item label="I acknowledge.">
                    <el-switch v-model="buildTeamApplication.general.acknowledgeMedia"></el-switch>
                  </el-form-item>
                  <el-form-item label="I'm interested!">
                    <el-switch v-model="buildTeamApplication.general.interestVolunteer"></el-switch>
                  </el-form-item>
                  <el-form-item label="I'm interested!">
                    <el-switch v-model="buildTeamApplication.general.interestNonBuild"></el-switch>
                  </el-form-item>
                </el-form>
              </el-tab-pane>

              <el-tab-pane label="Techical">
                <el-form
                  ref="technical"
                  :model="buildTeamApplication.technical"
                  :label-position="'top'"
                  size="mini">
                  <el-form-item label="What's your focus?">
                    <el-checkbox-group v-model="buildTeamApplication.technical.foci" size="mini">
                      <el-checkbox label="Design" name="foci" border></el-checkbox>
                      <el-checkbox label="Manufacturing" name="foci" border></el-checkbox>
                      <el-checkbox label="Electrical" name="foci" border></el-checkbox>
                      <el-checkbox label="Software" name="foci" border></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                  <el-form-item label="What's your main focus?">
                    <el-radio-group v-model="buildTeamApplication.technical.mainFocus" size="mini">
                      <el-radio label="Design" name="mainFocus" border></el-radio>
                      <el-radio label="Manufacturing" name="mainFocus" border></el-radio>
                      <el-radio label="Electrical" name="mainFocus" border></el-radio>
                      <el-radio label="Software" name="mainFocus" border></el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="Why would you like to focus on this?">
                    {{1000 - buildTeamApplication.technical.whyFocus.length}} characters remaining
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 4 }"
                      maxlength="1000"
                      placeholder="I would consider software my main focus because..."
                      v-model="buildTeamApplication.technical.whyFocus">
                    </el-input>
                  </el-form-item>
                  <el-form-item label="What are your skills?">
                    <el-checkbox-group v-model="buildTeamApplication.technical.skills" size="mini">
                      <el-checkbox label="Design" name="skills" border></el-checkbox>
                      <el-checkbox label="Drafting" name="skills" border></el-checkbox>
                      <el-checkbox label="Solidworks" name="skills" border></el-checkbox>
                      <el-checkbox label="AutoCAD" name="skills" border></el-checkbox>
                      <el-checkbox label="Manufacturing" name="skills" border></el-checkbox>
                      <el-checkbox label="Machining" name="skills" border></el-checkbox>
                      <el-checkbox label="Electronics" name="skills" border></el-checkbox>
                      <el-checkbox label="CAN Bus" name="skills" border></el-checkbox>
                      <el-checkbox label="I2C" name="skills" border></el-checkbox>
                      <el-checkbox label="Software" name="skills" border></el-checkbox>
                      <el-checkbox label="C++" name="skills" border></el-checkbox>
                      <el-checkbox label="Java" name="skills" border></el-checkbox>
                      <el-checkbox label="LabVIEW" name="skills" border></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                  <el-form-item label="What's your main skill?">
                    <el-radio-group v-model="buildTeamApplication.technical.mainSkill" size="mini">
                      <el-radio label="Design" name="mainSkill" border></el-radio>
                      <el-radio label="Drafting" name="mainSkill" border></el-radio>
                      <el-radio label="Solidworks" name="mainSkill" border></el-radio>
                      <el-radio label="AutoCAD" name="mainSkill" border></el-radio>
                      <el-radio label="Manufacturing" name="mainSkill" border></el-radio>
                      <el-radio label="Machining" name="mainSkill" border></el-radio>
                      <el-radio label="Electronics" name="mainSkill" border></el-radio>
                      <el-radio label="CAN Bus" name="mainSkill" border></el-radio>
                      <el-radio label="I2C" name="mainSkill" border></el-radio>
                      <el-radio label="Software" name="mainSkill" border></el-radio>
                      <el-radio label="C++" name="mainSkill" border></el-radio>
                      <el-radio label="Java" name="mainSkill" border></el-radio>
                      <el-radio label="LabVIEW" name="mainSkill" border></el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="Why do you consider this your main skill?">
                    {{1000 - buildTeamApplication.technical.whyMainSkill.length}} characters remaining
                    <el-input
                      v-model="buildTeamApplication.technical.whyMainSkill"
                      type="textarea"
                      :autosize="{ minRows: 4 }"
                      placeholder="I would consider software my main skill because..."
                      maxlength="1000">
                    </el-input>
                  </el-form-item>
                  <el-form-item label="Do you have a resume online?">
                    <el-input
                      v-model="buildTeamApplication.technical.resume"
                      placeholder="https://michael.midura.io">
                    </el-input>
                  </el-form-item>
                  <el-form-item label="Do you have a LinkedIn?">
                    <el-input
                      v-model="buildTeamApplication.technical.linkedin"
                      placeholder="https://linkedin.com/in/miduramichael">
                    </el-input>
                  </el-form-item>
                  <el-form-item label="Do you have a GitHub?">
                    <el-input
                      v-model="buildTeamApplication.technical.github"
                      placeholder="https://github.com/michaelwm">
                    </el-input>
                  </el-form-item>
                  <el-form-item label="Do you have anything else you want to show us?">
                    <el-input
                      v-model="buildTeamApplication.technical.otherURI"
                      placeholder="https://uwri3d.ca">
                    </el-input>
                  </el-form-item>
                </el-form>
              </el-tab-pane>

              <el-tab-pane label="Inquiry">
                <el-form
                  ref="inquiry"
                  :model="buildTeamApplication.inquiry"
                  :label-position="'top'"
                  size="mini">
                  <el-form-item
                    label="Why are you interested in joining the Robot in 3 Days team at the university of Waterloo?">
                    {{1000 - buildTeamApplication.inquiry.whyInterest.length}} characters remaining
                    <el-input
                      v-model="buildTeamApplication.inquiry.whyInterest"
                      type="textarea"
                      :autosize="{ minRows: 4 }"
                      placeholder="I'm interested in joining Robot in 3 Days at the University of Waterloo because..."
                      maxlength="1000">
                    </el-input>
                  </el-form-item>
                  <el-form-item
                    label="Tell us about a time you learned a new skill. It doesn't have to be a technical skill! Who taught you? What were you doing? Why did you learn? How have you used it since then?">
                    {{2000 - buildTeamApplication.inquiry.timeLearnedSkill.length}} characters remaining
                    <el-input
                      v-model="buildTeamApplication.inquiry.timeLearnedSkill"
                      type="textarea"
                      :autosize="{ minRows: 8 }"
                      placeholder="While on my swim team last year, I learned how to..."
                      maxlength="2000">
                    </el-input>
                  </el-form-item>
                  <el-form-item
                    label="Tell us about a project you've worked on in the past 6 months. It doesn't have to be technical project! What were you working on? Why were you working on it? How did it end up?">
                    {{2000 - buildTeamApplication.inquiry.timeWorkedProject.length}} characters remaining
                    <el-input
                      v-model="buildTeamApplication.inquiry.timeWorkedProject"
                      type="textarea"
                      :autosize="{ minRows: 8 }"
                      placeholder="For the past few months, I've been working on..."
                      maxlength="2000">
                    </el-input>
                  </el-form-item>
                  <el-form-item
                    label="Teach us something new. It can be anything!">
                    {{2000 - buildTeamApplication.inquiry.teachUsSomething.length}} characters remaining
                    <el-input
                      v-model="buildTeamApplication.inquiry.teachUsSomething"
                      type="textarea"
                      :autosize="{ minRows: 8 }"
                      placeholder="Go grab a standard deck of playing cards, I'm teaching you a magic trick..."
                      maxlength="2000">
                    </el-input>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="FIRST">
                <el-form
                  ref="inquiry"
                  :model="buildTeamApplication.first"
                  :label-position="'top'"
                  size="mini">
                  <el-form-item label="Are you a FIRST Alumnus?">
                    <el-switch v-model="buildTeamApplication.first.firstAlumnus"></el-switch>
                  </el-form-item>
                  <el-form-item label="What's your old team number?">
                    <el-input
                      v-model="buildTeamApplication.first.teamNumber"
                      :disabled="!buildTeamApplication.first.firstAlumnus"
                      placeholder="4976">
                    </el-input>
                  </el-form-item>
                  <el-form-item label="What role did you play?">
                    <el-input
                      v-model="buildTeamApplication.first.teamRole"
                      :disabled="!buildTeamApplication.first.firstAlumnus"
                      placeholder="Software Lead">
                    </el-input>
                  </el-form-item>
                  <el-form-item
                    label="Tell us about a time you managed a stressful situation during a FIRST Robotics Competition tournament. What happened? Why was it stressful? How did you manage it?">
                    {{2000 - buildTeamApplication.first.timeDealtStress.length}} characters remaining
                    <el-input
                      v-model="buildTeamApplication.first.timeDealtStress"
                      type="textarea"
                      :autosize="{ minRows: 8 }"
                      :disabled="!buildTeamApplication.first.firstAlumnus"
                      placeholder="At our second district competition..."
                      maxlength="2000">
                    </el-input>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>

      <el-row>
        <el-col :sm="{span: 22, offset: 1}" :md="{span: 16, offset: 4}">
          Welcome,
          <p>
            With 60 students at the University of Waterloo, we inspire FIRST Robotics Competition teams around the
            world by building a robot in 3 days.
            For 72 hours, we investigate the FIRST challenge, prepare a design, manufacture a chassis, wire
            electromechanical systems, and program an entire FRC robot - 40 days before bag and tag.
          </p>
        </el-col>
      </el-row>
    </div>
    <div v-else>

    </div>
  </div>
</template>

<script>
  export default {
    layout: 'portal',

    data() {
      return {
        signedIn: true,
        buildTeamApplication: {
          general: {
            howHeard: '',
            acknowledgeCommitment: false,
            acknowledgeMedia: false,
            interestVolunteer: false,
            interestNonBuild: false,
          },
          technical: {
            foci: [],
            mainFocus: '',
            whyFocus: '',
            skills: [],
            mainSkill: '',
            whyMainSkill: '',
            resume: '',
            linkedin: '',
            github: '',
            otherURI: '',
          },
          inquiry: {
            whyInterest: '',
            timeLearnedSkill: '',
            timeWorkedProject: '',
            teachUsSomething: '',
            otherInfo: '',
          },
          first: {
            firstAlumnus: false,
            teamNumber: '',
            teamRole: '',
            timeDealtStress: '',
          },
        },
      };
    },
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

  .about-mission {
    font-weight: 300;
    font-style: italic;
    width: 100%;
    text-align: center;
    border-bottom: 8px solid #e4b429;
    line-height: 0.01em;
    margin-top: 72px;
    margin-bottom: 72px;
  }

  .about-mission span {
    background: #d5d5d3;
    padding-left: 24px;
    padding-right: 24px;
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

  .teams {
    background-color: #ffffff;
  }

  .team-container {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }

  .team-information {
    text-align: justify;
    padding-left: 15%;
    padding-right: 15%;
  }

  .team-image {
    width: 50%;
    margin-top: 12px;
  }

  .team-button {
    background-color: #E4B429;
    border-color: #E4B429;
    color: #FFFFFF;
    height: 40px;
    width: 200px;
    margin-top: 20px;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 700;
  }

  .team-applications {
    margin-top: 48px;
  }

  .accordion-header {
    text-align: center;
    border-width: 0px;
    color: #ffffff;
    background-color: #e4b429;
    font-weight: 500;
    font-size: 16px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .accordion-header-text {
    text-align: center;
    border-width: 0px;
    color: #ffffff;
    background-color: #e4b429;
    font-weight: 700;
    font-size: 16px;
  }

  .accordion-question {
    text-align: left;
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

  .sponsors {
    background-color: #d5d5d3;
  }

  .sponsor-image {
    padding: 2%;
    width: 100%;
  }

  .contact {
    background-color: #ffffff;
  }

  .footer {
    width: 100%;
    height: 60px;
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

  .dark-grey-arrow {
    width: 100%;
    height: 0;
    padding-left: 50%;
    padding-top: 10%;
    overflow: hidden;
  }

  .dark-grey-arrow div {
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

  .grey-arrow {
    width: 100%;
    height: 0;
    padding-left: 50%;
    padding-top: 10%;
    overflow: hidden;
  }

  .grey-arrow div {
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

  .white-arrow {
    width: 100%;
    height: 0;
    padding-left: 50%;
    padding-top: 10%;
    overflow: hidden;
  }

  .white-arrow div {
    content: "";
    display: block;
    width: 0;
    height: 0;
    margin-left: -10000px;
    margin-top: -2000px;

    border-left: 10000px solid transparent;
    border-right: 10000px solid transparent;
    border-top: 2000px solid #ffffff;
    background-color: #d5d5d3;
  }

  .yellow-arrow {
    width: 100%;
    height: 0;
    padding-left: 50%;
    padding-top: 10%;
    overflow: hidden;
  }

  .yellow-arrow div {
    content: "";
    display: block;
    width: 0;
    height: 0;
    margin-left: -10000px;
    margin-top: -2000px;

    border-left: 10000px solid transparent;
    border-right: 10000px solid transparent;
    border-top: 2000px solid #ffffff;
    background-color: #e4b429;
  }

  @media all and (max-width: 568px) {
    .accordion-header {
      font-size: 13px;
    }

    .accordion-header-text {
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
      margin-top: 72px;
    }

    .team-image {
      width: 200px;
    }

    .hero-text {
      margin-top: 16px;
    }
  }
</style>
