var postsData = [
    {
        title: "Introducing Telescope",
        author: "Sacha Greif",
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: "Meteor",
        author: "Tom Coleman",
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: "The Metoer Book",
        author: "Tom Coleman",
        url: 'http://sachagreif.com/introducing-telescope/'
    },
];

Template.postsList.helpers({
    posts: postsData
});