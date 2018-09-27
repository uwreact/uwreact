import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import { httpsErrors } from 'dictionaries';
import { ensureAuthenticated } from 'utilities';

const consentedTo =
  'I give permission to the University of Waterloo Robotics Engineering and Autonomous Controls Student Design Team (hereinafter UW REACT), and any parties designated by UW REACT to photograph and/or record me during any activity organized by UW REACT. I further consent to the use of the produced photograph(s), audio recording(s), and/or video(s) in all forms of media, for any and all purposes. I understand and agree that I will not receive any payment or royalty for the publication of the photograph(s), audio recording(s), and/or video(s) or the use of my name and I hereby release UW REACT and any parties designated by UW REACT from any such claims. I certify that I have read and fully understand this consent and release.';

const onCall = async (data, context) => {
  const uid = ensureAuthenticated(context);

  const userDoc = admin
    .firestore()
    .collection('users')
    .doc(uid);

  const user = await userDoc.get();
  const userData = user.data();

  if (!userData || !userData.firstName || !userData.lastName) {
    throw new functions.https.HttpsError(httpsErrors.PERMISSION_DENIED);
  }

  const fullName = `${userData.firstName} ${userData.lastName}`;

  if (fullName.length > 200) {
    throw new functions.https.HttpsError(httpsErrors.PERMISSION_DENIED);
  }

  const consentDoc = admin
    .firestore()
    .collection('consents')
    .doc(`Media Release signed by ${fullName}`);

  const consent = await consentDoc.get();

  if (consent.exists) {
    throw new functions.https.HttpsError(httpsErrors.ALREADY_EXISTS);
  }

  await consentDoc.set({
    user: userDoc,
    consentedTo,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  await userDoc.update({ mediaRelease: true, mediaReleaseConsent: consentDoc });
};

const mediaReleaseConsent = functions.https.onCall(onCall);

export { onCall };

export default mediaReleaseConsent;
