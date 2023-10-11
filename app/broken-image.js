document.getElementById('events').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        const eventId = event.target.getAttribute('data-event-id');
        const eventData = getEventData(eventId); // Function to get event data

        // Populate the form fields
        document.getElementById('event-title-edit').value = eventData.title;
        document.getElementById('event-date-edit').value = eventData.date;
        document.getElementById('event-location-edit').value = eventData.location;
        document.getElementById('event-categories').value = eventData.categories;
        document.getElementById('event-description-edit').value = eventData.description;
    }
});

// Define your events and their details
const eventsData = {
    1: {
        title: 'Event 1',
        date: '2023-10-10',
        location: 'Location 1',
        categories: 'Category 1',
        description: 'Description for Event 1',
    },
    2: {
        title: 'Event 2',
        date: '2023-10-15',
        location: 'Location 2',
        categories: 'Category 2',
        description: 'Description for Event 2',
    },
};

function getEventData(eventId) {
    return eventsData[eventId] || {};
}