$(document).ready(function() {
    // Define your events data
    const eventsData = {
        1: {
            title: "FusionFest: A Multigenre Music Festival",
            date: "2023-10-22",
            location: "Central Park Amphitheater",
            categories: ["edit_category1", "edit_category3", "edit_category6"],
            description: "FusionFest is a day-long musical extravaganza that brings together a wide array of musical genres Multiple stages showcase a diverse lineup, from rock to pop, hip-hop, electronic, and beyond. It's a fusion of musical styles where both emerging and established artists light up the stages with electrifying performances. Beyond the music, immersive art installations ignite your imagination, and a variety of food vendors tantalize your taste buds. Join us for a day of diverse tunes, art, and culinary delights at FusionFest.",
            agenda: "10:00 AM - Brunch Service Begins\n11:30 AM - Live Jazz Band\n1:00 PM - Jazz Jam Session\n2:30 PM - Event Concludes" 
        },
        2: {
            title: "CineMagic: Outdoor Movie Extravaganza",
            date: "2023-11-15",
            location: "Rosewood Park",
            categories: ["edit_category1", "edit_category3", "edit_category4"],
            description: "CineMagic is an outdoor movie screening series held in a picturesque park. It features a mix of family-friendly classics, cult favorites, and recent blockbusters. Attendees can bring blankets and picnic baskets to enjoy the films under the stars",
            agenda: "7:00 PM - Picnic and Activities Begin\n8:30 PM - Movie Screening Starts\n10:30 PM - Movie Ends, Event Concludes" 
        },
        3: {
            title: "Foodie Fiesta: A Global Culinary Adventure",
            date: "2023-10-27",
            location: "Downtown Plaza",
            categories: ["edit_category2", "edit_category4", "edit_category6"],
            description: "Foodie Fiesta is a food truck festival that brings together a diverse range of cuisines from around the world. Attendees can savor gourmet street food, international dishes, and artisanal desserts. Live music and cooking demonstrations add to the culinary experience.",
            agenda: "11:00 AM - 12:00 PM: Event Opening and Global Cuisine Showcase\n12:00 PM - 1:30 PM: Interactive Cooking Demonstrations by World-Renowned Chefs\n1:30 PM - 3:00 PM: International Food Tasting and Sampling\n3:00 PM - 4:30 PM: Live Music and Cultural Performances \n4:30 PM - 6:00 PM: Culinary Competitions and Awards \n6:00 PM - 8:00 PM: Evening Buffet and Farewell" 
        },
        4: {
            title: "Artisan Alley: Creative Craft Fair",
            date: "2023-10-28",
            location: "Artisan Park",
            categories: ["edit_category1", "edit_category4", "edit_category6"],
            description: "Artisan Alley is a craft fair that showcases the talents of local artists and artisans. Visitors can browse and purchase handmade jewelry, pottery, paintings, and other unique creations. Art workshops and live art demonstrations add an educational and interactive element to the event.",
            agenda: "10:00 AM - 11:00 AM: Fair Grand Opening and Artisan Showcases\n11:00 AM - 12:30 PM: Interactive Craft Workshops\n1:30 PM - 3:00 PM: International Food Tasting and Sampling\n12:30 PM - 2:00 PM: Artisan Demonstrations and Q&A Sessions \n2:00 PM - 3:30 PM: Charity Auction Featuring Handcrafted Donations \n3:30 PM - 5:00 PM: Closing Ceremony and Artisan Farewell" 
        },
        5: {
            title: "Mystery Mansion Masquerade",
            date: "2023-11-03",
            location: "The Enchanted Manor",
            categories: ["edit_category1", "edit_category4", "edit_category6"],
            description: "The Mystery Mansion Masquerade is an immersive theatrical experience where attendees don masks and play characters in a mysterious storyline. It combines elements of a masquerade ball, murder mystery, and escape room adventure. The event leverages technology for an interactive experience and supports charitable causes.",
            agenda: "6:00 PM - 7:00 PM: Registration and Welcome Drinks\n7:00 PM - 8:30 PM: Masquerade Ball and Elegant Dining\n8:30 PM - 9:00 PM: Murder Mystery Unveiling\n9:00 PM - 10:30 PM: Interactive Storytelling and Character Interaction \n10:30 PM - 11:30 PM: Escape Room Adventure and Mystery Resolution \n11:30 PM - 12:00 AM: Grand Reveal and Farewell" 
        },
        6: {
            title: "Animal Amusement Expo",
            date: "2023-11-11",
            location: "Pet Lovers Park",
            categories: ["edit_category2", "edit_category4", "edit_category6"],
            description: "The Animal Amusement Expo is a family-friendly event that brings people closer to animals. Attendees can enjoy outdoor adventures, learn about wildlife conservation, and savor delicious culinary experiences. The event fosters a sense of community while promoting wildlife awareness.",
            agenda: "9:00 AM - 10:00 AM: Park Opens for Visitors\n10:00 AM - 12:00 PM: Wildlife Demonstrations and Feeding Sessions\n12:00 PM - 1:30 PM: Lunch at the Park Cafe\n1:30 PM - 3:30 PM: Family-Friendly Activities and Rides" 
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
