import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { NotFound } from 'components';

import horizontalReactLogo from 'resources/svg/logos/react-horizontal.svg';
import verticalReactLogo from 'resources/svg/logos/react-vertical.svg';
import horizontalRi3DLogo from 'resources/svg/logos/ri3d-horizontal.svg';
import verticalRi3DLogo from 'resources/svg/logos/ri3d-vertical.svg';

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
