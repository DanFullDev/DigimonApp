//Fetches complete digimon list
export const fetchDigimon = async (): Promise<any> => {
	const url = 'https://digimon-api.vercel.app/api/digimon';
	const res = await fetch(url);
	const data = await res.json();
	return data;
};
