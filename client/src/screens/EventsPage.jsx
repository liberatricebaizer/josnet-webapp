import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../layout/Header";
import Loader from "../layout/Loader";
import Footer from "../layout/Footer";

const EventsPage = () => {
  const { events, isLoading } = useSelector((state) => state.events);
  console.log("Events:", events);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <br />
          <br />
          <div>
            <EventCard active={true} data={events && events[0]} />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default EventsPage;
