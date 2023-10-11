$(document).ready(function() {
    // Define your events data
    const eventsData = {
        1: {
            title: "Event 1",
            date: "2023-10-31",
            location: "Location 1",
            katt: ["Category 1", "Category 2", "Category 3"],
            categories: ["Category 1", "Category 2", "Category 3"],
            description: "Description 1"
        },
        2: {
            title: "Event 2",
            date: "2023-11-15",
            location: "Location 2",
            katt: ["Category 1", "Category 2", "Category 3"],
            categories: ["Category 1", "Category 2", "Category 3"],
            description: "Description 2"
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
        $('#event-katt').val(eventData.katt);
        $('#event-categories').val(eventData.categories.join(', '));
        $('#event-description-edit').val(eventData.description);
    });
});