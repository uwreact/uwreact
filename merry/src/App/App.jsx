import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { NotFound } from 'components';

import horizontalReactLogo from 'resources/svg/logos/react-horizontal.svg';
import verticalReactLogo from 'resources/svg/logos/react-vertical.svg';
import horizontalRi3DLogo from 'resources/svg/logos/ri3d-horizontal.svg';
import verticalRi3DLogo from 'resources/svg/logos/ri3d-vertical.svg';

import andyMarkLogo from 'resources/png/sponsors/andyMark.png';
import firstRoboticsCanadaLogo from 'resources/png/sponsors/firstRoboticsCanada.png';
import phdLogo from 'resources/png/sponsors/phd.png';
import solidWorksLogo from 'resources/png/sponsors/solidWorks.png';
import studicaLogo from 'resources/png/sponsors/studica.png';
import uwEngLogo from 'resources/png/sponsors/uwEng.png';
import uwEngIdeasClinicLogo from 'resources/png/sponsors/uwEngIdeasClinic.png';
import uwEngSocLogo from 'resources/png/sponsors/uwEngSoc.png';
import uwWEEFLogo from 'resources/png/sponsors/uwWEEF.png';

import Loading from './Loading';
import Menu from './Menu';

import styles from './App.scss';

const App = () => (
  <React.Fragment>
    <Loading />
    <Switch>
      <Route
        path="/"
        component={() => (
          <Switch>
            <Route
              exact
              path="/ri3d"
              component={() => (
                <div className={styles.home}>
                  <Menu ri3d />
                  <div className={styles.content}>
                    <h1>WE BUILD ROBOTS IN THREE DAYS.</h1>
                    <div className={styles.contentLogo}>
                      <img src={horizontalRi3DLogo} alt="UW Ri3D Logo" />
                    </div>
                    <h3>
                      We are the world
                      {"'"}s largest Ri3D team.
                    </h3>
                    <p>
                      With 40 students at the University of Waterloo, we inspire FIRST Robotics
                      Competition teams around the world by building a robot in 3 days. For 72
                      hours, we investigate the FIRST challenge, prepare a design, manufacture a
                      chassis, wire electromechanical systems, and program an entire FRC robot - 40
                      days before bag and tag.
                    </p>
                    <h2>OUR SPONSORS</h2>
                    <div className={styles.rowGrid}>
                      <div>
                        <div>
                          <img src={uwEngLogo} alt="UW Engineering Logo" />
                        </div>
                      </div>
                      <div>
                        <div className={styles.col2}>
                          <img src={uwEngSocLogo} alt="UW EngSoc Logo" />
                        </div>
                        <div className={styles.col2}>
                          <img src={uwWEEFLogo} alt="WEEF Logo" />
                        </div>
                      </div>
                      <div>
                        <div className={styles.col2}>
                          <img src={firstRoboticsCanadaLogo} alt="FIRST Robotics Canada Logo" />
                        </div>
                        <div className={styles.col2}>
                          <img src={solidWorksLogo} alt="SolidWorks Logo" />
                        </div>
                      </div>
                      <div>
                        <div>
                          <h3>Past Sponsors</h3>
                        </div>
                      </div>
                      <div>
                        <div className={styles.col4}>
                          <img src={andyMarkLogo} alt="AndyMark Logo" />
                        </div>
                        <div className={styles.col4}>
                          <img src={phdLogo} alt="PHD Logo" />
                        </div>
                        <div className={styles.col4}>
                          <img src={studicaLogo} alt="Studica Logo" />
                        </div>
                        <div className={styles.col4}>
                          <img src={uwEngIdeasClinicLogo} alt="UW Eng Ideas Clinic Logo" />
                        </div>
                      </div>
                    </div>
                    <h2>FREQUENTLY ASKED QUESTIONS</h2>
                  </div>
                  <div className={styles.side}>
                    <div className={styles.sideLogo}>
                      <img src={verticalRi3DLogo} alt="UW Ri3D Logo" />
                    </div>
                  </div>
                </div>
              )}
            />
            <Route
              exact
              path="/"
              component={() => (
                <div className={styles.home}>
                  <Menu />
                  <div className={styles.content}>
                    <h1>WE BUILD FULLY AUTONOMOUS FIRST ROBOTS.</h1>
                    <div className={styles.contentLogo}>
                      <img src={horizontalReactLogo} alt="UW REACT Logo" />
                    </div>
                    <h3>We bring competitive robotics to the University of Waterloo.</h3>
                    <p>
                      The University of Waterloo Robotics Engineering and Autonomous Controls Team
                      (UW REACT) is a student design team composed primarily of undergraduate
                      students at the University of Waterloo (UW). We design, manufacture, program,
                      and train fully autonomous FIRST Robotics Competition (FRC) robots. We field a
                      new robot each year to compete against high school FRC teams without using a
                      human driver.
                    </p>
                    <h3>Join us.</h3>
                    <p>
                      UW REACT is always looking for anyone who has the passion and drive to help us
                      make fully autonomous FIRST robots a reality. If you are interested in joining
                      us, please apply online.
                    </p>
                    <h2>OUR SPONSORS</h2>
                    <div className={styles.grid}>
                      <div>
                        <div>
                          <img src={uwEngLogo} alt="UW Engineering Logo" />
                        </div>
                      </div>
                      <div className={styles.twoSponsors}>
                        <div>
                          <img src={uwEngSocLogo} alt="UW EngSoc Logo" />
                        </div>
                        <div>
                          <img src={uwWEEFLogo} alt="WEEF Logo" />
                        </div>
                      </div>
                      <div className={styles.twoSponsors}>
                        <div>
                          <img src={firstRoboticsCanadaLogo} alt="FIRST Robotics Canada Logo" />
                        </div>
                        <div>
                          <img src={solidWorksLogo} alt="SolidWorks Logo" />
                        </div>
                      </div>
                      <h3>Past Sponsors</h3>
                      <div className={styles.fourSponsors}>
                        <div>
                          <img src={andyMarkLogo} alt="AndyMark Logo" />
                        </div>
                        <div>
                          <img src={phdLogo} alt="PHD Logo" />
                        </div>
                        <div>
                          <img src={studicaLogo} alt="Studica Logo" />
                        </div>
                        <div>
                          <img src={uwEngIdeasClinicLogo} alt="UW Eng Ideas Clinic Logo" />
                        </div>
                      </div>
                    </div>
                    <h2>FREQUENTLY ASKED QUESTIONS</h2>
                    <div className={styles.grid}>
                      <h3>About FIRST and the FIRST Robotics Competition</h3>
                      <div className={styles.questions}>
                        <div>
                          <h4>What is FIRST?</h4>
                          <p>
                            <a
                              href="https://firstinspires.org/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              For Inspiration and Recognition of Science and Technology
                            </a>{' '}
                            (FIRST) is a Manchester, NH-based 501(c)(3) not-for-profit public
                            charity that operates programs designed to inspire young people{"'"}s
                            interest in science and technology.
                          </p>
                        </div>
                        <div>
                          <h4>What is FRC?</h4>
                          <p>
                            The{' '}
                            <a
                              href="https://www.firstinspires.org/robotics/frc"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              FIRST Robotics Competition
                            </a>{' '}
                            (FRC) is one of four international robotics competitions organized by
                            FIRST. In only six weeks, high school-aged teams build and program
                            robots to perform challenging tasks against a field of competitors.
                          </p>
                        </div>
                      </div>
                      <div className={styles.questions}>
                        <div>
                          <h4>Why FRC?</h4>
                          <p>
                            Unlike many science and technology-based competitions available to
                            students, FRC brings a fresh challenge each year that combines the
                            excitement of sport with the rigors of science and technology. In doing
                            so, FRC creates an environment that inspires students to become leaders
                            and innovators while they enjoy an engaging spectator sport.
                          </p>
                        </div>
                        <div>
                          <h4>Why UW REACT?</h4>
                          <p>
                            Unfortunately, once high school students graduate and attend a
                            post-secondary institution, they are left without a replacement for FRC.
                            Many FIRST Alumni groups do little more than reminisce about {'"'}the
                            good old days{'"'}, and as a result, alumni lose touch with FRC in
                            University. UW REACT brings an FRC-like challenge back to FIRST Alumni.
                          </p>
                        </div>
                      </div>
                      <h3>About UW REACT</h3>
                      <div className={styles.questions}>
                        <div>
                          <h4>What makes it challenging?</h4>
                          <p>
                            UW REACT brings the FRC challenge to a post-secondary level by
                            introducing one key limitation: the robot cannot be controlled by a
                            human driver. Aside from this limitation, UW REACT robots are completely
                            FRC legal, using the same standard parts and following the same budget
                            rules.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.side}>
                    <div className={styles.sideLogo}>
                      <img src={verticalReactLogo} alt="UW REACT Logo" />
                    </div>
                  </div>
                </div>
              )}
            />
            <Route component={NotFound} />
          </Switch>
        )}
      />
    </Switch>
  </React.Fragment>
);

export default App;
