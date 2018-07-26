var postsData = [
    {
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/',
        //domain: 'sachagreif.com'
    },
    {
        title: 'Meteor',
        url: 'http://meteor.com',
        //domain: 'meteor.com'
    },
    {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com',
        //domain: 'themeteorbook.com'
    }
];
Template.postsList.helpers({
    posts: postsData
});