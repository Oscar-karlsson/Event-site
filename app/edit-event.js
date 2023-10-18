$(document).ready(function() {
    // Define your events data
    const eventsData = {
        1: {
            title: "FusionFest: A Multigenre Music Festival",
            date: "2023-10-22",
            location: "Central Park Amphitheater",
            categories: ["edit_category1", "edit_category3", "edit_category6"],
            description: "FusionFest is a day-long musical extravaganza that brings together a wide array of musical genres Multiple stages showcase a diverse lineup, from rock to pop, hip-hop, electronic, and beyond. It's a fusion of musical styles where both emerging and established artists light up the stages with electrifying performances. Beyond the music, immersive art installations ignite your imagination, and a variety of food vendors tantalize your taste buds. Join us for a day of diverse tunes, art, and culinary delights at FusionFest.",
            agenda: " 10:00 AM - Brunch Service Begins\n 11:30 AM - Live Jazz Band\n 1:00 PM - Jazz Jam Session\n 2:30 PM - Event Concludes" 
        },
        2: {
            title: "Event 2",
            date: "2023-11-15",
            location: "Location 2",
            categories: ["edit_category2", "edit_category4"],
            description: "Description 2",
            agenda: "Agenda for Event 2"
        }
        // Add more event details here
    };

    // Handle event click
    $('#events li').click(function() {
        const eventId = $(this).data('event-id');
        const eventData = eventsData[eventId];

        $('#event-title-edit').val(eventData.title);
        $('#event-date-edit').val(eventData.date);
        $('#event-location-edit').val(eventData.location);
        $('#event-description-edit').val(eventData.description);
        $('#event-agenda-edit').val(eventData.agenda); // Set the agenda value
        $('.category-item input[type="checkbox"]').prop('checked', false);

        eventData.categories.forEach(categoryId => {
            $(`#${categoryId}`).prop('checked', true);
        });
    });
});
