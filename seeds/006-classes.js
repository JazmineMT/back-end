
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {name: "Aerobics" , type: 'body-Weight', classStart: '2020-10-22T17:52:29.398Z', classEnd: '2020-10-22T19:00:29.398Z', duration: '30 minutes',intensityLevel: 1, location: 'Redwood Park', currentRegistered: 6, maxClassSize: 25, Instructor: 'Andrew', Gender: 'Male', description:'Class will be fun', cost: '$15' , equipment:' None required', arrivalTime: 'New students arrive 15 min early' },
        {name: "Yin Yoga" , type: 'Yoga', classStart: '2020-10-22T17:52:29.398Z', classEnd: '2020-10-22T19:00:29.398Z', duration: '60 minutes',intensityLevel: 2, location: 'Joeseph Memorial Community Center', currentRegistered: 15, maxClassSize: 25, Instructor: 'Damon', Gender: 'Male',description:'Class will be fun', cost: '$15' , equipment:' None required', arrivalTime: 'New students arrive 15 min early'  },
        {name: "Power Hour" , type: 'weightlifting', classStart: '2020-10-22T17:52:29.398Z', classEnd: '2020-10-22T19:00:29.398Z', duration: '45 minutes',intensityLevel: 3, location: 'Redwood Park', currentRegistered: 24, maxClassSize: 25, Instructor: 'Kelly', Gender: 'Female',description:'Class will be fun', cost: '$15' , equipment:' None required', arrivalTime: 'New students arrive 15 min early' },
        {name: "Power Hour" , type: 'weightlifting', classStart: '2020-10-22T17:52:29.398Z', classEnd: '2020-10-22T19:00:29.398Z', duration: '45 minutes',intensityLevel: 3, location: 'Redwood Park', currentRegistered: 24, maxClassSize: 25, Instructor: 'Kelly', Gender: 'Female', description:'Class will be fun', cost: '$15' , equipment:' None required', arrivalTime: 'New students arrive 15 min early' },
        {name: "Power Hour" , type: 'weightlifting', classStart: '2020-10-22T17:52:29.398Z', classEnd: '2020-10-22T19:00:29.398Z', duration: '45 minutes',intensityLevel: 3, location: 'Redwood Park', currentRegistered: 24, maxClassSize: 25, Instructor: 'Kelly', Gender: 'Female', description:'Class will be fun', cost: '$15' , equipment:' None required', arrivalTime: 'New students arrive 15 min early' },
        {name: "Yin Yoga" , type: 'Yoga', classStart: '2020-10-22T17:52:29.398Z', classEnd: '2020-10-22T19:00:29.398Z', duration: '60 minutes',intensityLevel: 2, location: 'Joeseph Memorial Community Center', currentRegistered: 15, maxClassSize: 25, Instructor: 'Damon', Gender: 'Male' , description:'Class will be fun', cost: '$15' , equipment:' None required', arrivalTime: 'New students arrive 15 min early' },
        {name: "Yin Yoga" , type: 'Yoga', classStart: '2020-10-22T17:52:29.398Z', classEnd: '2020-10-22T19:00:29.398Z', duration: '60 minutes',intensityLevel: 2, location: 'Joeseph Memorial Community Center', currentRegistered: 15, maxClassSize: 25, Instructor: 'Damon', Gender: 'Male' , description:'Class will be fun', cost: '$15' , equipment:' None required', arrivalTime: 'New students arrive 15 min early' },
        {name: "Aerobics" , type: 'body-Weight', classStart: '2020-10-22T17:52:29.398Z', classEnd: '2020-10-22T19:00:29.398Z', duration: '30 minutes',intensityLevel: 1, location: 'Redwood Park', currentRegistered: 6, maxClassSize: 25, Instructor: 'Andrew', Gender: 'Male' , description:'Class will be fun', cost: '$15' , equipment:' None required', arrivalTime: 'New students arrive 15 min early' },
        {name: "Breathe Work and Meditation" , type: 'meditation', classStart: '2020-10-22T17:52:29.398Z', classEnd: '2020-10-22T19:00:29.398Z', duration: '30 minutes',intensityLevel: 1, location: 'Newport Park', currentRegistered: 24, maxClassSize: 25, Instructor: 'Amy', Gender: 'Female', description:'Class will be fun', cost: '$15' , equipment:' None required', arrivalTime: 'New students arrive 15 min early'  },
        {name: "Breathe Work and Meditation" , type: 'meditation', classStart: '2020-10-22T17:52:29.398Z', classEnd: '2020-10-22T19:00:29.398Z', duration: '30 minutes',intensityLevel: 1, location: 'Newport Park', currentRegistered: 24, maxClassSize: 25, Instructor: 'Amy', Gender: 'Female' , description:'Class will be fun', cost: '$15' , equipment:' None required', arrivalTime: 'New students arrive 15 min early' },
  
  
  
      ]);
    });
};

