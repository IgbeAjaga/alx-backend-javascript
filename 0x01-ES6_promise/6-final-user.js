import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
	const resultArray = []
	return Promise.allSettled([
		signUpUser(firstName, lastName),
		uploadPhoto(fileName)
	]).then((results) => {
		results.map((result) => {
			resultArray.push({
				status: result.status,
				value: result.status === "rejected" ? result.reason.toString() : result.value
			});
		});
		return resultArray;
	});
};
