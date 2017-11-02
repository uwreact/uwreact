import {startsWith, toLower, times, random} from 'lodash';
import bcrypt from 'bcrypt';
import sgMail from '@sendgrid/mail';
import Account from '../../data/models/account';

const authNewHandler = async (req, res, next) => {
  let response = {};
  const header = req.get('Authorization');

  if (header !== undefined && startsWith(header, 'Basic')) {
    const credentialsString = Buffer(header.substring(6), 'base64').toString('utf8');

    if ((credentialsString.match(/:/g) || []).length === 3) {
      const credentials = credentialsString.split(':');
      const email = toLower(credentials[0]);
      const notEmpty = email.length > 0 && credentials[1].length > 0 && credentials[2].length > 0 && credentials[3].length > 0;
      const doesntExist = (await Account.find({email}, (err, accounts) => accounts).catch(err => [])).length <= 0;
      const verify = times(32, () => random(35).toString(36)).join('');

      if (notEmpty && doesntExist) {
        let newUser = new Account({
          email,
          passwordHash: await bcrypt.hash(credentials[1], 10),
          verify,
          information: {
            firstName: credentials[2],
            lastName: credentials[3],
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
              foci: [''],
              mainFocus: '',
              whyFocus: '',
              skills: [''],
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
        });
        newUser.save();

        sgMail.send({
          to: `${email}@edu.uwaterloo.ca`,
          from: 'admin@uwri3d.com',
          subject: 'Verify UWRi3D account',
          text: `Click this link to verify: https://uwri3d.com/api/verify?uri=${verify}`,
        });

        response = {type: 'success', message: 'Signed up! Confirm your email before signing in.'};
      } else {
        response = {type: 'error', message: 'Already signed up.'};
      }
    } else {
      response = {type: 'error', message: 'Credentials malformed.'};
    }
  } else {
    response = {type: 'error', message: 'Credentials missing.'};
  }

  res.set('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify(response));
};

export default authNewHandler;