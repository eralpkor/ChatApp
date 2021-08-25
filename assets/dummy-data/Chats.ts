export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Eralp',
		imageUri: 'https://avatars.githubusercontent.com/u/13582770?v=4',
	}, {
		id: 'u2',
		name: 'Elon Musk',
		imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
	}],
	messages: [{
		id: 'm1',
		content: 'How are you, Baby!',
		createdAt: '2020-10-10T12:48:00.000Z',
		user: {
			id: 'u1',
			name: 'Eralp',
		},
	}, {
		id: 'm2',
		content: 'I am good',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Elon Musk',
		},
	}, {
		id: 'm3',
		content: 'What about you?',
		createdAt: '2020-10-03T14:49:40.000Z',
		user: {
			id: 'u2',
			name: 'Elon Musk',
		},
	}, {
		id: 'm4',
		content: 'Good as well, preparing for the workout now.',
		createdAt: '2020-10-03T14:50:00.000Z',
		user: {
			id: 'u1',
			name: 'Eralp',
		},
	}, {
		id: 'm5',
		content: 'How is Sunny and Norman doing?',
		createdAt: '2020-10-03T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Eralp',
		},
	}, {
		id: 'm6',
		content: 'going to the Moooooon',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Elon Musk',
		},
	}, {
		id: 'm7',
		content: 'btw, do we need any food?',
		createdAt: '2020-10-03T14:53:00.000Z',
		user: {
			id: 'u2',
			name: 'Elon Musk',
		},
	}]
}

