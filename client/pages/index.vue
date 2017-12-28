<template>
  <div class="page">
    <arrow-section unpadded backgroundColor="#444444" nextColor="#d5d5d3" id="home">
      <hero-content>
        <img slot="image" class="hero-image" src="~/assets/home/hero/heroLogo.jpg"/>
        <div class="hero-text">
          <section-impact-header style="line-height: 34px;">
            ROBOT IN 3 DAYS <span style="color: #e4b429;">AT</span>
          </section-impact-header>
          <section-impact-header style="font-size: 26px; line-height: 22px;">
            THE UNIVERSITY OF WATERLOO
          </section-impact-header>
          <dividing-line></dividing-line>
          <p style="font-size: 24px; font-weight: 300;">January 6 - 9, 2018</p>
          <p style="font-size: 16px; font-weight: 300;">Kickoff begins in
            <countdown date="2018-01-06T06:00:00Z"></countdown>
          </p>
        </div>
      </hero-content>
    </arrow-section>

    <arrow-section backgroundColor="#d5d5d3" nextColor="#ffffff" id="about">
      <guttered-content>
        <section-header>
          Canada's largest Ri3D team
        </section-header>
        <p>
          With 60 students at the University of Waterloo, we inspire FIRST Robotics Competition teams around the
          world by building a robot in 3 days.
          For 72 hours, we investigate the FIRST challenge, prepare a design, manufacture a chassis, wire
          electromechanical systems, and program an entire FRC robot - 40 days before bag and tag.
        </p>
      </guttered-content>
      <guttered-content md-span="14" md-offset="5">
        <section-lined-header>OUR MISSION</section-lined-header>
      </guttered-content>
      <imaged-content>
        <img slot="image" class="about-image" src="~/assets/home/about/aboutEngage.jpg"/>
        <p slot="header">ENGAGE</p>
        For many University of Waterloo students, FIRST Robotics was a high school lifestyle. Entering university,
        many FIRST alumni search for a way to stay engaged in the FRC community. Through alumni groups and
        volunteering
        at local events, they are able to continue their passion for robotics throughout their university careers.
        However, these events lack the same intense experience as the authentic FIRST Robotics Competition. With
        Robot in 3 Days, alumni have the opportunity to experience the vigorous joys of FIRST all over again.
        Through live streaming these activities, UWRi3D is able to engage not only its own participants, but also
        passionate creative-minded individuals around the world.
      </imaged-content>
      <br/>
      <br/>
      <br/>
      <imaged-content>
        <img slot="image" class="about-image" src="~/assets/home/about/aboutEducate.jpg"/>
        <p slot="header">EDUCATE</p>
        Across the world, FIRST Robotics Competition teams look towards Robot in 3 Days builds to spawn ideas,
        survey designs, and review their own plans. By live streaming both teams throughout the 72-hour challenge,
        UWRi3D aspires to educate high school students on programming webcasts, vision solutions, design sprints,
        detailed sensor breakdowns, mechanical and electrical systems, and the true nature of team work and
        perseverance
        in order to provide FRC members with a plethora of resources as they enter build season.
      </imaged-content>
      <br/>
      <br/>
      <br/>
      <imaged-content>
        <img slot="image" class="about-image" src="~/assets/home/about/aboutInspire.jpg"/>
        <p slot="header">INSPIRE</p>
        The mission of FIRST is to inspire young people to be science and technology leaders and innovators.
        UWRi3D proudly carries a similar mantra. In higher education, students have the resources they need to
        think and create the inventions that will shape our future. We help inspire students on campus to take the
        skills they learn through Robot in 3 Days and apply them in undiscovered fields of science and technology.
        Through our live stream, we aim to inspire enthusiasm for hard work and intensive innovation on an
        international
        scale.
      </imaged-content>
    </arrow-section>

    <arrow-section backgroundColor="#ffffff" nextColor="#d5d5d3" id="teams">
      <guttered-content>
        <section-header>
          Our teams
        </section-header>
      </guttered-content>
      <guttered-content>
        <p>
          Thanks to our sponsors, we have the privilege of hosting <b>two</b> Robot in 3 Days teams at the University
          of Waterloo in 2018.
        </p>
      </guttered-content>
      <br/>
      <br/>
      <team-content>
        <team-content-column slot="elsie">
          <section-impact-header>
            TEAM ELSIE
          </section-impact-header>
          <img class="team-image" src="~/assets/home/teams/elsie.jpg"/>
          <dividing-line></dividing-line>
          <p class="team-information">Team Elsie is one of our Robot in 3 Days teams here at the University of
            Waterloo, run by 20 students.</p>
          <el-button class="team-button" round>
            MEET TEAM ELSIE<br/>(COMING SOON)
          </el-button>
        </team-content-column>

        <team-view :visible="elsieVisible">
          <section-impact-header style="text-align: center; line-height: 48px">
            TEAM ELSIE HAS FINISHED RECRUITING!
          </section-impact-header>
        </team-view>

        <team-content-column slot="elijah">
          <section-impact-header class="team-2-header">
            TEAM ELIJAH
          </section-impact-header>
          <img class="team-image" src="~/assets/home/teams/elijah.jpg"/>
          <dividing-line></dividing-line>
          <p class="team-information">Team Elijah is one of our Robot in 3 Days teams here at the University of
            Waterloo, run by 20 students.</p>
          <el-button class="team-button" round>
            MEET TEAM ELIJAH<br/>(COMING SOON)
          </el-button>
        </team-content-column>

        <team-view :visible="elijahVisible">
          <section-impact-header style="text-align: center; line-height: 48px">
            TEAM ELIJAH HAS FINISHED RECRUITING!
          </section-impact-header>
        </team-view>
      </team-content>
    </arrow-section>

    <arrow-section backgroundColor="#d5d5d3" nextColor="#ffffff" id="sponsors">
      <guttered-content>
        <section-header>
          Our sponsors
        </section-header>
      </guttered-content>
      <guttered-content>
        <p>
          Our sponsors are helping us engage students across campus in becoming science and technology leaders
          and innovators. To reach our sponsorship team, email us at
          <a href="mailto:sponsor@uwri3d.com">sponsor@uwri3d.com</a>.
        </p>
      </guttered-content>
      <br/>
      <guttered-content>
        <img class="sponsor-image" src="~/assets/home/sponsors/logoUWEng.png"/>
      </guttered-content>
      <br/>
      <sponsor-row>
        <sponsor-two-row-image>
          <img class="sponsor-image" src="~/assets/home/sponsors/logoFirstCanada.png"/>
        </sponsor-two-row-image>
        <sponsor-two-row-image last>
          <img class="sponsor-image" src="~/assets/home/sponsors/logoUWEngIdeasClinic.png"/>
        </sponsor-two-row-image>
      </sponsor-row>
      <br/>
      <sponsor-row>
        <sponsor-two-row-image>
          <img class="sponsor-image" src="~/assets/home/sponsors/logoStudica.png"/>
        </sponsor-two-row-image>
        <sponsor-two-row-image last>
          <img class="sponsor-image" src="~/assets/home/sponsors/logoSolidWorks.png"/>
        </sponsor-two-row-image>
      </sponsor-row>
      <br/>
      <sponsor-row>
        <sponsor-two-row-image>
          <img class="sponsor-image" src="~/assets/home/sponsors/logoAndyMark.png"/>
        </sponsor-two-row-image>
        <sponsor-two-row-image last>
          <img class="sponsor-image" src="~/assets/home/sponsors/logoPHD.png"/>
        </sponsor-two-row-image>
      </sponsor-row>
    </arrow-section>

    <arrow-section backgroundColor="#ffffff" nextColor="#e4b429" id="contact">
      <guttered-content>
        <section-header>
          Contact us
        </section-header>
        <p>
          We're happy to help with any inquiries you may have! Feel free to email us at
          <a href="mailto:hello@uwri3d.com">hello@uwri3d.com</a>.
        </p>
      </guttered-content>
    </arrow-section>

    <footer-menu>
      <footer-menu-item href="https://github.com/uwri3d" icon="github"></footer-menu-item>
      <footer-menu-item href="https://fb.me/uwri3d" icon="facebook"></footer-menu-item>
      <footer-menu-item href="https://twitter.com/uwri3d" icon="twitter"></footer-menu-item>
      <footer-menu-item href="https://instagram.com/uwri3d" icon="instagram"></footer-menu-item>
      <footer-menu-item href="https://goo.gl/ns5r5g" icon="youtube"></footer-menu-item>
    </footer-menu>
  </div>
</template>

<script>
  import ArrowSection from '../components/ArrowSection';
  import Countdown from '../components/Countdown';
  import FooterMenu from '../components/FooterMenu';
  import FooterMenuItem from '../components/FooterMenuItem';
  import GutteredContent from '../components/GutteredContent';
  import SectionHeader from '../components/SectionHeader';
  import SectionLinedHeader from '../components/SectionLinedHeader';
  import ImagedContent from "../components/ImagedContent";
  import SponsorRow from "../components/SponsorRow";
  import SponsorTwoRowImage from "../components/SponsorTwoRowImage";
  import TeamContent from "../components/TeamContent";
  import TeamContentColumn from "../components/TeamContentColumn";
  import TeamView from "../components/TeamView";
  import SectionImpactHeader from "../components/SectionImpactHeader";
  import DividingLine from "../components/DividingLine";
  import HeroContent from "../components/HeroContent";

  export default {
    layout: 'home',

    components: {
      HeroContent,
      DividingLine,
      TeamView,
      SectionImpactHeader,
      TeamContent,
      TeamContentColumn,
      SponsorTwoRowImage,
      SponsorRow,
      ImagedContent,
      ArrowSection,
      Countdown,
      FooterMenu,
      FooterMenuItem,
      GutteredContent,
      SectionHeader,
      SectionLinedHeader,
    },

    data() {
      return {
        elsieVisible: false,
        elijahVisible: false,
      };
    },
  }
</script>

<style scoped>
  .page {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
  }

  .hero-image {
    width: 90%;
  }

  .team-information {
    text-align: justify;
    padding-left: 15%;
    padding-right: 15%;
  }

  .team-button {
    background-color: #E4B429;
    border-color: #E4B429;
    color: #FFFFFF;
    height: 60px;
    width: 200px;
    margin-top: 20px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
  }

  .sponsor-image {
    padding: 2%;
    width: 100%;
  }

  .about-image {
    width: 100%;
  }

  @media all and (max-width: 768px) {
    .about-image {
      width: 200px;
    }
  }

  .team-image {
    width: 50%;
    margin-top: 12px;
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
