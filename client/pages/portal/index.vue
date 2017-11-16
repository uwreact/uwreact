<template>
  <div class="page" v-loading="!downloaded">
    <div v-if="signedIn">
      <div class="hero" id="home">
        <el-row>
          <el-col :sm="24" :md="12">
            <img class="hero-logo" src="~/assets/home/hero/heroLogo.jpg"/>
          </el-col>
          <el-col :sm="24" :md="12">
            <div class="hero-text">
              <p class="hero-header">
                WELCOME BACK,
              <p class="hero-header-small">
                <span class="hero-yellow-text">{{account.information.firstName}}</span>
              </p>
              </p>
              <div class="hero-yellow-line"></div>
            </div>
          </el-col>
        </el-row>
        <div class="dark-grey-arrow">
          <div></div>
        </div>
      </div>

      <div class="body about" id="about">
        <div class="body-text">
          <el-row>
            <el-col :sm="{span: 22, offset: 1}" :md="{span: 16, offset: 4}">
              <p class="body-header">
                Account Information
              </p>
            </el-col>
          </el-row>
          <div>
            <el-row>
              <el-col :sm="{span: 22, offset: 1}" :md="{span: 16, offset: 4}">
                <el-card class="box-card">
                  <el-form
                    ref="general"
                    :label-position="'top'"
                    :model="account"
                    size="mini">
                    <el-form-item label="Email">
                      <el-input v-model="account.email" :disabled="true">
                        <template slot="append">@edu.uwaterloo.ca</template>
                      </el-input>
                    </el-form-item>
                    <el-form-item label="First Name" :disabled="true">
                      <el-input v-model="account.information.firstName" :maxlength="128">
                      </el-input>
                    </el-form-item>
                    <el-form-item label="Last Name" :disabled="true">
                      <el-input v-model="account.information.lastName" :maxlength="128">
                      </el-input>
                    </el-form-item>
                    <el-form-item label="Program">
                      <el-select v-model="account.information.program" placeholder="Program">
                        <el-option
                          label="Accounting and Financial Management"
                          value="Accounting and Financial Management"></el-option>
                        <el-option
                          label="Architecture"
                          value="Architecture"></el-option>
                        <el-option
                          label="Biomedical Engineering"
                          value="Biomedical Engineering"></el-option>
                        <el-option
                          label="Biotechnology and Chartered Professional Accountancy"
                          value="Biotechnology and Chartered Professional Accountancy"></el-option>
                        <el-option
                          label="Biotechnology and Economics"
                          value="Biotechnology and Economics"></el-option>
                        <el-option
                          label="Business Administration and Computer Science"
                          value="Business Administration and Computer Science"></el-option>
                        <el-option
                          label="Business Administration and Mathematics"
                          value="Business Administration and Mathematics"></el-option>
                        <el-option
                          label="Chemical Engineering"
                          value="Chemical Engineering"></el-option>
                        <el-option
                          label="Civil Engineering"
                          value="Civil Engineering"></el-option>
                        <el-option
                          label="Computer Engineering"
                          value="Computer Engineering"></el-option>
                        <el-option
                          label="Computer Science"
                          value="Computer Science"></el-option>
                        <el-option
                          label="Computing and Financial Management"
                          value="Computing and Financial Management"></el-option>
                        <el-option
                          label="Electrical Engineering"
                          value="Electrical Engineering"></el-option>
                        <el-option
                          label="Environmental Engineering"
                          value="Environmental Engineering"></el-option>
                        <el-option
                          label="Environmental Science"
                          value="Environmental Science"></el-option>
                        <el-option
                          label="Environment and Business"
                          value="Environment and Business"></el-option>
                        <el-option
                          label="Environment, Resources and Sustainability"
                          value="Environment, Resources and Sustainability"></el-option>
                        <el-option
                          label="Geography and Aviation"
                          value="Geography and Aviation"></el-option>
                        <el-option
                          label="Geography and Environmental Management"
                          value="Geography and Environmental Management"></el-option>
                        <el-option
                          label="Geological Engineering"
                          value="Geological Engineering"></el-option>
                        <el-option
                          label="Geomatics"
                          value="Geomatics"></el-option>
                        <el-option
                          label="Global Business and Digital Arts"
                          value="Global Business and Digital Arts"></el-option>
                        <el-option
                          label="Health Studies"
                          value="Health Studies"></el-option>
                        <el-option
                          label="Honours Arts"
                          value="Honours Arts"></el-option>
                        <el-option
                          label="Honours Arts and Business"
                          value="Honours Arts and Business"></el-option>
                        <el-option
                          label="Honours Science"
                          value="Honours Science"></el-option>
                        <el-option
                          label="International Development"
                          value="International Development"></el-option>
                        <el-option
                          label="Kinesiology"
                          value="Kinesiology"></el-option>
                        <el-option
                          label="Knowledge Integration"
                          value="Knowledge Integration"></el-option>
                        <el-option
                          label="Life Sciences"
                          value="Life Sciences"></el-option>
                        <el-option
                          label="Management Engineering"
                          value="Management Engineering"></el-option>
                        <el-option
                          label="Mathematics and Business Administration"
                          value="Mathematics and Business Administration"></el-option>
                        <el-option
                          label="Mathematics and Chartered Professional Accountancy"
                          value="Mathematics and Chartered Professional Accountancy"></el-option>
                        <el-option
                          label="Mathematics and Financial Analysis and Risk Management"
                          value="Mathematics and Financial Analysis and Risk Management"></el-option>
                        <el-option
                          label="Mathematics"
                          value="Mathematics"></el-option>
                        <el-option
                          label="Mechanical Engineering"
                          value="Mechanical Engineering"></el-option>
                        <el-option
                          label="Mechatronics Engineering"
                          value="Mechatronics Engineering"></el-option>
                        <el-option
                          label="Nanotechnology Engineering"
                          value="Nanotechnology Engineering"></el-option>
                        <el-option
                          label="Physical Sciences"
                          value="Physical Sciences"></el-option>
                        <el-option
                          label="Planning"
                          value="Planning"></el-option>
                        <el-option
                          label="Public Health"
                          value="Public Health"></el-option>
                        <el-option
                          label="Recreation and Leisure Studies"
                          value="Recreation and Leisure Studies"></el-option>
                        <el-option
                          label="Science and Aviation"
                          value="Science and Aviation"></el-option>
                        <el-option
                          label="Science and Business"
                          value="Science and Business"></el-option>
                        <el-option
                          label="Software Engineering"
                          value="Software Engineering"></el-option>
                        <el-option
                          label="Systems Design Engineering"
                          value="Systems Design Engineering"></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="Term">
                      <el-select v-model="account.information.term" placeholder="Term">
                        <el-option label="1A" value="1A"></el-option>
                        <el-option label="1B" value="1B"></el-option>
                        <el-option label="2A" value="2A"></el-option>
                        <el-option label="2B" value="2B"></el-option>
                        <el-option label="3A" value="3A"></el-option>
                        <el-option label="3B" value="3B"></el-option>
                        <el-option label="4A" value="4A"></el-option>
                        <el-option label="4B" value="4B"></el-option>
                        <el-option label="Other" value="Other"></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="Graduation Year">
                      <el-select v-model="account.information.graduationYear" placeholder="Graduation Year">
                        <el-option label="2018" value="2018"></el-option>
                        <el-option label="2019" value="2019"></el-option>
                        <el-option label="2020" value="2020"></el-option>
                        <el-option label="2021" value="2021"></el-option>
                        <el-option label="2022" value="2022"></el-option>
                        <el-option label="Other" value="Other"></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="What term are you on for Winter 2018?">
                      <el-radio-group v-model="account.information.winterTerm" size="mini">
                        <el-radio label="Study" name="winterTerm" border></el-radio>
                        <el-radio label="Work" name="winterTerm" border></el-radio>
                      </el-radio-group>
                    </el-form-item>

                    <el-form-item>
                      <el-button type="primary" @click="uploadData">Save</el-button>
                    </el-form-item>
                  </el-form>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="grey-arrow">
          <div></div>
        </div>
      </div>

      <div class="body-text">
        <el-row>
          <el-col :sm="{span: 22, offset: 1}" :md="{span: 16, offset: 4}">
            <p class="body-header">
              Build Team Application
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
                    :model="account.buildTeamApplication.general"
                    :label-position="'top'"
                    size="mini">
                    <el-form-item label="How did you hear about Robot in 3 Days at the University of Waterloo?">
                      <el-select v-model="account.buildTeamApplication.general.howHeard"
                                 placeholder="I heard through...">
                        <el-option label="Classmates" value="Classmates"></el-option>
                        <el-option label="Friends" value="Friends"></el-option>
                        <el-option label="Social Media" value="Social Media"></el-option>
                        <el-option label="Email" value="Email"></el-option>
                        <el-option label="News" value="News"></el-option>
                        <el-option label="Other" value="Other"></el-option>
                      </el-select>
                    </el-form-item>
                    <p>
                      I acknowledge that the Robot in 3 Days team at the University of Waterloo is a significant time
                      commitment, and that I understand the scope of the project. I acknowledge that I will be able to
                      attend the Sedra Student Design Centre for 72 hours from January 6 to 9 for the main build.
                      I acknowledge that if I am on a work term in Winter 2018, I will, by pushing my start dates back,
                      or through other means, be able to attend the main build.
                    </p>
                    <el-form-item>
                      <el-switch v-model="account.buildTeamApplication.general.acknowledgeCommitment"></el-switch>
                    </el-form-item>
                    <br/>
                    <p>
                      I acknowledge that photo and video media, including recap videos, live streams, and webcasts, will
                      be taken throughout the main build, and that I agree to this. I acknowledge that my photo may be
                      used in future promotional material for Robot in 3 Days at the Univesity of Waterloo.
                    </p>
                    <el-form-item>
                      <el-switch v-model="account.buildTeamApplication.general.acknowledgeMedia"></el-switch>
                    </el-form-item>
                    <br/>
                    <p>
                      Did you know that we have a FIRST Alumni Group here on campus, and that the University of Waterloo
                      runs FIRST Robotics Competition and FIRST Lego League events every year? Following Robot in 3 Days,
                      you can join the FIRST Alumni Group and help with the events on campus. Would you be interested in
                      joining the FIRST Alumni Group or volunteering for events on campus?
                    </p>
                    <el-form-item>
                      <el-switch v-model="account.buildTeamApplication.general.interestVolunteer"></el-switch>
                    </el-form-item>
                    <br/>
                    <p>
                      Would you be interested in applying for a non-build role, including media, sponsorship, web
                      development, and more?
                    </p>
                    <el-form-item>
                      <el-switch v-model="account.buildTeamApplication.general.interestNonBuild"></el-switch>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="uploadData">Save</el-button>
                    </el-form-item>
                  </el-form>
                </el-tab-pane>

                <el-tab-pane label="Techical">
                  <el-form
                    ref="technical"
                    :model="account.buildTeamApplication.technical"
                    :label-position="'top'"
                    size="mini">
                    <el-form-item label="What's your focus?">
                      <el-checkbox-group v-model="account.buildTeamApplication.technical.foci" size="mini">
                        <el-checkbox label="Design" name="foci" border></el-checkbox>
                        <el-checkbox label="Manufacturing" name="foci" border></el-checkbox>
                        <el-checkbox label="Electrical" name="foci" border></el-checkbox>
                        <el-checkbox label="Software" name="foci" border></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="What's your main focus?">
                      <el-radio-group v-model="account.buildTeamApplication.technical.mainFocus" size="mini">
                        <el-radio label="Design" name="mainFocus" border></el-radio>
                        <el-radio label="Manufacturing" name="mainFocus" border></el-radio>
                        <el-radio label="Electrical" name="mainFocus" border></el-radio>
                        <el-radio label="Software" name="mainFocus" border></el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item label="Why would you like to focus on this?">
                      {{1000 - account.buildTeamApplication.technical.whyFocus.length}} maximum characters remaining, but not required. 500 characters recommended.
                      <el-input
                        type="textarea"
                        :autosize="{ minRows: 4 }"
                        :maxlength="1000"
                        placeholder="I would consider software my main focus because..."
                        v-model="account.buildTeamApplication.technical.whyFocus">
                      </el-input>
                    </el-form-item>
                    <el-form-item label="What are your skills?">
                      <el-checkbox-group v-model="account.buildTeamApplication.technical.skills" size="mini">
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
                        <el-checkbox label="Problem Solving" name="skills" border></el-checkbox>
                        <el-checkbox label="Time Management" name="skills" border></el-checkbox>
                        <el-checkbox label="Initiative" name="skills" border></el-checkbox>
                        <el-checkbox label="Teamwork" name="skills" border></el-checkbox>
                        <el-checkbox label="Adaptable" name="skills" border></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="What's your main skill?">
                      <el-radio-group v-model="account.buildTeamApplication.technical.mainSkill" size="mini">
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
                        <el-radio label="Problem Solving" name="mainSkill" border></el-radio>
                        <el-radio label="Time Management" name="mainSkill" border></el-radio>
                        <el-radio label="Initiative" name="mainSkill" border></el-radio>
                        <el-radio label="Teamwork" name="mainSkill" border></el-radio>
                        <el-radio label="Adaptable" name="mainSkill" border></el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item label="Why do you consider this your main skill?">
                      {{1000 - account.buildTeamApplication.technical.whyMainSkill.length}} maximum characters remaining, but not required. 500 characters recommended.
                      <el-input
                        v-model="account.buildTeamApplication.technical.whyMainSkill"
                        type="textarea"
                        :autosize="{ minRows: 4 }"
                        placeholder="I would consider software my main skill because..."
                        :maxlength="1000">
                      </el-input>
                    </el-form-item>
                    <el-form-item label="Do you have a resume online?" :maxlength="256">
                      <el-input
                        v-model="account.buildTeamApplication.technical.resume"
                        placeholder="https://michael.midura.io">
                      </el-input>
                    </el-form-item>
                    <el-form-item label="Do you have a LinkedIn?">
                      <el-input
                        v-model="account.buildTeamApplication.technical.linkedin"
                        placeholder="https://linkedin.com/in/miduramichael" :maxlength="256">
                      </el-input>
                    </el-form-item>
                    <el-form-item label="Do you have a GitHub?">
                      <el-input
                        v-model="account.buildTeamApplication.technical.github"
                        placeholder="https://github.com/michaelwm" :maxlength="256">
                      </el-input>
                    </el-form-item>
                    <el-form-item label="Do you have anything else you want to show us?">
                      <el-input
                        v-model="account.buildTeamApplication.technical.otherURI"
                        placeholder="https://uwri3d.com" :maxlength="256">
                      </el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="uploadData">Save</el-button>
                    </el-form-item>
                  </el-form>
                </el-tab-pane>

                <el-tab-pane label="Inquiry">
                  <el-form
                    ref="inquiry"
                    :model="account.buildTeamApplication.inquiry"
                    :label-position="'top'"
                    size="mini">
                    <el-form-item
                      label="Why are you interested in joining the Robot in 3 Days team at the university of Waterloo?">
                      {{1000 - account.buildTeamApplication.inquiry.whyInterest.length}} maximum characters remaining, but not required. 500 characters recommended.
                      <el-input
                        v-model="account.buildTeamApplication.inquiry.whyInterest"
                        type="textarea"
                        :autosize="{ minRows: 4 }"
                        placeholder="I'm interested in joining Robot in 3 Days at the University of Waterloo because..."
                        :maxlength="1000">
                      </el-input>
                    </el-form-item>
                    <el-form-item
                      label="Tell us about a time you learned a new skill. It doesn't have to be a technical skill! Who taught you? What were you doing? Why did you learn? How have you used it since then?">
                      {{2000 - account.buildTeamApplication.inquiry.timeLearnedSkill.length}} maximum characters remaining, but not required. 1000 characters recommended.
                      <el-input
                        v-model="account.buildTeamApplication.inquiry.timeLearnedSkill"
                        type="textarea"
                        :autosize="{ minRows: 8 }"
                        placeholder="While on my swim team last year, I learned how to..."
                        :maxlength="2000">
                      </el-input>
                    </el-form-item>
                    <el-form-item
                      label="Tell us about a project you've worked on in the past 6 months. It doesn't have to be technical project! What were you working on? Why were you working on it? How did it end up?">
                      {{2000 - account.buildTeamApplication.inquiry.timeWorkedProject.length}} maximum characters remaining, but not required. 1000 characters recommended.
                      <el-input
                        v-model="account.buildTeamApplication.inquiry.timeWorkedProject"
                        type="textarea"
                        :autosize="{ minRows: 8 }"
                        placeholder="For the past few months, I've been working on..."
                        :maxlength="2000">
                      </el-input>
                    </el-form-item>
                    <el-form-item
                      label="Teach us something new. It can be anything!">
                      {{2000 - account.buildTeamApplication.inquiry.teachUsSomething.length}} maximum characters remaining, but not required. 1000 characters recommended.
                      <el-input
                        v-model="account.buildTeamApplication.inquiry.teachUsSomething"
                        type="textarea"
                        :autosize="{ minRows: 8 }"
                        placeholder="Go grab a standard deck of playing cards, I'm teaching you a magic trick..."
                        :maxlength="2000">
                      </el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="uploadData">Save</el-button>
                    </el-form-item>
                  </el-form>
                </el-tab-pane>
                <el-tab-pane label="FIRST">
                  <el-form
                    ref="inquiry"
                    :model="account.buildTeamApplication.first"
                    :label-position="'top'"
                    size="mini">
                    <el-form-item label="Are you a FIRST Alumnus?">
                      <el-switch v-model="account.buildTeamApplication.first.firstAlumnus"></el-switch>
                    </el-form-item>
                    <el-form-item label="What's your old team number?">
                      <el-input
                        v-model="account.buildTeamApplication.first.teamNumber"
                        :disabled="!account.buildTeamApplication.first.firstAlumnus"
                        placeholder="4976" :maxlength="32">
                      </el-input>
                    </el-form-item>
                    <el-form-item label="What role did you play?">
                      <el-input
                        v-model="account.buildTeamApplication.first.teamRole"
                        :disabled="!account.buildTeamApplication.first.firstAlumnus"
                        placeholder="Software Lead" :maxlength="128">
                      </el-input>
                    </el-form-item>
                    <el-form-item
                      label="Tell us about a time you managed a stressful situation during a FIRST Robotics Competition tournament. What happened? Why was it stressful? How did you manage it?">
                      {{2000 - account.buildTeamApplication.first.timeDealtStress.length}} maximum characters remaining, but not required. 1000 characters recommended.
                      <el-input
                        v-model="account.buildTeamApplication.first.timeDealtStress"
                        type="textarea"
                        :autosize="{ minRows: 8 }"
                        :disabled="!account.buildTeamApplication.first.firstAlumnus"
                        placeholder="At our second district competition..."
                        :maxlength="2000">
                      </el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="uploadData">Save</el-button>
                    </el-form-item>
                  </el-form>
                </el-tab-pane>
              </el-tabs>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div v-else-if="downloaded">
      <div class="hero" id="home">
        <el-row>
          <el-col :sm="24" :md="12">
            <img class="hero-logo" src="~/assets/home/hero/heroLogo.jpg"/>
          </el-col>
          <el-col :sm="24" :md="12">
            <div class="hero-text">
              <p class="hero-header">
                APPLICATIONS ARE <span class="hero-yellow-text">OPEN</span>
              <p class="hero-header-small">
                APPLY NOW
              </p>
              </p>
              <div class="hero-yellow-line"></div>
            </div>
          </el-col>
        </el-row>
        <div class="dark-grey-arrow">
          <div></div>
        </div>
      </div>

      <div class="body about" id="about">
        <div class="body-text">
          <el-row>
            <el-col :sm="{span: 22, offset: 1}" :md="{span: 16, offset: 4}">
              <p class="body-header">
                Coming Back? Sign In!
              </p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :sm="{span: 22, offset: 1}" :md="{span: 16, offset: 4}">
              <el-card class="box-card">
                <el-form
                  ref="signIn"
                  :model="signIn"
                  :label-position="'top'"
                  size="mini">
                  <el-form-item label="Email">
                    <el-input v-model="signIn.email" :maxlength="128">
                      <template slot="append">@edu.uwaterloo.ca</template>
                    </el-input>
                  </el-form-item>
                  <el-form-item label="Password">
                    <el-input v-model="signIn.password" type="password" :maxlength="256">
                    </el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSignIn">Sign In</el-button>
                  </el-form-item>
                </el-form>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="grey-arrow">
          <div></div>
        </div>
      </div>

      <div class="body-text">
        <el-row>
          <el-col :sm="{span: 22, offset: 1}" :md="{span: 16, offset: 4}">
            <p class="body-header">
              New Applicant? Sign Up!
            </p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :sm="{span: 22, offset: 1}" :md="{span: 16, offset: 4}">
            <el-card class="box-card">
              <el-form
                ref="signUp"
                :model="signUp"
                :rules="rules.signUp"
                :label-position="'top'"
                size="mini">
                <el-form-item label="Email" prop="email">
                  <el-input v-model="signUp.email" :maxlength="128">
                    <template slot="append">@edu.uwaterloo.ca</template>
                  </el-input>
                </el-form-item>
                <el-form-item label="Password" prop="password">
                  <el-input v-model="signUp.password" type="password" :maxlength="256">
                  </el-input>
                </el-form-item>
                <el-form-item label="Confirm Password" prop="passwordConfirmation">
                  <el-input v-model="signUp.passwordConfirmation" type="password" :maxlength="256">
                  </el-input>
                </el-form-item>
                <el-form-item label="First Name" prop="firstName">
                  <el-input v-model="signUp.firstName" :maxlength="128">
                  </el-input>
                </el-form-item>
                <el-form-item label="Last Name" prop="lastName">
                  <el-input v-model="signUp.lastName" :maxlength="128">
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSignUp">Sign Up</el-button>
                </el-form-item>
              </el-form>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    layout: 'portal',

    data() {
      return {
        downloaded: false,
        signedIn: false,
        account: {
          email: '',
          information: {
            firstName: '',
            lastName: '',
            program: '',
            term: '',
            graduationYear: '',
            winterTerm: '',
          },
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
        },
        signIn: {
          email: '',
          password: '',
        },
        signUp: {
          email: '',
          password: '',
          passwordConfirmation: '',
          firstName: '',
          lastName: '',
        },
        rules: {
          signUp: {
            email: [
              {
                validator: (rule, value, callback) => {
                  if (value === '') {
                    callback(new Error('Please input your email.'))
                  } else if (value.match('[^A-Za-z\\d\\.]')) {
                    callback(new Error('Please input a proper email.'));
                  } else {
                    callback();
                  }
                },
                trigger: 'blur',
              }
            ],
            password: [
              {
                validator: (rule, value, callback) => {
                  if (value === '') {
                    callback(new Error('Please input a password.'));
                  } else {
                    if (this.signUp.passwordConfirmation !== '') {
                      this.$refs.signUp.validateField('passwordConfirmation');
                    }
                    callback();
                  }
                },
                trigger: 'blur',
              }
            ],
            passwordConfirmation: [
              {
                validator: (rule, value, callback) => {
                  if (value === '') {
                    callback(new Error('Please input your password again.'));
                  } else if (value !== this.signUp.password) {
                    callback(new Error('Your passwords don\'t match!'));
                  } else {
                    callback();
                  }
                },
                trigger: 'blur',
              }
            ],
            firstName: [
              {
                validator: (rule, value, callback) => {
                  if (value === '') {
                    callback(new Error('Please input your first name.'));
                  } else {
                    callback();
                  }
                },
                trigger: 'blur',
              }
            ],
            lastName: [
              {
                validator: (rule, value, callback) => {
                  if (value === '') {
                    callback(new Error('Please input your last name.'));
                  } else {
                    callback();
                  }
                },
                trigger: 'blur',
              }
            ]
          }
        }
      };
    },

    async mounted() {
      await this.downloadData();
      setInterval(() => {
        if (this.downloaded && this.signedIn)
          this.uploadData();
      }, 60000);
    },

    methods: {
      async onSignIn() {
        this.$axios.setToken(btoa(this.signIn.email + ':' + this.signIn.password), 'Basic');
        const response = await this.$axios.$get('signIn');
        if (response !== undefined) {
          this.$notify({
            title: response.type === 'success' ? 'Success' : 'Error',
            message: response.message,
            type: response.type,
          });
        }
        if (response.token !== undefined) {
          localStorage.setItem('jwt', response.token);
          this.signIn.email = '';
          this.signIn.password = '';
          this.downloadData();
        }
      },
      async onSignUp() {
        let signUpValid = true;
        this.$refs.signUp.validate((valid) => {
            if (!valid) signUpValid = false;
          }
        );

        if (signUpValid) {
          this.$axios.setToken(btoa(this.signUp.email + ':' + this.signUp.password + ':' + this.signUp.firstName + ':' + this.signUp.lastName), 'Basic');
          const response = await this.$axios.$get('signUp');
          if (response !== undefined) {
            this.$notify({
              title: response.type === 'success' ? 'Success' : 'Error',
              message: response.message,
              type: response.type,
            });
          }
          this.signUp.email = '';
          this.signUp.password = '';
          this.signUp.passwordConfirmation = '';
          this.signUp.firstName = '';
          this.signUp.lastName = '';
        }
      },
      async downloadData() {
        this.$axios.setHeader('Accept', 'application/json');
        this.$axios.setHeader('Content-Type', 'application/json');
        this.$axios.setToken(localStorage.getItem('jwt'), 'Bearer');

        const response = await this.$axios.$get('getAccount');
        if (response !== undefined) {
          if (response.account !== undefined) {
            this.account = response.account;
            this.signedIn = true;
            this.downloaded = true;
          } else if (response.token !== undefined) {
            localStorage.setItem('jwt', response.token);
            this.downloadData();
          } else {
            this.signedIn = false;
            this.downloaded = true;
          }
        } else {
          this.signedIn = false;
          this.downloaded = false;
        }
      },
      async uploadData() {
        this.$axios.setHeader('Accept', 'application/json');
        this.$axios.setHeader('Content-Type', 'application/json');
        this.$axios.setToken(localStorage.getItem('jwt'), 'Bearer');
        const response = await this.$axios.$post('updateAccount', {account: this.account});
        if (response !== undefined) {
          if (response.token !== undefined) {
            localStorage.setItem('jwt', response.token);
            this.uploadData();
          } else {
            this.$notify({
              title: response.type === 'success' ? 'Success' : 'Error',
              message: response.message,
              type: response.type,
            });
          }
        }
      }
    }
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
