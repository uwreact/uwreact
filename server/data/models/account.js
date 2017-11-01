import mongoose from 'mongoose';

const schema = mongoose.Schema({
  email: String,
  passwordHash: String,
  firstName: String,
  lastName: String,
  program: String,
  term: String,
  graduationYear: String,
  winterTerm: String,
  buildTeamApplication: {
    general: {
      howHeard: String,
      acknowledgeCommitment: Boolean,
      acknowledgeMedia: Boolean,
      interestVolunteer: Boolean,
      interestNonBuild: Boolean,
    },
    technical: {
      foci: [String],
      mainFocus: String,
      whyFocus: String,
      skills: [String],
      mainSkill: String,
      whyMainSkill: String,
      resume: String,
      linkedin: String,
      github: String,
      otherURI: String,
    },
    inquiry: {
      whyInterest: String,
      timeLearnedSkill: String,
      timeWorkedProject: String,
      teachUsSomething: String,
      otherInfo: String,
    },
    first: {
      firstAlumnus: Boolean,
      teamNumber: String,
      teamRole: String,
      timeDealtStress: String,
    },
  },
});

const model = mongoose.model('Account', schema);

export default model;
