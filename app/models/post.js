import DS from 'ember-data';

var attr = DS.attr;

var Post = DS.Model.extend({
  title: attr('string'),
  content: attr('string')
});

Post.reopenClass({
  FIXTURES: [{
    id: 1,
    title: 'first post',
    content: 'Lorem ipsum dolore sit amet'
  }, {
    id: 2,
    title: 'second post',
    content: 'Lorem ipsum dolore sit amet'
  }, {
    id: 3,
    title: 'third post',
    content: 'Lorem ipsum dolore sit amet'
  }]
});

export default Post;
