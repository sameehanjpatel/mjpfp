const moment = require('moment');
const { db, Date } = require('./index.js');

const totalDays = moment().daysInMonth();

const dayOnCalendar = () => {
    const date = moment().toDate()
}

const seed = dateOnCal => {
    db.sync({force:true})
    .then(()=>{

    })
}

seed(totalDays)