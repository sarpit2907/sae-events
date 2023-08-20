import React from 'react';
import { useRouter } from 'next/router';

const EventDetailPage = () => {
  const router = useRouter();
  const { eventId } = router.query; 

  return (
    <div>
      <h1>Event Details</h1>
      <p>Event ID: {eventId}</p>
      
    </div>
  );
};

export default EventDetailPage;
