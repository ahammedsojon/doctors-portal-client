import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentAvailables from '../AppointmentAvailables/AppointmentAvailables';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AppointmentAvailables date={date}></AppointmentAvailables>
        </div>
    );
};

export default Appointment;